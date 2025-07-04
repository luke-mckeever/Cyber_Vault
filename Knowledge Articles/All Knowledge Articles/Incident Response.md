# 🏃‍♂️ Incident Response 💨

#### What is a Security incident:
> A Security Incident is a confirmed or suspected breach or violation of security policies, procedures or controls that pose a threat to the confidentiality, integrity or availability of an organisation's informational assets.

---

## 📄Frameworks:

### 1. [NIST Special Publications 800-61 Rev 2](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf) 
> a.k.a. Computer Security Incident Handling Guide 

![[Untitled Diagram.png]]

### 2. [SANS Incident Handler's Handbook](https://sansorg.egnyte.com/dl/6Btqoa63at)

![[sans.png]]

---

## 1. Preparation

[SANS Incident Handling Form](https://www.sans.org/media/security-training/mgt512/secinc_forms.pdf)

- End Users - (Security Awareness Training, Phish Sims, Self Reports)
- Stakeholder Involvement - (IT Teams, Legal Teams, Publix Relations, Management, Data Owners)
- Business Impact Analysis - (Blocks, Accounts, Endpoints)
- Communication - (Hotlines, Mailboxes, Contact Info, On Call, Escalations, Third Party IR)
- Physical Locations - (War Room, SOC, Board Room, Evidence Storage)
- Incident Tracking - (Ticketing System, Version/History Control)
- Hardware/Software - (Forensic/Malware Labs, Jumpkits)
- Asset Management - (Redundancies, Crown Jewel Apps, Failovers, Recovery)
- Simulated Exercises - (Table top's, Practice, Continuous Log Ingestion)
- Incident Response Plan - (Playbooks/Runbooks)
- Notification Policies - (Law Enforcement, Legal, Insurance, Impact, Management)
- Documentation - (Evidence)

---

## 2. Identification

- Sources - (Tooling, EDR, SIEM, Logging, Exchange, Threat Intel, Firewall)
- Tuning - (Engineering. Alert Fatigue)
- Prioritization - (Triage, Scope, Log Ingestion, Urgency, Criticality, Impact)
- Documentation - (Ticketing)
- Comms - (Notifications, Sitreps: stakeholders | Severity | impact| Actions | Next Steps)

---

## 3. Containment 

[SANS Incident Containment Form](https://www.sans.org/media/score/incident-forms/IH-Containment.pdf)

- Short Term - (Quarantining/Isolation, Disablement, Disconnects, Kill)
- Business Impact - (Crown Jewel Apps, Critical Systems)
- Evidence Collection - (Snapshots, Forensics Images, Memory)
- Long Term - (Rebuild/Reimage, Eradication, Patching, Reset's)

---

## 4. Eradication

[SANS Incident Handling Form](https://www.sans.org/media/security-training/mgt512/secinc_forms.pdf)

- Remove Network Artefacts
- Restore - (Stable Backups/Images, Recovery Time Objective(RTO), Recovery Point Objective (RPO))
- Manual Removal - (Malware, Backdoors, Services)
- Defence Improvement - (Benchmarks, System Hardening, Patching)
- Vulnerability Management - (Scanning, Threat Intelligence )

---

## 5. Recovery

- Restore - (Stable Backups/Images)
- Confirm Functionality - (Testing)
- Prevention - (Hardening, Scanning, Monitoring)
- Decisions - (Time Window, Verification, )

---

## 6. Lessons Learned

[Atlassian Post-Mortem Template](https://www.atlassian.com/incident-management/postmortem/templates)

- Reflection - (Improvement, Feedback)
- Post-mortems - (Reviews, Reports, 5 W's)
- Meetings - (Exec Summary, 5 W's, Scope, Procedure, Impact, Questioning/Suggestions)
- RCA - (Root Cause Analysis)

---