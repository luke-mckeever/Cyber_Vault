# Nmap 🛰️🔍
#Tool #RED #TTNet 

Nmap (Network Mapper) is the go-to tool for network discovery, security scanning, and vulnerability assessment. This guide will help you unleash the full potential of Nmap. 🚀

**LINK TO TOOL DOCUMENTATION[ HERE](https://www.kali.org/tools/nmap/)**

**Nmap** is an open-source network scanner used to discover hosts, services, and vulnerabilities on a network. It’s widely used by system administrators, penetration testers, and ethical hackers.

---
<div style="text-align: center;">
<img src="https://nmap.org/images/nmap-logo-256x256.png" alt="nmap">
</div>

---
### 🛠 Features:
- Host discovery and port scanning.
- Service and OS detection.
- Scriptable with the Nmap Scripting Engine (NSE).
- Supports various scanning techniques.

---
### Installing Nmap

#### **Linux (Debian-based: Ubuntu, Kali, etc.)**
```sh
sudo apt update && sudo apt install nmap -y
```

#### **Windows**
1. Download the installer from the [official website](https://nmap.org/download.html).
2. Run the installer and follow the setup instructions.

---

## 🧰 Common Commands

### 🔍 Basic Host Discovery
```bash
nmap -sn 192.168.1.0/24
```
Ping scan to discover live hosts on a subnet.

### 📜 Scan Specific Ports
```bash
nmap -p 22,80,443 192.168.1.1
```
Scan specific ports on a target.

### 🔑 Detect Services and Versions
```bash
nmap -sV 192.168.1.1
```
Perform service version detection.

### 🕵️ OS Detection
```bash
nmap -O 192.168.1.1
```
Detect the operating system running on a target.

### 📂 Save Output to File
```bash
nmap -oN output.txt 192.168.1.1
```
Save scan results in a readable format.

---

## ⚙️ Advanced Usage

### 🌐 Scan a Range of IPs
```bash
nmap 192.168.1.1-254
```
Scan all IPs in a specified range.

### 🛠 Full Port Scan
```bash
nmap -p- 192.168.1.1
```
Scan all 65,535 ports.

### 🌐 Aggressive Scan
```bash
nmap -A 192.168.1.1
```
Enable OS detection, version detection, script scanning, and traceroute.

### 🛡️ Detect Vulnerabilities
```bash
nmap --script vuln 192.168.1.1
```
Run vulnerability detection scripts.

### 📊 Output in Multiple Formats
```bash
nmap -oA scan_results 192.168.1.1
```
Save results in Nmap, XML, and Grepable formats.

---

## 📋 Handy Options

|Option|Description|
|----------|---|
|`-sS`     |Perform a TCP SYN scan|
|`-sU`|UDP scan|
|`-sV`|Service version detection|
|`-O`|OS detection|
|`-A`|Aggressive scan (OS, services, scripts)|
|`-p`|Specify ports to scan|
|`-p-`|scans all ports (65,535)|
|`-oA`|Save output in all formats|
|`--script`|Run specific NSE scripts|
|`-T<0-5>`|Set scan timing template (0=slow, 5=fast)|
|`-Pn`|Treat all hosts as online (skip ping scan)|
|`-n`|Disable DNS resolution|
|`-v`|Increase verbosity|

---

## 🌐 Example Scenarios

### Scenario 1: Quick Network Sweep
```bash
nmap -sn 10.0.0.0/24
```
Discover live hosts on a subnet.

### Scenario 2: Scan Common Ports
```bash
nmap -p 21,22,80,443 10.0.0.1
```
Scan a host for common ports.

### Scenario 3: Full Vulnerability Scan
```bash
nmap -A --script vuln 10.0.0.1
```
Detect services, OS, and vulnerabilities on a target.

---

## 🚀 Pro Tips

### 1️⃣ Use Timing Templates
```bash
nmap -T4 192.168.1.1
```
Use `-T4` for faster scans, but beware of potential detection.

### 2️⃣ Combine with Other Tools
Export results and use tools like **Metasploit** or **Nessus** for advanced exploitation.

### 3️⃣ Automate with Scripts
Leverage the **Nmap Scripting Engine (NSE)** to automate tasks and detect vulnerabilities.

---

## 📚 References
- [Nmap Official Documentation](https://nmap.org/docs.html)
- [Nmap Scripting Engine (NSE)](https://nmap.org/book/nse.html)
- [SecLists Wordlists for Nmap](https://github.com/danielmiessler/SecLists)

---


