# 🖋️ Penetration testing
  
> Penetration testing, often called pen testing, is a controlled cybersecurity assessment in which authorized security professionals simulate real-world cyberattacks against an organization’s systems, applications, and networks to identify vulnerabilities before malicious actors can exploit them. 

> The goal is not only to uncover security weaknesses but also to demonstrate the potential business impact of successful exploitation, providing actionable recommendations for remediation. By mimicking the tactics, techniques, and procedures (TTPs) of real attackers while operating within a legally defined scope, penetration testing helps organizations strengthen their defenses, validate the effectiveness of existing security controls, and reduce overall risk exposure.

---

## 1️⃣ Pre-Engagement & Scoping

#### Purpose/Intended Outcome:
- Define scope, objectives, rules of engagement, and testing limitations.
- Obtain written authorization (Rules of Engagement / Statement of Work).
- Identify what systems, applications, and networks are in scope and ensure legal coverage.

#### Tools:
- Documentation Tools (Microsoft Word, Google Docs, LaTeX): For agreements, scoping forms, and contracts.
- Secure Communication Platforms (ProtonMail, Signal, PGP-encrypted emails): Ensure confidentiality of sensitive discussions.
- Project Management Tools (Jira, Trello, MS Teams): Track deliverables, testing timelines, and communications.

#### Description:
At this stage, testers work with stakeholders to define what’s allowed. Critical details such as IP ranges, web apps, social engineering attempts, timeframes, and testing depth (black-box, white-box, or gray-box) are discussed. A legal contract and authorization letter are signed. This protects the penetration testers and the organization while ensuring a structured plan is in place.

---

## 2️⃣ Reconnaissance (Information Gathering)

#### Purpose/Intended Outcome:
- Gather as much intelligence as possible about the target enterprise without active engagement (passive recon first).
- Identify potential attack surfaces, business units, employee details, and technology stack.

#### Tools :
- OSINT Frameworks (Maltego, SpiderFoot): Map relationships between domains, employees, and infrastructure.
- Recon-ng: A modular OSINT tool for domain and credential harvesting.
- Shodan / Censys: Internet-facing device discovery and exposure analysis.
- theHarvester: Collects emails, subdomains, and hosts from public sources.
- LinkedIn / Google Dorking: Employee data gathering and technology stack identification.

#### Description:
Pen testers collect open-source information to map the target’s digital footprint. This includes discovering employee names (for phishing), technology platforms (e.g., Microsoft Exchange, AWS services), and exposed subdomains. Passive recon reduces the risk of detection before the engagement escalates.

---

## 3️⃣ Threat Modeling & Attack Surface Mapping

#### Purpose/Intended Outcome:
- Prioritize high-value assets and services.
- Identify potential entry points for exploitation.
- Align findings with MITRE ATT&CK techniques and real-world adversary TTPs.

#### Tools :
- MITRE ATT&CK Navigator: Helps map potential attack techniques to enterprise environments.
- BloodHound: Maps Active Directory trust relationships to identify lateral movement paths.
- Mind Mapping Tools (MindMeister, draw.io): Visual representation of discovered attack paths.

#### Description:
Using the data gathered, testers design an attack surface map. This shows the most likely intrusion paths (e.g., phishing → initial foothold → lateral movement → domain admin compromise). High-value targets like domain controllers, HR systems, and financial databases are prioritized for testing.

---

## 4️⃣ Scanning & Enumeration

#### Purpose/Intended Outcome:
- Identify live hosts, open ports, services, and operating systems.
- Gather detailed banners and system configurations.

#### Tools :
- Nmap: Port scanning, OS detection, and service enumeration.
- Nessus / OpenVAS: Automated vulnerability scanning.
- Enum4Linux / SMBMap: Enumerate Windows shares and user accounts.
- Nikto: Web server vulnerability scanner.
- WhatWeb / Wappalyzer: Technology fingerprinting (CMS, frameworks, versions).

#### Description:
The pen tester shifts to active reconnaissance, probing identified assets. This stage determines which systems/services are exploitable. For example, Nmap might reveal an outdated Apache server, and Nessus could flag it as vulnerable to a remote code execution flaw.

---

## 5️⃣ Exploitation

#### Purpose/Intended Outcome:
- Gain unauthorized access to systems or data through identified vulnerabilities.
- Validate risk severity by proving exploitation (with minimal disruption).

#### Tools :
- Metasploit Framework: Modular exploitation platform for known vulnerabilities.
- Impacket: Toolkit for SMB and Active Directory exploitation (Pass-the-Hash, Kerberoasting).
- SQLmap: Automated SQL injection tool.
- Burp Suite Pro: Exploit and manipulate web applications.
- Cobalt Strike / Sliver: Red team frameworks for controlled compromise simulation.

#### Description:
Pen testers execute controlled attacks on vulnerabilities. For example, using SQLmap to exploit a vulnerable login form, or Metasploit to gain a reverse shell. All actions are carefully documented to avoid collateral damage. The goal is proof of concept, not destruction.

  
---
  
## 6️⃣ Post-Exploitation & Privilege Escalation

#### Purpose/Intended Outcome:
- Assess the value of compromised systems.
- Escalate privileges to gain administrative or domain-level access.
- Determine potential for lateral movement across the enterprise.

#### Tools :
- Mimikatz: Extracts plaintext passwords, hashes, and Kerberos tickets.
- BloodHound (again): Identify privilege escalation paths.
- PowerShell Empire: Post-exploitation framework.
- SharpHound / CrackMapExec: AD enumeration and privilege escalation.

#### Description:
Once inside, the tester evaluates what can be achieved with the gained access. This may include exfiltrating sensitive data, pivoting into different networks, or gaining domain admin rights. This stage simulates the impact of a real-world breach.

---  

## 7️⃣ Persistence & Evasion Testing

#### Purpose/Intended Outcome:
- Assess how long an attacker could remain undetected.
- Test defensive controls like SIEM, EDR, and SOC response times.

#### Tools :
- Cobalt Strike Beacons: Persistent footholds simulating APT actors.
- Obfuscation Tools (Veil, Unicorn): Evade antivirus and EDR detection.
- Procmon / Sysmon Monitoring: Evaluate what activities defenders could see.
- Splunk / ELK (Blue Team Observation): Verify whether alerts are triggered.

#### Description:
The tester attempts to install persistence mechanisms (backdoors, scheduled tasks) while avoiding detection. If the SOC fails to notice, it highlights critical detection gaps. All persistence mechanisms are removed before the engagement concludes.

---

## 8️⃣ Reporting

#### Purpose/Intended Outcome:
- Deliver a comprehensive report detailing vulnerabilities, exploitation results, and remediation steps.
- Provide both an executive summary (for leadership) and a technical report (for IT/security staff).

#### Tools Used:
- Dradis / Serpico: Reporting platforms for structured pen test results.
- Markdown & LaTeX: For professional PDF report generation.
- Screenshots & Evidence Collection Tools (Greenshot, Snagit): Proof of exploitation.
 
#### Description:
Reports must clearly explain:
- Findings: What was exploited.
- Risk Ratings: Using CVSS or custom risk models.
- Proof of Concept: Screenshots, logs, or sample data.
- Remediation: Actionable steps (patching, config changes, user training).  
This ensures leadership understands business risk while IT staff receive actionable fixes.

---  

## 9️⃣Remediation & Retesting

#### Purpose/Intended Outcome:
- Validate that identified issues have been fixed.
- Reduce residual risk and confirm secure configuration.

#### Tools Used:
- Same Tools Used During Scanning & Exploitation: (e.g., Nmap, Nessus, Burp Suite) for retesting fixes.
- Patch Management Platforms: Verify updates were deployed.
- Manual Verification: Ensure no alternative attack paths exist.

#### Description:
After the organization applies patches or changes, the pen testers retest to ensure vulnerabilities are resolved. For example, confirming that SQL injection is no longer possible on a previously vulnerable web form.

---

## Penetration Testing Framework:

```text
Enterprise Penetration Test
│
├── 1. Pre-Engagement & Scoping
│   ├── Purpose: Define scope, objectives, and rules of engagement
│   ├── Tools:
│   │   ├── Documentation Tools (Word, Google Docs, LaTeX)
│   │   ├── Secure Comms (Signal, ProtonMail, PGP)
│   │   └── Project Management (Jira, Trello, MS Teams)
│   └── Outcome: Legal authorization & defined scope
│
├── 2. Reconnaissance (Information Gathering)
│   ├── Purpose: Collect OSINT & public data
│   ├── Tools:
│   │   ├── Maltego / SpiderFoot (OSINT mapping)
│   │   ├── Recon-ng (Domain/Credential discovery)
│   │   ├── Shodan / Censys (Exposed assets)
│   │   ├── theHarvester (Emails, subdomains)
│   │   └── LinkedIn / Google Dorks (Employee intel)
│   └── Outcome: Initial attack surface identified
│
├── 3. Threat Modeling & Attack Surface Mapping
│   ├── Purpose: Identify high-value assets & entry points
│   ├── Tools:
│   │   ├── MITRE ATT&CK Navigator (Adversary TTP mapping)
│   │   ├── BloodHound (Active Directory attack paths)
│   │   └── Mind Mapping Tools (draw.io, MindMeister)
│   └── Outcome: Visualized attack paths & priority targets
│
├── 4. Scanning & Enumeration
│   ├── Purpose: Identify live hosts, ports, services
│   ├── Tools:
│   │   ├── Nmap (Port scanning & OS detection)
│   │   ├── Nessus / OpenVAS (Vulnerability scanning)
│   │   ├── Enum4Linux / SMBMap (Windows shares)
│   │   ├── Nikto (Web server checks)
│   │   └── WhatWeb / Wappalyzer (Tech fingerprinting)
│   └── Outcome: List of exploitable services
│
├── 5. Exploitation
│   ├── Purpose: Gain initial access
│   ├── Tools:
│   │   ├── Metasploit (Exploitation framework)
│   │   ├── Impacket (AD exploitation toolkit)
│   │   ├── SQLmap (SQL Injection)
│   │   ├── Burp Suite Pro (Web exploitation)
│   │   └── Cobalt Strike / Sliver (Red team frameworks)
│   └── Outcome: Proof of concept compromise
│
├── 6. Post-Exploitation & Privilege Escalation
│   ├── Purpose: Expand control and assess impact
│   ├── Tools:
│   │   ├── Mimikatz (Credential dumping)
│   │   ├── BloodHound (Privilege paths)
│   │   ├── PowerShell Empire (Post-exploitation)
│   │   └── CrackMapExec / SharpHound (AD escalation)
│   └── Outcome: Higher privileges & lateral movement
│
├── 7. Persistence & Evasion Testing
│   ├── Purpose: Test detection & SOC response
│   ├── Tools:
│   │   ├── Cobalt Strike Beacons (Persistence)
│   │   ├── Veil / Unicorn (AV evasion)
│   │   ├── Procmon / Sysmon (Monitor activity)
│   │   └── Splunk / ELK (Blue team observation)
│   └── Outcome: Validate detection gaps & SOC capability
│
├── 8. Reporting
│   ├── Purpose: Document findings & provide remediation
│   ├── Tools:
│   │   ├── Dradis / Serpico (Reporting platforms)
│   │   ├── Markdown / LaTeX (Report generation)
│   │   └── Screenshots Tools (Greenshot, Snagit)
│   └── Outcome: Executive summary & technical report
│
└── 9. Remediation & Retesting
    ├── Purpose: Validate that fixes were applied
    ├── Tools:
    │   ├── Nmap, Nessus, Burp (Retesting vulnerabilities)
    │   └── Patch Management Platforms
    └── Outcome: Confirmed risk reduction
  
```

> ⚠️ Warning: This material is for authorized security testing only. 🚫 Unauthorized use against systems you do not own or have explicit permission to test is illegal and may result in severe penalties. Always obtain written consent ✅ before conducting any penetration testing activities.

