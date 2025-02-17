# 🩹Triaging Forensic Artefacts
#KA #Forensics 

> Always follow the order of volatility when triaging forensic artefacts -> [[Digital Forensics]]

1. **CPU Registers & Cache**
2. **RAM & Active Network Connections** 
3. **Temp Files & System Logs**
4. **Disk Storage Data** 
5. **Remote Logging** 
6. **Archive Media**

## Extraction

Utilising the tool known as [[KAPE]] will assist in the extraction of forensic artefacts

- Kape also have automatic **Target Options** for quickly identifying what to extract

#### Artefacts of importance

| **Artefact Name** | **File Path** | **Description** |
|---|---|---|
| **Event Logs** | `C:\Windows\System32\winevt\Logs` |Contains records of system, security, and application events useful for identifying user activity and system changes.|
| **Link Files** | `C:\Users<Username>\AppData\Roaming\Microsoft\Windows\Recent` |Shortcuts to recently accessed files and folders, useful for tracking user activity.|
| **Jump Lists** | `C:\Users<Username>\AppData\Roaming\Microsoft\Windows\Recent\AutomaticDestinations\` and `CustomDestinations` |Tracks recently opened files and applications via the Start Menu and Taskbar.|
| **Recycle Bin** | `C:$Recycle.Bin` |Stores deleted files before permanent removal, useful for recovering deleted evidence.|
| **Registry Hives** | `C:\Windows\System32\config\ (System-wide)` and `C:\Users<Username>\NTUSER.DAT (User-specific)` |Contains system and user settings, including installed programs, USB connections, and user activity.|
| **Scheduled Tasks** | `C:\Windows\System32\Tasks` |Stores scheduled tasks, including malware persistence mechanisms and system automation.|
| **USB Device Logs** | `C:\Windows\INF\setupapi.dev.log` |Tracks connected USB devices, including timestamps and device information.|
| **AM Cache** | `C:\Windows\AppCompat\Programs\Amcache.hve` |Logs execution history of applications, useful for identifying program usage.|
| **Anti-Virus Logs** | `C:\ProgramData<AV Vendor>\Logs` |Stores logs related to antivirus activities, detections, and quarantined files.|
| **Microsoft Defender Logs** | `C:\ProgramData\Microsoft\Windows Defender\Support` |Contains logs of Windows Defender activity, including detections and scan history.|
| **Shell Bags** | `Registry: HKCU\Software\Microsoft\Windows\Shell\Bags` |Records user folder views and navigation, useful for tracking accessed directories.|
| **Prefetch Files** | `C:\Windows\Prefetch` |Stores preloaded application data, helping identify recently executed programs.|
| **MFT (Master File Table)** | `C:$MFT` | Contains metadata of all files on an NTFS volume, useful for forensic timeline reconstruction and file recovery.|

