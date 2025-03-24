# Wireshark 🦈
#BLUE #Tool #TTNet 

Wireshark is a powerful **open-source packet analyzer** used for network troubleshooting, analysis, communication protocol development, and cybersecurity forensics. It allows users to **capture** and **inspect network traffic** in real-time, making it an essential tool for security professionals, network engineers, and penetration testers.

**LINK TO TOOL DOCUMENTATION [HERE](https://www.wireshark.org/docs/)

---
![Wireshark Logo](https://www.wireshark.org/assets/img/wireshark-logo-light.png)

---

## 📥 How to Install Wireshark

### 🏴‍☠️ On Linux (Debian-based)
```bash
sudo apt install wireshark 
```

### 🖥️ On Windows
1. Download the installer from [Wireshark's official site](https://www.wireshark.org/download.html)

---

## 📡 Capturing Traffic
1. Open **Wireshark**
2. Select the **network interface** you want to capture traffic on
3. Click the **Start Capturing** button 🟢
4. Traffic will now be displayed in real-time 📶

>👉 **Tip**: Use **administrator/root privileges** if you can't see network interfaces!

---

## 📊 Analyzing Traffic
1. Click on a **packet** in the capture window
2. The **Packet Details** pane will show headers and protocols
3. The **Packet Bytes** pane will display raw packet data in hex

🔍 **Key Fields to Look For:**
- **Source IP & Destination IP** 🌍
- **Protocol Type** (TCP, UDP, HTTP, etc.) 📡
- **Payload Information** 📨

---

## 🔎 Filters
Wireshark supports **display filters** to refine packet views. Here are some commonly used ones:

| Filter | Description |
|--------|-------------|
| `ip.addr == 192.168.1.1` | Show packets related to IP 192.168.1.1 |
| `ip.src == 192.168.1.1` | Show packets where the source IP is 192.168.1.1 |
| `ip.dst == 192.168.1.1` | Show packets where the destination IP is 192.168.1.1 |
| `tcp.port == 80` | Show only HTTP (port 80) traffic |
| `http.request` | Display only HTTP requests |
| `dns` | Show only DNS packets |
| `tcp.flags.syn == 1` | Show only TCP SYN packets |
| `arp` | Show ARP request and replies |
| `icmp` | Show only ICMP packets (ping requests/replies) |
| `udp` | Show only UDP traffic |
| `tcp.stream eq 1` | Show packets from a specific TCP conversation |
| `frame contains "password"` | Search for specific keywords in packets |
| `eth.addr == AA:BB:CC:DD:EE:FF` | Filter by a specific MAC address |
| `ssl` | Show only SSL/TLS encrypted packets |
| `tls.handshake.type == 1` | Display only TLS Client Hello messages |
| `ftp` | Show only FTP traffic |
| `dhcp` | Show only DHCP packets |
| `radius` | Show only RADIUS authentication traffic |
| `smb` | Display only SMB (file-sharing) traffic |
| `ntp` | Show only Network Time Protocol packets |
| `tcp.analysis.retransmission` | Find TCP retransmissions |
| `tcp.analysis.lost_segment` | Identify lost TCP segments |
| `ip.ttl < 10` | Find packets with low TTL values (potential attacks) |
| `icmpv6` | Show only ICMPv6 packets |
| `http.cookie` | Filter for HTTP packets that include cookies |
| `ssl.handshake.extensions_server_name` | Find the SNI field in SSL/TLS handshakes |

---

## 📌 Example Scenarios

### 🔥 Scenario 1: Capturing Suspicious Network Traffic
1. Start Wireshark and filter for `tcp.port == 443`
2. Monitor the **Source/Destination IPs** to spot unusual connections 🌍
3. Identify **malicious payloads** or **unauthorized requests** 🚨

### 🎭 Scenario 2: Analyzing Slow Network Performance
1. Capture packets and filter with `tcp.analysis.flags`
2. Look for **retransmissions, duplicate ACKs, and high latency** 📉
3. Identify network congestion issues or **high packet loss** 🛑

### 🕵️ Scenario 3: Extracting Credentials from Unencrypted Traffic
1. Capture packets on a public Wi-Fi network ✈️
2. Filter using `http.request.method == "POST"`
3. Extract **usernames and passwords** if the traffic is unencrypted ⚠️

---

## 📚 References
- [Wireshark User Guide](https://www.wireshark.org/docs/wsug_html/) 📖
- [Wireshark Display Filters Reference](https://www.wireshark.org/docs/dfref/) 🧐

---

## 🎬 Video Guide

![VIDEO](https://www.youtube.com/watch?v=lb1Dw0elw0Q&t=68s)

---

🚀 **Happy Packet Capturing!** 🦈💻