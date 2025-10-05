# 🧾 PDFiD.py 🕵️‍♂️🔍✨

#BLUE #DSS #TTMA #Tool 

PDFiD.py is a lightweight yet powerful forensic utility developed by **Didier Stevens**. It's designed to analyze PDF files for suspicious elements often leveraged in **malicious documents (MalDocs)** — such as embedded JavaScript, automatic actions, or embedded files — without fully opening the file. Ideal for static triage during malware analysis!

**🔗 [Official Documentation](https://blog.didierstevens.com/programs/pdf-tools/)**

---

![PDFiD Logo](https://raw.githubusercontent.com/luke-mckeever/Cyber_Vault/main/_Resources/Tool_Logos/pdfid_logo.png)

---

### 🚀 Installing PDFiD.py

Download from: [Didier Stevens Suite](https://github.com/DidierStevens/DidierStevensSuite)

---

### 1️⃣ Pre‑requisites

- 🐍 **Python 3** installed

---

## 🧰 How To Use

Using **PDFiD** is incredibly straightforward. Once installed, you can analyze a PDF file with:

```bash
python3 pdfid.py suspicious.pdf
```

**Key things to look for in the output:**

| **Output Field**  |  **Explanation** |
|---|---|
|**obj**|Total number of objects defined in the PDF. Each object can represent text, images, JavaScript, forms, or other structures. A high number of objects can indicate complexity or obfuscation.|
|**endobj**|Number of `endobj` markers found. Should normally match the `obj` count; discrepancies may indicate malformed or deliberately corrupted files.|
|**stream**|Number of **stream objects**, which often contain binary data such as images, compressed objects, or embedded content. Malicious payloads may be hidden in streams.|
|**endstream**|Number of `endstream` markers. Should typically match `stream`. Differences can indicate corruption or tampering.|
|**xref**|Cross-reference tables count. These structures map objects within the PDF. Multiple xrefs can suggest incremental updates or potential obfuscation.|
|**trailer**|Number of trailer sections. Trailers contain metadata including the root object reference. Multiple trailers can occur with updates but may also signal suspicious modifications.|
|**startxref**|Marks the beginning of the cross-reference table. Should normally appear once. Multiple entries may indicate incremental updates or hidden data.|
|**/Page**|Number of pages in the PDF. A low number of pages (e.g., 1) combined with many objects can be a red flag for obfuscated malicious PDFs.|
|**/Encrypt**|Indicates whether the PDF is encrypted. Encrypted PDFs can conceal malicious content from static analysis.|
|**/ObjStm**|Object Streams — used to bundle multiple objects. Malicious files may use this to hide content from basic parsers.|
|**/JS**|JavaScript objects found. JavaScript in PDFs can be used for legitimate interactivity but is a **common attack vector**.|
|**/JavaScript**|Another tag for embedded JavaScript actions. Presence often indicates scripting behavior, requiring deeper inspection.|
|**/AA**|Additional Actions — triggers that occur on specific events (e.g., opening, closing). Often abused for auto‑execution.|
|**/OpenAction**|Specifies an action to automatically execute when the PDF is opened. Commonly exploited to launch scripts or URLs without user interaction.|
|**/AcroForm**|Interactive form fields. May contain malicious scripts or references in hidden form elements.|
|**/JBIG2Decode**|A compression filter for images. Historically exploited for **JBIG2 stream vulnerabilities** (e.g., CVE‑2021‑30860 used in Pegasus spyware).|
|**/RichMedia**|Indicates embedded multimedia (Flash, videos, etc.). Can be exploited to deliver malware.|
|**/Launch**|A command that can execute external files or applications. **Highly suspicious** in PDFs.|
|**/EmbeddedFile**|Number of embedded files (attachments). Malicious actors often embed executables or scripts.|
|**/Colors > 2^24**|Checks for images with excessive color spaces, which can indicate **heap spraying or obfuscation techniques**.|

> 💡 PDFiD doesn’t render or parse the file fully, making it **safe for triage** without executing malicious payloads.

---

## ⚙️ Advanced Usage

Here are some useful advanced commands:

```bash
# Scan all PDFs in a directory
find . -name "*.pdf" -exec python3 pdfid.py {} \;

# Save results to a file
python3 pdfid.py suspicious.pdf > output.txt

# Run with plugin (e.g., extra JavaScript analysis)
python3 pdfid.py -p plugin_name suspicious.pdf
```

---

## 📋 Handy Options

|Option|Description|
|---|---|
|`-e`|Expands names like `/JavaScript` to show more detail|
|`-p <plugin>`|Uses a specified plugin for deeper inspection|
|`-n`|Normalizes output (useful for automation)|
|`-o <file>`|Writes analysis output to a file|

---

## 🌐 Example Output

```
PDF Header: %PDF-1.6
obj: 9
endobj: 9
stream: 2
endstream: 2
xref: 1
trailer: 1
startxref: 1
/Page: 0
/Encrypt: 0
/ObjStm: 0
/JS: 0
/JavaScript: 0
/AA: 0
/OpenAction: 0
/AcroForm: 0
/JBIG2Decode: 0
/RichMedia: 0
/Launch: 0
/EmbeddedFile: 0
/Colors > 2^24: 0
```

This indicates a **simple, non‑encrypted PDF** with no scripting or embedded content. While not malicious by itself, analysts should still consider file provenance and context.

> ⚡ **Tip:** High counts in `/JavaScript`, `/OpenAction`, `/AA`, `/Launch`, or `/EmbeddedFile` should trigger deeper inspection using tools like `pdf-parser.py` or sandboxing.

---

## 📚 References

- [Didier Stevens Blog](https://blog.didierstevens.com/)
    
- [GitHub - DidierStevensSuite](https://github.com/DidierStevens/DidierStevensSuite)
    
- [Malicious PDF Analysis by Lenny Zeltser](https://zeltser.com/analyzing-malicious-documents/)
    

---

![VIDEO](https://www.youtube.com/watch?v=3HqYt9KwU7o)

> 🧠 **Pro Tip:** Combine PDFiD with tools like `pdf-parser.py` and `peepdf` for a **complete static + interactive PDF malware analysis pipeline**.