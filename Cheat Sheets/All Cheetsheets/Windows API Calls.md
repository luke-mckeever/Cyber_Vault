# 🛠️ Comprehensive List of Windows API Calls four use in Malware Analysis
#CS #MA #Win 

Malware frequently abuses Windows APIs for process injection, persistence, anti-analysis, and communication.  
This guide expands on critical APIs to watch during malware debugging.

---

## 🔑 Process Injection & Execution
| API Call                   | What It Does | What to Look For |
|----------------------------|--------------|------------------|
| **OpenProcess**            | Opens a handle to another process | Target PID — often `explorer.exe`, `lsass.exe`, or browsers |
| **VirtualAllocEx**         | Allocates memory in a remote process | `PAGE_EXECUTE_READWRITE` → suspicious for shellcode |
| **VirtualProtect / VirtualProtectEx** | Changes memory protections | Look for changes from RW → RX (enabling code execution) |
| **WriteProcessMemory**     | Writes to another process’s memory | Dump contents to inspect payload |
| **CreateRemoteThread**     | Creates a thread in another process | Triggers injected payload execution |
| **NtUnmapViewOfSection**   | Unmaps a section of memory | Used in process hollowing |
| **NtCreateThreadEx**       | Lower-level remote thread creation | Alternative to `CreateRemoteThread` |
| **QueueUserAPC**           | Schedules code to run in another thread | Stealthier injection than remote threads |
| **RtlCreateUserThread**    | Creates a thread in another process | Common in reflective DLL injection |
| **LoadLibraryA/W**         | Loads a DLL into memory | Look for malicious DLL paths |
| **GetProcAddress**         | Resolves addresses of APIs dynamically | Used to avoid static imports |

---

## 📂 File & Registry Manipulation
| API Call                   | What It Does | What to Look For |
|----------------------------|--------------|------------------|
| **CreateFileA/W**          | Opens/creates files | Files in `%TEMP%`, `%APPDATA%`, `%SYSTEM32%` suspicious |
| **ReadFile**               | Reads data from file | Config files, credentials, logs |
| **WriteFile**              | Writes to files | Check for dropped executables or ransom notes |
| **DeleteFileA/W**          | Deletes files | Evidence wiping |
| **MoveFileExA/W**          | Moves or renames files | Look for persistence with `MOVEFILE_DELAY_UNTIL_REBOOT` |
| **CopyFileA/W**            | Copies files | Malware propagation |
| **RegCreateKeyExA/W**      | Creates registry keys | Startup persistence in Run keys |
| **RegSetValueExA/W**       | Sets registry values | Monitor autorun & service entries |
| **RegGetValueA/W**         | Reads registry values | System profiling or stealing stored info |
| **SHGetFolderPathA/W**     | Retrieves special folder paths | To drop files in AppData or Startup |
| **GetFileAttributesA/W**   | Checks file attributes | Malware may check if its payload already exists |
| **SetFileAttributesA/W**   | Modifies file attributes | Often sets Hidden or System flags |

---

## 🌐 Networking & Communication
| API Call                   | What It Does | What to Look For |
|----------------------------|--------------|------------------|
| **WSAStartup**             | Initializes Winsock | Start of network activity |
| **socket**                 | Creates a socket | Look for unusual domain/IP activity |
| **bind**                   | Binds socket | Malware acting as a server/backdoor |
| **listen**                 | Listens for connections | Possible backdoor listener |
| **accept**                 | Accepts a connection | Reverse shell or RAT |
| **connect**                | Connects to remote server | Monitor IP/domain — possible C2 server |
| **send / sendto**          | Sends data | Look for beaconing or exfiltration |
| **recv / recvfrom**        | Receives data | Payload delivery from C2 |
| **InternetOpenA/W**        | Opens an Internet session | HTTP(S)-based C2 |
| **InternetConnectA/W**     | Connects to an Internet host | Identify domain/IP |
| **HttpSendRequestA/W**     | Sends HTTP requests | Check for disguised C2 traffic |
| **WinHttpOpenRequest**     | Prepares HTTP(S) requests | Stealthier C2 channels |
| **WinHttpSendRequest**     | Sends HTTP(S) requests | Inspect headers for IOCs |
| **InternetReadFile**       | Reads HTTP response | Pulling configs or payloads |
| **getaddrinfo / DnsQuery_A/W** | Resolves domains | Detect DNS tunneling or DGA domains |

---

## 🔐 Credential Theft & Privilege Escalation
| API Call                   | What It Does | What to Look For |
|----------------------------|--------------|------------------|
| **OpenProcessToken**       | Gets access token for a process | Used to escalate privileges |
| **AdjustTokenPrivileges**  | Enables privileges (e.g., `SeDebugPrivilege`) | Often required for injection into SYSTEM processes |
| **LogonUserA/W**           | Logs in with credentials | Brute force attempts |
| **ImpersonateLoggedOnUser**| Runs code as another user | Privilege escalation |
| **LsaEnumerateLogonSessions** | Lists logon sessions | Harvesting credentials |
| **LsaGetLogonSessionData** | Gets logon session info | Credential theft |
| **CredEnumerateA/W**       | Enumerates stored creds | Look for password harvesting |
| **CryptProtectData**       | Encrypts data | May protect stolen data before exfil |
| **CryptUnprotectData**     | Decrypts DPAPI credentials | Extracts browser/Outlook/Windows passwords |

---

## 🔒 Anti-Analysis, Evasion & Anti-VM
| API Call                   | What It Does | What to Look For |
|----------------------------|--------------|------------------|
| **IsDebuggerPresent**      | Detects debugger | Malware changes behavior if detected |
| **CheckRemoteDebuggerPresent** | Detects debugger | Another detection method |
| **NtQueryInformationProcess** | Retrieves process info | Used for detecting analysis tools |
| **GetTickCount**           | System uptime | Anti-sandbox timing checks |
| **Sleep / NtDelayExecution** | Delays execution | Long sleeps to evade sandboxes |
| **OutputDebugStringA/W**   | Debugging function | Debugger detection trick |
| **GetModuleHandleA/W**     | Checks if DLLs are loaded | Detecting sandbox/AV DLLs |
| **FindWindowA/W**          | Searches for window titles | Detects analysis tools like OllyDbg |
| **GetAdaptersInfo**        | Retrieves network adapter info | VM detection (e.g., VMware MAC ranges) |
| **GetSystemInfo**          | Retrieves system info | Used to detect VM environments |
| **GetVolumeInformationA/W**| Retrieves drive serials | VM/sandbox detection |
| **CPUID** (via inline asm) | CPU vendor string | Detects VMWare/QEMU/VirtualBox |

---

## 🎯 Persistence & Service Installation
| API Call                   | What It Does | What to Look For |
|----------------------------|--------------|------------------|
| **CreateServiceA/W**       | Creates a Windows service | Malware persistence |
| **StartServiceA/W**        | Starts a created service | Ensures malicious service runs |
| **OpenSCManagerA/W**       | Opens service control manager | Used to install/remove services |
| **ShellExecuteA/W**        | Executes a file | Used to launch payloads |
| **WinExec**                | Executes a command | Simple malware execution |
| **TaskScheduler APIs (CoCreateInstance → ITaskService)** | Creates scheduled tasks | Persistence method |
| **CopyFileExA/W**          | Copies files | Replication |

---

## 📡 System Reconnaissance
| API Call                   | What It Does | What to Look For |
|----------------------------|--------------|------------------|
| **GetUserNameA/W**         | Gets current user | Recon for privilege level |
| **GetComputerNameA/W**     | Gets computer name | Recon for victim identification |
| **EnumProcesses (PSAPI.dll)** | Enumerates running processes | Malware searching for AV tools |
| **EnumWindows**            | Enumerates open windows | Keyloggers/screenscrapers |
| **GetWindowTextA/W**       | Reads window text | Credential theft |
| **NtQuerySystemInformation** | Gets system info | Used for process discovery and anti-VM |

---

## ✅ Analyst Tips
- **Breakpoint Placement**: Set on suspicious APIs (injection, networking, registry).
- **Memory Dumps**: Inspect buffers passed into `WriteProcessMemory`, `send`, or `WriteFile`.
- **Watch for Dynamic Resolution**: Malware often uses `GetProcAddress` + `LoadLibrary` to resolve APIs at runtime to avoid detection.
- **Cross-Check Parameters**: Always look at arguments passed to APIs (e.g., file paths, registry keys, IPs).