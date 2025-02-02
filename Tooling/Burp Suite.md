#Tool #RED #TTweb
# Burp Suite Cheatsheet 🛡️

Welcome to the ultimate **Burp Suite Cheatsheet**! 🎉 This page is your one-stop guide to mastering Burp Suite for your web application security testing needs. Whether you're a beginner or an advanced user, this cheatsheet has you covered. 

---

![Burp Suite Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Logo_of_PortSwigger.svg/1920px-Logo_of_PortSwigger.svg.png)

---

## 🤔 What is Burp Suite?
**Burp Suite** is a powerful web vulnerability scanner and proxy tool developed by **PortSwigger**. It's widely used by penetration testers and security researchers to find and exploit vulnerabilities in web applications.

> **Key Use:** It intercepts HTTP/S traffic between your browser and target application, allowing you to inspect and manipulate requests and responses.

---

## 🌟 Core Features
### 1. **Intercepting Proxy**
- Capture and modify HTTP/S traffic in real-time.
- Inspect headers, cookies, and payloads.

### 2. **Scanner** (Pro Only)
- Automated scanning for common vulnerabilities like **XSS**, **SQL Injection**, and more.

### 3. **Repeater**
- Send and modify individual HTTP requests to test server behavior.

### 4. **Intruder**
- Automate attacks such as fuzzing, credential brute-forcing, and parameter testing.

### 5. **Extender**
- Integrate with community-developed plugins for enhanced functionality.

### 6. **Decoder**
- Encode/decode text and data in multiple formats (e.g., Base64, URL-encoded).

### 7. **Comparer**
- Compare two HTTP requests or responses side-by-side.

![Burp Suite Modules](https://portswigger.net/burp/images/burp-modules.png)

---

## 🔍 Common Use Cases
- 🕵️‍♂️ Identifying vulnerabilities such as **SQL Injection**, **Cross-Site Scripting (XSS)**, and **CSRF**.
- 🔒 Testing authentication mechanisms and session management.
- 🌐 Performing security assessments on APIs.
- 📊 Reporting security issues.

---

## ⚙️ Quick Setup Guide
1. **Download Burp Suite** from [PortSwigger's website](https://portswigger.net/burp/community).
2. Configure your browser to use Burp Suite's proxy:
   - Set the proxy to `127.0.0.1:8080`.
   - Install the **Burp Suite CA Certificate** for HTTPS interception.
3. Start intercepting and analyzing traffic! 🕵️‍♀️

---

## 🛠️ Handy Tips & Tricks
- **Turn Off Intercept:** Use the "Intercept is off" button when you only want to passively capture traffic.
- **Use Filters:** Apply filters in the Proxy tab to focus on relevant requests.
- **Custom Profiles:** Save configurations for repeat assessments.
- **Regex Magic:** Use regex in the Intruder for smarter payload generation.
- **Hotkeys:** Master hotkeys to boost productivity (see below).

---

## 🎹 Keyboard Shortcuts
| Action                        | Shortcut      |
|-------------------------------|---------------|
| Toggle Intercept              | `Ctrl + I`    |
| Send to Repeater              | `Ctrl + R`    |
| Send to Intruder              | `Ctrl + Shift + I` |
| Search                        | `Ctrl + F`    |
| Start/Stop Scanner            | `Ctrl + T`    |

---

## 🧩 Extensions
Enhance Burp Suite's functionality with **Burp Extensions**:
- **Retire.js**: Find outdated JavaScript libraries.
- **JSON Web Tokens (JWT)**: Analyze and test JWTs.
- **Logger++**: Advanced logging for HTTP requests.

> Install extensions via the **BApp Store** in the Extender tab.

---

## 🛠️ Troubleshooting
- **Proxy Not Working?** Ensure your browser's proxy is set to Burp's address and port.
- **HTTPS Issues?** Make sure the Burp CA certificate is installed.
- **Slow Performance?** Disable modules you’re not actively using (e.g., Scanner).

---

## 📚 Additional Resources
- [PortSwigger Academy](https://portswigger.net/web-security): Free learning platform.
- [Official Documentation](https://portswigger.net/burp/documentation): Detailed guides.

---

**Happy Hacking! 🚀**
