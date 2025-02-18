# Volatility 🕵️‍♂️🔍💻
#Tool  #TTDF 

Volatility is a powerful memory forensics framework used for analyzing RAM dumps to extract critical forensic artifacts. It helps cybersecurity professionals, incident responders, and digital forensic analysts investigate malware infections, uncover hidden processes, and detect anomalies within volatile memory.

**🔗 [Volatility Official Documentation](https://www.volatilityfoundation.org/)**

## 🛠 What is Volatility?
Volatility is an open-source memory forensics framework that allows investigators to extract digital artifacts from RAM dumps. It supports various operating systems and file formats, making it a crucial tool for forensic investigations.

---
![Volatility](https://volatilityfoundation.org/wp-content/uploads/2023/12/Volatility-newest-png-crop.png)
---

### 🛠 Features:
- 🕵️ Extracts process lists, network connections, and registry hives.
- 🦠 Detects and analyzes malware within memory dumps.
- 🏴‍☠️ Recovers files and hidden data from volatile memory.
- 📊 Supports multiple memory dump formats (RAW, EWF, etc.).
- 🔬 Compatible with Windows, Linux, and macOS.
- 🔄 Open-source and actively maintained by the forensics community.

---

### 🚀 Installing Volatility

#### 🔹 **Pre-Requisites** 
```bash
`sudo apt install python3 python3-pip git`
```
- Volatility will require the following: Python3, Pip, Git

#### 🔹 **Clone Repository** 
```bash
git clone --branch stable [https://github.com/volatilityfoundation/volatility3](https://github.com/volatilityfoundation/volatility3)
```
- The above will clone the official (stable-branch) git hub repository for volatility

#### 🔹 **Move into Directory**
```bash
cd volatility3
```

#### 🔹 **Install Python Virtual Environment**
```bash
sudo apt install python3-venv
```
- This will ensure any new packages downloaded will not interfere with the default system packages 

#### 🔹 **Create a New Virtual Environment**
```bash
python3 -m venv <ENVIRONMENT NAME>
```

#### 🔹 **Activate The Virtual Environment You Created**
```bash
source venv/bin/activate
```
- This can also be used to returned to the virtual environment

#### 🔹 **Install Volatility Requirements**
```bash
pip install -r requirements.txt
```

#### 🔹 **Execute Volatility**
```bash
python3 vol.py
```


---


## 🧰 Common Commands
Below are some essential commands that can be used with Volatility to perform various forensic analyses:


##### Memory Info Dump
This will provide a high level overview of the OS and architecture used within the memory dump file

Replace OS with the specified operating system the memory dump originated from

```bash
python3 vol.py -f <FILENAME.vmem> <OS>.info
```
---

#### Network Memory Analysis

##### Network Statistics
- This will dump all known network Statistics within the memory dump
```bash
python3 vol.py -f <FILENAME.vmem> <OS>.netstat
```

##### Network Scan
- This will identify all known network connections within the memory dump
```bash
python3 vol.py -f <FILENAME.vmem> <OS>.netscan
```
---

#### Process Memory Analysis

##### List Processes 
- This will list all running processes on the machine at the time the memory dump was taken
```bash
python3 vol.py -f <FILENAME.vmem> <OS>.pslist
```


---

---

```bash
volatility -f memory.dmp --profile=Win7SP1x64 pslist  
```
- List running processes

```bash
volatility -f memory.dmp --profile=Win7SP1x64 dlllist  
```
- List loaded DLLs

```bash
volatility -f memory.dmp --profile=Win7SP1x64 netscan  
```
- Scan for network connections

```bash
volatility -f memory.dmp --profile=Win7SP1x64 filescan  
```
- Scan for files in memory

```bash
volatility -f memory.dmp --profile=Win7SP1x64 connscan  
```
- Find active and closed connections

```bash
volatility -f memory.dmp --profile=Win7SP1x64 cmdscan  
```
- Retrieve commands executed in a session

```bash
volatility -f memory.dmp --profile=Win7SP1x64 malfind  
```
- Detect malware in memory

```bash
volatility -f memory.dmp --profile=Win7SP1x64 getsids  
```
- Retrieve security identifiers of processes


---

## ⚙️ Advanced Usage
For deeper forensic investigations, the following advanced commands can be used:
```bash
volatility -f memory.dmp --profile=Win7SP1x64 hivelist  # Locate registry hives
volatility -f memory.dmp --profile=Win7SP1x64 hivedump -o 0xaddress  # Extract registry contents
volatility -f memory.dmp --profile=Win7SP1x64 dumpfiles -Q 0x12345678 -D output_dir  # Extract files from memory
volatility -f memory.dmp --profile=Win7SP1x64 procdump -p 1234 -D output_dir  # Dump a process memory
volatility -f memory.dmp --profile=Win7SP1x64 modscan  # Scan for kernel modules
volatility -f memory.dmp --profile=Win7SP1x64 ssdt  # Check for system service table hooks (rootkit detection)
volatility -f memory.dmp --profile=Win7SP1x64 shimcache  # Retrieve application execution history
volatility -f memory.dmp --profile=Win7SP1x64 shellbags  # Extract evidence of folder navigation
```

---

## 📋 Handy Options
Below are commonly used options that enhance Volatility's functionality:

| Option   | Description |
|----------|---------------------------------------------------|
| `-f`     | Specifies the memory dump file                 |
| `--profile` | Sets the OS profile for better analysis       |
| `pslist` | Displays active processes                        |
| `pstree` | Shows parent-child relationships of processes    |
| `netscan`| Scans for network activity within memory        |
| `handles` | Lists open handles within processes             |
| `dumpfiles` | Extracts files found in memory               |
| `malfind` | Scans for hidden or injected malware           |
| `hivelist` | Displays registry hives                        |
| `cmdscan` | Retrieves command-line history                  |

---

## 🌐 Example Scenarios
- 🔍 **Investigating a Malware Attack**: Identify malicious processes running in memory using `pslist` and `malfind`.
- 💾 **Recovering Deleted Files**: Use `filescan` and `dumpfiles` to retrieve hidden or deleted files.
- 🏴‍☠️ **Detecting Rootkits**: Analyze hidden drivers and kernel hooks using `modscan` and `ldrmodules`.

---

## 🚀 Pro Tips
- Use `imageinfo` to detect the best profile for analysis.
- Combine Volatility with YARA rules to detect malware signatures.
- Automate analysis with custom Python scripts.

---

## 📚 References
- [Volatility GitHub](https://github.com/volatilityfoundation/volatility)
- [Official Documentation](https://www.volatilityfoundation.org/)

---

![VIDEO](https://www.youtube.com/watch?v=Uk3DEgY5Ue8)
