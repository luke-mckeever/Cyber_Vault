# 🎩 **Registry Explorer** 🕵️‍♂️🔍
#tool #TTDF #EZ

> **A Powerful Forensic Tool by [Eric Zimmerman](https://ericzimmerman.github.io/)**  
> A fast and modern way to analyze Windows Registry hives with ease! 🚀

## 📌 **Introduction**
**Registry Explorer** is a cutting-edge tool designed for forensic analysis of Windows Registry hives. Built for speed and flexibility, it outperforms traditional registry analysis tools, making it an essential asset for digital forensic professionals. 🔥

## Dirty Hives
In **Registry Explorer**, a **dirty hive** refers to a Windows registry hive that was not properly closed before the system was shut down. This typically happens when the system crashes, experiences a power failure, or shuts down unexpectedly while registry changes were still being written.

### Key Points About a Dirty Hive:

- It may contain inconsistencies or uncommitted transactions.
- Windows uses a transaction log to recover or roll back changes upon reboot.
- Registry Explorer may still allow you to open and analyze a dirty hive, but some data might be corrupted.
- You might need to use tools like **esentutl** or forensic tools to attempt recovery if the hive is severely damaged.

To fix dirty hives update the transaction logs by adding the stuck logs to the current transaction

## 🛠 **Getting Started**
### 📥 **Download & Install**
1. Download **Registry Explorer** from [Eric Zimmerman's GitHub](https://github.com/EricZimmerman/RECmd).
2. Extract the ZIP file.
3. Run `RegistryExplorer.exe` (No installation required! 🎉).

### 🏃‍♂️ **Using Registry Explorer**
#### 🔍 **Opening a Registry Hive**
4. Click on `File` → `Load Hive` 📂.
5. Select a registry hive (e.g., `NTUSER.DAT`, `SYSTEM`, `SOFTWARE`).
6. View the parsed structure instantly!

#### 🕵️ **Searching the Registry**
7. Press `Ctrl + F` or click on `Find` 🧐.
8. Enter your search term (e.g., `LastWrite`, `MRUList`).
9. Filter results using **regex** and wildcards!

#### 📤 **Exporting Data**
10. Right-click on a key or value.
11. Select `Export` → Choose **CSV, JSON, or XML** 📊.
12. Save it for forensic reports.

## ⚡ **Command-Line Power: RECmd**
Registry Explorer also includes a command-line counterpart: **RECmd**! 💻

```powershell
RECmd.exe -f C:\Windows\System32\config\SYSTEM -p output_folder
```

✅ **Batch processing** & automated registry parsing!

## Valuable Hive values 

### **Important Digital Forensics Artifacts in Windows Registry Hives**

When analyzing Windows registry hives from a **digital forensics perspective**, certain keys and values provide crucial information regarding user activity, security settings, and system configurations.

---

## **1. SAM (Security Account Manager) Hive**

📌 **Location**: `C:\Windows\System32\Config\SAM`  
🔍 **Key Forensic Values**:

|Key|Value|Description|
|---|---|---|
|`SAM\Domains\Account\Users\Names\`|**Username**|Lists local user accounts.|
|`SAM\Domains\Account\Users\`|**RID (Relative Identifier)**|Identifies user accounts, each having a unique **RID**.|
|`SAM\Domains\Account\Users\%RID%`|**V (Hashed Password Data)**|Stores **NTLM** and **LM** password hashes (encrypted).|
|`SAM\Domains\Account\Aliases\Names\Administrators`|**Group Membership**|Lists users in the **Administrators** group.|
|`SAM\Domains\Account\Aliases\Names\Users`|**Standard Users**|Lists standard user accounts.|
|`SAM\Domains\Builtin\Aliases`|**Aliases**|Stores security identifiers (SIDs) and group membership information for built-in Windows groups, such as Administrators, Users, and Guests.|

---

## **2. NTUSER.DAT Hive**

📌 **Location**: `C:\Users\%USERNAME%\NTUSER.DAT` (Per User)  
🔍 **Key Forensic Values**:

|Key|Value|Description|
|---|---|---|
|`Software\Microsoft\Windows\CurrentVersion\Explorer\RecentDocs`|**Recent Documents**|Tracks recently opened files (timestamps).|
|`Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU`|**Run Command History**|Records executed commands in the **Run dialog** (Start > Run).|
|`Software\Microsoft\Windows\CurrentVersion\Search\RecentApps`|**Recent Applications**|List of recently used programs.|
|`Software\Microsoft\Windows\Shell\Bags` & `BagMRU`|**Folder Views & Accessed Locations**|Stores details about accessed folders.|
|`Software\Microsoft\Windows\CurrentVersion\Explorer\TypedPaths`|**Typed Paths**|URLs and paths typed in Windows Explorer.|
|`Software\Microsoft\Windows\CurrentVersion\Run`|**Auto-Start Programs**|Lists programs that launch at startup.|
|`Software\Microsoft\Windows\CurrentVersion\RunOnce`|**One-Time Startup Programs**|Executes once at next login.|
|`Software\Microsoft\Windows\CurrentVersion\Uninstall`|**Installed Programs**|List of installed applications.|
|`Software\Microsoft\Internet Explorer\TypedURLs`|**Internet Explorer History**|Tracks URLs typed in **Internet Explorer**.|
|`Software\Microsoft\Windows\CurrentVersion\Explorer\MountPoints2`|**USB Device History**|Tracks connected USB devices.|
|`Software\Microsoft\Windows\CurrentVersion\Explorer\UserAssist`|**User Activity Logging**|Contains obfuscated user activity (program execution).|
|`Software\Microsoft\Windows NT\CurrentVersion\Winlogon\Shell`|**Custom Shells**|Can indicate malware persistence.|
|`Software\Microsoft\Windows\CurrentVersion\Policies\System`|**User Rights & Restrictions**|May indicate disabled features like **Task Manager, CMD, Regedit**.|

---

## **3. SYSTEM Hive**

📌 **Location**: `C:\Windows\System32\Config\SYSTEM`  
🔍 **Key Forensic Values**:

|Key|Value|Description|
|---|---|---|
|`ControlSet001\Services\`|**Installed Services**|Lists system services, including malware-created ones.|
|`ControlSet001\Control\Session Manager\BootExecute`|**Auto-Execute Programs at Boot**|Can contain malware-related persistence.|
|`ControlSet001\Control\Session Manager\Environment`|**Processor Architecture**|Specifies the CPU architecture of the system (e.g., `AMD64` for 64-bit or `x86` for 32-bit).|
|`ControlSet001\Control\ComputerName\ComputerName`|**Computer Name**|Stores the current name assigned to the computer.|
|`ControlSet001\Control\TimeZoneInformation`|**Timezone Settings**|Useful for timeline analysis.|
|`ControlSet001\Enum\USBSTOR`|**USB Storage Devices**|Records connected USB devices (Vendor ID, Product ID, Serial Number).|
|`ControlSet001\Services\Tcpip\Parameters`|**Network Configuration**|IP addresses, DNS servers, DHCP settings.|
|`ControlSet001\Services\Tcpip\Parameters\Interfaces\<GUID>`|**Network Configuration**|Contains network settings for a specific network adapter, including IP addresses, DHCP settings, and gateway information.|
|`ControlSet001\Services\LanmanServer\Shares`|**Shared Folders**|Lists network shares.|
|`ControlSet001\Control\Lsa\Audit\AccountLogon`|**Security Auditing Settings**|Can show if login audits are enabled.|
|`ControlSet001\Control\CrashControl`|**Crash Dump Settings**|Configurations for system crash dumps.|
|`ControlSet001\Enum\Root\LEGACY_`|**Legacy Drivers**|Can indicate rootkits or leftover malware.|

---

## **4. SOFTWARE Hive**

📌 **Location**: `C:\Windows\System32\Config\SOFTWARE`  
🔍 **Key Forensic Values**:

|Key|Value|Description|
|---|---|---|
|`SOFTWARE\Microsoft\Windows NT\CurrentVersion`|**System Root**|Specifies the root directory of the Windows installation (e.g., `C:\Windows`).|
|`SOFTWARE\Microsoft\Windows NT\CurrentVersion`|**Edition ID**|Indicates the edition of Windows installed (e.g., `Professional`, `Enterprise`, `Home`).|
|`SOFTWARE\Microsoft\Windows NT\CurrentVersion`|**Product Name**|Displays the full product name of the installed Windows version (e.g., `Windows 10 Pro`).|
|`SOFTWARE\Microsoft\Windows NT\CurrentVersion`|**Current Build**|Specifies the build number of the Windows OS (e.g., `19044` for Windows 10 21H2).|
|`SOFTWARE\Microsoft\Windows NT\CurrentVersion`|**Current Version**|Displays the major and minor version of Windows (e.g., `10.0`).|
|`SOFTWARE\Microsoft\Windows NT\CurrentVersion`|**Install Date**|Stores the installation date and time of the OS in **Unix Epoch format** (convert it to a human-readable date).|
|`SOFTWARE\Microsoft\Windows NT\CurrentVersion`|**Registered Owner**|Displays the name of the user or organization that registered Windows.|
|`SOFTWARE\Microsoft\Windows\CurrentVersion\Authentication\LogonUI`|**Last Logged On User**|Stores the username of the last account that successfully logged into the system.|

 



