# Nikto 🛡️🔎
#Tool #RED #TTweb 

Nikto is a powerful and simple web server scanner that identifies vulnerabilities, misconfigurations, and outdated software on web servers. This guide will help you master Nikto's capabilities with ease. 🚀

**LINK TO TOOL DOCUMENTATION[ HERE](https://www.kali.org/tools/nikto/)**

**Nikto** is an open-source web server scanner designed for:
- Detecting outdated server software.
- Identifying insecure server configurations.
- Finding default files and directories.
- Spotting potential vulnerabilities.

---
![nikto](https://www.kali.org/tools/nikto/images/nikto-logo.svg)

---

### 🛠 Features:
- Supports multiple web server protocols (HTTP, HTTPS, etc.).
- SSL/TLS support.
- Proxy support.
- Comprehensive scan database.

---
### Installing Nikto - Web Vulnerability Scanner
#### **Installation on Linux/macOS**
```bash
# Update package lists
sudo apt update  # (For Debian/Ubuntu)

# Install Nikto using package manager
sudo apt install nikto  # (For Debian/Ubuntu)

# OR install via Git for latest version
sudo apt install git perl

git clone https://github.com/sullo/nikto.git
cd nikto
chmod +x program/nikto.pl
```

#### **Installation on Windows**
1. Download and install **Strawberry Perl** from [strawberryperl.com](https://strawberryperl.com/).
2. Clone the Nikto repository:
   ```powershell
   git clone https://github.com/sullo/nikto.git
   cd nikto
   ```
3. Run Nikto using Perl:
   ```powershell
   perl program/nikto.pl -h
   ```

---


## 🧰 Common Commands

### 🔍 Basic Scan
```bash
nikto -h http://example.com
```
Perform a basic scan on a target web server.

### 🔐 Scan HTTPS Server
```bash
nikto -h https://example.com
```
Scan a web server running over HTTPS.

### 📡 Specify Port
```bash
nikto -h http://example.com -p 8080
```
Scan a web server on a non-standard port.

### 📜 Save Output to File
```bash
nikto -h http://example.com -o scan_results.txt
```
Save the scan results to a file.

---

## ⚙️ Advanced Usage

### 🌐 Use Host Header
```bash
nikto -h http://192.168.1.1 -host example.com
```
Set a custom host header for the request.

### 🚀 Increase Scan Tuning
```bash
nikto -h http://example.com -Tuning 1
```
Enable tuning to focus on specific scan types (e.g., file uploads).

### 🧹 Ignore Specific Checks
```bash
nikto -h http://example.com -id 002,034
```
Skip specific tests by their ID.

### 🔄 Scan Multiple Targets
```bash
nikto -h hosts.txt
```
Scan multiple hosts listed in a file.

---

## 📋 Handy Options

| Option           | Description                                         |
|------------------|-----------------------------------------------------|
| `-h`             | Target host or file containing target hosts         |
| `-p`             | Specify the port to scan                           |
| `-o`             | Output file for scan results                       |
| `-id`            | Skip specific checks by ID                         |
| `-ssl`           | Force SSL/TLS                                      |
| `-timeout`       | Set connection timeout in seconds                  |
| `-Tuning`        | Enable specific types of tests                     |
| `-list-plugins`  | List available plugins and their descriptions       |

---

## 🌐 Example Scenarios

### Scenario 1: Scan a Default Website
```bash
nikto -h http://example.com
```
Perform a standard scan of a website.

### Scenario 2: Scan a Specific Port
```bash
nikto -h http://example.com -p 8443
```
Target a website running on port 8443.

### Scenario 3: Save Results as HTML
```bash
nikto -h http://example.com -o report.html -Format html
```
Generate a user-friendly HTML report of the scan.

---

## 🚀 Pro Tips

### 1️⃣ Combine with Nmap
Use Nmap to identify open ports and then target them with Nikto for in-depth scanning.
```bash
nmap -p 80,443 example.com | nikto -h -
```

### 2️⃣ Automate Scans
Schedule Nikto scans using cron jobs for regular vulnerability assessments.

### 3️⃣ Use in Scripts
Integrate Nikto into larger automation frameworks or security pipelines for continuous testing.

---

## 📚 References
- [Nikto Official GitHub](https://github.com/sullo/nikto)
- [OWASP Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)

---

