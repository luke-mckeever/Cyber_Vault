# TCPDump 🛡️📡
#Tool #BLUE #TTNet 

TCPDump is a powerful command-line packet analyzer used to inspect and analyze captured network traffic files. This guide focuses on using TCPDump for offline analysis from PCAP files. 📦

**LINK TO TOOL DOCUMENTATION [HERE](https://www.kali.org/tools/tcpdump/)**

**TCPDump** allows you to:
- Read and analyze saved packet captures.
- Filter and display specific network events.
- Extract valuable information from captured data.

---
![tcpdump](https://www.kali.org/tools/tcpdump/images/tcpdump-logo.svg)

---
### Installing `tcpdump`

#### On Debian/Ubuntu:
```sh
sudo apt update && sudo apt install -y tcpdump
```

---

## 🧰 Essential Analysis Commands

### 📖 Read Packets from a File
```bash
tcpdump -r capture.pcap
```
Display packets from a saved PCAP file.

### 🔍 Filter by Host
```bash
tcpdump -r capture.pcap host 192.168.1.1
```
Display traffic involving a specific host.

### 🌐 Filter by Protocol
```bash
tcpdump -r capture.pcap tcp
```
Show only TCP packets.

### 🎯 Filter by Port
```bash
tcpdump -r capture.pcap port 443
```
Display packets using a specific port (e.g., HTTPS).

### 📜 Display ASCII Content
```bash
tcpdump -r capture.pcap -A
```
Show packet contents in ASCII for payload inspection.

### 🧩 Combine Filters
```bash
tcpdump -r capture.pcap host 192.168.1.1 and port 22
```
Filter packets by multiple criteria.

### 📝 Use Delimiters for Improved Readability
```bash
tcpdump -r capture.pcap -E "password@1:2:3"
```
Use delimiters for enhanced readability when dealing with encrypted or segmented data. Replace `password@1:2:3` with the appropriate delimiter format as per your capture context.

---

## ⚙️ Advanced Usage

### 🕵️ Inspect DNS Queries
```bash
tcpdump -r capture.pcap udp port 53
```
Analyze DNS query packets.

### 🕰️ View Timestamps
```bash
tcpdump -r capture.pcap -tt
```
Display absolute timestamps for event timing.

### 🗂 Limit Output
```bash
tcpdump -r capture.pcap -c 100
```
Show only the first 100 packets.

### 🧬 Display Packet Details
```bash
tcpdump -r capture.pcap -X
```
Show packet contents in HEX and ASCII.

---

## 📋 Handy Options

| Option           | Description                                   |
|------------------|-----------------------------------------------|
| `-r`             | Read packets from a file                     |
| `-A`             | Display packet contents in ASCII             |
| `-X`             | Display packet contents in HEX and ASCII     |
| `-c`             | Capture a specific number of packets         |
| `-n`             | Don’t resolve hostnames                     |
| `-tt`            | Show absolute timestamps                     |
| `-v`, `-vv`      | Increase verbosity of packet output          |

---

## 🌐 Example Analysis Scenarios

### Scenario 1: Investigate Web Traffic
```bash
tcpdump -r capture.pcap port 80 or port 443
```
Identify HTTP and HTTPS packets.

### Scenario 2: Extract SSH Connections
```bash
tcpdump -r capture.pcap tcp port 22
```
Analyze SSH communication.

### Scenario 3: Display Packet Payloads
```bash
tcpdump -r capture.pcap -A port 80
```
Inspect HTTP payloads in ASCII.

---

## 🚀 Pro Tips

### 1️⃣ Combine Filters for Precision
```bash
tcpdump -r capture.pcap host 10.0.0.5 and port 443
```
Filter by both host and port for targeted analysis.

### 2️⃣ Focus on Full Packets
```bash
tcpdump -r capture.pcap -s 0
```
Ensure packets are displayed with their full content.

### 3️⃣ Increase Verbosity
```bash
tcpdump -r capture.pcap -vv
```
Gain more detailed information per packet.

---

## 📚 References
- [TCPDump Official Documentation](https://www.tcpdump.org/manpages/tcpdump.1.html)
- [Wireshark Project](https://www.wireshark.org)
