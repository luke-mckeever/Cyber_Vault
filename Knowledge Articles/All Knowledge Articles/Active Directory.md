# 🛡️🔐 Active Directory Security 🎯🧠
#KA 

> **Active Directory (AD)** is the **core identity and access management** solution in most enterprise networks.  
> Because of its central role, **securing AD** is mission-critical for defending against both insider and external threats.

---

## 📚 Table of Contents

- [📘 What is Active Directory?](#-what-is-active-directory)
- [🔓 Why AD Security Matters](#-why-ad-security-matters)
- [🧭 Common AD Attack Vectors](#-common-ad-attack-vectors)
- [🛠️ Hardening Active Directory](#️-hardening-active-directory)
- [🕵️‍♂️ Detection & Monitoring Tips](#️-detection--monitoring-tips)
- [🚨 Signs of AD Compromise](#-signs-of-ad-compromise)
- [🧰 Tools for AD Security](#-tools-for-ad-security)
- [📎 Recommended Resources](#-recommended-resources)
- [⚠️ Disclaimer](#️-disclaimer)

---

## 📘 What is Active Directory?

**Active Directory (AD)** is a **directory service** developed by Microsoft for Windows domain networks. It handles:

- 👥 User and group management
- 🔐 Authentication (Kerberos, NTLM)
- 🧾 Policy enforcement via Group Policy Objects (GPOs)
- 🖥️ Computer and resource organization

AD is essentially the **"central nervous system"** of a Windows environment — and **an attacker’s dream target** if left misconfigured.

---

## 🔓 Why AD Security Matters

- 🛑 **1 Compromised AD = Full Domain Takeover**
- 🧨 APTs and ransomware groups frequently **target AD** for persistence, lateral movement, and privilege escalation.
- 🧬 AD often stores **cleartext passwords**, **misconfigured trusts**, and **overprivileged accounts**.

> 🗡️ **Attackers love AD — defenders must know it better.**

---

## 🧭 Common AD Attack Vectors

| 🧨 Technique           | 🔍 Description |
|------------------------|----------------|
| 🪪 **Pass-the-Hash**     | Reusing NTLM hashes to impersonate users |
| 🔁 **Kerberoasting**     | Extracting service account tickets and cracking them offline |
| 🛠️ **DCSync Attacks**    | Using replication permissions to dump password hashes |
| 📬 **AS-REP Roasting**   | Cracking hashes from Kerberos tickets of non-preauth users |
| 🧠 **BloodHound Mapping** | Graph-based AD attack path enumeration |
| 🔗 **Unconstrained Delegation** | Abuse of poorly configured delegation settings |
| 🎭 **Golden/Silver Ticket** | Forged Kerberos tickets for persistence |

---

## 🛠️ Hardening Active Directory

### ✅ Basic Security Practices

- 🔒 Enforce **strong password policies**
- 👑 Limit **Domain Admin** privileges
- 🚫 Disable **unconstrained delegation**
- 🔍 Audit **Service Principal Names (SPNs)**
- 📦 Patch **Kerberos & NTLM vulnerabilities**

### 🛡️ Advanced Defenses

- 🧯 Implement **Tiered Admin Model**  
- 🔐 Enforce **LAPS (Local Admin Password Solution)**  
- 🧾 Monitor **Group Policy changes**
- 🚧 Block **cleartext LDAP (389)**; use **LDAPS (636)**
- 🔐 Configure **Protected Users** group for high-value accounts

---

## 🕵️‍♂️ Detection & Monitoring Tips

| 📌 What to Monitor                  | 🔍 Why It Matters |
|------------------------------------|-------------------|
| 🔁 `Directory Replication Services` | Detect DCSync attacks |
| 🔍 `Event ID 4769`                 | Kerberoasting attempts |
| 🛑 `Event ID 4625`                 | Failed logins (brute force) |
| 🗝️ `Event ID 4672`                 | Admin logons |
| 🧰 `Event ID 5140`                 | File share access |
| 🏷️ `Event ID 4726/4720`            | Account creation/deletion |

> 🎯 **SIEMs**, **Sysmon**, and **Windows Event Forwarding** can help centralize and correlate this telemetry.

---

## 🚨 Signs of AD Compromise

- 👻 Unusual logins to **Domain Controllers**
- 🧪 `NTDS.dit` file access or replication events
- 🧾 GPOs being created or modified without change control
- 🦠 Detection of known attack tools like:
  - Mimikatz
  - BloodHound
  - SharpHound
  - PowerView

> 🔥 Treat any of these signs as **high-severity incidents**.

---

## 🧰 Tools for AD Security

| Tool            | Purpose |
|------------------|---------|
| 🧠 **BloodHound**      | Attack path enumeration |
| 📡 **PingCastle**      | AD security risk auditing |
| 🔍 **ADRecon**         | Gathers domain recon data |
| 🛡️ **Purple Knight**    | Security scorecard for AD |
| 🧪 **Mimikatz**         | Credential dumping (red team) |
| 🔦 **LDAPDomainDump**  | Lightweight AD data extraction |
| ⚙️ **GPOZaurr**         | Audit GPOs for misconfigurations |
| 📊 **EventLog Explorer**| Log analysis tool |

---

## 📎 Recommended Resources

- 📘 [Microsoft AD Security Guidance](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/plan/security-best-practices/ad-security-best-practices)
- 📚 [AD Attack & Defense Mindmap](https://github.com/Orange-Cyberdefense/AD-attack-defense)
- 🧠 [Harmj0y's Blog](https://posts.specterops.io/)
- 📺 [AD Security Training - YouTube](https://www.youtube.com/c/HackTricks/videos)
- 🧾 [BloodHound GitHub](https://github.com/BloodHoundAD/BloodHound)
- 🔐 [Purple Knight](https://www.purple-knight.com/)
- 🛡️ [PingCastle](https://www.pingcastle)
