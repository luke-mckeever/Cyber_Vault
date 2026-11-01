# Cyber_Vault website (Cloudflare Worker)

`worker.js` is a single, self-contained Cloudflare Worker that turns this repository into a website. It reads the repo from GitHub at request time, so every folder and file has a page and new commits show up on the site within about a minute, with no redeploy.

## Deploy from the Cloudflare dashboard

1. Go to **Workers & Pages → Create → Create Worker**, give it a name (for example `cyber-vault`) and click **Deploy**.
2. Click **Edit code**, delete the sample code, paste the whole of `worker.js`, and click **Deploy**.
3. Open the `*.workers.dev` URL. That's it.

### Recommended extras

| Setting | Where | Why |
| --- | --- | --- |
| `GITHUB_TOKEN` (Secret) | Worker → Settings → Variables and Secrets | Lifts the GitHub API limit from 60 to 5,000 requests per hour. Use a fine-grained token with read-only **Contents** access to this repo. |
| `VAULT_KV` (KV binding) | Worker → Settings → Bindings → KV namespace | A persistent cache. Useful on `*.workers.dev`, where Cloudflare's edge cache isn't available. |
| Custom domain | Worker → Settings → Domains & Routes | Enables the edge cache, so pages and PDFs load faster worldwide. |

### Optional variables

| Variable | Default | Purpose |
| --- | --- | --- |
| `GITHUB_OWNER` | `luke-mckeever` | Repo owner |
| `GITHUB_REPO` | `Cyber_Vault` | Repo name |
| `GITHUB_BRANCH` | `main` | Branch to publish |
| `SITE_NAME` | `CYBER_VAULT` | Title in the header and hero |
| `HEAD_TTL` | `60` | Seconds between checks for new commits |
| `EXCLUDE_PATHS` | `worker` | Comma-separated folders or files to hide from the site |

Dot-folders such as `.makemd` and `.space` are always hidden.

## Deploy with Wrangler (alternative)

```bash
cd worker
npx wrangler deploy
npx wrangler secret put GITHUB_TOKEN   # optional
```

## What the site does

- **Home**: an animated hero, live stats, section cards (with descriptions taken from the README), recent commits, and the rendered README.
- **Folders** (`/tree/...`): cards with descriptions pulled from each folder's README, a quick filter, a bookshelf view with covers for PDFs, and a gallery for images.
- **Notes** (`/blob/...`): Markdown with syntax highlighting, copy buttons, a table of contents with reading progress, Obsidian `[[wikilinks]]`, `![[embeds]]`, `#tags` and `> [!note]` callouts, backlinks ("Linked from"), and previous/next navigation. Links to `github.com/luke-mckeever/Cyber_Vault/...` are rewritten to stay on the site, and links to files that have moved are found by name.
- **PDFs, images, HTML**: inline viewers, with HTML pages shown in a sandboxed preview alongside their source.
- **Search** (`Ctrl+K` or `/`): searches file names and the full text of every note.
- **Map** (`/map`): an interactive graph of every folder, file and note-to-note link.
- **Tags** (`/tags`): every `#tag` used across the notes.
- A **Random** button in the header opens a random note, and pasting a GitHub path onto the domain (`/luke-mckeever/Cyber_Vault/blob/main/...`) redirects to the right page.
