#Win #logs 
# 🖥️ Windows Event Codes Cheat Sheet

A quick-reference guide to the most common Windows Event Codes encountered in cybersecurity. 🛡️ Use this cheat sheet to identify and investigate key events efficiently. 🔍

---

## 📋 Common Windows Event Codes

| **Event ID** | **Event Name**                             | **Description**                                                                 |
|--------------|-------------------------------------------|-------------------------------------------------------------------------------|
| 4624         | Successful Logon                          | Indicates a successful account logon.                                         |
| 4625         | Failed Logon                              | Tracks failed account logon attempts.                                         |
| 4634         | Logoff                                    | Logged when a user logs off or a session ends.                                |
| 4672         | Special Privileges Assigned to New Logon  | Assigned when a user logs on with admin or special privileges.               |
| 4688         | Process Creation                          | Logs whenever a new process is created.                                      |
| 4689         | Process Termination                       | Logs whenever a process is terminated.                                       |
| 4697         | Service Installation                      | Triggered when a new service is installed.                                   |
| 4700         | Scheduled Task Enabled                    | Indicates that a scheduled task has been enabled.                            |
| 4701         | Scheduled Task Disabled                   | Indicates that a scheduled task has been disabled.                           |
| 4719         | System Audit Policy Changed               | Tracks changes to the system audit policy.                                   |
| 4720         | User Account Created                      | Logs the creation of a new user account.                                     |
| 4722         | User Account Enabled                      | Triggered when a disabled user account is enabled.                           |
| 4723         | Attempt to Change Password                | Indicates an attempt to change a user’s password.                            |
| 4725         | User Account Disabled                     | Logs when a user account is disabled.                                        |
| 4738         | User Account Changed                      | Indicates changes made to an existing user account.                          |
| 4740         | Account Locked Out                        | Triggered when an account is locked out due to failed logons.                |
| 4767         | Account Unlocked                          | Logged when a previously locked account is unlocked.                         |
| 4776         | Credential Validation                     | Indicates that a credential validation attempt has been made.                |
| 4798         | User Account Enumeration                  | Triggered when a process enumerates user accounts.                           |
| 4799         | Group Membership Enumeration              | Logged when a process enumerates group memberships.                          |
| 5038         | Code Integrity Violation                  | Triggered when a file fails a code integrity check.                          |
| 5140         | File Share Access                         | Logs access to shared files or folders.                                      |
| 5145         | File Share Permission Change              | Tracks changes to shared file or folder permissions.                         |
| 5156         | Allowed Connection                        | Indicates a successful network connection was allowed by the firewall.       |
| 5157         | Blocked Connection                        | Indicates that the firewall blocked a network connection.                    |
| 5379         | Credential Manager Credentials Retrieved  | Logged when credentials are retrieved from the Windows Credential Manager.   |

---

## 🔍 Key Use Cases

### Logon and Authentication Monitoring
- **4624**: Monitor successful logons.
- **4625**: Investigate brute-force attempts or unauthorized access.
- **4740**: Detect account lockouts.

### Process and Service Tracking
- **4688**: Track new processes, which may indicate malicious activity.
- **4697**: Investigate suspicious service installations.

### User Account Management
- **4720**: Detect unauthorized account creation.
- **4725/4722**: Monitor account disabling/enabling.
- **4738**: Audit changes to user accounts.

### Network Activity
- **5140**: Monitor access to shared files and folders.
- **5156/5157**: Review allowed and blocked connections for firewall events.

---

## 💡 Pro Tips

1. **Use Filters**: In the Event Viewer, apply filters to narrow down specific Event IDs for faster analysis.
2. **Centralized Logging**: Use tools like Splunk or Elastic Stack to centralize and visualize event logs.
3. **Correlate Events**: Combine multiple Event IDs to detect complex attack patterns (e.g., failed logons followed by account lockouts).

Stay vigilant and use these Event Codes to strengthen your cybersecurity defenses! 🚀