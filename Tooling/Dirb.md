# DIRB 🕵️‍♂️🚀
#WebDiscovery #Pentesting #SecurityTool

DIRB is a powerful web content scanner that brute-forces directories and files on web servers. It's a must-have tool for penetration testers and security analysts!

**🔗 [Official Documentation](https://tools.kali.org/web-applications/dirb)**

DIRB helps security professionals uncover hidden directories and sensitive files on web servers, assisting in vulnerability assessments.

---
![DIRB](https://www.kali.org/tools/dirb/images/dirb-logo.svg)

---

### 🛠 Features:
- 🌐 **Web directory brute-forcing**
- 📝 **Custom wordlist support**
- 🚀 **Recursive scanning**
- 🔍 **Proxy support**
- 🛡️ **Useful for web pentesting**

---

### 🚀 Installing DIRB

#### 🔹 **Linux**
```bash
sudo apt update && sudo apt install dirb
```

---

## 🧰 Common Commands

### Basic Scan
```bash
 dirb http://example.com
```

### Using a Custom Wordlist
```bash
 dirb http://example.com /path/to/wordlist.txt
```

### Scanning with a Proxy
```bash
 dirb http://example.com -p http://127.0.0.1:8080
```

### Recursive Scan
```bash
 dirb http://example.com -r
```

---

## ⚙️ Advanced Usage

```bash
# Scanning HTTPS with custom wordlist
 dirb https://example.com /usr/share/wordlists/rockyou.txt

# Excluding certain extensions
 dirb http://example.com -X .jpg,.png,.css,.js

# Saving results to a file
 dirb http://example.com -o results.txt
```

---

## 📋 Handy Options

| Option   | Description                          |
|----------|--------------------------------------|
| `-r`     | Recursive scan - Scans subdirectories automatically. |
| `-p`     | Use proxy - Allows scanning through an HTTP proxy. Useful for anonymization or testing via Burp Suite. |
| `-X`     | Exclude file types - Helps filter out unwanted file extensions to refine results. Example: `-X .jpg,.css,.js`. |
| `-o`     | Output results to file - Saves scan results to a specified file for later analysis. Example: `-o scan_results.txt`. |
| `-a`     | Custom user-agent - Simulates different browsers to avoid detection or bypass restrictions. Example: `-a "Mozilla/5.0"`. |
| `-f`     | Force scan - Continues scanning even after encountering errors or HTTP 403 Forbidden responses. |
| `-t`     | Set timeout - Defines the time delay between requests to avoid rate limiting. Example: `-t 1` (1-second delay). |
| `-S`     | Silent mode - Suppresses non-essential output for a cleaner terminal display. |
| `-u`     | Ignore URLs - Allows specifying URLs to exclude from scanning. Useful when some paths are known to be unnecessary. |

---

## 🌐 Example Scenarios

🔹 **Pentesting Engagement:** You need to find hidden admin panels on a target website.
```bash
dirb http://target.com /usr/share/wordlists/common.txt
```

🔹 **Bypassing 403 Forbidden:** Some directories return a forbidden error, but you suspect they exist.
```bash
dirb http://target.com -X .txt,.php,.html
```

🔹 **Finding Backup Files:** Look for common backup files that could expose sensitive data.
```bash
dirb http://target.com -X .bak,.zip,.tar.gz
```

---

## 🚀 Pro Tips
- 🛠️ **Combine with other tools** like **Gobuster** for better results.
- 🎯 **Use targeted wordlists** for specific apps (e.g., `joomla.txt` for Joomla sites).
- 🏃 **Run scans off-hours** to avoid detection.
- 🔥 **Use a proxy** (e.g., Burp Suite) to analyze responses.

---

## 📚 References
- [Kali Linux DIRB Documentation](https://tools.kali.org/web-applications/dirb)
- [Pentesting Wiki - DIRB](https://pentest-tools.com)

---

![VIDEO](https://www.youtube.com/watch?v=IEVoC7ddkfY)  
