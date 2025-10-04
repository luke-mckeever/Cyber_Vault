# scdbg 🛠️💻

#BLUE #Tool #TTMA 

**scdbg** is a Windows-based shellcode analysis and emulation tool that allows security analysts to execute and trace malicious shellcode in a controlled environment without risking live execution.

**LINK TO TOOL DOCUMENTATION [HERE](http://sandsprite.com/iDEFENSE/scdbg.html)**

**BREAKDOWN:**  
`scdbg` emulates shellcode execution, displaying API calls, register changes, disassembly, and network behavior. It is widely used for malware reverse engineering, red team research, and threat intelligence enrichment.

---

![scdbg](https://repository-images.githubusercontent.com/150209055/8c1f5c80-6d8a-11ea-9fcb-ff0f58e6a520)

---

### 🚀 Installing scdbg

Download from: [scdbg](http://sandsprite.com/iDEFENSE/scdbg.html)

---

### 1️⃣ PRE-REQUISITES

- Windows OS
- Raw shellcode file (`.bin`) or hex string
- Optional: Hex editor for preparing payloads

---

## 🧰 How To use

Run **scdbg** from the command line with a binary shellcode file:

```bash
scdbg.exe /f shellcode.bin -s -1
```

This will emulate execution and output API calls, memory changes, and execution flow.

---

## ⚙️ Advanced Usage

- **Disassemble & trace registers**:
```bash
scdbg.exe -f shellcode.bin -g -r
```

- **Trace API calls**:
```bash
scdbg.exe -f shellcode.bin -api
```

- **Simulate network activity**:
```bash
scdbg.exe -f shellcode.bin -p 4444
```

- **Dump modified memory**:
```bash
scdbg.exe -f shellcode.bin -d
```

---

## 📋 Handy Options

|Option|Description|
|---|---|
|`-f <file>`|Load shellcode from a binary file|
|`-s <hex>`|Input shellcode as a hex string|
|`-g`|Display disassembly|
|`-r`|Show CPU register states|
|`-api`|Trace API calls|
|`-p <port>`|Simulate listening port for shellcode|
|`-d`|Dump modified memory regions|

---

## 🌐 Example Scenarios

- **Malware analysis**: Identify if shellcode attempts to open a reverse shell.
- **Incident response**: Extract IOCs such as domains, IPs, and file paths.
- **Threat hunting**: Understand persistence or injection attempts by disassembling behavior.
- **Red team**: Test custom shellcode payloads before deployment.

---

## 📚 References

- [scdbg Documentation](http://sandsprite.com/iDEFENSE/scdbg.html)
- [Practical Malware Analysis Book](https://nostarch.com/malware)

---

![VIDEO](https://www.youtube.com/watch?v=_M0JY0o8t1I)