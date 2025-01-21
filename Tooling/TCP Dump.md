#Tool
# TCPDump Cheatsheet 🛡️📡

Welcome to the **TCPDump Cheatsheet**! TCPDump is a powerful command-line packet analyzer used to capture and analyze network traffic. This guide will help you master TCPDump for effective network troubleshooting and analysis. 🚀

---

## 🌟 What is TCPDump?
**TCPDump** is a network packet capture tool that allows you to:
- Monitor and analyze network traffic in real-time.
- Save packets for offline analysis.
- Filter packets using complex expressions.

### 🛠 Features:
- Lightweight and efficient.
- Supports advanced packet filtering.
- Output can be saved in pcap format for use with Wireshark.
- Highly customizable with flags and options.

---

## 🧰 Common Commands

### 🔍 Capture All Traffic
```bash
tcpdump
```
Capture all traffic on the default network interface.

### 📡 Specify a Network Interface
```bash
tcpdump -i eth0
```
Capture traffic on the `eth0` network interface.

### 🎯 Filter by Host
```bash
tcpdump host 192.168.1.1
```
Capture traffic to and from a specific host.

### 🔒 Filter by Port
```bash
tcpdump port 443
```
Capture traffic on a specific port (e.g., HTTPS).

### 🗂 Save Output to a File
```bash
tcpdump -w capture.pcap
```
Save captured packets to a file for later analysis.

---

## ⚙️ Advanced Usage

### 🌐 Capture Specific Protocols
#### HTTP Traffic:
```bash
tcpdump -i eth0 tcp port 80
```
#### ICMP (Ping) Traffic:
```bash
tcpdump icmp
```

### 🕵️ Analyze DNS Queries
```bash
tcpdump -i eth0 udp port 53
```
Capture DNS query traffic.

### 🔍 Filter Traffic by Subnet
```bash
tcpdump net 192.168.1.0/24
```
Capture traffic to and from a specific subnet.

### 📜 Read Packets from a File
```bash
tcpdump -r capture.pcap
```
Analyze previously captured packets.

---

## 📋 Handy Options

| Option           | Description                                   |
|------------------|-----------------------------------------------|
| `-i`             | Specify the network interface                 |
| `-w`             | Write packets to a file                      |
| `-r`             | Read packets from a file                     |
| `-c`             | Capture a specific number of packets         |
| `-s`             | Set the snap length for packet capture       |
| `-A`             | Display packet contents in ASCII             |
| `-X`             | Display packet contents in HEX and ASCII     |
| `-n`             | Don’t resolve hostnames                     |
| `-v`, `-vv`      | Increase verbosity of packet output          |
| `-tt`            | Show absolute timestamps                     |

---

## 🌐 Example Scenarios

### Scenario 1: Capture HTTPS Traffic
```bash
tcpdump -i eth0 port 443
```
Capture all HTTPS traffic on the `eth0` interface.

### Scenario 2: Save and Analyze Packets
```bash
tcpdump -i eth0 -w https_traffic.pcap port 443
```
Save HTTPS traffic to a file for offline analysis with tools like Wireshark.

### Scenario 3: Monitor Traffic in Real-Time
```bash
tcpdump -i wlan0 -A port 80
```
Display HTTP traffic in real-time in ASCII format.

---

## 🚀 Pro Tips

### 1️⃣ Use Filters to Reduce Noise
Combine filters like `host`, `port`, and `net` to capture only the traffic you need:
```bash
tcpdump -i eth0 host 192.168.1.1 and port 22
```

### 2️⃣ Optimize Performance
Use `-s 0` to capture full packets for detailed analysis:
```bash
tcpdump -i eth0 -s 0 -w full_capture.pcap
```

### 3️⃣ Analyze Offline
Save captures and analyze them later with GUI tools like **Wireshark** or CLI tools like **tshark**.

---

## 📚 References
- [TCPDump Official Documentation](https://www.tcpdump.org/manpages/tcpdump.1.html)
- [Wireshark Project](https://www.wireshark.org/)

---

✨ **Copy, paste, and dive into network traffic like a pro!** ✨
