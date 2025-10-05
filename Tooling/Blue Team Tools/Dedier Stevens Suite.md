# 🧰 **DIDIER STEVENS SUITE** 🕵️‍♂️✨

#BLUE #Tool #TTMA #SUITE #DSS

> ⚡ _Massively expanded to include the tools you flagged as missing._ Everything below is based on your attached suite list and grouped for fast DFIR, malware, and OSINT workflows. Collapsible sections, usage hints, and emoji-rich signposts included.

---

## 🌟 **Quick Navigation**

- [📌 Overview](#-overview)
- [🧪 Core Binary/PE Analysis](#-core-binarype-analysis)
- [📄 PDF / Office / RTF / Containers](#-pdf--office--rtf--containers)
- [🖼️ Image Forensics](#%EF%B8%8F-image-forensics)
- [📦 Archive & Structured Data](#-archive--structured-data)
- [📬 Email / XML / JSON](#-email--xml--json)
- [🧠 VBA / VBE / Script De‑obfuscation](#-vba--vbe--script-de-obfuscation)
- [🧩 OLEdump Plugins (Deep Dive)](#-oledump-plugins-deep-dive)
- [🌐 Network, DNS & Wireshark](#-network-dns--wireshark)
- [🕵️ Cobalt Strike / CS Analysis](#-cobalt-strike--cs-analysis)
- [🪟 Windows Internals, Persistence & Mitigations](#-windows-internals-persistence--mitigations)
- [🔐 Crypto / Hashing / Fuzzy Hashing](#-crypto--hashing--fuzzy-hashing)
- [🧰 Text & Binary Helpers](#-text--binary-helpers)
- [🛰️ OSINT & External Lookups](#%EF%B8%8F-osint--external-lookups)
- [📑 010 Editor Templates & Excel Helpers](#-010-editor-templates--excel-helpers)
- [🧱 Misc Utilities](#-misc-utilities)
- [🗂️ Full Suite Index (From Your List)](#%EF%B8%8F-full-suite-index-from-your-list)
- [⚠️ Disclaimer](#%EF%B8%8F-disclaimer)

---

## 📌 **Overview**

Didier Stevens’ Suite is a portable collection for **malware triage**, **document & binary inspection**, **script de‑obfuscation**, and **network forensics**. This expanded edition adds dozens of tools you asked for—now grouped and annotated for quick, real‑world use.

> 💡 Tip: Keep a "triage chain" handy (e.g., `hash.py → pdfid.py/oledump.py → base64dump.py → xorsearch.exe → yara → VT submit`).

---

## 🧪 **Core Binary/PE Analysis**

|Tool|What it Does|Example|
|---|---|---|
|`pecheck.py`|Inspect PE headers, imports, timestamps, indicators.|`python pecheck.py sample.exe`|
|`AnalyzePESig-*.exe`|Authenticode signature inspection/validation (x86/x64/CRT variants).|`AnalyzePESig-x64.exe file.exe`|
|`setdllcharacteristics.exe`|Toggle PE security flags (e.g., DEP/ASLR bits) for research.|`setdllcharacteristics.exe file.exe`|
|`contains_pe_file.yara`|Detect embedded PE files in blobs.|`yara64.exe contains_pe_file.yara sample.bin`|
|`xorsearch.exe` / `xorsearch.py`|Find XOR’d patterns (URLs, keys, shellcode) in data.|`xorsearch.exe -s malware.bin http`|
|`xorstrings.exe`|Recover XOR’d strings from binaries/blobs.|`xorstrings.exe payload.bin`|
|`disitool.py`|Work with Digital Signature (DIS) resources in PE files.|`python disitool.py -l file.exe`|

---

## 📄 **PDF / Office / RTF / Containers**

|Tool|Use|Example|
|---|---|---|
|[[PDFid]] + `pdfid.ini`|Fast PDF triage (flags `/JavaScript`, `/OpenAction`, `/AA`, etc.).|`python pdfid.py file.pdf`|
|`pdf-parser.py`|Parse objects/streams; extract, decompress, filter JS.|`python pdf-parser.py -o 5 -f file.pdf`|
|`pdftool.py`|PDF helper operations (extract/inspect bits).|`python pdftool.py --help`|
|`mPDF.py`|PDF manipulation for red/blue‑team testing.|`python mPDF.py`|
|`make-pdf-helloworld.py`|Generate benign PDF (baseline/control).|`python make-pdf-helloworld.py out.pdf`|
|`make-pdf-javascript.py`|Create PDF with JavaScript (testing/sandboxing).|`python make-pdf-javascript.py out.pdf`|
|`make-pdf-embedded.py`|Embed files into PDFs (persistence/lure research).|`python make-pdf-embedded.py out.pdf`|
|`make-pdf-jbig2.py`|Craft PDFs with JBIG2 features (exploit research).|`python make-pdf-jbig2.py out.pdf`|

|Tool|Use|Example|
|---|---|---|
|`oledump.py`|Dump/analyze OLE streams, macros, embedded payloads.|`python oledump.py suspicious.doc`|
|`msoffcrypto-crack.py`|Crack Office doc passwords (crypto test/IR).|`python msoffcrypto-crack.py file.docx`|
|`decompress_rtf.py`|Decompress/inspect RTF streams.|`python decompress_rtf.py file.rtf`|
|`rtfdump.py`|Analyze RTF structure/objects (OLE, packagers).|`python rtfdump.py file.rtf`|
|`rtf.yara`|YARA to flag suspicious RTF constructs.|`yara64.exe rtf.yara file.rtf`|
|`vba.yara`|YARA to detect VBA patterns/macros.|`yara64.exe vba.yara file.doc`|

---

## 🖼️ **Image Forensics**

|Tool|What it Does|Example|
|---|---|---|
|`jpegdump.py`|Inspect JPEG structure/markers; carve embedded data.|`python jpegdump.py image.jpg`|
|`image-forensics-ela.py`|Error Level Analysis for tamper detection.|`python image-forensics-ela.py image.jpg`|
|`image-overlay.py`|Overlay/compare images (visual diff).|`python image-overlay.py base.jpg comp.jpg out.png`|
|`JPEG_EXIF_Contains_eval.yara`|Flag suspicious EXIF with `eval`-like content.|`yara JPEG_EXIF_Contains_eval.yara image.jpg`|

---

## 📦 **Archive & Structured Data**

|Tool|Use|Example|
|---|---|---|
|`zipdump.py`|Inspect ZIP/OOXML (docx/xlsx/pptx) internals; extract members.|`python zipdump.py sample.docx`|
|`xmldump.py`|Pretty‑print/triage XML internals (OOXML, config).|`python xmldump.py sample.xml`|

---

## 📬 **Email / XML / JSON**

|Tool|Use|Example|
|---|---|---|
|`emldump.py`|Parse `.eml` files, headers, parts, attachments.|`python emldump.py mail.eml`|
|`myjson-filter.py`|Filter JSON by keys/paths for quick IOC extraction.|`python myjson-filter.py data.json`|
|`myjson-transform.py`|Transform JSON (reformat/flatten for analysis).|`python myjson-transform.py data.json`|

---

## 🧠 **VBA / VBE / Script De‑obfuscation**

|Tool|Focus|Example|
|---|---|---|
|`decode-vbe.py`|Decode VBScript Encoded files (VBE).|`python decode-vbe.py payload.vbe`|
|`file2vbscript.py`|Wrap arbitrary data into VBScript format.|`python file2vbscript.py in.bin out.vbs`|
|`shellcode2vba.py` / `shellcode2vbscript.py`|Embed shellcode into VBA/VBScript (analysis/detonation).|`python shellcode2vba.py shell.bin`|
|`simple-shellcode-generator.py`|Generate minimal shellcode loaders (testing).|`python simple-shellcode-generator.py --help`|
|`js.exe` / `js-file.exe` / `js-ascii.exe`|JScript helpers for testing/de‑obfuscation.|`js-file.exe script.js`|
|`js-unicode-escape.1sc` / `js-unicode-unescape.1sc`|Encode/decode JS Unicode escapes.|`cscript js-unicode-unescape.1sc in.txt`|

---

## 🧩 **OLEdump Plugins (Deep Dive)**

> Drop these alongside `oledump.py` and call with `-p plugin_*.py` (or use `-s` / `-S` to target streams).
- `plugin_biff.py` – Parse legacy Excel BIFF streams.
- `plugin_clsid.py` – Identify CLSIDs in OLE objects.
- `plugin_dridex.py` – Dridex‑specific indicators/decoders.
- `plugin_dttm.py` – Extract OLE `DTTM` timestamps.
- `plugin_embeddedfile.py` – Locate/extract embedded files.
- `plugin_hifo.py` – High‑entropy / interesting fragment offsets.
- `plugin_http_heuristics.py` – URL/HTTP heuristics in streams.
- `plugin_hyperlink.py` – Extract hyperlinks from OLE.
- `plugin_jumplist.py` – Parse Jump List artifacts in OLE packages.
- `plugin_linear.py` – Linearize/analyze stream content.
- `plugin_metadata.py` – Document metadata extraction.
- `plugin_msg.py` / `plugin_msg_summary.py` – Outlook MSG stream parsing.
- `plugin_msi.py` / `plugin_msi_info.py` – MSI internals/summary.
- `plugin_nameobfuscation.py` – Detect obfuscated names.
- `plugin_office_crypto.py` – Office crypto flag insights.
- `plugin_olestreams.py` – Enumerate common OLE stream names.
- `plugin_ooxml_url.py` – Extract URLs from OOXML (docx/xlsx/pptx).
- `plugin_pcode_dumper.py` – Dump VBA P‑code.
- `plugin_ppt.py` – PowerPoint‑specific structures.
- `plugin_str_sub.py` – String substitution helpers.
- `plugin_stream_o.py` / `plugin_stream_sample.py` – Example/stream analyzers.
- `plugin_triage.py` – Quick scoring/triage of suspicious streams.
- `plugin_vba.py` / `plugin_vba_dir.py` / `plugin_vba_dco.py` / `plugin_vba_routines.py` / `plugin_vba_summary.py` / `plugin_vbaproject.py` / `plugin_version_vba.py` – Full VBA macro discovery → summary → version mapping.

> 🧪 Example: `python oledump.py -p plugin_triage.py suspicious.doc`

---

## 🌐 **Network, DNS & Wireshark**

|Tool|What it Does|
|---|---|
|`dns-query-async.py`|Async/bulk DNS resolution for IOC enrichment.|
|`dnsresolver.py`|Simple resolver helper.|
|`dns-pydivert.py`|Windows packet capture/diversion (DNS) via WinDivert.|
|`pcap-rename.py`|Rename PCAPs by timestamp/session logic.|
|`nmap-xml-script-output.py`|Parse Nmap XML to human‑readable summaries.|
|`fl-dissector.lua`|Wireshark dissector (custom protocol).|
|`tcp-flags-dissector.lua` / `tcp-flags-postdissector.lua`|Wireshark helpers for TCP flag analysis.|
|`wireshark-export.1sc`|Script to export Wireshark details.|
|`simple_tcp_stats.py` / `simple_ip_stats.py`|Quick stats from PCAP‑derived dumps.|

---

## 🕵️ **Cobalt Strike / CS Analysis**

|Tool|Purpose|
|---|---|
|`cs-parse-traffic.py`|Parse Cobalt Strike beacon traffic (I/O extraction).|
|`cs-extract-key.py`|Extract CS public keys/metadata (supports multiple profiles).|
|`cs-decrypt-metadata.py`|Decrypt/interpret CS metadata when possible.|
|`cs-analyze-processdump.py`|Analyze process dumps suspected of CS beacons.|

---

## 🪟 **Windows Internals, Persistence & Mitigations**

|Tool|Focus|
|---|---|
|`RunInsideLimitedJob.exe` / `RunInsideLimitedJob.dll` / `RunInsideLimitedJob-DLL64.dll`|Execute inside constrained Job object (sandboxing research).|
|`LoadDLLViaAppInit.dll` / `LoadDLLViaAppInit64.dll`|AppInit_DLLs persistence/injection demonstration.|
|`LowerMyRights.dll`|Drop integrity/privileges for safer execution.|
|`SE_ASLR.dll`|Force/verify ASLR settings experiments.|
|`EnforcePermanentDEP.dll`|DEP enforcement testing (mitigation research).|
|`HeapLocker64.dll` / `heaplocker.dll` / `CounterHeapSpray.dll`|Heap spraying mitigation experiments.|
|`LockIfNotHot.exe`|Lockdown helper (prevents execution under certain conditions).|
|`SelectMyParent.exe`|Parent PID spoofing for research/lab exercises.|
|`runasil.exe`|Run process at alternate Integrity Level (e.g., Low IL) for sandbox tests.|
|`zoneidentifier.exe`|Read/modify MOTW (Zone.Identifier ADS) on files.|
|`UndeletableSafebootKey.exe`|Deal with stubborn SafeBoot registry keys.|
|`RegistryScanner-*.exe`|Registry IOC/keyword scanning.|
|`UserAssist.exe`|Parse UserAssist artifacts (program execution traces).|
|`ListModules-*.exe`|Enumerate process modules (DLL inventory); _elev variants_ prompt for admin.|
|`ListSharesSecurityWithWMI.exe`|Enumerate network shares & permissions via WMI.|
|`RTReveal.exe`|Reveal/restore windows (UI artifact helper for IR).|

---

## 🔐 **Crypto / Hashing / Fuzzy Hashing**

|Tool|Purpose|
|---|---|
|`hash.py`|Compute MD5/SHA‑family file hashes quickly.|
|`ssdeep.py`|Fuzzy hashing / similarity scoring.|
|`generate-hashcat-toggle-rules.py` + `toggles-lm-ntlm.rule`|Build/hashcat toggle rules (LM/NTLM word‑mangling research).|
|`keihash.py`|Hashing/encoding helper (research/utility).|

---

## 🧰 **Text & Binary Helpers**

|Tool|What it Helps With|
|---|---|
|`base64dump.py`|Locate & decode Base64 blobs from any file.|
|`find-file-in-file.py`|Detect embedded files/headers in larger blobs.|
|`cut-bytes.py`|Carve byte ranges (offset/length) from files.|
|`headtail.py`|Peek head/tail of binaries without full load.|
|`split.py` / `split-overlap.py`|Break files into chunks (with overlap for YARA/carpets).|
|`numbers-to-hex.py` / `numbers-to-string.py`|Quick conversion tools.|
|`translate.py`|Format/encoding conversions.|
|`format-bytes.py` (+ `.library`)|Pretty‑print sizes, offsets, byte counts.|
|`re-search.py` / `reextra.py`|Regex search/extract helpers across files.|
|`python-per-line.py` (+ `.library`)|Apply Python ops line‑by‑line to streams.|
|`process-binary-file.py` / `process-text-file.py`|Batch transforms via callback.|
|`teeplus.py`|Pipe output to screen **and** file.|
|`strings.py`|Extract ASCII/Unicode strings.|
|`sortcanon.py`|Canonical sort for deterministic diffs.|
|`texteditor.py`|Minimalistic text edit helper.|

---

## 🛰️ **OSINT & External Lookups**

|Tool|Function|
|---|---|
|`virustotal-search.py` / `virustotal-submit.py`|VT lookup/submit for samples/hashes/URLs.|
|`lookup-hosts.py` / `lookup-ips.py`|DNS/host resolution helpers.|
|`nsrl.py`|National Software Reference Library matching (known‑good filtering).|
|`whoami_-0.1.4-fx.xpi`|Firefox extension (identity/IP utility for field work).|
|`onion-connect-service-detection.py`|Tor/hidden service connectivity checks.|
|`nmap-xml-script-output.py`|Turn Nmap XML into quick OSINT notes.|

---

## 📑 **010 Editor Templates & Excel Helpers**

|File|Purpose|
|---|---|
|`LNKTemplate.bt` / `PDFTemplate.bt` / `PFTemplate.bt` / `WMFTemplate.bt`|010 Editor binary templates for LNK/PDF/PREFETCH/WMF analysis.|
|`InstalledPrograms.xls`|Inventory helper (parse/display installed apps).|
|`NetworkMashup.xls`|Aggregate/show network data for triage.|
|`TaskManager.xls`|Process/task overview in Excel for quick pivoting.|

---

## 🧱 **Misc Utilities**

|Tool|Notes|
|---|---|
|`EICARgen.exe`|Generate the EICAR test string (AV/sensor validation).|
|`BruteForceEnigma.exe`|Classic Enigma cryptanalysis demo.|
|`Challenger.exe`|Challenge/response or test harness utility.|
|`InteractiveSieve.exe`|Interactive filtering/sieving of data.|
|`Paste.exe`|Clipboard automation (grab/push text programmatically).|
|`reverse.exe`|Reverse byte order or strings (quick checks).|
|`filegen.exe`|Generate files of specific size/content (testing).|
|`middle.exe`|Extract the middle segment of data/files.|
|`ssltest.tcl`|TLS/SSL handshake tester script.|
|`wmi-sc.vbs`|WMI helper (system collection scripting).|
|`.1sc` scripts (e.g., `search-and-replace-with-wildcards.1sc`, `XORSelection.1sc`, `MovingXORSelection.1sc`, `shift.1sc`, `wireshark-export.1sc`)|Windows Script Host snippets to speed up repetitive analysis tasks.|

---

## 🗂️ **Full Suite Index (From Your List)**

> ✅ Everything below is now represented somewhere above. Use this as a completeness checklist. _(Grouped by type; items preserved from your list naming.)_

`AnalyzePESig-crt-auto-x64.exe`, `AnalyzePESig-crt-auto-x86.exe`, `AnalyzePESig-crt-x64.exe`, `AnalyzePESig-crt-x86.exe`, `AnalyzePESig-x64.exe`, `AnalyzePESig-x86.exe`, `BruteForceEnigma.exe`, `CASToggle.exe`, `Challenger.exe`, `CreateCertGUI.exe`, `EICARgen.exe`, `FileScanner-crt-x64.exe`, `FileScanner-crt-x86.exe`, `FileScanner-x64.exe`, `FileScanner-x86.exe`, `InteractiveSieve.exe`, `JPEG_EXIF_Contains_eval.yara` _(rule)_, `ListModules-crt-elev-x64.exe`, `ListModules-crt-elev-x86.exe`, `ListModules-crt-x64.exe`, `ListModules-crt-x86.exe`, `ListModules-x64.exe`, `ListModules-x86.exe`, `ListSharesSecurityWithWMI.exe`, `LockIfNotHot.exe`, `Paste.exe`, `RegistryScanner-x64.exe`, `RegistryScanner-x86.exe`, `RTReveal.exe`, `SelectMyParent.exe`, `USBVirusScan.exe`, `UserAssist.exe`, `XORSearch.exe`, `ZipEncryptFTP.exe`, `filegen.exe`, `js-ascii.exe`, `js-file.exe`, `js.exe`, `middle.exe`, `reverse.exe`, `runasil.exe`, `setdllcharacteristics.exe`, `texteditor.exe` _(if present)_, `xorstrings.exe`, `zoneidentifier.exe`.

`CounterHeapSpray.dll`, `EnforcePermanentDEP.dll`, `HeapLocker64.dll`, `LoadDLLViaAppInit.dll`, `LoadDLLViaAppInit64.dll`, `LowerMyRights.dll`, `RunInsideLimitedJob-DLL64.dll`, `RunInsideLimitedJob.dll`, `SE_ASLR.dll`, `UndeletableSafebootKey.exe` _(exe but registry)_, `libnspr4.dll`, `nocalcpoc.dll`, `regedit.dll`.

`1768.py`, `amsiscan.py`, `apc-b.py`, `apc-channel.py`, `apc-pr-log.py`, `base64dump.py`, `byte-stats.py`, `cipher-tool.py`, `cisco-calculate-ssh-fingerprint.py`, `count.py`, `cs-analyze-processdump.py`, `cs-decrypt-metadata.py`, `cs-extract-key.py`, `cs-parse-traffic.py`, `csv-stats.py`, `cut-bytes.py`, `decode-vbe.py`, `decoder_add1.py`, `decoder_ah.py`, `decoder_chr.py`, `decoder_rol1.py`, `decoder_xor1.py`, `decompress_rtf.py`, `defuzzer.py`, `disitool.py`, `dns-pydivert.py`, `dns-query-async.py`, `dnsresolver.py`, `emldump.py`, `extractscripts.py`, `file-magic.py`, `file2vbscript.py`, `file-magic.py`, `filegen.py` _(if present)_, `find-file-in-file.py`, `fl-dissector.lua` _(lua)_, `format-bytes.py`, `fuzzer.1sc` _(script)_, `generate-hashcat-toggle-rules.py`, `hash.py`, `headtail.py`, `image-forensics-ela.py`, `image-overlay.py`, `jpegdump.py`, `keihash.py`, `lookup-hosts.py`, `lookup-ips.py`, `mPDF.py`, `make-pdf-embedded.py`, `make-pdf-helloworld.py`, `make-pdf-javascript.py`, `make-pdf-jbig2.py`, `metatool.py`, `middle.py` _(if present)_, `msoffcrypto-crack.py`, `myipaddress.py`, `myjson-filter.py`, `myjson-transform.py`, `naft-gfe.py`, `naft-icd.py`, `naft-ii.py`, `naft_iipf.py`, `naft_impf.py`, `naft_pfef.py`, `naft_uf.py`, `nmap-xml-script-output.py`, `nsrl.py`, `numbers-to-hex.py`, `numbers-to-string.py`, `oledump.py`, `onion-connect-service-detection.py`, `password-history-analysis.py`, `pcap-rename.py`, `pdf-parser.py`, `pdftool.py`, `pecheck.py`, `peid-userdb-to-yara-rules.py`, `plugin_biff.py`, `plugin_clsid.py`, `plugin_dridex.py`, `plugin_dttm.py`, `plugin_embeddedfile.py`, `plugin_hifo.py`, `plugin_http_heuristics.py`, `plugin_hyperlink.py`, `plugin_jumplist.py`, `plugin_linear.py`, `plugin_list` _(manifest)_, `plugin_metadata.py`, `plugin_msg.py`, `plugin_msg_summary.py`, `plugin_msi.py`, `plugin_msi_info.py`, `plugin_nameobfuscation.py`, `plugin_office_crypto.py`, `plugin_olestreams.py`, `plugin_ooxml_url.py`, `plugin_pcode_dumper.py`, `plugin_ppt.py`, `plugin_str_sub.py`, `plugin_stream_o.py`, `plugin_stream_sample.py`, `plugin_triage.py`, `plugin_vba.py`, `plugin_vba_dco.py`, `plugin_vba_dir.py`, `plugin_vba_routines.py`, `plugin_vba_summary.py`, `plugin_vbaproject.py`, `plugin_version_vba.py`, `process-binary-file.py`, `process-text-file.py`, `python-per-line.py`, `re-search.py`, `reextra.py`, `requirements.txt`, `rtfdump.py`, `rules.txt`, `search-and-replace-with-wildcards.1sc` _(script)_, `sets.py`, `shellcode2vba.py`, `shellcode2vbscript.py`, `simple-shellcode-generator.py`, `simple_ip_stats.py`, `simple_listener.py`, `simple_listener_templates.py`, `simple_tcp_stats.py`, `sortcanon.py`, `split-overlap.py`, `split.py`, `ssdeep.py`, `strings.py`, `teeplus.py`, `texteditor.py`, `toggles-lm-ntlm.rule` _(rule)_, `translate.py`, `vba.yara` _(rule)_, `virustotal-search.py`, `virustotal-submit.py`, `vs.py`, `what-is-new.py`, `whatisnewtelegramsendmessage.py`, `wsrradial.py`, `wsrtool.py`, `xmldump.py`, `xor-kpa.py`, `xorsearch.py`, `zipdump.py`.

`IOS_canary.yara`, `JPEG_EXIF_Contains_eval.yara`, `contains_pe_file.yara`, `contains_vbe_file.yara`, `maldoc.yara`, `pe_file_pyinstaller.yara`, `peid-userdb-rules-with-pe-module.yara`, `peid-userdb-rules-without-pe-module.yara`, `rtf.yara`, `vba.yara`, `rules.txt`, `toggles-lm-ntlm.rule`.

`.1sc` scripts: `DumpStrings.1sc`, `MovingXORSelection.1sc`, `SimpleEncoder.1sc`, `XORSelection.1sc`, `fuzzer.1sc`, `search-and-replace-with-wildcards.1sc`, `shift.1sc`, `wireshark-export.1sc`.  
`.bt` templates: `LNKTemplate.bt`, `PDFTemplate.bt`, `PFTemplate.bt`, `WMFTemplate.bt`.  
`.xls`: `InstalledPrograms.xls`, `NetworkMashup.xls`, `TaskManager.xls`.  
`.js`: `Mailmerge.js`, `SubstituteEachLine.js`.  
`.tcl`: `ssltest.tcl`.  
`.xpi`: `whoami_-0.1.4-fx.xpi`.

---

## ⚠️ **Disclaimer**

These tools are for **authorized security research and DFIR** only. Use in lab/sandbox environments and with proper permission.

---