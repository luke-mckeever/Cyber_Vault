# 🛡️ Sysmon Event ID Cheat Sheet
#CS #logs 

A comprehensive guide to all Sysmon Event IDs, their descriptions, and use cases for monitoring and security analysis. 🛠️

---

## 📜 Table of Sysmon Event IDs

| **Event ID** | **Event Name**                    | **Description**                                                                 |
|--------------|----------------------------------|-------------------------------------------------------------------------------|
| 1            | Process Creation                 | Logs details of process creation including parent process and command line.  |
| 2            | File Creation Time               | Records file creation timestamps. Useful for tracking unauthorized changes.  |
| 3            | Network Connection               | Captures outbound network connections.                                        |
| 4            | Sysmon Service State Changed     | Indicates changes in the Sysmon service state (e.g., start, stop).           |
| 5            | Process Terminated               | Logs details of terminated processes.                                         |
| 6            | Driver Loaded                    | Monitors driver loading. Helps detect malicious or unsigned drivers.         |
| 7            | Image Loaded                     | Logs DLL and EXE loading, including hashes. Useful for detecting tampering.  |
| 8            | CreateRemoteThread               | Captures remote thread creation, often used in injection attacks.            |
| 9            | Raw Access Read                  | Logs raw read access to disks, which could indicate malicious behavior.      |
| 10           | Process Access                   | Tracks interactions with processes, such as handle manipulation.             |
| 11           | File Create                      | Logs the creation of new files or folders.                                   |
| 12           | Registry Object Added/Deleted    | Monitors additions or deletions in the Windows Registry.                     |
| 13           | Registry Value Set               | Logs changes to registry values.                                             |
| 14           | Registry Key and Value Rename    | Tracks renaming of registry keys and values.                                 |
| 15           | FileCreateStreamHash             | Captures creation of alternate data streams.                                 |
| 16           | Sysmon Configuration Change      | Detects changes to the Sysmon configuration.                                 |
| 17           | Pipe Created                     | Monitors creation of named pipes.                                            |
| 18           | Pipe Connected                   | Tracks connections to named pipes.                                           |
| 19           | WMI Event Filter                 | Monitors WMI event filters being registered.                                 |
| 20           | WMI Event Consumer               | Logs WMI event consumers being registered.                                   |
| 21           | WMI Event Consumer to Filter     | Tracks WMI bindings between consumers and filters.                           |
| 22           | DNS Query                        | Captures DNS queries made by the system. Useful for detecting anomalies.     |
| 23           | File Deleted                     | Logs file deletion activities.                                               |
| 24           | Clipboard Change                 | Detects clipboard modifications, which can indicate data exfiltration.       |
| 25           | Process Tampering                | Captures process memory changes such as hollowing or injection.              |
| 26           | File Executed (Detected)         | Logs execution of files.                                                     |
| 27           | File Executed (Blocked)          | Tracks execution attempts that are blocked.                                  |
| 28           | File Executed with Local Admin   | Captures files executed with administrative privileges.                      |
| 29           | File Executed with System Account| Monitors execution of files with system-level privileges.                    |

---

## 🔍 Key Use Cases for Sysmon Monitoring

1. **Process Monitoring**: Use Event IDs 1, 5, and 25 to track process creation, termination, and tampering activities.
2. **Network Monitoring**: Leverage Event ID 3 to detect unauthorized or suspicious network connections.
3. **Registry Monitoring**: Event IDs 12–14 are crucial for identifying changes to critical registry keys and values.
4. **File Integrity**: Monitor file creation, deletion, and alternate data streams with Event IDs 2, 11, 15, and 23.
5. **Privilege Escalation**: Detect elevated or unauthorized executions using Event IDs 28 and 29.

---

## 💡 Pro Tips

- **Tuning**: Customize your Sysmon configuration to reduce noise and focus on relevant events.
- **Correlation**: Use Event ID combinations to detect multi-step attacks (e.g., DLL injection followed by network activity).
- **Log Forwarding**: Forward Sysmon logs to SIEM tools like Splunk or ELK for centralized analysis.

Mastering Sysmon Event IDs enables you to build a robust monitoring system and strengthen your defense strategies. 🚀