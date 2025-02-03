# FFUF ⚡🛠️
#Tool #RED #TTweb 

FFUF is a fast web fuzzer designed for penetration testers and bug bounty hunters. Use this guide to supercharge your fuzzing efforts. 🚀

**LINK TO TOOL DOCUMENTATION[ HERE](https://www.kali.org/tools/ffuf/)**

FFUF is a web fuzzing tool that helps you discover hidden files, directories, and parameters by sending crafted requests. It's incredibly fast and highly configurable, making it a must-have in your security toolkit.

---
![ffuf](https://www.kali.org/tools/ffuf/images/ffuf-logo.svg)

---
### 🛠 Features:
- High-speed fuzzing for web directories and parameters.
- Supports multiple protocols like HTTP, HTTPS.
- Flexible input options (wordlists, recursion, etc.).
- Advanced filtering capabilities (size, word count, etc.).

---
### Installing FFuF

#### 🟢 Linux/macOS (Go)
```sh
go install github.com/ffuf/ffuf/v2@latest
```

#### 🏁 Windows (Go)
```sh
go install github.com/ffuf/ffuf/v2@latest
```

---

## 🧰 Common Commands

### 🔍 Directory Fuzzing
```bash
ffuf -u https://example.com/FUZZ -w /path/to/wordlist.txt
```
Discover hidden directories and files.

### 🔐 Fuzzing with Authentication
```bash
ffuf -u https://example.com/FUZZ -w /path/to/wordlist.txt -H "Authorization: Bearer YOUR_TOKEN"
```
Send fuzzing requests with an authorization header.

### 🔑 Fuzzing Parameters
```bash
ffuf -u https://example.com/page?param=FUZZ -w /path/to/wordlist.txt
```
Identify hidden parameters in URLs.

### 🗂 Recursively Fuzz Directories
```bash
ffuf -u https://example.com/FUZZ -w /path/to/wordlist.txt -recursion -recursion-depth 2
```
Enable recursive fuzzing with specified depth.

### 📏 Filter Responses by Size
```bash
ffuf -u https://example.com/FUZZ -w /path/to/wordlist.txt -fs 1234
```
Filter out responses with a specific size.

---

## ⚙️ Advanced Usage

### 🌐 Use Multiple Wordlists
```bash
ffuf -u https://example.com/FUZZ -w /path/to/wordlist1.txt:/path/to/wordlist2.txt
```
Use multiple wordlists for fuzzing.

### 📊 Filter Responses by Lines
```bash
ffuf -u https://example.com/FUZZ -w /path/to/wordlist.txt -fl 20
```
Filter out responses with 20 lines.

### 📜 Match Specific HTTP Status Codes
```bash
ffuf -u https://example.com/FUZZ -w /path/to/wordlist.txt -mc 200,301
```
Match responses with HTTP status codes 200 or 301.

### 🔄 Custom HTTP Methods
```bash
ffuf -u https://example.com/FUZZ -w /path/to/wordlist.txt -X POST
```
Use a custom HTTP method (e.g., POST).

### 🔍 Fuzz Host Headers
```bash
ffuf -u https://example.com -w /path/to/wordlist.txt -H "Host: FUZZ"
```
Fuzz for subdomains via the Host header.

---

## 📋 Handy Options

| Option       | Description                              |
|--------------|------------------------------------------|
| `-u`         | Target URL with the FUZZ keyword         |
| `-w`         | Specify the wordlist path                |
| `-H`         | Add custom headers                      |
| `-X`         | Use a custom HTTP method                |
| `-fs`        | Filter by response size                 |
| `-fc`        | Filter by HTTP status code              |
| `-fl`        | Filter by number of response lines      |
| `-mc`        | Match specific HTTP status codes        |
| `-recursion` | Enable recursive fuzzing                |
| `-t`         | Set the number of concurrent threads     |

---

## 🌐 Example Scenarios

### Scenario 1: Discover Hidden Directories
```bash
ffuf -u https://example.com/FUZZ -w /path/to/wordlist.txt -mc 200
```

### Scenario 2: Fuzz Parameters
```bash
ffuf -u https://example.com/page?FUZZ=value -w /path/to/wordlist.txt -fc 404
```

### Scenario 3: Identify Subdomains
```bash
ffuf -u https://FUZZ.example.com -w /path/to/subdomains.txt -mc 200
```

---

## 🚀 Pro Tips

### 1️⃣ Optimize Wordlists
Use curated wordlists from SecLists for better results.

### 2️⃣ Combine Filters
Combine `-fc`, `-fs`, and `-fl` to refine results and reduce noise.

### 3️⃣ Automate Recursion
Enable recursive fuzzing with `-recursion` and set a maximum depth.

---

## 📚 References
- [FFUF GitHub Repository](https://github.com/ffuf/ffuf)
- [SecLists Wordlists](https://github.com/danielmiessler/SecLists)


---

✨ **Copy, paste, and fuzz away!** ✨
