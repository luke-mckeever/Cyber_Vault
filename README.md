# My_Vault 🛡️

Welcome to **My_Vault** – your ultimate repository for all things **cybersecurity**! 🔐 Whether you're a seasoned professional or a curious learner, this repository offers a rich collection of resources designed to enhance your skills and knowledge. 

---

## Table of Contents 📚

- [Overview](#overview-)
- [Categories](#categories-)
  - [Tooling](#tooling-)
  - [Analysis](#analysis-)
  - [Cheatsheets](#cheatsheets-)
  - [Event Codes & Response Codes](#event-codes--response-codes-)
  - [Query Languages](#query-languages-)
  - [Malware Investigation](#malware-investigation-)
  - [Red & Blue Team Operations](#red--blue-team-operations-)
- [Contributing](#contributing-)
- [License](#license-)

---

## Overview 🌟

**My_Vault** serves as a comprehensive reference hub, housing essential resources for cybersecurity enthusiasts and professionals. Here, you'll find categorized information, tools, and tips that you can quickly access to:

- Sharpen your **defensive** and **offensive** skills ⚔️
- Decode cryptic **event and response codes** 🔍
- Dive deep into **malware investigation** 🕵️‍♂️
- Equip yourself with **cheatsheets** for quick problem-solving ⚡

---

## Categories 🗂️

### Tooling ⚙️
- 🛠️ **Popular Tools**: A curated list of tools for penetration testing, network analysis, and system hardening.
- 💻 **Automation Scripts**: Boost your productivity with pre-built scripts.

```
# Example Tool Commands
nmap -sV -p- 192.168.1.1   # Scan all ports on a target
metasploit-framework       # Exploit development framework
```

---

### Analysis 🔬
- 📊 **Network Traffic Analysis**: Best practices and tools.
- 🖥️ **Log Analysis**: Extract insights from system and application logs.

```mermaid
flowchart TD
    Logs[System Logs] --> SIEM[Security Information & Event Management]
    SIEM --> Insights[Actionable Insights]
```

---

### Cheatsheets 📄
- 🧾 **Command Cheatsheets**: Essential Linux, Windows, and network commands.
- 📝 **Regular Expressions**: Quick reference for regex patterns.

| Command  | Usage                       |
|----------|-----------------------------|
| `grep`   | Search text in files       |
| `awk`    | Process and extract data   |
| `sed`    | Stream editor              |

---

### Event Codes & Response Codes 🚦
- 🔑 **Windows Event Codes**: Decode critical security events.
- 🌐 **HTTP Response Codes**: Understand server responses.

| Event ID | Description                           |
|----------|---------------------------------------|
| 4625     | Failed login attempt                 |
| 5140     | File share accessed                  |
| 4688     | Process creation                     |

---

### Query Languages 🔍
- **SQL for Cybersecurity**
- **Splunk Search Processing Language (SPL)**
- **KQL (Kusto Query Language)**

```sql
-- Example: Find suspicious logins
SELECT *
FROM logins
WHERE login_status = 'failed';
```

---

### Malware Investigation 🕵️
- **Static and Dynamic Analysis Tools**
- **Common Indicators of Compromise (IoCs)**

```plaintext
IoC Example:
- Suspicious file hash: e99a18c428cb38d5f260853678922e03
- C2 IP Address: 192.168.100.10
```

---

### Red & Blue Team Operations 🚀
- 🔴 **Red Team**: Penetration testing guides and tools.
- 🔵 **Blue Team**: Defense strategies and incident response.

```mermaid
graph LR
    Recon[Reconnaissance] --> Exploit[Exploitation]
    Exploit --> Exfil[Exfiltration]
    Exfil --> Detect[Detection]
    Detect --> Contain[Containment]
```

---

> 🛡️ Stay secure and keep learning!