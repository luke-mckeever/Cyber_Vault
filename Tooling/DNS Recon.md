#Tool #RED
# DNS Recon Cheatsheet 🌐🔍

Welcome to the **DNS Recon Cheatsheet**! DNS Recon is an essential tool for performing DNS enumeration and reconnaissance. It's widely used for ethical hacking, penetration testing, and domain investigations. This guide will help you master DNS Recon like a pro. 🚀

---

## 🌟 What is DNS Recon?
DNS Recon is a powerful DNS enumeration tool that collects DNS records, performs zone transfers, and detects misconfigurations. It provides vital information for security audits and network diagnostics.

### 🛠 Features:
- Enumerate DNS records (A, AAAA, MX, TXT, SRV, etc.).
- Detect zone transfers and cache snooping.
- Perform brute-forcing and reverse lookups.
- Support for various DNS servers and query types.

---

## 🧰 Common Commands

### 🔍 Basic DNS Lookup
```bash
dnsrecon -d example.com
```
Enumerate DNS records for a domain.

### 📂 Zone Transfer Check
```bash
dnsrecon -d example.com -t axfr
```
Check for misconfigured zone transfers.

### 🔧 Record Type Enumeration
```bash
dnsrecon -d example.com -t std
```
Perform standard enumeration to gather A, AAAA, MX, and other records.

### 🔑 Reverse Lookup
```bash
dnsrecon -d example.com -r 192.168.1.0-192.168.1.255
```
Perform reverse lookups on a range of IP addresses.

### 🏷 Brute-Force Subdomains
```bash
dnsrecon -d example.com -D subdomains.txt -t brt
```
Brute-force subdomains using a wordlist.

### 🧪 Zone Walk
```bash
dnsrecon -d example.com -z
```
Attempt to perform a zone walk.

---

## ⚙️ Advanced Usage

### 🌐 DNSSEC Validation
```bash
dnsrecon -d example.com -t dnssec
```
Check for DNSSEC records and validation.

### 📡 Service Record Enumeration
```bash
dnsrecon -d example.com -t srv
```
Enumerate SRV records for services like SIP, LDAP, and more.

### 🗂 Cache Snooping
```bash
dnsrecon -d example.com -t snoop
```
Test for DNS cache snooping vulnerabilities.

### 📊 Save Output to File
```bash
dnsrecon -d example.com -o output.txt
```
Save results to a text file for further analysis.

---

## 📋 Handy Options

| Option       | Description                       |
|--------------|-----------------------------------|
| `-d`         | Specify the domain name           |
| `-t`         | Select the enumeration type       |
| `-D`         | Specify a subdomain wordlist file |
| `-r`         | Provide an IP range for lookup    |
| `-z`         | Attempt zone walk                 |
| `-o`         | Save output to a file             |
| `-h`         | Display help menu                 |

---

## 🌐 Example Scenarios

### Scenario 1: Quick Domain Recon
```bash
dnsrecon -d example.com -t std
```
Quickly gather all standard records.

### Scenario 2: Brute-Force Subdomains
```bash
dnsrecon -d example.com -D /path/to/subdomains.txt -t brt
```
Find hidden subdomains for a target domain.

### Scenario 3: Check for Zone Transfer
```bash
dnsrecon -d example.com -t axfr
```
Detect misconfigurations that allow zone transfers.

---

## 🚀 Pro Tips

### 1️⃣ Use with Wordlists
Use high-quality wordlists like those from SecLists to improve subdomain brute-forcing.

### 2️⃣ Combine with Other Tools
Pair DNS Recon with tools like **dig**, **nslookup**, or **Nmap** for comprehensive recon.

### 3️⃣ Automate Tasks
Script DNS Recon commands to automate repetitive enumeration tasks.

---

## 📚 References
- [DNS Recon GitHub Repository](https://github.com/darkoperator/dnsrecon)
- [DNS Basics](https://en.wikipedia.org/wiki/Domain_Name_System)

![Happy DNS Hacking!](https://via.placeholder.com/600x150?text=Happy+DNS+Hacking!)

---

✨ **Copy, paste, and start enumerating DNS like a boss!** ✨
