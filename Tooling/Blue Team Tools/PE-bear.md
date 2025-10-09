# 🧩 PE-bear🕵️‍♂️  
#Tool #TTMA #BLUE #

PE-bear is a powerful and lightweight tool designed for reverse engineers, malware analysts, and security researchers. It provides a structured and visual representation of Portable Executable (PE) files, enabling deep inspection of headers, sections, imports, exports, resources, and more.  

**LINK TO TOOL DOCUMENTATION [HERE](https://hshrzd.wordpress.com/pe-bear/)**  

---

![PE-bear Logo](https://hshrzd.files.wordpress.com/2013/05/pebear_logo.png)  

---

### 🚀 Installing PE-bear  

Download directly from the official site: [PE-bear by Hasherezade](https://github.com/hasherezade/pe-bear-releases/releases)  

## 🧰 How To Use

1. **Launch PE-bear.exe**
2. **Open a PE file** (.exe, .dll, .sys, etc.) using _File → Open_
3. Browse the **Header Tree View** to analyze structures such as:
    - DOS Header
    - NT Headers
    - File Header
    - Optional Header
    - Section Table
4. Inspect **Imports/Exports** to identify suspicious API calls or functions.
5. Use the **Hex view** to manually examine data segments, strings, and offsets.
6. Review **Resources and Overlay** sections for potential hidden payloads or injected data.
7. Combine findings with tools like **Detect It Easy (DIE)** or **CFF Explorer** for deeper correlation.

💡 _Tip:_ Hovering over offsets displays detailed tooltips for quick byte-level analysis.

---

## ⚙️ Advanced Usage

- **Entropy Graphs**: Visualize per-section entropy to highlight packed regions.
- **Import Heuristics**: Quickly surface suspicious APIs (e.g., `VirtualAlloc`, `WriteProcessMemory`, `CreateRemoteThread`, `WinExec`, `URLDownloadToFileA`).
- **Hex Search**: Find ASCII/Unicode strings and byte patterns (useful for shellcode signatures).
- **Resource Traversal**: Inspect nested resource directories; extract payloads/RT_RCDATA blobs.
- **Overlay Inspection**: Detect appended droppers/configs beyond the formal PE structure.
- **TLS Callbacks**: Check for code executed **before** `main`/`WinMain`.
- **Relocations & IAT**: Validate relocations and imports integrity (tampering red flags).
- **Section Anomalies**: Nonstandard names (e.g., `.textbss`, `.payload`, random names), misaligned sizes, executable+writeable flags.

---

## 📋 Handy Options

|Option / Panel|Description|
|---|---|
|`File → Open`|Load a PE sample for analysis.|
|`View → Hex`|Toggle synchronized raw hex viewer.|
|`View → Entropy`|Show entropy overview for sections/streams.|
|`Tree → Imports`|Inspect DLL imports and suspicious APIs.|
|`Tree → Exports`|Review exported functions (useful for DLLs).|
|`Tree → Resources`|Parse/extract embedded resources and data blobs.|
|`Tree → Sections`|Inspect sizes, RVAs, characteristics and anomalies.|
|`Right-click → Export`|Dump resource/section/overlay content to disk.|

## 🌐 Example Scenarios

### 🧠 Packed Malware Detection

1. Open sample → **Sections** → review **Entropy**.
2. If `.text` / unknown sections show entropy **> 7.5**, suspect packing.
3. Imports minimal + presence of dynamic loaders (`LoadLibraryA`) → likely unpack-at-runtime.
4. Next steps: execute in a sandbox to dump unpacked memory or use an unpacker.

### 🔍 Extracting an Embedded Dropper

1. Navigate **Resources → RCDATA/UNKNOWN**.
2. Right-click **Export** suspicious entry.
3. Analyze exported file with `file`, `strings`, `xxd`, `binwalk`, `capa`.
4. If it’s a PE-in-a-PE, load the dumped file back into PE-bear.

### 🧷 Overlay-Based Config

1. Open **Overlay** node; note size and offset.
2. **Export** overlay → inspect for config strings, URLs, keys.
3. If encrypted, try entropy + known config patterns; feed to custom decoder if needed.

### 🪝 DLL Triage (Malicious Exports)

1. Load malicious `.dll` → **Exports**.
2. Look for odd names (e.g., `Install`, `Run`, `DllRegisterServer` abusing regsvr32).
3. Map RVAs to sections → verify executable code regions and characteristics.

---

## 🧩 Integration Tips

- 🔬 **capa**: Map low-level features to capabilities (persistence, C2, injection).
- 🧠 **YARA**: Create rules from strings/sections; scan extracted payloads.
- 🧰 **DIE/PEStudio**: Cross-verify compiler/packer detections and metadata.
- 🧵 **x64dbg/ProcMon/Sysmon**: Dynamic follow-up after static triage in PE-bear.

---

## 📚 References

- [PE-bear Releases (GitHub)](https://github.com/hasherezade/pe-bear-releases)