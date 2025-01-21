#Tool #RED
# LDAP Domain Dump Cheatsheet 🛡️📜

Welcome to the **LDAP Domain Dump Cheatsheet**! This tool is essential for extracting data from LDAP directories, commonly used in Active Directory environments. Use this guide to navigate LDAP recon like a pro! 🚀

---

## 🌟 What is LDAP Domain Dump?
**LDAP Domain Dump** is a utility for querying and extracting information from LDAP directories. It’s a go-to tool for penetration testers and sysadmins to enumerate users, groups, and domain information.

### 🛠 Features:
- Extract users, groups, and computers from LDAP.
- Retrieve organizational unit (OU) information.
- Support for plaintext and Kerberos authentication.
- Easily customizable LDAP queries.

---

## 🧰 Common Commands

### 🔍 Basic Enumeration
```bash
ldapdomaindump -u DOMAIN\\user -p password -d domain.local -o output_folder
```
Perform a basic LDAP dump using credentials.

### 🔑 Kerberos Authentication
```bash
ldapdomaindump --kerberos -d domain.local -o output_folder
```
Use Kerberos tickets for LDAP enumeration.

### 📜 Save Output to JSON
```bash
ldapdomaindump -u DOMAIN\\user -p password -d domain.local -o output_folder --json
```
Save results in JSON format for easy parsing.

### 🗂 Filter Specific OU
```bash
ldapdomaindump -u DOMAIN\\user -p password -d domain.local -o output_folder -b "OU=SpecificOU,DC=domain,DC=local"
```
Dump only information from a specific organizational unit.

---

## ⚙️ Advanced Usage

### 🌐 Use LDAP Server IP
```bash
ldapdomaindump -u DOMAIN\\user -p password -d domain.local -o output_folder -s 192.168.1.100
```
Connect directly to an LDAP server using its IP address.

### 🔒 Secure Connection
```bash
ldapdomaindump -u DOMAIN\\user -p password -d domain.local -o output_folder -ssl
```
Enable SSL/TLS for secure communication.

### 🔍 Search Custom Attributes
```bash
ldapdomaindump -u DOMAIN\\user -p password -d domain.local -o output_folder --attributes cn,mail,sAMAccountName
```
Retrieve only specified attributes.

### 🧵 Multithreading
```bash
ldapdomaindump -u DOMAIN\\user -p password -d domain.local -o output_folder --threads 10
```
Enable multithreading to speed up enumeration.

---

## 📋 Handy Options

| Option            | Description                                   |
|-------------------|-----------------------------------------------|
| `-u`              | Username for LDAP authentication             |
| `-p`              | Password for LDAP authentication             |
| `-d`              | Domain to target                             |
| `-o`              | Output directory for results                 |
| `-ssl`            | Enable SSL/TLS for communication             |
| `--kerberos`      | Use Kerberos authentication                  |
| `--attributes`    | Specify custom attributes to retrieve         |
| `-b`              | Base DN for the LDAP query                   |
| `--json`          | Save results in JSON format                  |
| `--threads`       | Set number of threads for faster processing  |

---

## 🌐 Example Scenarios

### Scenario 1: Dump Entire LDAP Directory
```bash
ldapdomaindump -u DOMAIN\\admin -p password123 -d corp.local -o ldap_results
```
Dump all LDAP directory data and save to a folder.

### Scenario 2: Kerberos-Based Enumeration
```bash
ldapdomaindump --kerberos -d corp.local -o ldap_results
```
Use Kerberos tickets to authenticate and query LDAP.

### Scenario 3: Query Specific OU
```bash
ldapdomaindump -u DOMAIN\\admin -p password123 -d corp.local -o ldap_results -b "OU=Finance,DC=corp,DC=local"
```
Enumerate data only from the Finance organizational unit.

---

## 🚀 Pro Tips

### 1️⃣ Optimize Queries
Focus on specific attributes and base DNs to speed up enumeration and reduce noise.

### 2️⃣ Combine Tools
Use LDAP Domain Dump alongside tools like **BloodHound** or **Nmap** for comprehensive recon.

### 3️⃣ Automate Reporting
Export results in JSON format and use scripts to generate custom reports.

---

## 📚 References
- [LDAP Domain Dump GitHub Repository](https://github.com/dirkjanm/ldapdomaindump)
- [Active Directory Basics](https://docs.microsoft.com/en-us/windows-server/identity/)

---

✨ **Copy, paste, and start dumping domains like a boss!** ✨
