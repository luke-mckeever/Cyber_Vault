# Common Attack Signatures 🚨
#KA #RED #BLUE 

Understanding the diverse range of cyberattacks is critical for defending against them. Below, we outline some of the most common attack types, their descriptions, and real-world examples.

---

### 🤵User Behaviour Indicators
- **Multiple Failed Log In Attempts** - this may indicate a potential brute force attack
- **Log In Times** - logging in outside of regular hours may indicate account compromise
- **Log In location** - logging in from an unfamiliar location based
- **File Access Patterns** - Unusual file access or execution
- **User-Agent Strings** - Irregular user agent usage for the user 

### 💉SQL Injection
> **SQL Injection (SQLi)** is a web security vulnerability that allows an attacker to manipulate an application's SQL queries by injecting malicious SQL code into input fields

#### Queries 
- **SELECT** - Retrieve data from a database table
- **FROM** - Specifies the table to retrieve data from
- **WHERE** - Filter records based on conditions
- **ORDER BY** - Sort the results (ascending or descending)
- **GROUP BY** - Group rows with identical values into summaries 

#### Manipulation
- **INSERT INTO** - Adds new rows of data into a table
- **UPDATE** - Modifies existing data in a table
- **DELETE** - Removes existing rows from a table
- **DROP** - Deletes a table or database from the system
- **JOIN** - Combines rows from two or more tables based on a column
- **INNER JOIN** - Returns records that have matching values in multiple tables 
- **UNION** - Combines the results of two or more SELECT statements 

#### Comparative
- **LIKE** - Searches for a specified pattern in a column
- **IN** - Checks if a value matches any value in a list or query

### ❌ Cross Site Scripting
> Cross-Site Scripting (**XSS**) is a type of web security vulnerability that allows attackers to inject malicious scripts into webpages viewed by other users.

- Executing malicious code by injecting *JavaScript* - Session Hijacking, Steal Cookies, Defacement
- Identify `<script>` or `javascript` tag indicators
- Look for event handlers - `onload`, `onclick`, `onmouseover` 

### 💬 Command Injection 
> **Command Injection** is a security vulnerability that allows an attacker to execute arbitrary system commands on a server, typically due to improper handling of user input in applications that interact with system shells.

- Execute basic OS commands - `ls`, `cat`, `;`
- Display sensitive information - `cat etc/passwd`

### 🪜Path Traversal and Local File Inclusion (LFI)
> Both **Path Traversal** and **Local File Inclusion (LFI)** are vulnerabilities that allow attackers to access restricted files on a server, potentially leading to data theft, code execution, or privilege escalation.

- Escape queries - `../../../` or encoded `%2E%2E%2F%2E%2E%2F%2E%2E%2F`

### 💥 Buffer Overflow
> A **Buffer Overflow** occurs when a program writes more data to a buffer (temporary memory storage) than it can hold, potentially overwriting adjacent memory and leading to crashes or arbitrary code execution.

- Exploit payloads often include: `NOP sled + Shellcode + Return Address Overwrite`
- Common targets: Stack-based and heap-based buffers in C/C++ programs

### 🧬 Memory Injection
> **Memory Injection** involves inserting malicious code directly into a program’s memory space, allowing attackers to hijack execution flow without writing anything to disk.

- Techniques include: **DLL injection**, **code caves**, and **reflective PE loading**
- Tools often used: `mimikatz`, `Meterpreter`, `Process Hacker`

### 🦠 Fileless Malware
> **Fileless malware** resides in memory and does not write malicious files to disk, making it harder to detect with traditional antivirus tools.

- Common vectors: PowerShell, WMI, or registry abuse
- Example: `powershell -nop -w hidden -encodedCommand <payload>`

### 🔗 Supply Chain Attack
> A **Supply Chain Attack** targets a trusted third-party vendor or software component to compromise a larger organization by introducing malicious code or hardware during production or distribution.

- Real-world example: `SolarWinds Orion` compromise
- Prevention: Vendor risk assessments, code signing, software bill of materials (SBOM)

---

### 🌐 DNS Poisoning / DNS Stuffing

> **DNS Poisoning** (or Spoofing) corrupts a DNS resolver’s cache, causing it to return incorrect IP addresses and redirect users to malicious sites. **DNS Stuffing** involves overwhelming DNS servers with excessive or malformed queries.

- Poisoning example: Injecting fake DNS responses faster than the legitimate server
    
- Mitigation: DNSSEC, query rate limiting, cache randomization
---

## Other Types of Attack Signatures 

#### **Phishing**
- Phishing involves tricking victims into revealing sensitive information, such as login credentials or financial details, by masquerading as a trustworthy entity.

#### **Malware**
- Malware is malicious software designed to harm, exploit, or otherwise compromise devices or networks.

#### **Man-in-the-Middle (MitM) Attack**
- MitM attacks occur when an attacker secretly intercepts and potentially alters the communication between two parties.

#### **Zero-Day Exploits**
- Zero-day exploits target vulnerabilities that are unknown to the software vendor or have no available patch at the time of the attack.

#### **Denial-of-Service (DoS) and Distributed Denial-of-Service (DDoS)**
- DoS/DDoS attacks flood a network or server with excessive traffic, rendering it unavailable to users.

#### **Social Engineering**
- Social engineering manipulates individuals into divulging confidential information or performing specific actions.

#### **Password Attacks**
- These attacks aim to steal or guess passwords through brute force, dictionary attacks, or credential stuffing.

####  **Insider Threats**
- These attacks originate from individuals within the organization who have malicious intent or fall victim to manipulation.

####  **Advanced Persistent Threats (APTs)**
- APTs are prolonged, targeted attacks conducted by well-funded groups, often for espionage or sabotage.
