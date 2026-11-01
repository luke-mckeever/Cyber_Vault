/**
 * CYBER_VAULT — Cloudflare Worker
 * ------------------------------------------------------------------
 * A single-file website that renders the GitHub repo
 *   https://github.com/luke-mckeever/Cyber_Vault
 * live, at request time. Every folder and file in the repo gets a page,
 * and the site follows the branch automatically: new commits show up
 * within about a minute, with no redeploy.
 *
 * Paste this whole file into the Cloudflare dashboard (Workers > Create >
 * Edit code) and deploy. Nothing else is required.
 *
 * Optional settings (Worker > Settings > Variables and Secrets):
 *   GITHUB_TOKEN   (secret)  a fine-grained token with read-only "Contents"
 *                            access. Raises the GitHub API limit from 60 to
 *                            5000 requests/hour and allows private repos.
 *   GITHUB_OWNER, GITHUB_REPO, GITHUB_BRANCH   point at another repo/branch.
 *   SITE_NAME      title shown in the header (default "CYBER_VAULT").
 *   HEAD_TTL       seconds between checks for new commits (default 60).
 *   EXCLUDE_PATHS  comma-separated folders/files to hide (default "worker").
 * Optional binding:
 *   VAULT_KV       a KV namespace. Gives a persistent cache, which helps a
 *                  lot on *.workers.dev where the edge Cache API is off.
 *
 * Routes
 *   /                 home: hero, live stats, sections, recent commits, README
 *   /tree/<path>      folder view (cards, filter, folder README)
 *   /blob/<path>      file view (Markdown, PDF, image, HTML, code)
 *   /raw/<path>       file proxy with correct content types (PDF/image embeds)
 *   /map              interactive graph of the whole vault
 *   /tags             every #tag used across the notes
 *   /api/tree         JSON listing of the repo
 *   /api/content?page=N  Markdown text in pages of 30 (powers search/tags)
 */

const DEFAULTS = {
  GITHUB_OWNER: 'luke-mckeever',
  GITHUB_REPO: 'Cyber_Vault',
  GITHUB_BRANCH: 'main',
  SITE_NAME: 'CYBER_VAULT',
  HEAD_TTL: '60',
  EXCLUDE_PATHS: 'worker',
};
const ASSET_VERSION = '1';
const CONTENT_PAGE_SIZE = 30;
const UA = 'cyber-vault-worker';

/* ------------------------------------------------------------------ */
/* Section styling (folders not listed get a colour from their name)   */
/* ------------------------------------------------------------------ */
const SECTIONS = {
  'Knowledge Articles': { icon: '🧠', color: '#b26bff', order: 1 },
  'Cheat Sheets': { icon: '⚡', color: '#00e5ff', order: 2 },
  'Tooling': { icon: '🛠️', color: '#39ff88', order: 3 },
  'Red Team Tools': { icon: '🗡️', color: '#ff3b5c' },
  'Blue Team Tools': { icon: '🛡️', color: '#3b8bff' },
  'General & Other Tools': { icon: '🧰', color: '#ffd23b' },
  'Posters': { icon: '🖼️', color: '#ffb000', order: 4 },
  'Books & Resources': { icon: '📚', color: '#ff5fa2', order: 5 },
  'Images': { icon: '🗂️', color: '#8b9bb4', order: 8 },
  'Pages': { icon: '🌐', color: '#5ef2d6', order: 9 },
};

function sectionStyle(path, sections) {
  const segs = (path || '').split('/').filter(Boolean);
  let icon = '📁', color = null;
  for (let i = 0; i < segs.length; i++) {
    const s = sections[segs[i]];
    if (s) { if (s.icon) icon = s.icon; if (s.color) color = s.color; }
  }
  if (!color) {
    const key = segs[0] || 'vault';
    let h = 0;
    for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) % 360;
    color = 'hsl(' + h + ',85%,62%)';
  }
  return { icon: icon, color: color };
}

/* ------------------------------------------------------------------ */
/* Shared helpers (also shipped to the browser via Function#toString)  */
/* ------------------------------------------------------------------ */
function makeResolver(entries, owner, repo) {
  // entries: [[path, isFile(0|1), size]]
  const exact = new Map(), lower = new Map(), byBase = new Map(), byStem = new Map();
  for (let i = 0; i < entries.length; i++) {
    const p = entries[i][0];
    exact.set(p, entries[i]);
    lower.set(p.toLowerCase(), p);
    const base = p.split('/').pop().toLowerCase();
    const stem = base.replace(/\.[^.]+$/, '');
    if (!byBase.has(base)) byBase.set(base, []);
    byBase.get(base).push(p);
    if (entries[i][1]) {
      if (!byStem.has(stem)) byStem.set(stem, []);
      byStem.get(stem).push(p);
    }
  }
  function dec(s) { try { return decodeURIComponent(s); } catch (e) { return s; } }
  function normalize(parts) {
    const out = [];
    for (let i = 0; i < parts.length; i++) {
      const s = parts[i];
      if (!s || s === '.') continue;
      if (s === '..') out.pop(); else out.push(s);
    }
    return out.join('/');
  }
  function closest(list, fromDir) {
    if (!list || !list.length) return null;
    if (list.length === 1 || !fromDir) return list[0];
    let best = list[0], score = -1;
    for (let i = 0; i < list.length; i++) {
      const a = list[i].split('/'), b = fromDir.split('/');
      let n = 0;
      while (n < a.length && n < b.length && a[n] === b[n]) n++;
      if (n > score) { score = n; best = list[i]; }
    }
    return best;
  }
  function find(ref, fromDir) {
    if (ref == null) return null;
    ref = dec(String(ref)).trim().replace(/\\/g, '/');
    if (!ref) return null;
    const abs = ref.charAt(0) === '/';
    const joined = abs ? normalize(ref.split('/')) : normalize(((fromDir || '') + '/' + ref).split('/'));
    if (exact.has(joined)) return joined;
    if (lower.has(joined.toLowerCase())) return lower.get(joined.toLowerCase());
    const rootTry = normalize(ref.split('/'));
    if (exact.has(rootTry)) return rootTry;
    if (lower.has(rootTry.toLowerCase())) return lower.get(rootTry.toLowerCase());
    const last = rootTry.split('/').pop().toLowerCase();
    if (!last) return null;
    return closest(byBase.get(last), fromDir) ||
      closest(byStem.get(last), fromDir) ||
      closest(byStem.get(last.replace(/\.md$/, '')), fromDir) ||
      closest(byBase.get(last + '.md'), fromDir);
  }
  const o = String(owner).toLowerCase(), r = String(repo).toLowerCase();
  function fromUrl(url) {
    let u;
    try { u = new URL(url); } catch (e) { return null; }
    const host = u.hostname.toLowerCase();
    const segs = u.pathname.split('/').filter(Boolean);
    if (host === 'github.com' || host === 'www.github.com') {
      if (segs.length < 2 || segs[0].toLowerCase() !== o || segs[1].toLowerCase().replace(/\.git$/, '') !== r) return null;
      if (segs.length === 2) return { kind: 'tree', path: '', hash: u.hash };
      const kind = segs[2];
      if ((kind === 'blob' || kind === 'tree' || kind === 'raw') && segs.length >= 4) {
        let rest = segs.slice(4);
        if (segs[3] === 'refs' && segs[4] === 'heads') rest = segs.slice(6);
        const path = rest.join('/');
        return { kind: kind === 'raw' ? 'raw' : kind, path: dec(path), hash: u.hash };
      }
      return null;
    }
    if (host === 'raw.githubusercontent.com') {
      if (segs.length < 4 || segs[0].toLowerCase() !== o || segs[1].toLowerCase() !== r) return null;
      let rest = segs.slice(3);
      if (segs[2] === 'refs' && segs[3] === 'heads') rest = segs.slice(5);
      return { kind: 'raw', path: dec(rest.join('/')), hash: u.hash };
    }
    return null;
  }
  function isFile(p) { const e = exact.get(p); return !!(e && e[1]); }
  function has(p) { return p === '' || exact.has(p); }
  return { find: find, fromUrl: fromUrl, isFile: isFile, has: has, entry: function (p) { return exact.get(p); } };
}

function encPath(p) {
  return String(p).split('/').map(function (s) { return encodeURIComponent(s); }).join('/');
}

function fileKind(path) {
  const name = String(path).split('/').pop();
  const m = /\.([^.]+)$/.exec(name);
  const ext = m ? m[1].toLowerCase() : '';
  if (ext === 'md' || ext === 'markdown') return 'md';
  if (ext === 'pdf') return 'pdf';
  if (['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg', 'bmp', 'ico', 'avif'].indexOf(ext) >= 0) return 'image';
  if (ext === 'html' || ext === 'htm') return 'html';
  if (['mp4', 'webm', 'mov'].indexOf(ext) >= 0) return 'video';
  if (['txt', 'css', 'js', 'mjs', 'ts', 'json', 'py', 'ps1', 'psm1', 'sh', 'bash', 'yml', 'yaml', 'xml', 'csv', 'tsv', 'ini', 'conf', 'cfg', 'toml', 'mdc', 'yar', 'yara', 'rules', 'sql', 'c', 'h', 'cpp', 'cs', 'go', 'rs', 'java', 'rb', 'php', 'bat', 'cmd', 'vbs', 'log', 'kql', 'spl', 'lua', 'pl', 'r', 'swift', 'kt', 'gitignore', 'env'].indexOf(ext) >= 0) return 'code';
  if (!ext) return 'code';
  return 'binary';
}

function fileIcon(path) {
  const k = fileKind(path);
  return { md: '📝', pdf: '📕', image: '🖼️', html: '🌐', video: '🎞️', code: '⌨️', binary: '📦' }[k];
}

function displayName(path) {
  const name = String(path).split('/').pop();
  return /\.md$/i.test(name) ? name.replace(/\.md$/i, '') : name;
}

/* ------------------------------------------------------------------ */
/* Server utilities                                                    */
/* ------------------------------------------------------------------ */
const MIME = {
  md: 'text/markdown; charset=utf-8', markdown: 'text/markdown; charset=utf-8', txt: 'text/plain; charset=utf-8',
  pdf: 'application/pdf', png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', gif: 'image/gif',
  webp: 'image/webp', svg: 'image/svg+xml', ico: 'image/x-icon', bmp: 'image/bmp', avif: 'image/avif',
  html: 'text/html; charset=utf-8', htm: 'text/html; charset=utf-8', css: 'text/css; charset=utf-8',
  js: 'text/javascript; charset=utf-8', json: 'application/json; charset=utf-8', csv: 'text/csv; charset=utf-8',
  xml: 'text/xml; charset=utf-8', mp4: 'video/mp4', webm: 'video/webm', zip: 'application/zip',
};
function mimeFor(path) {
  const m = /\.([^.\/]+)$/.exec(path);
  const ext = m ? m[1].toLowerCase() : '';
  if (MIME[ext]) return MIME[ext];
  return fileKind(path) === 'code' ? 'text/plain; charset=utf-8' : 'application/octet-stream';
}

function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}
function jsonForScript(v) {
  return JSON.stringify(v).replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
}
function fmtBytes(n) {
  if (!n && n !== 0) return '';
  if (n < 1024) return n + ' B';
  if (n < 1048576) return (n / 1024).toFixed(1) + ' KB';
  return (n / 1048576).toFixed(1) + ' MB';
}
function timeAgo(iso) {
  const t = Date.parse(iso);
  if (!t) return '';
  const s = Math.max(1, Math.round((Date.now() - t) / 1000));
  const units = [[31536000, 'year'], [2592000, 'month'], [604800, 'week'], [86400, 'day'], [3600, 'hour'], [60, 'minute']];
  for (let i = 0; i < units.length; i++) {
    if (s >= units[i][0]) { const n = Math.floor(s / units[i][0]); return n + ' ' + units[i][1] + (n > 1 ? 's' : '') + ' ago'; }
  }
  return 'just now';
}
function naturalSort(a, b) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
}

function getConfig(env) {
  const c = {};
  for (const k in DEFAULTS) c[k] = (env && env[k] != null && String(env[k]).trim() !== '') ? String(env[k]).trim() : DEFAULTS[k];
  c.token = env && env.GITHUB_TOKEN ? String(env.GITHUB_TOKEN).trim() : '';
  c.kv = env && env.VAULT_KV ? env.VAULT_KV : null;
  c.headTtl = Math.max(10, parseInt(c.HEAD_TTL, 10) || 60);
  c.exclude = c.EXCLUDE_PATHS.split(',').map(function (s) { return s.trim().replace(/^\/+|\/+$/g, ''); }).filter(Boolean);
  c.ns = (c.GITHUB_OWNER + '/' + c.GITHUB_REPO + '@' + c.GITHUB_BRANCH).toLowerCase();
  return c;
}

/* Tiny three-level cache: isolate memory, edge Cache API, optional KV */
const MEM = new Map();
function memGet(k) {
  const e = MEM.get(k);
  if (!e) return undefined;
  if (e.exp && e.exp < Date.now()) { MEM.delete(k); return undefined; }
  return e.v;
}
function memSet(k, v, ttlSec) {
  if (MEM.size > 600) { const first = MEM.keys().next().value; MEM.delete(first); }
  MEM.set(k, { v: v, exp: ttlSec ? Date.now() + ttlSec * 1000 : 0 });
}
function cacheKey(k) { return new Request('https://cyber-vault-cache.internal/' + encodeURIComponent(k)); }
async function cacheGetText(cfg, k) {
  const m = memGet(k);
  if (m !== undefined) return m;
  try {
    const hit = await caches.default.match(cacheKey(k));
    if (hit) { const t = await hit.text(); memSet(k, t); return t; }
  } catch (e) { /* Cache API unavailable */ }
  if (cfg.kv) {
    try { const t = await cfg.kv.get(k); if (t != null) { memSet(k, t); return t; } } catch (e) { /* ignore */ }
  }
  return undefined;
}
function cachePutText(cfg, ctx, k, text, ttlSec) {
  memSet(k, text, ttlSec && ttlSec < 3600 ? ttlSec : 0);
  const age = ttlSec || 31536000;
  const jobs = [];
  try {
    jobs.push(caches.default.put(cacheKey(k), new Response(text, { headers: { 'cache-control': 'public, max-age=' + age } })).catch(function () {}));
  } catch (e) { /* ignore */ }
  if (cfg.kv && text.length < 20 * 1024 * 1024) {
    const opts = ttlSec ? { expirationTtl: Math.max(60, ttlSec) } : undefined;
    jobs.push(cfg.kv.put(k, text, opts).catch(function () {}));
  }
  const all = Promise.all(jobs);
  if (ctx && ctx.waitUntil) ctx.waitUntil(all);
  return all;
}

function ghHeaders(cfg, extra) {
  const h = { 'User-Agent': UA };
  if (cfg.token) h.Authorization = 'Bearer ' + cfg.token;
  if (extra) for (const k in extra) h[k] = extra[k];
  return h;
}

class VaultError extends Error {
  constructor(msg, status) { super(msg); this.status = status || 502; }
}

async function getHeadSha(cfg, ctx) {
  const k = 'head:' + cfg.ns;
  const m = memGet(k);
  if (m) return m;
  let sha = null;
  // 1) git smart-HTTP ref advertisement: not subject to the REST API rate limit
  try {
    const h = { 'User-Agent': 'git/2.40 ' + UA };
    if (cfg.token) h.Authorization = 'Basic ' + btoa('x-access-token:' + cfg.token);
    const r = await fetch('https://github.com/' + cfg.GITHUB_OWNER + '/' + cfg.GITHUB_REPO + '.git/info/refs?service=git-upload-pack', { headers: h });
    if (r.ok) {
      const txt = await r.text();
      const re = new RegExp('([0-9a-f]{40}) refs/heads/' + cfg.GITHUB_BRANCH.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?:\\u0000|\\n|$)');
      const mm = re.exec(txt);
      if (mm) sha = mm[1];
    }
  } catch (e) { /* fall through */ }
  // 2) REST API fallback
  if (!sha) {
    try {
      const r = await fetch('https://api.github.com/repos/' + cfg.GITHUB_OWNER + '/' + cfg.GITHUB_REPO + '/commits/' + encodeURIComponent(cfg.GITHUB_BRANCH),
        { headers: ghHeaders(cfg, { Accept: 'application/vnd.github.sha' }) });
      if (r.ok) { const t = (await r.text()).trim(); if (/^[0-9a-f]{40}$/.test(t)) sha = t; }
    } catch (e) { /* fall through */ }
  }
  const lastKey = 'lasthead:' + cfg.ns;
  if (sha) {
    memSet(k, sha, cfg.headTtl);
    memSet(lastKey, sha);
    cachePutText(cfg, ctx, lastKey, sha, 0);
    return sha;
  }
  const last = await cacheGetText(cfg, lastKey);
  if (last) { memSet(k, last, 15); return last; }
  throw new VaultError('Could not reach GitHub to find the latest commit of ' + cfg.GITHUB_OWNER + '/' + cfg.GITHUB_REPO + ' (' + cfg.GITHUB_BRANCH + ').');
}

function isExcluded(cfg, path) {
  const segs = path.split('/');
  for (let i = 0; i < segs.length; i++) if (segs[i].charAt(0) === '.') return true;
  for (let i = 0; i < cfg.exclude.length; i++) {
    const x = cfg.exclude[i];
    if (path === x || path.indexOf(x + '/') === 0) return true;
  }
  return false;
}

async function getTree(cfg, ctx, sha) {
  const k = 'tree:' + cfg.ns + ':' + sha;
  let txt = await cacheGetText(cfg, k);
  if (txt === undefined) {
    const r = await fetch('https://api.github.com/repos/' + cfg.GITHUB_OWNER + '/' + cfg.GITHUB_REPO + '/git/trees/' + sha + '?recursive=1',
      { headers: ghHeaders(cfg, { Accept: 'application/vnd.github+json' }) });
    if (!r.ok) {
      const lastTree = memGet('lasttree:' + cfg.ns) || await cacheGetText(cfg, 'lasttree:' + cfg.ns);
      if (lastTree) return JSON.parse(lastTree);
      const limited = r.status === 403 || r.status === 429;
      throw new VaultError(limited
        ? 'GitHub API rate limit reached. Add a GITHUB_TOKEN secret to the worker to lift it.'
        : 'GitHub returned ' + r.status + ' when listing the repository.', limited ? 503 : 502);
    }
    const data = await r.json();
    const entries = [];
    for (const it of data.tree || []) {
      if (it.type !== 'blob' && it.type !== 'tree') continue;
      entries.push([it.path, it.type === 'blob' ? 1 : 0, it.size || 0]);
    }
    txt = JSON.stringify({ sha: sha, truncated: !!data.truncated, entries: entries });
    cachePutText(cfg, ctx, k, txt, 0);
    cachePutText(cfg, ctx, 'lasttree:' + cfg.ns, txt, 0);
  }
  memSet('lasttree:' + cfg.ns, txt);
  const parsed = JSON.parse(txt);
  parsed.entries = parsed.entries.filter(function (e) { return !isExcluded(cfg, e[0]); });
  return parsed;
}

async function getCommits(cfg, ctx, sha) {
  const k = 'commits:' + cfg.ns + ':' + sha;
  let txt = await cacheGetText(cfg, k);
  if (txt === undefined) {
    try {
      const r = await fetch('https://api.github.com/repos/' + cfg.GITHUB_OWNER + '/' + cfg.GITHUB_REPO + '/commits?per_page=6&sha=' + sha,
        { headers: ghHeaders(cfg, { Accept: 'application/vnd.github+json' }) });
      if (!r.ok) return [];
      const data = await r.json();
      const list = (Array.isArray(data) ? data : []).map(function (c) {
        return {
          sha: c.sha, msg: (c.commit && c.commit.message || '').split('\n')[0],
          author: (c.author && c.author.login) || (c.commit && c.commit.author && c.commit.author.name) || '',
          date: c.commit && (c.commit.committer && c.commit.committer.date || c.commit.author && c.commit.author.date) || '',
          url: c.html_url,
        };
      });
      txt = JSON.stringify(list);
      cachePutText(cfg, ctx, k, txt, 0);
    } catch (e) { return []; }
  }
  try { return JSON.parse(txt); } catch (e) { return []; }
}

function rawUrl(cfg, sha, path) {
  return 'https://raw.githubusercontent.com/' + cfg.GITHUB_OWNER + '/' + cfg.GITHUB_REPO + '/' + sha + '/' + encPath(path);
}

async function getText(cfg, ctx, sha, path) {
  const k = 'text:' + cfg.ns + ':' + sha + ':' + path;
  let txt = await cacheGetText(cfg, k);
  if (txt !== undefined) return txt;
  const r = await fetch(rawUrl(cfg, sha, path), { headers: ghHeaders(cfg), cf: { cacheTtl: 31536000, cacheEverything: true } });
  if (!r.ok) throw new VaultError('Could not load ' + path + ' (GitHub ' + r.status + ').', r.status === 404 ? 404 : 502);
  txt = await r.text();
  cachePutText(cfg, ctx, k, txt, 0);
  return txt;
}

/* ------------------------------------------------------------------ */
/* Tree model                                                          */
/* ------------------------------------------------------------------ */
function buildModel(tree, cfg) {
  const entries = tree.entries;
  const dirs = new Map();
  dirs.set('', { path: '', dirs: [], files: [], count: 0 });
  const sorted = entries.slice().sort(function (a, b) { return naturalSort(a[0], b[0]); });
  for (const e of sorted) if (!e[1]) dirs.set(e[0], { path: e[0], dirs: [], files: [], count: 0 });
  for (const e of sorted) {
    const p = e[0];
    const parent = p.indexOf('/') >= 0 ? p.slice(0, p.lastIndexOf('/')) : '';
    if (!dirs.has(parent)) dirs.set(parent, { path: parent, dirs: [], files: [], count: 0 });
    if (e[1]) dirs.get(parent).files.push(e); else dirs.get(parent).dirs.push(p);
  }
  for (const e of sorted) {
    if (!e[1] || /(^|\/)readme\.md$/i.test(e[0])) continue;
    const segs = e[0].split('/');
    for (let i = 0; i < segs.length - 1; i++) {
      const d = dirs.get(segs.slice(0, i + 1).join('/'));
      if (d) d.count++;
    }
    dirs.get('').count++;
  }
  return {
    entries: entries, dirs: dirs, sha: tree.sha,
    resolver: makeResolver(entries, cfg.GITHUB_OWNER, cfg.GITHUB_REPO),
  };
}

function readmeOf(model, dir) {
  const d = model.dirs.get(dir);
  if (!d) return null;
  for (const f of d.files) if (/^readme\.md$/i.test(f[0].split('/').pop())) return f[0];
  return null;
}

function stripInlineMd(s) {
  return s.replace(/!\[[^\]]*\]\([^)]*\)/g, '').replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[\[([^\]|]+)(\|([^\]]+))?\]\]/g, function (_, a, __, b) { return b || a; })
    .replace(/[*_`~]+/g, '').replace(/\s+/g, ' ').trim();
}

/* Pull "- [**Name**](link) - description" style blurbs out of README files */
function extractDescriptions(md, resolver, dir) {
  const out = {};
  const lines = md.split(/\r?\n/);
  let inCode = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^\s*(```|~~~)/.test(line)) { inCode = !inCode; continue; }
    if (inCode) continue;
    const re = /\[((?:[^\[\]]|\[[^\]]*\])*)\]\(\s*([^)\s]+)[^)]*\)/g;
    const m = re.exec(line);
    if (!m) continue;
    let after = line.slice(m.index + m[0].length).replace(/^[\s*_]*[-–—:|]\s*/, '').trim();
    if (!after && /^\s*#{1,6}\s/.test(line)) {
      for (let j = i + 1; j < lines.length && j < i + 4; j++) {
        const nx = lines[j].trim();
        if (!nx) continue;
        if (/^(#|[-*]\s|>|```)/.test(nx)) break;
        after = nx; break;
      }
    }
    after = stripInlineMd(after);
    if (!after || after.length < 3) continue;
    let target = null;
    const u = resolver.fromUrl(m[2]);
    if (u) target = resolver.has(u.path) ? u.path : resolver.find(u.path, dir);
    else if (!/^[a-z]+:/i.test(m[2]) && m[2].charAt(0) !== '#') target = resolver.find(m[2], dir);
    if (target != null && out[target] === undefined) out[target] = after.length > 180 ? after.slice(0, 177) + '…' : after;
  }
  return out;
}

async function descriptionsFor(cfg, ctx, model, dir) {
  const result = {};
  const chain = [];
  let d = dir;
  while (true) {
    chain.push(d);
    if (d === '') break;
    d = d.indexOf('/') >= 0 ? d.slice(0, d.lastIndexOf('/')) : '';
  }
  const readmes = chain.slice(0, 3).map(function (x) { return readmeOf(model, x); }).filter(Boolean);
  const texts = await Promise.all(readmes.map(function (p) { return getText(cfg, ctx, model.sha, p).catch(function () { return ''; }); }));
  texts.forEach(function (t, i) {
    const rd = readmes[i];
    const rdDir = rd.indexOf('/') >= 0 ? rd.slice(0, rd.lastIndexOf('/')) : '';
    const desc = extractDescriptions(t, model.resolver, rdDir);
    for (const k in desc) if (result[k] === undefined) result[k] = desc[k];
  });
  return result;
}

function normName(s) { return String(s).toLowerCase().replace(/\.[^.]+$/, '').replace(/[^a-z0-9]+/g, ''); }
function findCover(model, pdfPath) {
  const n = normName(pdfPath.split('/').pop());
  if (n.length < 5) return null;
  let best = null;
  for (const e of model.entries) {
    if (!e[1] || fileKind(e[0]) !== 'image') continue;
    const c = normName(e[0].split('/').pop());
    if (c.length < 6) continue;
    if (n === c || n.indexOf(c) >= 0 || c.indexOf(n) >= 0) {
      if (!best || c.length > best.len) best = { path: e[0], len: c.length };
    }
  }
  return best ? best.path : null;
}

/* ------------------------------------------------------------------ */
/* HTML                                                                */
/* ------------------------------------------------------------------ */
function href(kind, path) { return '/' + kind + (path ? '/' + encPath(path) : ''); }
function rawHref(model, path) { return '/raw/' + encPath(path) + '?v=' + model.sha.slice(0, 10); }

function renderSidebar(model, current) {
  const open = new Set();
  const segs = (current || '').split('/');
  for (let i = 1; i <= segs.length; i++) open.add(segs.slice(0, i).join('/'));
  function dirNode(path, depth) {
    const d = model.dirs.get(path);
    let html = '';
    for (const sub of d.dirs) {
      const st = sectionStyle(sub, SECTIONS);
      const sd = model.dirs.get(sub);
      html += '<details class="t-dir"' + (open.has(sub) ? ' open' : '') + ' style="--c:' + st.color + '">' +
        '<summary><span class="chev"></span><span class="t-ico">' + st.icon + '</span>' +
        '<a href="' + href('tree', sub) + '"' + (current === sub ? ' class="active"' : '') + '>' + esc(sub.split('/').pop()) + '</a>' +
        '<span class="t-count">' + (sd ? sd.count : 0) + '</span></summary>' +
        '<div class="t-kids">' + dirNode(sub, depth + 1) + '</div></details>';
    }
    for (const f of d.files) {
      html += '<a class="t-file' + (current === f[0] ? ' active' : '') + '" href="' + href('blob', f[0]) + '" title="' + esc(f[0]) + '">' +
        '<span class="t-ico">' + fileIcon(f[0]) + '</span><span class="t-name">' + esc(displayName(f[0])) + '</span></a>';
    }
    return html;
  }
  return '<nav class="tree" aria-label="Repository">' + dirNode('', 0) + '</nav>';
}

function breadcrumbs(path) {
  let html = '<nav class="crumbs" aria-label="Breadcrumb"><a href="/">⌂ vault</a>';
  const segs = (path || '').split('/').filter(Boolean);
  for (let i = 0; i < segs.length; i++) {
    const p = segs.slice(0, i + 1).join('/');
    const last = i === segs.length - 1;
    html += '<span class="sep">/</span>' + (last ? '<span class="cur">' + esc(displayName(segs[i])) + '</span>' : '<a href="' + href('tree', p) + '">' + esc(segs[i]) + '</a>');
  }
  return html + '</nav>';
}

function layout(o) {
  // o: {cfg, model, title, current, body, page, desc}
  const cfg = o.cfg, model = o.model;
  const vault = model ? {
    entries: model.entries, sha: model.sha, owner: cfg.GITHUB_OWNER, repo: cfg.GITHUB_REPO,
    branch: cfg.GITHUB_BRANCH, sections: SECTIONS, page: o.page || {},
  } : { entries: [], sha: '', owner: cfg.GITHUB_OWNER, repo: cfg.GITHUB_REPO, branch: cfg.GITHUB_BRANCH, sections: SECTIONS, page: {} };
  const ghUrl = 'https://github.com/' + cfg.GITHUB_OWNER + '/' + cfg.GITHUB_REPO;
  const name = cfg.SITE_NAME;
  const nameHtml = esc(name).replace(/_/g, '<span class="us">_</span>');
  return '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width,initial-scale=1">' +
    '<title>' + esc(o.title ? o.title + ' · ' + name : name) + '</title>' +
    '<meta name="description" content="' + esc(o.desc || 'A living cybersecurity knowledge vault: articles, cheat sheets, tooling guides, posters and books.') + '">' +
    '<meta name="theme-color" content="#05070d">' +
    '<meta property="og:title" content="' + esc(o.title || name) + '">' +
    '<link rel="icon" href="/favicon.svg" type="image/svg+xml">' +
    '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' +
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap">' +
    '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@highlightjs/cdn-assets@11.9.0/styles/atom-one-dark.min.css">' +
    '<link rel="stylesheet" href="/assets/app.css?v=' + ASSET_VERSION + '">' +
    '</head><body class="page-' + esc((o.page && o.page.kind) || 'x') + '">' +
    '<canvas id="bg" aria-hidden="true"></canvas><div class="grid-overlay" aria-hidden="true"></div>' +
    '<header class="top">' +
    '<button class="burger" id="burger" aria-label="Toggle navigation"><span></span><span></span><span></span></button>' +
    '<a class="brand" href="/"><span class="brand-mark">◈</span><span class="glitch" data-text="' + esc(name) + '">' + nameHtml + '</span></a>' +
    '<button class="search-btn" id="searchBtn" aria-label="Search the vault"><span class="s-ico">⌕</span><span class="s-txt">Search the vault…</span><kbd>Ctrl K</kbd></button>' +
    '<nav class="top-links"><a href="/map" title="Vault map">⌬ <span>Map</span></a><a href="/tags" title="Tags"># <span>Tags</span></a>' +
    '<a href="#" id="randomBtn" title="Random note">⚄ <span>Random</span></a>' +
    '<a href="' + esc(ghUrl) + '" target="_blank" rel="noopener" title="GitHub repository">' +
    '<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg> <span>GitHub</span></a></nav>' +
    '</header>' +
    '<div class="shell">' +
    '<aside class="side" id="side"><div class="side-head"><input id="treeFilter" type="search" placeholder="Filter files…" aria-label="Filter files"></div>' +
    (model ? renderSidebar(model, o.current || '') : '') +
    '<div class="side-foot">' + (model ? 'synced @ <a href="' + esc(ghUrl) + '/commit/' + model.sha + '" target="_blank" rel="noopener"><code>' + model.sha.slice(0, 7) + '</code></a>' : '') + '</div></aside>' +
    '<div class="scrim" id="scrim"></div>' +
    '<main class="main" id="main">' + o.body +
    '<footer class="foot"><span>◈ ' + esc(name) + '</span><span>Live from <a href="' + esc(ghUrl) + '" target="_blank" rel="noopener">' + esc(cfg.GITHUB_OWNER + '/' + cfg.GITHUB_REPO) + '</a> · ' + esc(cfg.GITHUB_BRANCH) + '</span><span>Served by a Cloudflare Worker</span></footer>' +
    '</main></div>' +
    '<div class="palette" id="palette" hidden><div class="pal-box" role="dialog" aria-label="Search">' +
    '<div class="pal-in"><span>⌕</span><input id="palInput" placeholder="Search files, notes and content…" autocomplete="off" spellcheck="false"><kbd>Esc</kbd></div>' +
    '<div class="pal-status" id="palStatus"></div><ul class="pal-list" id="palList"></ul></div></div>' +
    '<div class="lightbox" id="lightbox" hidden><img alt=""></div>' +
    '<script>window.__VAULT__=' + jsonForScript(vault) + ';</script>' +
    '<script defer src="https://cdn.jsdelivr.net/npm/marked@12.0.2/marked.min.js"></script>' +
    '<script defer src="https://cdn.jsdelivr.net/npm/dompurify@3.1.6/dist/purify.min.js"></script>' +
    '<script defer src="https://cdn.jsdelivr.net/npm/@highlightjs/cdn-assets@11.9.0/highlight.min.js"></script>' +
    '<script defer src="/assets/app.js?v=' + ASSET_VERSION + '"></script>' +
    '</body></html>';
}

function mdBlock(path, text, extraClass) {
  return '<article class="md ' + (extraClass || '') + '" data-md-path="' + esc(path) + '">' +
    '<div class="md-loading">decrypting<span class="dots">…</span></div>' +
    '<noscript><pre class="md-fallback">' + esc(text) + '</pre></noscript>' +
    '<script type="application/json" class="md-src">' + jsonForScript(text) + '</script></article>';
}

function sectionCards(model, dirPath, descs) {
  const d = model.dirs.get(dirPath);
  if (!d || !d.dirs.length) return '';
  let html = '<div class="cards dirs">';
  for (const sub of d.dirs) {
    const st = sectionStyle(sub, SECTIONS);
    const sd = model.dirs.get(sub);
    const desc = descs[sub] || '';
    html += '<a class="card dir-card" href="' + href('tree', sub) + '" style="--c:' + st.color + '" data-filter="' + esc(sub.toLowerCase() + ' ' + desc.toLowerCase()) + '">' +
      '<span class="card-ico">' + st.icon + '</span><span class="card-title">' + esc(sub.split('/').pop()) + '</span>' +
      (desc ? '<span class="card-desc">' + esc(desc) + '</span>' : '') +
      '<span class="card-meta">' + (sd ? sd.count : 0) + ' items <span class="arrow">→</span></span></a>';
  }
  return html + '</div>';
}

function fileCards(model, dirPath, descs) {
  const d = model.dirs.get(dirPath);
  if (!d) return '';
  const files = d.files.filter(function (f) { return !/^readme\.md$/i.test(f[0].split('/').pop()); });
  if (!files.length) return '';
  const st = sectionStyle(dirPath, SECTIONS);
  const allImages = files.every(function (f) { return fileKind(f[0]) === 'image'; });
  const pdfs = files.filter(function (f) { return fileKind(f[0]) === 'pdf'; }).length;
  if (allImages) {
    let h = '<div class="gallery">';
    for (const f of files) {
      h += '<a class="g-item" href="' + href('blob', f[0]) + '" data-filter="' + esc(f[0].toLowerCase()) + '">' +
        '<img loading="lazy" src="' + rawHref(model, f[0]) + '" alt="' + esc(displayName(f[0])) + '"><span>' + esc(displayName(f[0])) + '</span></a>';
    }
    return h + '</div>';
  }
  if (pdfs && pdfs >= files.length / 2) {
    let h = '<div class="shelf">';
    for (const f of files) {
      const k = fileKind(f[0]);
      const name = displayName(f[0]).replace(/\.pdf$/i, '');
      const cover = k === 'pdf' ? findCover(model, f[0]) : null;
      let hue = 0; for (let i = 0; i < name.length; i++) hue = (hue * 31 + name.charCodeAt(i)) % 360;
      h += '<a class="book" href="' + href('blob', f[0]) + '" data-filter="' + esc(f[0].toLowerCase()) + '" style="--h:' + hue + '">' +
        (cover
          ? '<span class="cover img"><img loading="lazy" src="' + rawHref(model, cover) + '" alt=""></span>'
          : '<span class="cover gen"><span class="cv-top">' + (k === 'pdf' ? 'PDF' : esc(k.toUpperCase())) + '</span><span class="cv-title">' + esc(name) + '</span><span class="cv-glyph">' + st.icon + '</span></span>') +
        '<span class="book-title">' + esc(name) + '</span><span class="book-meta">' + fileIcon(f[0]) + ' ' + fmtBytes(f[2]) + '</span></a>';
    }
    return h + '</div>';
  }
  let h = '<div class="cards files">';
  for (const f of files) {
    const fs = sectionStyle(f[0], SECTIONS);
    const desc = descs[f[0]] || '';
    h += '<a class="card file-card" href="' + href('blob', f[0]) + '" style="--c:' + fs.color + '" data-filter="' + esc((f[0] + ' ' + desc).toLowerCase()) + '">' +
      '<span class="card-top"><span class="card-ico sm">' + fileIcon(f[0]) + '</span><span class="card-title">' + esc(displayName(f[0])) + '</span></span>' +
      (desc ? '<span class="card-desc">' + esc(desc) + '</span>' : '') +
      '<span class="card-meta">' + esc(fileKind(f[0]).toUpperCase()) + ' · ' + fmtBytes(f[2]) + '</span></a>';
  }
  return h + '</div>';
}

async function pageHome(cfg, ctx, model) {
  const readme = readmeOf(model, '');
  const [readmeText, commits, descs] = await Promise.all([
    readme ? getText(cfg, ctx, model.sha, readme).catch(function () { return ''; }) : '',
    getCommits(cfg, ctx, model.sha),
    descriptionsFor(cfg, ctx, model, ''),
  ]);
  const root = model.dirs.get('');
  const tops = root.dirs.slice().sort(function (a, b) {
    const oa = (SECTIONS[a] && SECTIONS[a].order) || 50, ob = (SECTIONS[b] && SECTIONS[b].order) || 50;
    return oa - ob || naturalSort(a, b);
  });
  const files = model.entries.filter(function (e) { return e[1]; });
  const kinds = { md: 0, pdf: 0, image: 0 };
  let bytes = 0;
  for (const f of files) { const k = fileKind(f[0]); if (kinds[k] !== undefined) kinds[k]++; bytes += f[2]; }
  const last = commits[0];

  let term = '<div class="term"><div class="term-bar"><i></i><i></i><i></i><span>root@vault: ~</span></div><div class="term-body">' +
    '<div class="ln"><span class="pr">root@vault:~$</span> ls -la /vault</div>';
  for (const t of tops) {
    const st = sectionStyle(t, SECTIONS);
    term += '<div class="ln out"><span class="perm">drwxr-x---</span> <a href="' + href('tree', t) + '" style="color:' + st.color + '">' + esc(t) + '/</a> <span class="cnt">' + model.dirs.get(t).count + '</span></div>';
  }
  term += '<div class="ln"><span class="pr">root@vault:~$</span> git log -1 --oneline</div>' +
    '<div class="ln out">' + (last ? '<span class="sha">' + esc(last.sha.slice(0, 7)) + '</span> ' + esc(last.msg) + ' <span class="dim">(' + esc(timeAgo(last.date)) + ')</span>' : '<span class="sha">' + model.sha.slice(0, 7) + '</span> <span class="dim">HEAD → ' + esc(cfg.GITHUB_BRANCH) + '</span>') + '</div>' +
    '<div class="ln"><span class="pr">root@vault:~$</span> <span class="cursor">▋</span></div></div></div>';

  const main = tops.filter(function (t) { return !(SECTIONS[t] && SECTIONS[t].order >= 8); });
  const archive = tops.filter(function (t) { return SECTIONS[t] && SECTIONS[t].order >= 8; });
  let sections = '<div class="cards sections">';
  main.forEach(function (t, i) {
    const st = sectionStyle(t, SECTIONS);
    const sd = model.dirs.get(t);
    const desc = descs[t] || '';
    const subs = sd.dirs.map(function (s) { return '<span class="chip">' + esc(s.split('/').pop()) + '</span>'; }).join('');
    sections += '<a class="card sec-card" href="' + href('tree', t) + '" style="--c:' + st.color + ';--i:' + i + '">' +
      '<span class="sec-num">0' + (i + 1) + '</span><span class="card-ico big">' + st.icon + '</span>' +
      '<span class="card-title">' + esc(t) + '</span>' + (desc ? '<span class="card-desc">' + esc(desc) + '</span>' : '') +
      (subs ? '<span class="chips">' + subs + '</span>' : '') +
      '<span class="card-meta"><b>' + sd.count + '</b> entries <span class="arrow">→</span></span></a>';
  });
  sections += '</div>';
  if (archive.length || root.files.length) {
    sections += '<div class="archive"><span class="label">Also in the repo</span>';
    for (const t of archive) {
      const st = sectionStyle(t, SECTIONS);
      sections += '<a class="pill" style="--c:' + st.color + '" href="' + href('tree', t) + '">' + st.icon + ' ' + esc(t) + ' <b>' + model.dirs.get(t).count + '</b></a>';
    }
    for (const f of root.files) sections += '<a class="pill" href="' + href('blob', f[0]) + '">' + fileIcon(f[0]) + ' ' + esc(f[0]) + '</a>';
    sections += '</div>';
  }

  let commitsHtml = '';
  if (commits.length) {
    commitsHtml = '<section class="panel"><h2 class="h-sec"><span>//</span> Recent transmissions</h2><ul class="commits">' +
      commits.map(function (c) {
        return '<li><a href="' + esc(c.url) + '" target="_blank" rel="noopener"><code>' + esc(c.sha.slice(0, 7)) + '</code><span class="msg">' + esc(c.msg) + '</span><span class="who">' + esc(c.author) + ' · ' + esc(timeAgo(c.date)) + '</span></a></li>';
      }).join('') + '</ul></section>';
  }

  const body = '<section class="hero">' +
    '<div class="hero-l">' +
    '<div class="eyebrow"><span class="dot"></span> LIVE · synced with GitHub</div>' +
    '<h1 class="hero-title glitch" data-text="' + esc(cfg.SITE_NAME) + '">' + esc(cfg.SITE_NAME).replace(/_/g, '<span class="us">_</span>') + '</h1>' +
    '<p class="hero-sub"><span class="typed" data-words="Knowledge articles|Cheat sheets|Red team tooling|Blue team tooling|DFIR posters|Field manuals">Knowledge articles</span> for defenders, hunters and the curious.</p>' +
    '<div class="hero-cta"><button class="btn primary" id="heroSearch">⌕ Search the vault</button><a class="btn" href="/map">⌬ Explore the map</a></div>' +
    '<div class="stats">' +
    '<div class="stat"><b data-count="' + kinds.md + '">' + kinds.md + '</b><span>notes</span></div>' +
    '<div class="stat"><b data-count="' + kinds.pdf + '">' + kinds.pdf + '</b><span>PDFs</span></div>' +
    '<div class="stat"><b data-count="' + kinds.image + '">' + kinds.image + '</b><span>images</span></div>' +
    '<div class="stat"><b>' + esc(fmtBytes(bytes)) + '</b><span>of intel</span></div>' +
    '</div></div>' +
    '<div class="hero-r"><div class="vault-dial" aria-hidden="true"><i class="r1"></i><i class="r2"></i><i class="r3"></i><span class="core">◈</span></div>' + term + '</div>' +
    '</section>' +
    '<section><h2 class="h-sec"><span>//</span> Sections</h2>' + sections + '</section>' +
    commitsHtml +
    (readmeText ? '<section class="panel readme"><h2 class="h-sec"><span>//</span> README.md</h2>' + mdBlock(readme, readmeText) + '</section>' : '');
  return layout({ cfg: cfg, model: model, title: '', current: '', body: body, page: { kind: 'home', path: '' } });
}

async function pageTree(cfg, ctx, model, path) {
  const d = model.dirs.get(path);
  const st = sectionStyle(path, SECTIONS);
  const readme = readmeOf(model, path);
  const [readmeText, descs] = await Promise.all([
    readme ? getText(cfg, ctx, model.sha, readme).catch(function () { return ''; }) : '',
    descriptionsFor(cfg, ctx, model, path),
  ]);
  const body = breadcrumbs(path) +
    '<header class="dir-head" style="--c:' + st.color + '"><span class="dir-ico">' + st.icon + '</span><div><h1>' + esc(path.split('/').pop()) + '</h1>' +
    '<p>' + d.count + ' items' + (d.dirs.length ? ' · ' + d.dirs.length + ' folders' : '') + '</p></div>' +
    '<input class="dir-filter" id="dirFilter" type="search" placeholder="Filter this folder…" aria-label="Filter this folder"></header>' +
    sectionCards(model, path, descs) + fileCards(model, path, descs) +
    '<p class="empty-filter" id="emptyFilter" hidden>No matches in this folder.</p>' +
    (readmeText ? '<section class="panel readme"><h2 class="h-sec"><span>//</span> README.md</h2>' + mdBlock(readme, readmeText) + '</section>' : '');
  return layout({ cfg: cfg, model: model, title: path.split('/').pop(), current: path, body: body, page: { kind: 'tree', path: path } });
}

function siblingNav(model, path) {
  const dir = path.indexOf('/') >= 0 ? path.slice(0, path.lastIndexOf('/')) : '';
  const files = (model.dirs.get(dir) || { files: [] }).files.map(function (f) { return f[0]; });
  const i = files.indexOf(path);
  if (i < 0 || files.length < 2) return '';
  const prev = i > 0 ? files[i - 1] : null, next = i < files.length - 1 ? files[i + 1] : null;
  return '<nav class="pager">' +
    (prev ? '<a class="prev" href="' + href('blob', prev) + '"><small>← previous</small><span>' + esc(displayName(prev)) + '</span></a>' : '<span></span>') +
    (next ? '<a class="next" href="' + href('blob', next) + '"><small>next →</small><span>' + esc(displayName(next)) + '</span></a>' : '<span></span>') +
    '</nav>';
}

async function pageBlob(cfg, ctx, model, path) {
  const entry = model.resolver.entry(path);
  const kind = fileKind(path);
  const st = sectionStyle(path, SECTIONS);
  const ghBlob = 'https://github.com/' + cfg.GITHUB_OWNER + '/' + cfg.GITHUB_REPO + '/blob/' + cfg.GITHUB_BRANCH + '/' + encPath(path);
  const raw = rawHref(model, path);
  let content = '', words = 0;
  const size = entry ? entry[2] : 0;
  if (kind === 'md') {
    const text = await getText(cfg, ctx, model.sha, path);
    words = (text.match(/\S+/g) || []).length;
    content = '<div class="doc-wrap"><div class="doc-main">' + mdBlock(path, text, 'doc') + '<section class="backlinks" id="backlinks" hidden></section>' + siblingNav(model, path) + '</div>' +
      '<aside class="toc" id="toc" hidden><div class="toc-h">On this page</div><nav></nav><div class="progress"><i id="readProgress"></i></div></aside></div>';
  } else if (kind === 'pdf') {
    content = '<div class="viewer pdf"><iframe src="' + raw + '#view=FitH" title="' + esc(displayName(path)) + '" loading="lazy"></iframe></div>' +
      '<p class="viewer-note">PDF not showing? <a href="' + raw + '" target="_blank" rel="noopener">Open it in a new tab</a> or <a href="' + raw + '&download=1">download it</a>.</p>' + siblingNav(model, path);
  } else if (kind === 'image') {
    content = '<div class="viewer image"><img class="zoomable" src="' + raw + '" alt="' + esc(displayName(path)) + '"></div>' + siblingNav(model, path);
  } else if (kind === 'video') {
    content = '<div class="viewer image"><video controls src="' + raw + '"></video></div>' + siblingNav(model, path);
  } else if (kind === 'html' || kind === 'code') {
    if (size > 1024 * 1024) {
      content = '<div class="viewer binary"><p>This file is ' + fmtBytes(size) + ', too large to preview.</p></div>';
    } else {
      const text = await getText(cfg, ctx, model.sha, path);
      const ext = (/\.([^.\/]+)$/.exec(path) || [, ''])[1].toLowerCase();
      const code = '<pre class="code-view"><code class="language-' + esc(ext === 'htm' ? 'html' : (ext || 'plaintext')) + '">' + esc(text) + '</code></pre>';
      content = kind === 'html'
        ? '<div class="tabs" data-tabs><button class="on" data-tab="0">Preview</button><button data-tab="1">Source</button></div>' +
          '<div class="tab-panels"><div class="viewer html" data-panel="0"><iframe sandbox="allow-scripts allow-popups" src="' + raw + '" title="Preview" loading="lazy"></iframe></div><div data-panel="1" hidden>' + code + '</div></div>'
        : code;
      content += siblingNav(model, path);
    }
  } else {
    content = '<div class="viewer binary"><span class="big-ico">📦</span><p>' + esc(path.split('/').pop()) + ' · ' + fmtBytes(size) + '</p><a class="btn primary" href="' + raw + '&download=1">Download</a></div>';
  }
  const meta = '<div class="doc-meta"><span class="badge" style="--c:' + st.color + '">' + st.icon + ' ' + esc(path.split('/')[0]) + '</span>' +
    '<span>' + esc(kind.toUpperCase()) + '</span><span>' + fmtBytes(size) + '</span>' +
    (words ? '<span>' + Math.max(1, Math.round(words / 220)) + ' min read</span>' : '') +
    '<span class="grow"></span>' +
    '<a href="' + raw + '" target="_blank" rel="noopener">Raw</a>' +
    '<a href="' + raw + '&download=1">Download</a>' +
    '<a href="' + esc(ghBlob) + '" target="_blank" rel="noopener">View on GitHub ↗</a>' +
    '<button class="copy-link" id="copyLink">Copy link</button></div>';
  const body = breadcrumbs(path) +
    '<header class="file-head" style="--c:' + st.color + '"><h1>' + (kind === 'md' ? '' : '<span class="fh-ico">' + fileIcon(path) + '</span>') + esc(displayName(path)) + '</h1>' + meta + '</header>' + content;
  return layout({ cfg: cfg, model: model, title: displayName(path), current: path, body: body, page: { kind: 'blob', type: kind, path: path } });
}

function pageMap(cfg, model) {
  const body = '<header class="dir-head" style="--c:#00e5ff"><span class="dir-ico">⌬</span><div><h1>Vault map</h1><p>Every folder and file as a live graph. Scroll to zoom, drag to pan, click a node to open it.</p></div></header>' +
    '<div class="map-tools"><label><input type="checkbox" id="mapLinks" checked> Show links between notes</label><label><input type="checkbox" id="mapImages"> Include images</label><span class="map-legend" id="mapLegend"></span></div>' +
    '<div class="map-wrap"><canvas id="map"></canvas><div class="map-tip" id="mapTip" hidden></div><div class="map-status" id="mapStatus"></div></div>';
  return layout({ cfg: cfg, model: model, title: 'Map', current: '', body: body, page: { kind: 'map' } });
}

function pageTags(cfg, model) {
  const body = '<header class="dir-head" style="--c:#ff5fa2"><span class="dir-ico">#</span><div><h1>Tags</h1><p>Every #tag used across the notes. Pick one to see where it appears.</p></div></header>' +
    '<div class="tag-cloud" id="tagCloud"><div class="md-loading">indexing notes<span class="dots">…</span></div></div><div id="tagResults"></div>';
  return layout({ cfg: cfg, model: model, title: 'Tags', current: '', body: body, page: { kind: 'tags' } });
}

function pageError(cfg, model, status, msg) {
  const body = '<section class="err"><div class="err-code glitch" data-text="' + status + '">' + status + '</div><h1>' + (status === 404 ? 'Nothing at this address' : 'Signal lost') + '</h1><p>' + esc(msg) + '</p>' +
    '<div class="hero-cta"><a class="btn primary" href="/">⌂ Back to the vault</a><button class="btn" id="heroSearch">⌕ Search</button></div></section>';
  return layout({ cfg: cfg, model: model, title: String(status), current: '', body: body, page: { kind: 'error' } });
}

function html(body, status, extra) {
  const h = { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'public, max-age=30', 'x-content-type-options': 'nosniff', 'referrer-policy': 'strict-origin-when-cross-origin' };
  if (extra) for (const k in extra) h[k] = extra[k];
  return new Response(body, { status: status || 200, headers: h });
}
function json(v, maxAge) {
  return new Response(JSON.stringify(v), { headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'public, max-age=' + (maxAge || 30), 'access-control-allow-origin': '*' } });
}

/* ------------------------------------------------------------------ */
/* Raw proxy                                                           */
/* ------------------------------------------------------------------ */
async function serveRaw(cfg, ctx, model, path, url, request) {
  const pinned = url.searchParams.get('v') && model.sha.indexOf(url.searchParams.get('v')) === 0;
  const download = url.searchParams.has('download');
  const key = new Request('https://cyber-vault-cache.internal/raw/' + cfg.ns + '/' + model.sha + '/' + encPath(path));
  let base = null;
  try { base = await caches.default.match(key); } catch (e) { /* no cache */ }
  if (!base) {
    const up = await fetch(rawUrl(cfg, model.sha, path), { headers: ghHeaders(cfg), cf: { cacheTtl: 31536000, cacheEverything: true } });
    if (!up.ok) return new Response('Not found', { status: up.status === 404 ? 404 : 502 });
    base = new Response(up.body, { headers: { 'content-type': mimeFor(path), 'cache-control': 'public, max-age=31536000, immutable' } });
    try { ctx.waitUntil(caches.default.put(key, base.clone()).catch(function () {})); } catch (e) { /* ignore */ }
  }
  const name = path.split('/').pop();
  const h = new Headers();
  h.set('content-type', mimeFor(path));
  const len = base.headers.get('content-length');
  if (len) h.set('content-length', len);
  h.set('cache-control', pinned ? 'public, max-age=31536000, immutable' : 'public, max-age=60');
  h.set('x-content-type-options', 'nosniff');
  h.set('content-disposition', (download ? 'attachment' : 'inline') + "; filename*=UTF-8''" + encodeURIComponent(name));
  const kind = fileKind(path);
  if (kind === 'html' || /\.svg$/i.test(path)) h.set('content-security-policy', 'sandbox allow-scripts allow-popups');
  if (request.method === 'HEAD') return new Response(null, { headers: h });
  return new Response(base.body, { headers: h });
}

/* ------------------------------------------------------------------ */
/* Router                                                              */
/* ------------------------------------------------------------------ */
function decodePathParam(s) {
  return s.split('/').filter(function (x) { return x !== ''; }).map(function (x) { try { return decodeURIComponent(x); } catch (e) { return x; } }).join('/');
}

async function handle(request, env, ctx) {
  const cfg = getConfig(env);
  const url = new URL(request.url);
  let p = url.pathname;
  if (request.method !== 'GET' && request.method !== 'HEAD') return new Response('Method not allowed', { status: 405 });

  if (p === '/assets/app.css') return new Response(APP_CSS, { headers: { 'content-type': 'text/css; charset=utf-8', 'cache-control': 'public, max-age=86400' } });
  if (p === '/assets/app.js') return new Response(clientBundle(), { headers: { 'content-type': 'text/javascript; charset=utf-8', 'cache-control': 'public, max-age=86400' } });
  if (p === '/favicon.svg' || p === '/favicon.ico') return new Response(FAVICON, { headers: { 'content-type': 'image/svg+xml', 'cache-control': 'public, max-age=604800' } });
  if (p === '/robots.txt') return new Response('User-agent: *\nAllow: /\n', { headers: { 'content-type': 'text/plain' } });

  let model;
  try {
    const sha = await getHeadSha(cfg, ctx);
    model = buildModel(await getTree(cfg, ctx, sha), cfg);
  } catch (e) {
    const status = e.status || 502;
    if (p.indexOf('/api/') === 0) return json({ error: e.message }, 5);
    return html(pageError(cfg, null, status, e.message), status, { 'cache-control': 'no-store' });
  }

  try {
    if (p === '/' || p === '/index.html') return html(await pageHome(cfg, ctx, model));
    if (p === '/map') return html(pageMap(cfg, model));
    if (p === '/tags') return html(pageTags(cfg, model));
    if (p === '/api/tree') return json({ sha: model.sha, owner: cfg.GITHUB_OWNER, repo: cfg.GITHUB_REPO, branch: cfg.GITHUB_BRANCH, entries: model.entries }, 60);
    if (p === '/api/content') {
      const pageNo = Math.max(0, parseInt(url.searchParams.get('page') || '0', 10) || 0);
      const k = 'content:' + cfg.ns + ':' + model.sha + ':' + pageNo;
      let txt = await cacheGetText(cfg, k);
      if (txt === undefined) {
        const mds = model.entries.filter(function (e) { return e[1] && fileKind(e[0]) === 'md' && e[2] < 2 * 1024 * 1024; }).map(function (e) { return e[0]; });
        const pages = Math.max(1, Math.ceil(mds.length / CONTENT_PAGE_SIZE));
        const slice = mds.slice(pageNo * CONTENT_PAGE_SIZE, (pageNo + 1) * CONTENT_PAGE_SIZE);
        const texts = await Promise.all(slice.map(function (x) { return getText(cfg, ctx, model.sha, x).catch(function () { return ''; }); }));
        const files = {};
        slice.forEach(function (x, i) { files[x] = texts[i]; });
        txt = JSON.stringify({ sha: model.sha, page: pageNo, pages: pages, files: files });
        cachePutText(cfg, ctx, k, txt, 0);
      }
      return new Response(txt, { headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': url.searchParams.get('v') ? 'public, max-age=31536000, immutable' : 'public, max-age=60' } });
    }

    // Accept GitHub-style URLs pasted onto this domain: /<owner>/<repo>/blob/<branch>/<path>
    const gh = model.resolver.fromUrl('https://github.com' + p);
    if (gh) {
      const gp = model.resolver.has(gh.path) ? gh.path : model.resolver.find(gh.path, '');
      if (!gp) return Response.redirect(url.origin + '/', 302);
      return Response.redirect(url.origin + href(model.resolver.isFile(gp) ? 'blob' : 'tree', gp), 301);
    }

    const m = /^\/(tree|blob|raw)(?:\/(.*))?$/.exec(p);
    if (m) {
      const kind = m[1];
      const path = decodePathParam(m[2] || '');
      if (kind === 'tree') {
        if (path === '') return Response.redirect(url.origin + '/', 302);
        if (model.dirs.has(path) && !model.resolver.isFile(path)) return html(await pageTree(cfg, ctx, model, path));
        if (model.resolver.isFile(path)) return Response.redirect(url.origin + href('blob', path), 302);
      } else if (model.resolver.isFile(path)) {
        if (kind === 'raw') return serveRaw(cfg, ctx, model, path, url, request);
        return html(await pageBlob(cfg, ctx, model, path));
      } else if (kind === 'blob' && model.dirs.has(path)) {
        return Response.redirect(url.origin + href('tree', path), 302);
      }
      // Moved or renamed? Try to find it by name.
      const guess = model.resolver.find(path, '');
      if (guess != null && guess !== path) {
        const k2 = model.resolver.isFile(guess) ? (kind === 'raw' ? 'raw' : 'blob') : 'tree';
        return Response.redirect(url.origin + href(k2, guess) + (kind === 'raw' ? url.search : ''), 302);
      }
      return html(pageError(cfg, model, 404, '“' + path + '” is not in the vault (anymore). Try searching for it.'), 404);
    }
    // Bare paths like /Tooling or /Cheat%20Sheets/Regex.md
    const bare = decodePathParam(p);
    if (bare) {
      if (model.resolver.isFile(bare)) return Response.redirect(url.origin + href('blob', bare), 302);
      if (model.dirs.has(bare)) return Response.redirect(url.origin + href('tree', bare), 302);
    }
    return html(pageError(cfg, model, 404, 'That page does not exist. Try the search or the map.'), 404);
  } catch (e) {
    const status = e.status || 500;
    return html(pageError(cfg, model, status, e.message || 'Unexpected error'), status, { 'cache-control': 'no-store' });
  }
}

export default {
  async fetch(request, env, ctx) {
    try {
      return await handle(request, env || {}, ctx || { waitUntil: function () {} });
    } catch (e) {
      return new Response('Cyber Vault worker error: ' + (e && e.message), { status: 500, headers: { 'content-type': 'text/plain' } });
    }
  },
};

/* ------------------------------------------------------------------ */
/* Static assets                                                       */
/* ------------------------------------------------------------------ */
const FAVICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#00e5ff"/><stop offset="1" stop-color="#ff2bd6"/></linearGradient></defs><rect width="64" height="64" rx="14" fill="#05070d"/><path d="M32 8l20 8v14c0 12-8.5 22-20 26C20.5 52 12 42 12 30V16z" fill="none" stroke="url(#g)" stroke-width="4"/><circle cx="32" cy="30" r="7" fill="none" stroke="url(#g)" stroke-width="4"/><path d="M32 37v8" stroke="url(#g)" stroke-width="4" stroke-linecap="round"/></svg>';

const APP_CSS = `
:root{--bg:#05070d;--bg2:#0a0f1a;--panel:rgba(12,18,32,.72);--panel2:rgba(18,26,44,.85);--line:rgba(120,160,255,.14);--line2:rgba(0,229,255,.35);
--txt:#d7e2f2;--dim:#7d8aa5;--acc:#00e5ff;--acc2:#ff2bd6;--ok:#39ff88;--warn:#ffb000;--r:14px;--mono:'JetBrains Mono',ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;
--sans:Inter,system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;--top:60px;--side:300px}
*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:80px}
body{margin:0;background:radial-gradient(1200px 600px at 80% -10%,rgba(255,43,214,.10),transparent 60%),radial-gradient(900px 600px at -10% 20%,rgba(0,229,255,.10),transparent 60%),var(--bg);color:var(--txt);font:15px/1.65 var(--sans);min-height:100vh;-webkit-font-smoothing:antialiased}
a{color:var(--acc);text-decoration:none}a:hover{text-decoration:underline}
::selection{background:rgba(0,229,255,.3)}
#bg{position:fixed;inset:0;width:100%;height:100%;z-index:-2;opacity:.35;pointer-events:none}
body:not(.page-home):not(.page-error) #bg{opacity:.12}
.grid-overlay{position:fixed;inset:0;z-index:-1;pointer-events:none;background-image:linear-gradient(rgba(0,229,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,255,.035) 1px,transparent 1px);background-size:44px 44px;mask-image:radial-gradient(ellipse at center,#000 30%,transparent 80%)}
.grid-overlay::after{content:"";position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(255,255,255,.015) 0 1px,transparent 1px 3px)}
/* top bar */
.top{position:sticky;top:0;z-index:40;height:var(--top);display:flex;align-items:center;gap:16px;padding:0 18px;background:rgba(5,7,13,.78);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-bottom:1px solid var(--line)}
.top::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:1px;background:linear-gradient(90deg,transparent,var(--acc),var(--acc2),transparent);opacity:.6}
.brand{display:flex;align-items:center;gap:10px;font:800 18px/1 var(--mono);letter-spacing:.08em;color:#fff;white-space:nowrap}
.brand:hover{text-decoration:none}.brand-mark{color:var(--acc);font-size:22px;text-shadow:0 0 12px var(--acc)}
.us{color:var(--acc2)}
.burger{display:none;background:none;border:0;width:36px;height:36px;padding:8px;cursor:pointer}
.burger span{display:block;height:2px;margin:4px 0;background:var(--txt);transition:.2s}
.search-btn{flex:1;max-width:460px;margin-left:auto;display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:10px;border:1px solid var(--line);background:rgba(255,255,255,.03);color:var(--dim);font:14px var(--sans);cursor:pointer;transition:.2s}
.search-btn:hover{border-color:var(--line2);color:var(--txt);box-shadow:0 0 0 3px rgba(0,229,255,.08)}
.search-btn .s-txt{flex:1;text-align:left}
kbd{font:11px var(--mono);padding:2px 6px;border-radius:6px;border:1px solid var(--line);background:rgba(255,255,255,.04);color:var(--dim)}
.top-links{display:flex;gap:4px}.top-links a{display:flex;align-items:center;gap:6px;color:var(--dim);font:600 13px var(--mono);padding:8px 10px;border-radius:8px}
.top-links a:hover{color:#fff;background:rgba(255,255,255,.05);text-decoration:none}
/* shell */
.shell{display:flex;min-height:calc(100vh - var(--top))}
.side{position:sticky;top:var(--top);height:calc(100vh - var(--top));width:var(--side);flex:none;overflow:auto;border-right:1px solid var(--line);background:rgba(6,9,16,.6);backdrop-filter:blur(8px);display:flex;flex-direction:column;scrollbar-width:thin;scrollbar-color:#1d2a44 transparent}
.side-head{padding:12px;position:sticky;top:0;background:#060910;z-index:2}
.side-head input,.dir-filter{width:100%;padding:8px 10px;border-radius:8px;border:1px solid var(--line);background:rgba(255,255,255,.03);color:var(--txt);font:13px var(--sans);outline:none}
.side-head input:focus,.dir-filter:focus{border-color:var(--line2)}
.tree{padding:0 8px 16px;font-size:13.5px;flex:1}
.t-dir summary{list-style:none;display:flex;align-items:center;gap:6px;padding:5px 6px;border-radius:7px;cursor:pointer;color:#eaf1ff;user-select:none}
.t-dir summary::-webkit-details-marker{display:none}
.t-dir summary:hover{background:rgba(255,255,255,.04)}
.t-dir summary a{color:inherit;font-weight:600;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.t-dir summary a.active{color:var(--c)}
.chev{width:0;height:0;border-left:5px solid var(--dim);border-top:4px solid transparent;border-bottom:4px solid transparent;transition:transform .15s;flex:none}
.t-dir[open]>summary .chev{transform:rotate(90deg);border-left-color:var(--c)}
.t-count{font:11px var(--mono);color:var(--dim);background:rgba(255,255,255,.04);border-radius:20px;padding:0 7px}
.t-kids{margin-left:11px;padding-left:8px;border-left:1px solid rgba(255,255,255,.06)}
.t-dir[open]>.t-kids{border-left-color:color-mix(in srgb,var(--c) 35%,transparent)}
.t-file{display:flex;align-items:center;gap:7px;padding:4px 6px;border-radius:7px;color:var(--dim)}
.t-file:hover{background:rgba(255,255,255,.04);color:#fff;text-decoration:none}
.t-file.active{background:linear-gradient(90deg,rgba(0,229,255,.16),transparent);color:#fff;box-shadow:inset 2px 0 0 var(--acc)}
.t-ico{font-size:13px;width:18px;text-align:center;flex:none}.t-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.side-foot{padding:10px 14px;border-top:1px solid var(--line);font:12px var(--mono);color:var(--dim)}
.main{flex:1;min-width:0;padding:28px clamp(16px,4vw,56px) 0;max-width:1400px}
.foot{display:flex;flex-wrap:wrap;gap:8px 24px;justify-content:space-between;margin-top:64px;padding:22px 0 30px;border-top:1px solid var(--line);color:var(--dim);font:12px var(--mono)}
.scrim{display:none}
/* glitch */
.glitch{position:relative;display:inline-block}
.glitch::before,.glitch::after{content:attr(data-text);position:absolute;left:0;top:0;width:100%;overflow:hidden;opacity:.8;pointer-events:none}
.glitch::before{color:var(--acc2);animation:gl1 3.2s infinite linear alternate-reverse;transform:translate(-2px,0)}
.glitch::after{color:var(--acc);animation:gl2 2.6s infinite linear alternate-reverse;transform:translate(2px,0)}
@keyframes gl1{0%,86%{clip-path:inset(100% 0 0 0)}88%{clip-path:inset(20% 0 55% 0)}92%{clip-path:inset(60% 0 10% 0)}96%{clip-path:inset(40% 0 40% 0)}100%{clip-path:inset(100% 0 0 0)}}
@keyframes gl2{0%,84%{clip-path:inset(100% 0 0 0)}87%{clip-path:inset(70% 0 5% 0)}91%{clip-path:inset(10% 0 75% 0)}95%{clip-path:inset(45% 0 30% 0)}100%{clip-path:inset(100% 0 0 0)}}
.brand .glitch::before,.brand .glitch::after{display:none}
.brand:hover .glitch::before,.brand:hover .glitch::after{display:block}
/* hero */
.hero{display:grid;grid-template-columns:1.1fr .9fr;gap:40px;align-items:center;padding:30px 0 50px}
.eyebrow{display:inline-flex;align-items:center;gap:8px;font:600 12px var(--mono);letter-spacing:.14em;color:var(--ok);padding:6px 12px;border:1px solid rgba(57,255,136,.25);border-radius:30px;background:rgba(57,255,136,.06)}
.dot{width:8px;height:8px;border-radius:50%;background:var(--ok);box-shadow:0 0 10px var(--ok);animation:pulse 1.6s infinite}
@keyframes pulse{50%{opacity:.3}}
.hero-title{font:800 clamp(42px,7vw,92px)/1 var(--mono);letter-spacing:.02em;margin:22px 0 14px;color:#fff;text-shadow:0 0 30px rgba(0,229,255,.25)}
.hero-sub{font-size:clamp(17px,2vw,21px);color:#aab6cc;margin:0 0 28px;max-width:560px}
.typed{color:var(--acc);font-family:var(--mono);border-right:2px solid var(--acc);padding-right:3px;white-space:nowrap}
.hero-cta{display:flex;flex-wrap:wrap;gap:12px}
.btn{display:inline-flex;align-items:center;gap:8px;padding:11px 18px;border-radius:10px;border:1px solid var(--line2);background:rgba(0,229,255,.06);color:#eafcff;font:600 14px var(--sans);cursor:pointer;transition:.2s}
.btn:hover{text-decoration:none;background:rgba(0,229,255,.14);box-shadow:0 0 24px rgba(0,229,255,.2)}
.btn.primary{background:linear-gradient(135deg,var(--acc),#3b8bff 60%,var(--acc2));border:0;color:#04121a}
.btn.primary:hover{filter:brightness(1.1);box-shadow:0 0 30px rgba(0,229,255,.4)}
.stats{display:flex;flex-wrap:wrap;gap:12px;margin-top:34px}
.stat{min-width:110px;padding:12px 16px;border:1px solid var(--line);border-radius:12px;background:var(--panel)}
.stat b{display:block;font:800 24px var(--mono);color:#fff}.stat span{font:12px var(--mono);color:var(--dim);text-transform:uppercase;letter-spacing:.1em}
.hero-r{position:relative}
.vault-dial{position:absolute;right:-40px;top:-70px;width:340px;height:340px;opacity:.55;pointer-events:none}
.vault-dial i{position:absolute;inset:0;border-radius:50%;border:1px dashed rgba(0,229,255,.35)}
.vault-dial .r1{animation:spin 40s linear infinite}
.vault-dial .r2{inset:40px;border:2px solid transparent;border-top-color:var(--acc2);border-bottom-color:var(--acc);animation:spin 12s linear infinite reverse}
.vault-dial .r3{inset:90px;border:1px dotted rgba(255,43,214,.5);animation:spin 20s linear infinite}
.vault-dial .core{position:absolute;inset:0;display:grid;place-items:center;font-size:44px;color:var(--acc);text-shadow:0 0 25px var(--acc)}
@keyframes spin{to{transform:rotate(360deg)}}
.term{position:relative;border:1px solid var(--line);border-radius:var(--r);background:rgba(4,8,14,.88);box-shadow:0 30px 80px rgba(0,0,0,.5),0 0 0 1px rgba(0,229,255,.05);overflow:hidden;font:13px/1.8 var(--mono)}
.term-bar{display:flex;align-items:center;gap:6px;padding:9px 12px;background:rgba(255,255,255,.03);border-bottom:1px solid var(--line);color:var(--dim);font-size:12px}
.term-bar i{width:11px;height:11px;border-radius:50%;background:#ff5f57}.term-bar i:nth-child(2){background:#febc2e}.term-bar i:nth-child(3){background:#28c840}.term-bar span{margin-left:8px}
.term-body{padding:14px 16px}.term .ln{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;opacity:0;animation:ln .3s forwards}
.term .ln:nth-child(n){animation-delay:calc(var(--d,0) * 1s)}
@keyframes ln{to{opacity:1}}
.pr{color:var(--ok)}.perm{color:#56607a}.cnt{color:var(--dim)}.sha{color:var(--warn)}.dim{color:var(--dim)}
.cursor{animation:pulse 1s steps(1) infinite;color:var(--acc)}
/* sections */
.h-sec{font:700 14px var(--mono);letter-spacing:.16em;text-transform:uppercase;color:#9fb0cc;margin:10px 0 18px}.h-sec span{color:var(--acc2)}
.cards{display:grid;gap:16px;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));margin-bottom:28px}
.card{position:relative;display:flex;flex-direction:column;gap:8px;padding:18px;border-radius:var(--r);border:1px solid var(--line);background:var(--panel);color:var(--txt);overflow:hidden;transition:transform .2s,border-color .2s,box-shadow .2s;isolation:isolate}
.card::before{content:"";position:absolute;inset:0;z-index:-1;background:radial-gradient(400px 160px at var(--mx,50%) var(--my,0%),color-mix(in srgb,var(--c,#00e5ff) 18%,transparent),transparent 70%);opacity:0;transition:opacity .25s}
.card:hover{text-decoration:none;transform:translateY(-3px);border-color:color-mix(in srgb,var(--c,#00e5ff) 55%,transparent);box-shadow:0 14px 40px rgba(0,0,0,.35),0 0 0 1px color-mix(in srgb,var(--c,#00e5ff) 25%,transparent)}
.card:hover::before{opacity:1}
.card::after{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--c,#00e5ff);opacity:.7}
.card-ico{font-size:24px}.card-ico.big{font-size:34px}.card-ico.sm{font-size:16px}
.card-top{display:flex;align-items:center;gap:8px}
.card-title{font-weight:700;color:#fff;font-size:16px;line-height:1.3}
.card-desc{color:#9aa7bf;font-size:13.5px;line-height:1.5;flex:1}
.card-meta{margin-top:auto;font:12px var(--mono);color:var(--dim);display:flex;align-items:center;gap:6px}.card-meta b{color:var(--c)}
.arrow{margin-left:auto;color:var(--c);transition:transform .2s}.card:hover .arrow{transform:translateX(4px)}
.sections{grid-template-columns:repeat(auto-fill,minmax(300px,1fr))}
.sec-card{padding:24px;min-height:220px;animation:rise .5s both;animation-delay:calc(var(--i) * 70ms)}
@keyframes rise{from{opacity:0;transform:translateY(14px)}}
.sec-card .card-title{font-size:21px}
.sec-num{position:absolute;right:18px;top:12px;font:800 44px var(--mono);color:color-mix(in srgb,var(--c) 22%,transparent)}
.chips{display:flex;flex-wrap:wrap;gap:6px}.chip{font:11px var(--mono);padding:2px 8px;border-radius:20px;border:1px solid color-mix(in srgb,var(--c) 35%,transparent);color:var(--c)}
.archive{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin:-8px 0 30px}.archive .label{font:12px var(--mono);color:var(--dim);margin-right:4px}
.pill{font:13px var(--mono);padding:6px 12px;border-radius:30px;border:1px solid var(--line);background:var(--panel);color:var(--txt)}.pill b{color:var(--c,var(--acc))}.pill:hover{text-decoration:none;border-color:var(--c,var(--acc))}
.panel{border:1px solid var(--line);border-radius:var(--r);background:var(--panel);padding:22px clamp(16px,3vw,30px);margin:24px 0}
.commits{list-style:none;margin:0;padding:0}.commits li a{display:flex;gap:14px;align-items:baseline;padding:9px 6px;border-bottom:1px dashed var(--line);color:var(--txt)}
.commits li:last-child a{border:0}.commits li a:hover{background:rgba(255,255,255,.03);text-decoration:none}
.commits code{color:var(--warn);font:13px var(--mono)}.commits .msg{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.commits .who{color:var(--dim);font:12px var(--mono);white-space:nowrap}
/* crumbs + heads */
.crumbs{font:13px var(--mono);color:var(--dim);margin-bottom:18px;display:flex;flex-wrap:wrap;gap:6px;align-items:center}.crumbs a{color:var(--dim)}.crumbs a:hover{color:var(--acc)}.crumbs .sep{opacity:.4}.crumbs .cur{color:var(--txt)}
.dir-head{display:flex;align-items:center;gap:18px;flex-wrap:wrap;padding:22px;border-radius:var(--r);border:1px solid var(--line);margin-bottom:24px;background:linear-gradient(120deg,color-mix(in srgb,var(--c) 14%,transparent),transparent 60%),var(--panel)}
.dir-head h1{margin:0;font:800 clamp(26px,3.4vw,38px)/1.1 var(--sans);color:#fff}.dir-head p{margin:4px 0 0;color:var(--dim);font:13px var(--mono)}
.dir-ico{font-size:40px;width:68px;height:68px;display:grid;place-items:center;border-radius:16px;background:rgba(0,0,0,.3);border:1px solid color-mix(in srgb,var(--c) 40%,transparent);box-shadow:0 0 30px color-mix(in srgb,var(--c) 20%,transparent);color:var(--c);font-weight:800}
.dir-head>div{flex:1;min-width:200px}.dir-filter{max-width:260px}
.empty-filter{color:var(--dim);font-family:var(--mono)}
.gallery{display:grid;gap:14px;grid-template-columns:repeat(auto-fill,minmax(200px,1fr))}
.g-item{border-radius:12px;overflow:hidden;border:1px solid var(--line);background:var(--panel);color:var(--dim);font:12px var(--mono);transition:.2s}
.g-item img{display:block;width:100%;height:150px;object-fit:cover;background:#0b111c}.g-item span{display:block;padding:8px 10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.g-item:hover{transform:translateY(-3px);border-color:var(--line2);text-decoration:none}
.shelf{display:grid;gap:26px 20px;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));margin-bottom:30px}
.book{display:flex;flex-direction:column;gap:6px;color:var(--txt);perspective:900px}.book:hover{text-decoration:none}
.cover{position:relative;aspect-ratio:3/4;border-radius:4px 10px 10px 4px;overflow:hidden;box-shadow:0 12px 30px rgba(0,0,0,.5),inset 4px 0 0 rgba(255,255,255,.08);transition:transform .35s;transform-origin:left center}
.book:hover .cover{transform:rotateY(-14deg) translateX(4px);box-shadow:16px 18px 40px rgba(0,0,0,.6)}
.cover.img img{width:100%;height:100%;object-fit:cover;display:block}
.cover.gen{display:flex;flex-direction:column;padding:14px 12px;background:linear-gradient(160deg,hsl(var(--h),70%,22%),hsl(calc(var(--h) + 60),70%,10%));border:1px solid hsla(var(--h),90%,60%,.35)}
.cover.gen::before{content:"";position:absolute;left:8px;top:0;bottom:0;width:2px;background:hsla(var(--h),90%,70%,.4)}
.cv-top{font:700 10px var(--mono);letter-spacing:.2em;color:hsl(var(--h),90%,75%)}
.cv-title{font:800 15px/1.25 var(--sans);color:#fff;margin-top:10px;display:-webkit-box;-webkit-line-clamp:6;-webkit-box-orient:vertical;overflow:hidden}
.cv-glyph{margin-top:auto;font-size:26px;opacity:.8}
.book-title{font-weight:600;font-size:13.5px;line-height:1.35;color:#eaf1ff}.book-meta{font:11px var(--mono);color:var(--dim)}
/* file page */
.file-head{margin-bottom:22px}.file-head h1{font:800 clamp(28px,4vw,44px)/1.15 var(--sans);margin:0 0 14px;color:#fff;letter-spacing:-.01em}.fh-ico{margin-right:10px}
.doc-meta{display:flex;flex-wrap:wrap;gap:8px 14px;align-items:center;font:12.5px var(--mono);color:var(--dim);padding-bottom:16px;border-bottom:1px solid var(--line)}
.doc-meta .grow{flex:1}.doc-meta a{color:var(--dim)}.doc-meta a:hover{color:var(--acc)}
.badge{padding:3px 10px;border-radius:20px;border:1px solid color-mix(in srgb,var(--c) 45%,transparent);color:var(--c);background:color-mix(in srgb,var(--c) 10%,transparent)}
.copy-link{background:none;border:1px solid var(--line);color:var(--dim);border-radius:6px;padding:3px 9px;font:12px var(--mono);cursor:pointer}.copy-link:hover{color:var(--acc);border-color:var(--line2)}
.doc-wrap{display:grid;grid-template-columns:minmax(0,1fr) 240px;gap:40px;align-items:start}
.doc-main{min-width:0}
.toc{position:sticky;top:calc(var(--top) + 20px);max-height:calc(100vh - var(--top) - 40px);overflow:auto;font-size:13px;border-left:1px solid var(--line);padding-left:16px;scrollbar-width:thin}
.toc-h{font:700 11px var(--mono);letter-spacing:.16em;text-transform:uppercase;color:var(--dim);margin-bottom:10px}
.toc a{display:block;color:var(--dim);padding:3px 0;line-height:1.4;border-left:2px solid transparent;margin-left:-18px;padding-left:16px}
.toc a:hover{color:#fff;text-decoration:none}.toc a.on{color:var(--acc);border-left-color:var(--acc)}
.toc a.l3{padding-left:28px}.toc a.l4{padding-left:40px;font-size:12px}
.progress{height:3px;background:var(--line);border-radius:3px;margin-top:14px;overflow:hidden}.progress i{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--acc),var(--acc2))}
/* markdown */
.md{font-size:16px;line-height:1.75;color:#d3dced;overflow-wrap:break-word}
.md-loading{font:13px var(--mono);color:var(--acc);padding:20px 0}.dots{animation:pulse 1s infinite}
.md-fallback{white-space:pre-wrap}
.md h1,.md h2,.md h3,.md h4,.md h5{color:#fff;line-height:1.3;margin:1.8em 0 .6em;position:relative;scroll-margin-top:80px}
.md>:first-child{margin-top:.4em}
.md h1{font-size:1.9em;padding-bottom:.3em;border-bottom:1px solid var(--line)}
.md h2{font-size:1.5em;padding-bottom:.25em;border-bottom:1px solid var(--line)}
.md h3{font-size:1.22em;color:#e8f4ff}.md h4{font-size:1.05em;color:var(--acc)}
.md .anchor{position:absolute;left:-1.1em;opacity:0;color:var(--dim);font-weight:400}.md h1:hover .anchor,.md h2:hover .anchor,.md h3:hover .anchor,.md h4:hover .anchor{opacity:1}
.md a{color:var(--acc);text-decoration:underline;text-decoration-color:rgba(0,229,255,.35);text-underline-offset:3px}.md a:hover{text-decoration-color:var(--acc)}
.md a.ext::after{content:"↗";font-size:.75em;margin-left:2px;opacity:.6}
.md a.internal{color:#c792ff;text-decoration-color:rgba(199,146,255,.4)}
.md a.broken{color:var(--dim);text-decoration:line-through dotted}
.md a.tag{display:inline-block;text-decoration:none;font:600 12px var(--mono);padding:1px 9px;border-radius:20px;background:rgba(255,43,214,.1);border:1px solid rgba(255,43,214,.3);color:#ff8ae6;margin:0 2px}
.md a.tag:hover{background:rgba(255,43,214,.2)}
.md img{max-width:100%;height:auto;border-radius:10px;border:1px solid var(--line);background:#fff1;cursor:zoom-in}
.md a img{cursor:pointer}
.md hr{border:0;height:1px;background:linear-gradient(90deg,transparent,var(--line2),transparent);margin:2em 0}
.md blockquote{margin:1.2em 0;padding:.6em 1.1em;border-left:3px solid var(--acc2);background:rgba(255,43,214,.05);border-radius:0 10px 10px 0;color:#c4cde0}
.md code{font:.88em var(--mono);background:rgba(0,229,255,.08);border:1px solid rgba(0,229,255,.15);color:#9ff3ff;padding:.12em .4em;border-radius:6px}
.md pre{position:relative;background:#070b13!important;border:1px solid var(--line);border-radius:12px;padding:0;overflow:hidden;margin:1.2em 0}
.md pre code,.code-view code{display:block;padding:16px 18px;overflow:auto;background:none!important;border:0;color:#cfd8ea;font:13.5px/1.6 var(--mono)}
.md pre .lang{position:absolute;top:0;right:0;font:10px var(--mono);letter-spacing:.1em;text-transform:uppercase;color:var(--dim);padding:4px 10px;background:rgba(255,255,255,.04);border-bottom-left-radius:8px}
.md pre .copy{position:absolute;top:6px;right:6px;opacity:0;transition:.2s;font:11px var(--mono);padding:4px 10px;border-radius:6px;border:1px solid var(--line2);background:#0c1424;color:var(--acc);cursor:pointer}
.md pre:hover .copy{opacity:1}.md pre:hover .lang{opacity:0}
.table-wrap{overflow:auto;margin:1.2em 0;border:1px solid var(--line);border-radius:12px}
.md table{border-collapse:collapse;width:100%;font-size:14px}
.md th{background:rgba(0,229,255,.07);color:#fff;text-align:left;font-weight:700}
.md th,.md td{padding:9px 14px;border-bottom:1px solid var(--line);vertical-align:top}
.md tr:last-child td{border-bottom:0}.md tbody tr:hover{background:rgba(255,255,255,.025)}
.md ul,.md ol{padding-left:1.6em}.md li{margin:.25em 0}.md li::marker{color:var(--acc)}
.md mark{background:rgba(255,176,0,.25);color:#ffe2a8;padding:0 3px;border-radius:3px}
.md input[type=checkbox]{accent-color:var(--acc);margin-right:6px}
.callout{border:1px solid color-mix(in srgb,var(--cc) 40%,transparent);background:color-mix(in srgb,var(--cc) 8%,transparent);border-radius:12px;margin:1.2em 0;padding:0}
.callout>summary,.callout>.c-title{list-style:none;display:flex;gap:8px;align-items:center;font-weight:700;color:var(--cc);padding:10px 16px;cursor:default}
.callout>summary{cursor:pointer}.callout>summary::-webkit-details-marker{display:none}
.callout>summary::after{content:"▸";margin-left:auto;transition:.2s}.callout[open]>summary::after{transform:rotate(90deg)}
.callout>.c-body{padding:0 16px 8px}
.backlinks{margin-top:40px;padding:18px 20px;border:1px dashed var(--line2);border-radius:var(--r)}
.backlinks h3{margin:0 0 10px;font:700 12px var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--dim)}
.backlinks a{display:inline-block;margin:4px 8px 4px 0;padding:4px 12px;border-radius:20px;background:rgba(199,146,255,.08);border:1px solid rgba(199,146,255,.25);color:#d8b4ff;font-size:13.5px}
.pager{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:40px}
.pager a{display:flex;flex-direction:column;padding:14px 18px;border:1px solid var(--line);border-radius:12px;background:var(--panel);color:#fff}
.pager a:hover{border-color:var(--line2);text-decoration:none}.pager small{color:var(--dim);font:12px var(--mono)}.pager .next{text-align:right}
.viewer{border:1px solid var(--line);border-radius:var(--r);overflow:hidden;background:#0b111c}
.viewer.pdf iframe,.viewer.html iframe{display:block;width:100%;height:calc(100vh - 220px);min-height:520px;border:0;background:#fff}
.viewer.image{display:grid;place-items:center;padding:20px;background:repeating-conic-gradient(#0d1420 0 25%,#0a1019 0 50%) 0 0/24px 24px}
.viewer.image img,.viewer video{max-width:100%;max-height:78vh;border-radius:8px;cursor:zoom-in}
.viewer.binary{padding:50px;text-align:center}.big-ico{font-size:60px}
.viewer-note{font:12.5px var(--mono);color:var(--dim)}
.code-view{margin:0;border:1px solid var(--line);border-radius:var(--r);background:#070b13;max-height:80vh;overflow:auto}
.tabs{display:flex;gap:6px;margin-bottom:12px}.tabs button{font:600 13px var(--mono);padding:7px 14px;border-radius:8px;border:1px solid var(--line);background:transparent;color:var(--dim);cursor:pointer}.tabs button.on{color:var(--acc);border-color:var(--line2);background:rgba(0,229,255,.08)}
/* palette */
.palette{position:fixed;inset:0;z-index:100;background:rgba(2,4,9,.7);backdrop-filter:blur(6px);display:flex;justify-content:center;align-items:flex-start;padding-top:12vh}
.palette[hidden]{display:none}
.pal-box{width:min(720px,94vw);border:1px solid var(--line2);border-radius:16px;background:rgba(9,14,25,.97);box-shadow:0 40px 120px rgba(0,0,0,.7),0 0 60px rgba(0,229,255,.12);overflow:hidden;animation:pop .18s ease-out}
@keyframes pop{from{transform:scale(.97);opacity:0}}
.pal-in{display:flex;align-items:center;gap:12px;padding:14px 18px;border-bottom:1px solid var(--line);font-size:20px;color:var(--acc)}
.pal-in input{flex:1;background:none;border:0;outline:none;color:#fff;font:17px var(--sans)}
.pal-status{font:11px var(--mono);color:var(--dim);padding:6px 18px;border-bottom:1px solid var(--line)}
.pal-list{list-style:none;margin:0;padding:6px;max-height:58vh;overflow:auto}
.pal-list li a{display:flex;flex-direction:column;gap:2px;padding:9px 12px;border-radius:10px;color:var(--txt)}
.pal-list li a:hover,.pal-list li.sel a{background:linear-gradient(90deg,rgba(0,229,255,.14),rgba(255,43,214,.05));text-decoration:none}
.pal-list .pt{display:flex;gap:8px;align-items:center;font-weight:600;color:#fff}.pal-list .pp{font:11.5px var(--mono);color:var(--dim)}
.pal-list .ps{font-size:12.5px;color:#9aa7bf;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pal-list em{font-style:normal;color:var(--acc);background:rgba(0,229,255,.12);border-radius:3px}
.pal-list .grp{font:700 10.5px var(--mono);letter-spacing:.15em;color:var(--dim);padding:10px 12px 4px;text-transform:uppercase}
.lightbox{position:fixed;inset:0;z-index:120;background:rgba(0,0,0,.88);display:grid;place-items:center;cursor:zoom-out;padding:20px}
.lightbox[hidden]{display:none}.lightbox img{max-width:96vw;max-height:94vh;border-radius:8px;box-shadow:0 0 80px rgba(0,229,255,.2)}
/* map */
.map-tools{display:flex;flex-wrap:wrap;gap:18px;align-items:center;font:13px var(--mono);color:var(--dim);margin-bottom:12px}
.map-tools input{accent-color:var(--acc)}.map-legend{display:flex;flex-wrap:wrap;gap:12px}.map-legend span{display:flex;align-items:center;gap:6px}.map-legend i{width:10px;height:10px;border-radius:50%}
.map-wrap{position:relative;height:calc(100vh - 260px);min-height:520px;border:1px solid var(--line);border-radius:var(--r);overflow:hidden;background:radial-gradient(circle at center,rgba(0,229,255,.06),transparent 70%),#04070d}
#map{width:100%;height:100%;display:block;cursor:grab}#map.drag{cursor:grabbing}
.map-tip{position:absolute;pointer-events:none;padding:6px 10px;border-radius:8px;background:rgba(9,14,25,.95);border:1px solid var(--line2);font:12px var(--mono);color:#fff;white-space:nowrap}
.map-status{position:absolute;left:12px;bottom:10px;font:11px var(--mono);color:var(--dim)}
/* tags */
.tag-cloud{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:24px}
.tag-cloud button{font:600 13px var(--mono);padding:6px 14px;border-radius:30px;border:1px solid rgba(255,43,214,.3);background:rgba(255,43,214,.07);color:#ff8ae6;cursor:pointer;transition:.15s}
.tag-cloud button b{color:var(--dim);font-weight:400;margin-left:6px}.tag-cloud button:hover,.tag-cloud button.on{background:rgba(255,43,214,.22);color:#fff;box-shadow:0 0 18px rgba(255,43,214,.25)}
/* error */
.err{text-align:center;padding:60px 0}.err-code{font:800 120px/1 var(--mono);color:var(--acc)}.err h1{color:#fff}.err p{color:var(--dim);max-width:560px;margin:0 auto 24px}.err .hero-cta{justify-content:center}
/* responsive */
@media (max-width:1180px){.doc-wrap{grid-template-columns:1fr}.toc{display:none}}
@media (max-width:980px){.hero{grid-template-columns:1fr}.vault-dial{display:none}}
@media (max-width:860px){
 .burger{display:block}.side{position:fixed;left:0;top:var(--top);z-index:35;transform:translateX(-102%);transition:transform .25s;box-shadow:20px 0 60px rgba(0,0,0,.5);background:rgba(6,9,16,.98)}
 body.nav-open .side{transform:none}body.nav-open .scrim{display:block;position:fixed;inset:var(--top) 0 0 0;z-index:30;background:rgba(0,0,0,.5)}
 .top-links span,.search-btn kbd{display:none}.search-btn .s-txt{display:none}.search-btn{flex:none;margin-left:auto}
 .brand{font-size:15px}.main{padding-top:20px}
}
@media (max-width:520px){.stat{flex:1 1 40%;min-width:0}.top-links a:nth-child(3){display:none}.pager{grid-template-columns:1fr}.dir-filter{max-width:none}.commits .who{display:none}}
@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}#bg{display:none}}
`;

/* ------------------------------------------------------------------ */
/* Browser app (serialised with Function#toString and served as JS)   */
/* ------------------------------------------------------------------ */
function clientApp() {
  var V = window.__VAULT__ || { entries: [] };
  var R = makeResolver(V.entries, V.owner, V.repo);
  var SHA10 = (V.sha || '').slice(0, 10);
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function hrefFor(kind, p) { return '/' + kind + (p ? '/' + encPath(p) : ''); }
  function rawFor(p) { return '/raw/' + encPath(p) + '?v=' + SHA10; }
  function escH(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function slugify(s) {
    return String(s).toLowerCase().trim().replace(/<[^>]+>/g, '').replace(/[^\p{L}\p{N}\s_-]/gu, '').trim().replace(/\s+/g, '-');
  }
  function dirOf(p) { return p.indexOf('/') >= 0 ? p.slice(0, p.lastIndexOf('/')) : ''; }

  /* ---------- background: digital rain ---------- */
  (function bg() {
    var c = $('#bg');
    if (!c || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var ctx = c.getContext('2d'), w, h, cols, drops, fs = 15;
    var chars = '01アイウエオカキクケコサシスセソ<>/{}[]#$%&*+=ABCDEF0123456789';
    function size() {
      w = c.width = window.innerWidth; h = c.height = window.innerHeight;
      cols = Math.ceil(w / fs); drops = [];
      for (var i = 0; i < cols; i++) drops[i] = Math.random() * -h / fs;
    }
    size(); window.addEventListener('resize', size);
    var last = 0;
    function frame(t) {
      requestAnimationFrame(frame);
      if (document.hidden || t - last < 55) return;
      last = t;
      ctx.fillStyle = 'rgba(5,7,13,0.12)'; ctx.fillRect(0, 0, w, h);
      ctx.font = fs + 'px JetBrains Mono, monospace';
      for (var i = 0; i < cols; i++) {
        if (i % 2) continue;
        var y = drops[i] * fs;
        ctx.fillStyle = Math.random() > 0.975 ? '#ff2bd6' : (Math.random() > 0.5 ? '#00e5ff' : '#1b6f8a');
        ctx.fillText(chars.charAt(Math.floor(Math.random() * chars.length)), i * fs, y);
        if (y > h && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 0.6;
      }
    }
    requestAnimationFrame(frame);
  })();

  /* ---------- nav / sidebar ---------- */
  var burger = $('#burger');
  if (burger) burger.addEventListener('click', function () { document.body.classList.toggle('nav-open'); });
  var scrim = $('#scrim');
  if (scrim) scrim.addEventListener('click', function () { document.body.classList.remove('nav-open'); });
  var activeLeaf = $('.tree .active');
  var sideEl = $('#side');
  if (activeLeaf && sideEl) {
    var ar = activeLeaf.getBoundingClientRect(), sr = sideEl.getBoundingClientRect();
    if (ar.bottom > sr.bottom - 40 || ar.top < sr.top + 60) sideEl.scrollTop += ar.top - sr.top - sr.height / 2;
  }
  var tf = $('#treeFilter');
  if (tf) tf.addEventListener('input', function () {
    var q = tf.value.trim().toLowerCase();
    $$('.tree .t-file').forEach(function (a) { a.style.display = !q || a.title.toLowerCase().indexOf(q) >= 0 ? '' : 'none'; });
    $$('.tree details').forEach(function (d) {
      if (!q) { d.style.display = ''; return; }
      var any = $$('.t-file', d).some(function (a) { return a.style.display !== 'none'; }) || d.querySelector('summary a').textContent.toLowerCase().indexOf(q) >= 0;
      d.style.display = any ? '' : 'none';
      if (any) d.open = true;
    });
  });
  var df = $('#dirFilter');
  if (df) df.addEventListener('input', function () {
    var q = df.value.trim().toLowerCase(), shown = 0;
    $$('[data-filter]').forEach(function (el) { var ok = !q || el.getAttribute('data-filter').indexOf(q) >= 0; el.style.display = ok ? '' : 'none'; if (ok) shown++; });
    var ef = $('#emptyFilter'); if (ef) ef.hidden = shown > 0;
  });
  document.addEventListener('pointermove', function (e) {
    var card = e.target.closest && e.target.closest('.card');
    if (!card) return;
    var r = card.getBoundingClientRect();
    card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    card.style.setProperty('--my', (e.clientY - r.top) + 'px');
  });
  var mdFiles = V.entries.filter(function (e) { return e[1] && /\.md$/i.test(e[0]) && !/(^|\/)readme\.md$/i.test(e[0]); }).map(function (e) { return e[0]; });
  var rnd = $('#randomBtn');
  if (rnd) rnd.addEventListener('click', function (e) {
    e.preventDefault();
    if (mdFiles.length) location.href = hrefFor('blob', mdFiles[Math.floor(Math.random() * mdFiles.length)]);
  });
  var cl = $('#copyLink');
  if (cl) cl.addEventListener('click', function () {
    navigator.clipboard && navigator.clipboard.writeText(location.href.split('#')[0]).then(function () { cl.textContent = 'Copied ✓'; setTimeout(function () { cl.textContent = 'Copy link'; }, 1500); });
  });
  $$('[data-tabs]').forEach(function (tabs) {
    var panels = tabs.nextElementSibling;
    tabs.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      $$('button', tabs).forEach(function (x) { x.classList.toggle('on', x === b); });
      $$('[data-panel]', panels).forEach(function (p) { p.hidden = p.getAttribute('data-panel') !== b.getAttribute('data-tab'); });
    });
  });

  /* ---------- hero bits ---------- */
  var typed = $('.typed');
  if (typed) {
    var words = typed.getAttribute('data-words').split('|'), wi = 0, ci = words[0].length, del = true;
    setInterval(function () {
      var wd = words[wi];
      if (del) { ci--; if (ci <= 0) { del = false; wi = (wi + 1) % words.length; } }
      else { ci++; if (ci >= words[wi].length) { del = true; ci = words[wi].length + 12; } }
      typed.textContent = words[wi].slice(0, Math.max(0, Math.min(ci, words[wi].length))) || '​';
    }, 85);
  }
  $$('.term .ln').forEach(function (l, i) { l.style.setProperty('--d', (0.15 + i * 0.18).toFixed(2)); });
  $$('.stat b[data-count]').forEach(function (b) {
    var n = parseInt(b.getAttribute('data-count'), 10), t0 = performance.now();
    function step(t) { var k = Math.min(1, (t - t0) / 900); b.textContent = Math.round(n * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); }
    requestAnimationFrame(step);
  });

  /* ---------- content index (search, tags, backlinks, map links) ---------- */
  var indexPromise = null;
  function loadIndex(onProgress) {
    if (indexPromise) return indexPromise;
    var key = 'cv-index:' + V.owner + '/' + V.repo + ':' + V.sha;
    try {
      var cached = localStorage.getItem(key);
      if (cached) { indexPromise = Promise.resolve(JSON.parse(cached)); return indexPromise; }
    } catch (e) { /* ignore */ }
    indexPromise = fetch('/api/content?page=0&v=' + SHA10).then(function (r) { return r.json(); }).then(function (first) {
      var all = first.files || {}, done = 1;
      if (onProgress) onProgress(done, first.pages);
      var rest = [];
      for (var i = 1; i < first.pages; i++) rest.push(fetch('/api/content?page=' + i + '&v=' + SHA10).then(function (r) { return r.json(); }).then(function (d) {
        done++; if (onProgress) onProgress(done, first.pages);
        for (var k in d.files) all[k] = d.files[k];
      }));
      return Promise.all(rest).then(function () {
        try {
          for (var j = 0; j < localStorage.length; j++) { var kk = localStorage.key(j); if (kk && kk.indexOf('cv-index:') === 0 && kk !== key) localStorage.removeItem(kk); }
          localStorage.setItem(key, JSON.stringify(all));
        } catch (e) { /* quota */ }
        return all;
      });
    }).catch(function (e) { indexPromise = null; throw e; });
    return indexPromise;
  }
  function stripCode(t) { return t.replace(/```[\s\S]*?```|~~~[\s\S]*?~~~/g, ' ').replace(/`[^`\n]*`/g, ' '); }
  function tagsOf(t) {
    var out = {}, m, re = /(^|\s)#([A-Za-z][\w\/-]*)/g, s = stripCode(t);
    while ((m = re.exec(s))) out[m[2].toLowerCase()] = m[2];
    return out;
  }
  function linksOf(path, t) {
    var out = {}, m, s = stripCode(t), dir = dirOf(path);
    var wl = /\[\[([^\]]+?)\]\]/g;
    while ((m = wl.exec(s))) { var tgt = m[1].split(/\\?\|/)[0].split('#')[0]; var p = R.find(tgt, dir); if (p && p !== path) out[p] = 1; }
    var ml = /\]\(\s*<?([^)\s>]+)>?/g;
    while ((m = ml.exec(s))) {
      var u = m[1], q = null;
      if (/^https?:/i.test(u)) { var g = R.fromUrl(u); if (g) q = R.has(g.path) ? g.path : R.find(g.path, dir); }
      else if (!/^[a-z]+:/i.test(u) && u.charAt(0) !== '#') q = R.find(u.split('#')[0], dir);
      if (q && q !== path && R.isFile(q)) out[q] = 1;
    }
    return Object.keys(out);
  }

  /* ---------- markdown rendering ---------- */
  function preprocess(text, path) {
    var dir = dirOf(path);
    text = text.replace(/^﻿?---\r?\n[\s\S]*?\r?\n---\r?\n/, '');
    var parts = text.split(/(```[\s\S]*?```|~~~[\s\S]*?~~~|`[^`\n]+`)/g);
    for (var i = 0; i < parts.length; i += 2) {
      var s = parts[i];
      s = s.replace(/!\[\[([^\]]+?)\]\]/g, function (_, inner) {
        var bits = inner.split(/\\?\|/), target = bits[0].split('#')[0], p = R.find(target, dir);
        if (!p) return '<span class="broken">' + escH(inner) + '</span>';
        var kind = fileKind(p);
        if (kind === 'image') {
          var w = bits[1] && /^\d+(x\d+)?$/.test(bits[1].trim()) ? ' width="' + bits[1].split('x')[0] + '"' : '';
          return '<img src="' + rawFor(p) + '" alt="' + escH(displayName(p)) + '"' + w + '>';
        }
        return '<a href="' + hrefFor('blob', p) + '" class="internal">' + escH(displayName(p)) + '</a>';
      });
      s = s.replace(/\[\[([^\]]+?)\]\]/g, function (_, inner) {
        var bits = inner.split(/\\?\|/), tp = bits[0].split('#'), p = R.find(tp[0] || path, dir);
        var label = bits[1] || (tp[1] && !tp[0] ? tp[1] : tp[0] + (tp[1] ? ' › ' + tp[1] : ''));
        if (!tp[0] && tp[1]) return '<a href="#' + slugify(tp[1]) + '">' + escH(label) + '</a>';
        if (!p) return '<a class="broken" title="Not in the vault yet">' + escH(label) + '</a>';
        return '<a href="' + hrefFor(R.isFile(p) ? 'blob' : 'tree', p) + (tp[1] ? '#' + slugify(tp[1]) : '') + '" class="internal">' + escH(label) + '</a>';
      });
      s = s.replace(/==([^=\n]+)==/g, '<mark>$1</mark>');
      s = s.replace(/(^|\s)#([A-Za-z][\w\/-]*)/g, function (_, pre, tag) {
        return pre + '<a class="tag" href="/tags#' + encodeURIComponent(tag.toLowerCase()) + '">#' + tag + '</a>';
      });
      parts[i] = s;
    }
    return parts.join('');
  }

  function rewriteUrl(u, path, forImage) {
    if (!u) return null;
    if (u.charAt(0) === '#' || /^(mailto|tel|data):/i.test(u)) return null;
    var dir = dirOf(path);
    if (/^https?:\/\//i.test(u)) {
      var g = R.fromUrl(u);
      if (!g) return { ext: true };
      var p = R.has(g.path) ? g.path : R.find(g.path, dir);
      if (p == null) return { ext: true };
      if (forImage || g.kind === 'raw') return { href: R.isFile(p) ? rawFor(p) : hrefFor('tree', p) };
      return { href: (p === '' ? '/' : hrefFor(R.isFile(p) ? 'blob' : 'tree', p)) + (g.hash || ''), internal: true };
    }
    if (/^[a-z][a-z0-9+.-]*:/i.test(u) || u.indexOf('/raw/') === 0 || u.indexOf('/blob/') === 0 || u.indexOf('/tree/') === 0 || u.indexOf('/tags') === 0) return null;
    var hash = '', hi = u.indexOf('#');
    if (hi >= 0) { hash = u.slice(hi); u = u.slice(0, hi); }
    u = u.split('?')[0];
    var q = R.find(u, dir);
    if (q == null) return forImage ? null : { broken: true };
    if (forImage) return { href: rawFor(q) };
    return { href: hrefFor(R.isFile(q) ? 'blob' : 'tree', q) + hash, internal: true };
  }

  var CALLOUT = { note: '#3b8bff', info: '#00e5ff', tip: '#39ff88', hint: '#39ff88', success: '#39ff88', check: '#39ff88', done: '#39ff88', question: '#ffd23b', help: '#ffd23b', faq: '#ffd23b', warning: '#ffb000', caution: '#ffb000', attention: '#ffb000', important: '#b26bff', danger: '#ff3b5c', error: '#ff3b5c', bug: '#ff3b5c', failure: '#ff3b5c', example: '#b26bff', quote: '#8b9bb4', abstract: '#00e5ff', summary: '#00e5ff', todo: '#3b8bff' };
  var CICON = { note: '✎', info: 'ℹ', tip: '💡', warning: '⚠', caution: '⚠', danger: '⛔', important: '❗', question: '?', example: '◆', quote: '❝', success: '✔', bug: '🐞', todo: '☐', abstract: '≡', summary: '≡' };

  function renderMd(el) {
    var src = $('script.md-src', el);
    if (!src || !window.marked) return false;
    var path = el.getAttribute('data-md-path') || '';
    var text = JSON.parse(src.textContent);
    var htmlOut = window.marked.parse(preprocess(text, path), { gfm: true, breaks: false });
    if (window.DOMPurify) htmlOut = window.DOMPurify.sanitize(htmlOut, { ADD_ATTR: ['target'] });
    var box = document.createElement('div');
    box.className = 'md-body';
    box.innerHTML = htmlOut;
    // links
    $$('a[href]', box).forEach(function (a) {
      if (a.classList.contains('tag') || a.classList.contains('internal')) return;
      var r = rewriteUrl(a.getAttribute('href'), path, false);
      if (!r) return;
      if (r.ext) { a.target = '_blank'; a.rel = 'noopener noreferrer'; if (!a.querySelector('img')) a.classList.add('ext'); }
      else if (r.broken) { a.classList.add('broken'); a.title = 'Not found in the vault'; }
      else { a.setAttribute('href', r.href); a.classList.add('internal'); }
    });
    $$('img[src]', box).forEach(function (img) {
      var r = rewriteUrl(img.getAttribute('src'), path, true);
      if (r && r.href) img.setAttribute('src', r.href);
      img.loading = 'lazy';
      if (!img.closest('a')) img.classList.add('zoomable');
    });
    // callouts
    $$('blockquote', box).forEach(function (bq) {
      var p = bq.firstElementChild;
      if (!p || p.tagName !== 'P') return;
      var m = /^\s*\[!([\w-]+)\]([+-]?)\s*([^\n]*)/.exec(p.innerHTML);
      if (!m) return;
      var type = m[1].toLowerCase(), fold = m[2], title = m[3] || (type.charAt(0).toUpperCase() + type.slice(1));
      p.innerHTML = p.innerHTML.slice(m[0].length).replace(/^\s*<br>\s*/, '');
      if (!p.innerHTML.trim()) p.remove();
      var wrap = document.createElement(fold ? 'details' : 'div');
      wrap.className = 'callout';
      wrap.style.setProperty('--cc', CALLOUT[type] || '#00e5ff');
      if (fold === '+') wrap.open = true;
      var head = document.createElement(fold ? 'summary' : 'div');
      if (!fold) head.className = 'c-title';
      head.innerHTML = '<span>' + (CICON[type] || '◈') + '</span> ' + title;
      var body = document.createElement('div');
      body.className = 'c-body';
      while (bq.firstChild) body.appendChild(bq.firstChild);
      wrap.appendChild(head); wrap.appendChild(body);
      bq.replaceWith(wrap);
    });
    // tables
    $$('table', box).forEach(function (t) { var w = document.createElement('div'); w.className = 'table-wrap'; t.parentNode.insertBefore(w, t); w.appendChild(t); });
    // code
    $$('pre > code', box).forEach(function (code) {
      var pre = code.parentNode;
      var lang = (/language-([\w+-]+)/.exec(code.className) || [])[1] || '';
      if (window.hljs) {
        try {
          if (lang && window.hljs.getLanguage(lang)) code.innerHTML = window.hljs.highlight(code.textContent, { language: lang }).value;
          else if (code.textContent.length < 20000) code.innerHTML = window.hljs.highlightAuto(code.textContent).value;
        } catch (e) { /* noop */ }
      }
      if (lang) { var l = document.createElement('span'); l.className = 'lang'; l.textContent = lang; pre.appendChild(l); }
      var b = document.createElement('button'); b.className = 'copy'; b.textContent = 'copy';
      b.addEventListener('click', function () { navigator.clipboard && navigator.clipboard.writeText(code.textContent).then(function () { b.textContent = 'copied ✓'; setTimeout(function () { b.textContent = 'copy'; }, 1400); }); });
      pre.appendChild(b);
    });
    // headings
    var seen = {};
    $$('h1,h2,h3,h4,h5,h6', box).forEach(function (h) {
      var s = slugify(h.textContent) || 'section';
      if (seen[s] != null) { seen[s]++; s += '-' + seen[s]; } else seen[s] = 0;
      h.id = s;
      var a = document.createElement('a'); a.className = 'anchor'; a.href = '#' + s; a.textContent = '#'; a.setAttribute('aria-hidden', 'true');
      h.insertBefore(a, h.firstChild);
    });
    // drop a leading H1 that just repeats the page title
    var first = box.firstElementChild;
    if (el.classList.contains('doc') && first && first.tagName === 'H1') {
      var nrm = function (s) { return String(s).toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ''); };
      var a1 = nrm(first.textContent.replace(/^#/, '')), b1 = nrm(displayName(path));
      if (a1 && b1 && (a1.indexOf(b1) >= 0 || b1.indexOf(a1) >= 0)) first.remove();
    }
    el.innerHTML = '';
    el.appendChild(box);
    return true;
  }

  function buildToc(el) {
    var toc = $('#toc'); if (!toc) return;
    var hs = $$('h2,h3,h4', el);
    if (hs.length < 2) return;
    var nav = $('nav', toc);
    hs.forEach(function (h) {
      var a = document.createElement('a');
      a.href = '#' + h.id; a.className = 'l' + h.tagName.charAt(1);
      a.textContent = h.textContent.replace(/^#/, '').trim();
      nav.appendChild(a);
    });
    toc.hidden = false;
    var links = $$('a', nav), bar = $('#readProgress');
    function onScroll() {
      var cur = null;
      for (var i = 0; i < hs.length; i++) if (hs[i].getBoundingClientRect().top < 120) cur = i;
      links.forEach(function (l, i) { l.classList.toggle('on', i === cur); });
      var r = el.getBoundingClientRect(), total = r.height - window.innerHeight;
      if (bar) bar.style.width = Math.max(0, Math.min(100, (-r.top / Math.max(1, total)) * 100)) + '%';
    }
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  }

  function backlinks(path) {
    var box = $('#backlinks'); if (!box) return;
    loadIndex().then(function (idx) {
      var found = [];
      for (var p in idx) if (p !== path && linksOf(p, idx[p]).indexOf(path) >= 0) found.push(p);
      if (!found.length) return;
      box.innerHTML = '<h3>↩ Linked from ' + found.length + ' note' + (found.length > 1 ? 's' : '') + '</h3>' +
        found.map(function (p) { return '<a href="' + hrefFor('blob', p) + '">' + escH(displayName(p)) + '</a>'; }).join('');
      box.hidden = false;
    }).catch(function () { /* optional */ });
  }

  function renderAll() {
    var els = $$('article.md');
    if (!els.length) return;
    if (!window.marked) { setTimeout(renderAll, 60); return; }
    els.forEach(function (el) {
      if (!renderMd(el)) return;
      if (el.classList.contains('doc')) {
        buildToc(el);
        if (location.hash) { var t = document.getElementById(decodeURIComponent(location.hash.slice(1))); if (t) t.scrollIntoView(); }
      }
    });
    if (V.page.kind === 'blob' && V.page.type === 'md') backlinks(V.page.path);
  }
  renderAll();
  if (V.page.kind === 'blob' && V.page.type !== 'md') {
    var ready = function () { if (!window.hljs) return setTimeout(ready, 80); $$('.code-view code').forEach(function (c) { if (c.textContent.length < 300000) try { window.hljs.highlightElement(c); } catch (e) { /* noop */ } }); };
    ready();
  }

  /* ---------- lightbox ---------- */
  var lb = $('#lightbox');
  document.addEventListener('click', function (e) {
    var img = e.target.closest && e.target.closest('img.zoomable');
    if (img && lb) { $('img', lb).src = img.currentSrc || img.src; lb.hidden = false; }
  });
  if (lb) lb.addEventListener('click', function () { lb.hidden = true; });

  /* ---------- command palette ---------- */
  var pal = $('#palette'), pin = $('#palInput'), plist = $('#palList'), pstat = $('#palStatus');
  var items = V.entries.map(function (e) { return { p: e[0], f: e[1], n: (e[1] ? displayName(e[0]) : e[0].split('/').pop()), l: e[0].toLowerCase() }; });
  var sel = 0, results = [], idxData = null;
  function openPal() {
    if (!pal) return;
    pal.hidden = false; pin.value = ''; pin.focus(); search('');
    if (!idxData) {
      pstat.textContent = 'Indexing notes for full-text search…';
      loadIndex(function (d, t) { pstat.textContent = 'Indexing notes… ' + d + '/' + t; }).then(function (x) {
        idxData = x; pstat.textContent = Object.keys(x).length + ' notes indexed · ↑↓ to move · Enter to open';
        search(pin.value);
      }).catch(function () { pstat.textContent = 'File search only (content index unavailable)'; });
    } else pstat.textContent = Object.keys(idxData).length + ' notes indexed · ↑↓ to move · Enter to open';
  }
  function closePal() { if (pal) pal.hidden = true; }
  function fuzzy(q, s) { var i = 0; for (var j = 0; j < s.length && i < q.length; j++) if (s[j] === q[i]) i++; return i === q.length; }
  function hl(text, q) {
    if (!q) return escH(text);
    var i = text.toLowerCase().indexOf(q);
    if (i < 0) return escH(text);
    return escH(text.slice(0, i)) + '<em>' + escH(text.slice(i, i + q.length)) + '</em>' + escH(text.slice(i + q.length));
  }
  function search(q) {
    q = q.trim().toLowerCase();
    results = [];
    var html = '';
    if (!q) {
      var tops = items.filter(function (it) { return !it.f && it.p.indexOf('/') < 0; });
      results = tops.concat(items.filter(function (it) { return it.f && /\.md$/i.test(it.p); }).sort(function () { return Math.random() - 0.5; }).slice(0, 6));
    } else {
      var scored = [];
      items.forEach(function (it) {
        var n = it.n.toLowerCase(), s = 0;
        if (n === q) s = 100; else if (n.indexOf(q) === 0) s = 80; else if (n.indexOf(q) >= 0) s = 60; else if (it.l.indexOf(q) >= 0) s = 40; else if (q.length > 2 && fuzzy(q, n)) s = 20;
        if (s) scored.push({ it: it, s: s + (it.f ? 1 : 2) });
      });
      scored.sort(function (a, b) { return b.s - a.s || a.it.n.length - b.it.n.length; });
      results = scored.slice(0, 30).map(function (x) { return x.it; });
    }
    var content = [];
    if (q.length >= 3 && idxData) {
      for (var p in idxData) {
        var t = idxData[p], i = t.toLowerCase().indexOf(q);
        if (i < 0 || results.some(function (r) { return r.p === p; })) continue;
        var cnt = t.toLowerCase().split(q).length - 1;
        var snip = t.slice(Math.max(0, i - 50), i + q.length + 90).replace(/\s+/g, ' ');
        content.push({ p: p, f: 1, n: displayName(p), snip: snip, c: cnt });
      }
      content.sort(function (a, b) { return b.c - a.c; });
      content = content.slice(0, 40);
    }
    var all = results.concat(content);
    if (results.length) html += '<li class="grp">' + (q ? 'Files & folders' : 'Jump to') + '</li>';
    results.forEach(function (it, k) {
      html += '<li data-i="' + k + '"><a href="' + hrefFor(it.f ? 'blob' : 'tree', it.p) + '"><span class="pt">' + (it.f ? fileIcon(it.p) : sectionStyle(it.p, V.sections).icon) + ' ' + hl(it.n, q) + '</span><span class="pp">' + escH(it.p) + '</span></a></li>';
    });
    if (content.length) html += '<li class="grp">Inside notes</li>';
    content.forEach(function (it, k) {
      html += '<li data-i="' + (results.length + k) + '"><a href="' + hrefFor('blob', it.p) + '"><span class="pt">📝 ' + escH(it.n) + ' <span class="pp">' + it.c + ' hit' + (it.c > 1 ? 's' : '') + '</span></span><span class="ps">…' + hl(it.snip, q) + '…</span></a></li>';
    });
    if (!all.length) html = '<li class="grp">No matches' + (idxData ? '' : ' in file names (content index still loading)') + '</li>';
    results = all; sel = 0;
    plist.innerHTML = html; mark();
  }
  function mark() {
    $$('li[data-i]', plist).forEach(function (li) { li.classList.toggle('sel', +li.getAttribute('data-i') === sel); });
    var s = $('li.sel', plist); if (s && s.scrollIntoView) s.scrollIntoView({ block: 'nearest' });
  }
  if (pal) {
    pin.addEventListener('input', function () { search(pin.value); });
    pin.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { sel = Math.min(results.length - 1, sel + 1); mark(); e.preventDefault(); }
      else if (e.key === 'ArrowUp') { sel = Math.max(0, sel - 1); mark(); e.preventDefault(); }
      else if (e.key === 'Enter') { var a = $('li.sel a', plist); if (a) location.href = a.href; }
      else if (e.key === 'Escape') closePal();
    });
    pal.addEventListener('click', function (e) { if (e.target === pal) closePal(); });
  }
  document.addEventListener('keydown', function (e) {
    if ((e.key === 'k' && (e.ctrlKey || e.metaKey)) || (e.key === '/' && !/INPUT|TEXTAREA/.test(document.activeElement.tagName))) { e.preventDefault(); openPal(); }
    else if (e.key === 'Escape') { closePal(); if (lb) lb.hidden = true; document.body.classList.remove('nav-open'); }
  });
  ['#searchBtn', '#heroSearch'].forEach(function (s) { var b = $(s); if (b) b.addEventListener('click', openPal); });

  /* ---------- tags page ---------- */
  if (V.page.kind === 'tags') {
    var cloud = $('#tagCloud'), res = $('#tagResults');
    loadIndex().then(function (idx) {
      var tags = {};
      for (var p in idx) { var t = tagsOf(idx[p]); for (var k in t) { (tags[k] = tags[k] || { label: t[k], files: [] }).files.push(p); } }
      var keys = Object.keys(tags).sort(function (a, b) { return tags[b].files.length - tags[a].files.length || a.localeCompare(b); });
      if (!keys.length) { cloud.innerHTML = '<p class="dim">No tags found.</p>'; return; }
      cloud.innerHTML = keys.map(function (k) { return '<button data-tag="' + escH(k) + '">#' + escH(tags[k].label) + '<b>' + tags[k].files.length + '</b></button>'; }).join('');
      function show(k) {
        $$('button', cloud).forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-tag') === k); });
        if (!tags[k]) { res.innerHTML = ''; return; }
        var files = tags[k].files.sort(function (a, b) { return displayName(a).localeCompare(displayName(b)); });
        res.innerHTML = '<h2 class="h-sec"><span>//</span> #' + escH(tags[k].label) + ' · ' + files.length + '</h2><div class="cards files">' + files.map(function (p) {
          var st = sectionStyle(p, V.sections);
          return '<a class="card file-card" style="--c:' + st.color + '" href="' + hrefFor('blob', p) + '"><span class="card-top"><span class="card-ico sm">' + st.icon + '</span><span class="card-title">' + escH(displayName(p)) + '</span></span><span class="card-meta">' + escH(dirOf(p)) + '</span></a>';
        }).join('') + '</div>';
      }
      cloud.addEventListener('click', function (e) { var b = e.target.closest('button'); if (b) { history.replaceState(null, '', '#' + b.getAttribute('data-tag')); show(b.getAttribute('data-tag')); } });
      var initial = decodeURIComponent(location.hash.slice(1)).toLowerCase();
      show(tags[initial] ? initial : keys[0]);
    }).catch(function () { cloud.innerHTML = '<p>Could not build the tag index right now.</p>'; });
  }

  /* ---------- map page ---------- */
  if (V.page.kind === 'map') initMap();
  function initMap() {
    var canvas = $('#map'), tip = $('#mapTip'), status = $('#mapStatus'), chkLinks = $('#mapLinks'), chkImg = $('#mapImages');
    var ctx = canvas.getContext('2d'), dpr = window.devicePixelRatio || 1, W = 0, H = 0;
    var nodes = [], edges = [], byId = {}, linkEdges = [], cam = { x: 0, y: 0, k: 0.8 }, hover = null, drag = null, alpha = 1;
    var legend = $('#mapLegend'), tops = {};
    function resize() { var r = canvas.getBoundingClientRect(); W = r.width; H = r.height; canvas.width = W * dpr; canvas.height = H * dpr; }
    function build() {
      nodes = []; edges = []; byId = {};
      var root = { id: '', label: V.repo, r: 16, color: '#ffffff', dir: true, x: 0, y: 0, vx: 0, vy: 0 };
      nodes.push(root); byId[''] = root;
      V.entries.forEach(function (e) {
        if (!chkImg.checked && e[1] && fileKind(e[0]) === 'image') return;
        var st = sectionStyle(e[0], V.sections);
        var n = { id: e[0], label: e[1] ? displayName(e[0]) : e[0].split('/').pop(), dir: !e[1], color: st.color, r: e[1] ? 4.5 : 9, x: (Math.random() - 0.5) * 600, y: (Math.random() - 0.5) * 600, vx: 0, vy: 0 };
        nodes.push(n); byId[e[0]] = n;
        if (!e[1] && e[0].indexOf('/') < 0) tops[e[0]] = st.color;
      });
      nodes.forEach(function (n) { if (n.id === '') return; var par = byId[dirOf(n.id)]; if (par) edges.push([par, n, 0]); });
      // seed children near parents
      edges.forEach(function (ed) { ed[1].x = ed[0].x + (Math.random() - 0.5) * 80; ed[1].y = ed[0].y + (Math.random() - 0.5) * 80; });
      legend.innerHTML = Object.keys(tops).map(function (k) { return '<span><i style="background:' + tops[k] + '"></i>' + escH(k) + '</span>'; }).join('');
      alpha = 1;
      if (chkLinks.checked) addLinks();
    }
    function addLinks() {
      status.textContent = 'Loading note links…';
      loadIndex().then(function (idx) {
        linkEdges = [];
        for (var p in idx) linksOf(p, idx[p]).forEach(function (q) { if (byId[p] && byId[q]) linkEdges.push([byId[p], byId[q], 1]); });
        status.textContent = nodes.length + ' nodes · ' + linkEdges.length + ' note links';
        alpha = Math.max(alpha, 0.6);
      }).catch(function () { status.textContent = 'Note links unavailable'; });
    }
    function tick() {
      if (alpha < 0.005) return;
      var all = chkLinks.checked ? edges.concat(linkEdges) : edges;
      for (var i = 0; i < nodes.length; i++) {
        var a = nodes[i];
        for (var j = i + 1; j < nodes.length; j++) {
          var b = nodes[j], dx = b.x - a.x, dy = b.y - a.y, d2 = dx * dx + dy * dy + 0.01;
          if (d2 > 90000) continue;
          var f = (a.dir || b.dir ? 1400 : 500) / d2, d = Math.sqrt(d2);
          dx /= d; dy /= d; a.vx -= dx * f; a.vy -= dy * f; b.vx += dx * f; b.vy += dy * f;
        }
      }
      all.forEach(function (e) {
        var a = e[0], b = e[1], dx = b.x - a.x, dy = b.y - a.y, d = Math.sqrt(dx * dx + dy * dy) || 1;
        var len = e[2] ? 120 : (b.dir ? 70 : 34), k = e[2] ? 0.004 : 0.04, f = (d - len) * k;
        dx /= d; dy /= d; a.vx += dx * f; a.vy += dy * f; b.vx -= dx * f; b.vy -= dy * f;
      });
      nodes.forEach(function (n) {
        n.vx -= n.x * 0.002; n.vy -= n.y * 0.002;
        if (n === drag || n.id === '') { n.vx = n.vy = 0; if (n.id === '' && n !== drag) { n.x *= 0.9; n.y *= 0.9; } return; }
        n.vx *= 0.82; n.vy *= 0.82;
        n.x += n.vx * alpha * 1.6; n.y += n.vy * alpha * 1.6;
      });
      alpha *= 0.995;
    }
    function toScreen(n) { return [W / 2 + (n.x + cam.x) * cam.k, H / 2 + (n.y + cam.y) * cam.k]; }
    function draw() {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      var hl = {};
      if (hover) { hl[hover.id] = 1; edges.concat(chkLinks.checked ? linkEdges : []).forEach(function (e) { if (e[0] === hover) hl[e[1].id] = 1; if (e[1] === hover) hl[e[0].id] = 1; }); }
      ctx.lineWidth = 1;
      edges.forEach(function (e) {
        var a = toScreen(e[0]), b = toScreen(e[1]);
        ctx.strokeStyle = hover && (e[0] === hover || e[1] === hover) ? 'rgba(255,255,255,.7)' : 'rgba(120,160,255,.16)';
        ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke();
      });
      if (chkLinks.checked) linkEdges.forEach(function (e) {
        var a = toScreen(e[0]), b = toScreen(e[1]);
        ctx.strokeStyle = hover && (e[0] === hover || e[1] === hover) ? 'rgba(255,43,214,.9)' : 'rgba(255,43,214,.18)';
        ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.quadraticCurveTo((a[0] + b[0]) / 2 + (a[1] - b[1]) * 0.15, (a[1] + b[1]) / 2 + (b[0] - a[0]) * 0.15, b[0], b[1]); ctx.stroke();
      });
      nodes.forEach(function (n) {
        var s = toScreen(n), r = n.r * Math.max(0.6, Math.min(1.6, cam.k));
        var dim = hover && !hl[n.id];
        ctx.globalAlpha = dim ? 0.25 : 1;
        ctx.fillStyle = n.color; ctx.shadowColor = n.color; ctx.shadowBlur = n.dir ? 16 : 6;
        ctx.beginPath(); ctx.arc(s[0], s[1], r, 0, Math.PI * 2); ctx.fill();
        ctx.shadowBlur = 0;
        if (n.dir) { ctx.strokeStyle = '#05070d'; ctx.lineWidth = 2; ctx.stroke(); ctx.lineWidth = 1; }
        if (n.dir || cam.k > 1.5 || hl[n.id]) {
          ctx.fillStyle = n.dir ? '#fff' : '#b9c6dd';
          ctx.font = (n.dir ? '600 12px ' : '11px ') + 'Inter, sans-serif';
          ctx.fillText(n.label, s[0] + r + 4, s[1] + 4);
        }
        ctx.globalAlpha = 1;
      });
    }
    function loop() { tick(); draw(); requestAnimationFrame(loop); }
    function pick(mx, my) {
      var best = null, bd = 1e9;
      nodes.forEach(function (n) { var s = toScreen(n), d = Math.hypot(s[0] - mx, s[1] - my); if (d < Math.max(10, n.r * cam.k + 4) && d < bd) { bd = d; best = n; } });
      return best;
    }
    var pan = null, moved = false;
    canvas.addEventListener('pointerdown', function (e) {
      var r = canvas.getBoundingClientRect(), n = pick(e.clientX - r.left, e.clientY - r.top);
      moved = false; canvas.setPointerCapture(e.pointerId); canvas.classList.add('drag');
      if (n) drag = n; else pan = { x: e.clientX, y: e.clientY, cx: cam.x, cy: cam.y };
    });
    canvas.addEventListener('pointermove', function (e) {
      var r = canvas.getBoundingClientRect(), mx = e.clientX - r.left, my = e.clientY - r.top;
      if (drag) { moved = true; drag.x = (mx - W / 2) / cam.k - cam.x; drag.y = (my - H / 2) / cam.k - cam.y; alpha = Math.max(alpha, 0.3); return; }
      if (pan) { moved = true; cam.x = pan.cx + (e.clientX - pan.x) / cam.k; cam.y = pan.cy + (e.clientY - pan.y) / cam.k; return; }
      hover = pick(mx, my);
      canvas.style.cursor = hover ? 'pointer' : 'grab';
      if (hover) { tip.hidden = false; tip.textContent = (hover.dir ? '📁 ' : '') + (hover.id || V.repo); tip.style.left = (mx + 14) + 'px'; tip.style.top = (my + 10) + 'px'; } else tip.hidden = true;
    });
    canvas.addEventListener('pointerup', function () {
      canvas.classList.remove('drag');
      if (drag && !moved) location.href = drag.id === '' ? '/' : hrefFor(drag.dir ? 'tree' : 'blob', drag.id);
      drag = null; pan = null;
    });
    canvas.addEventListener('wheel', function (e) {
      e.preventDefault();
      var f = Math.exp(-e.deltaY * 0.0015);
      cam.k = Math.max(0.2, Math.min(5, cam.k * f));
    }, { passive: false });
    chkLinks.addEventListener('change', function () { if (chkLinks.checked && !linkEdges.length) addLinks(); alpha = Math.max(alpha, 0.4); });
    chkImg.addEventListener('change', function () { build(); });
    window.addEventListener('resize', resize);
    resize(); build();
    status.textContent = nodes.length + ' nodes';
    for (var w = 0; w < 120; w++) tick();
    loop();
  }
}

function clientBundle() {
  return '/* Cyber Vault client */\n"use strict";\nvar __name = function (f) { return f; };\n' +
    makeResolver.toString() + '\n' + encPath.toString() + '\n' + fileKind.toString() + '\n' + fileIcon.toString() + '\n' +
    displayName.toString() + '\n' + sectionStyle.toString() + '\n' + clientApp.toString() + '\n' +
    'if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", ' + clientApp.name + '); else ' + clientApp.name + '();\n';
}
