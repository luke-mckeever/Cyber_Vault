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
