#Tool #RED 
# Searchsploit Cheatsheet 🔎💣

Welcome to the **Searchsploit Cheatsheet**! Searchsploit is a command-line utility that lets you search and utilize the Exploit-DB repository for public exploits and Proof-of-Concept (PoC) codes. This guide will help you maximize its potential. 🚀

---

## 🌟 What is Searchsploit?
**Searchsploit** is part of the Exploit-DB suite of tools, allowing you to:
- Search for exploits and vulnerabilities offline.
- Access a vast repository of public exploits.
- Easily integrate into pentesting workflows.

### 🛠 Features:
- Offline access to Exploit-DB.
- Categorized and keyword-based searches.
- Integration with Metasploit modules.
- User-friendly and fast.

---

## 🧰 Common Commands

### 🔍 Basic Search
```bash
searchsploit apache
```
Search for all exploits related to "apache."

### 📂 Specific Version Search
```bash
searchsploit apache 2.4.49
```
Search for vulnerabilities specific to version 2.4.49 of Apache.

### 🔒 Search by CVE
```bash
searchsploit CVE-2021-12345
```
Find exploits associated with a specific CVE ID.

### 🗂 Show Full Path of Exploits
```bash
searchsploit -p apache
```
Show the full path to exploits for "apache."

---

## ⚙️ Advanced Usage

### 🌐 Copy Exploit to Current Directory
```bash
searchsploit -m 12345
```
Copy exploit ID 12345 to your current directory.

### 🛠 Exclude Certain Terms
```bash
searchsploit apache -e "windows"
```
Exclude results containing the term "windows."

### 📜 Export Results to a File
```bash
searchsploit apache -o results.txt
```
Save the search results to a text file.

### 🧩 Use Exact Matches
```bash
searchsploit --exact "Apache Struts"
```
Search for exact matches of "Apache Struts."

---

## 📋 Handy Options

| Option          | Description                                      |
|-----------------|--------------------------------------------------|
| `-p`            | Show the full path to exploits                  |
| `-m`            | Copy exploit by ID                              |
| `-o`            | Output search results to a file                 |
| `--exact`       | Search for exact keyword matches                |
| `-e`            | Exclude terms from the search                   |
| `-w`            | Open exploits in a web browser                  |
| `-c`            | Perform a case-sensitive search                 |

---

## 🌐 Example Scenarios

### Scenario 1: Search and Use an Exploit
```bash
searchsploit apache 2.4.49
searchsploit -m 49311
```
Search for Apache exploits, then copy exploit ID 49311 to your working directory.

### Scenario 2: Search by CVE and Open in Browser
```bash
searchsploit CVE-2021-44228 -w
```
Search for the Log4Shell vulnerability and open the exploit in your web browser.

### Scenario 3: Export Results for Documentation
```bash
searchsploit mysql -o mysql_exploits.txt
```
Save all MySQL-related exploits to a text file for reporting.

---

## 🚀 Pro Tips

### 1️⃣ Keep Searchsploit Updated
Regularly update the Exploit-DB repository to stay current:
```bash
searchsploit -u
```

### 2️⃣ Use Filters
Combine filters like `-e` and `--exact` to narrow results for efficiency.

### 3️⃣ Integrate with Scripts
Incorporate Searchsploit commands into automated pentesting workflows for rapid exploitation.

---

## 📚 References
- [Exploit-DB Official Website](https://www.exploit-db.com/)
- [Searchsploit GitHub Repository](https://github.com/offensive-security/exploitdb)

![Happy Hunting!](https://via.placeholder.com/600x150?text=Happy+Hunting!)

---

✨ **Copy, paste, and find vulnerabilities with ease!** ✨
