# KAPE 🚀
#tool #TTDF #EZ

![KAPE Logo](https://upload.wikimedia.org/wikipedia/commons/0/06/Kroll_Logo_2021.png)  

**Kroll Artifact Parser and Extractor (KAPE)** is a powerful forensics tool used to collect, process, and analyze forensic artifacts efficiently. Whether you're investigating incidents, analyzing digital evidence, or responding to cyber threats, **KAPE** makes it easier and faster! 🔥

hi

---

## 🚀 Getting Started

### 🔹 Step 1: Download KAPE

1. **Visit:** [https://www.kroll.com/kape](https://www.kroll.com/kape) 
2. **Download** the latest release.
3. **Extract** the contents to a folder.

### 🔹 Step 2: Run KAPE

KAPE operates with two core components:
- `kape.exe` (GUI mode)
- `kape.cmd` (Command-line mode)

#### 🖥️ GUI Mode:
Simply double-click `kape.exe`, configure your settings, and start collecting artifacts! 🎯

#### 🔥 Command-Line Mode:
Run the following command to collect forensic artifacts:
```bash
kape.exe --tsource C:\ --tdest E:\KAPE_Output --target Registry,EventLogs
```
📌 This command collects **Registry** and **Event Logs** from drive `C:\` and saves them to `E:\KAPE_Output`.

---

## 📖 Common Usage Examples

### 1️⃣ Collecting Live System Artifacts:
```bash
kape.exe --tsource C:\ --tdest D:\KAPE_Collected --target !BasicCollection
```
This captures essential forensic artifacts from a live system.

### 2️⃣ Parsing Artefacts with KAPE Modules:
```bash
kape.exe --msource D:\KAPE_Collected --mdest D:\ParsedData --module !EZParser
```
This processes the collected data using **EZParser** to extract useful forensic information.

### 3️⃣ Running KAPE with Custom Targets & Modules:
```bash
kape.exe --tsource C:\ --tdest E:\Artifacts --target EventLogs --module PrefetchParser
```
Collects **Event Logs** and processes them using **PrefetchParser**.

### 4️⃣ Extracting Registry Hives as Artefacts
run the following command to extract all registry hives as artefacts 
which include the following hives: Other, System & User
```bash
.\kape.exe --tsource C: --tdest <insert destination location> --tflush --target RegistryHives,RegistryHivesOther,RegistryHivesSystem,RegistryHivesUser --gui
```