# 🧠 Cutter Reverse Engineering Platform 🔍🛠️🐍
#Tool #BLUE  #TTMA  

Cutter is a **Qt and C++ GUI powered by Rizin**, designed to be an advanced, intuitive, and fully-featured reverse engineering platform. It brings the power of the command-line reverse engineering tools to a beautiful and user-friendly graphical interface, making binary analysis more accessible than ever. 💻✨

**LINK TO TOOL DOCUMENTATION [HERE](https://cutter.re/docs/)**

Cutter provides a visual frontend to the powerful Rizin framework, allowing for powerful static analysis of binaries. With features like graph view, decompiler integration, scripting, and plugin support, Cutter is ideal for malware analysts, vulnerability researchers, and reverse engineers of all skill levels. 

---

![Cutter Logo](https://upload.wikimedia.org/wikipedia/commons/2/21/Cutter_Logo.png)

---

### 🚀 Installing Cutter

Download the latest release from the official site or GitHub:
👉 [Cutter Releases](https://github.com/rizinorg/cutter/releases)

Simply download the `.exe` and follow the installer instructions. No CLI needed! 🖱️

---

## 🖼️ Using the Cutter GUI

1. **Launch Cutter** by double-clicking the executable.
2. Open a binary file using the "Open File" dialog.
3. Cutter will auto-analyze the file. You can tweak analysis settings before confirming.
4. Explore views such as:
   - 📑 **Dashboard** – Summary of sections, strings, imports/exports, etc.
   - 🎯 **Graph View** – Visualize functions and control flow.
   - 📜 **Decompiler** – Pseudo-code for easier understanding.
   - 🧨 **Disassembly View** – Low-level assembly instructions
   - 📦 **Hex Editor** – Inspect and patch binaries on the fly.
   - 🔍 **Strings, Imports, Exports** – All easily accessible via tabs.
5. Use the **navigation sidebar** to jump between functions, strings, and sections.
6. Install plugins for added functionality or script with Python!

> 🧩 Cutter supports plugins and themes for personalizing your RE experience.


## Using Cutter to analyse malware
Cutter is mainly utilised to convert the longs strings of 1's and 0's into human readable code known as assembly, 
This language is still not the easiest to know and learn and uses a series of CPU Instructions to preform it's actions 
the actions preformed by this code are mostly API calls to the windows API
These below APIs are often used for basic OS interaction and may indicate access to system resources or execution of external programs:
- `CreateFileA/W` – Open or create files/devices
- `ReadFile` / `WriteFile` – Read from or write to files
- `DeleteFileA/W` – Delete files
- `GetFileSize`, `GetFileAttributes` – Inspect files
- `MoveFile`, `CopyFile`, `SetFileAttributes`
- `WinExec`, `ShellExecute`, `CreateProcessA/W` – Execute programs
- `ExitProcess` – Exit a process
- `GetTempPath`, `GetTempFileName` – Temporary file usage (common in droppers)

Other API calls may still indicate maliciousness and are seen below:
#### 🌐 **Networking / C2 Communication**
Look for these to identify beaconing, data exfiltration, or command & control activity:
- `WSAStartup`, `WSACleanup` – Initialize Winsock
- `socket`, `connect`, `bind`, `listen`, `accept` – Basic socket functions
- `send`, `recv`, `sendto`, `recvfrom` – Data transfer
- `gethostbyname`, `getaddrinfo`, `inet_addr`, `inet_ntoa` – DNS resolution
- `InternetOpen`, `InternetConnect`, `HttpOpenRequest`, `HttpSendRequest` – WinINet HTTP functions
- `WinHttpOpen`, `WinHttpConnect`, `WinHttpSendRequest` – WinHTTP equivalents
- `URLDownloadToFile` – Common in droppers/downloader malware

#### 🧠 **Memory Injection / Process Injection**
Common in malware that injects itself into other processes or evades detection
- `VirtualAlloc`, `VirtualAllocEx` – Allocate memory (often for shellcode)
- `WriteProcessMemory`, `ReadProcessMemory`
- `CreateRemoteThread` – Create thread in another process
- `SetThreadContext`, `GetThreadContext`
- `NtUnmapViewOfSection` – Used in process hollowing
- `QueueUserAPC`, `NtQueueApcThread` – Stealth injection

#### 🧬 **Persistence Mechanisms**
APIs used to establish long-term presence on a system
- `RegCreateKeyEx`, `RegSetValueEx`, `RegOpenKeyEx` – Modify registry
- `CreateService`, `OpenService`, `StartService` – Windows services
- `SetWindowsHookEx` – Keyboard hooks or event-based persistence
- `CopyFile`, `MoveFile`, `SetFileAttributes` – Drop copy of malware
- `TaskScheduler APIs` (e.g. `CoCreateInstance`, `ITaskScheduler`) – Scheduled task persistence

#### 🧱 **Obfuscation / Anti-Analysis**
Used to detect sandboxes, evade analysts, or hide execution
- `IsDebuggerPresent`, `CheckRemoteDebuggerPresent`
- `NtQueryInformationProcess`, `NtSetInformationThread`
- `OutputDebugString` – May check debugger response
- `Sleep`, `NtDelayExecution` – Delay execution, may be patched during analysis
- `GetTickCount`, `QueryPerformanceCounter` – Time checks to detect speed of analysis
- `GetModuleHandle`, `GetProcAddress` – Dynamically resolving APIs (common in packers)
- `LoadLibrary`, `LoadLibraryEx` – Load DLLs at runtime

#### 🪄 **User Interface Interaction / Keylogging / Input Capture**
Indicators of surveillance behavior or UI spoofing:
- `GetAsyncKeyState`, `GetKeyState` – Keylogging
- `SetWindowsHookEx` – Keyboard and mouse hooks
- `FindWindow`, `ShowWindow`, `SendMessage` – Window manipulation
- `MessageBox`, `DialogBox` – May be used for phishing or social engineering

#### 🛠️ **Privilege Escalation & System Manipulation**
APIs used to escalate privileges or modify system state
- `AdjustTokenPrivileges`, `OpenProcessToken`
- `LookupPrivilegeValue`
- `OpenProcess`, `TerminateProcess`, `EnumProcesses`
- `CreateToolhelp32Snapshot`, `Process32First/Next` – Process enumeration

---

## 🌐 Example Scenarios

- 🔐 **Malware Analysis** – Identify suspicious behavior in unknown binaries.
- 🕵️ **Vulnerability Research** – Discover potential buffer overflows or RCEs.
- 🔧 **Binary Patching** – Modify binaries to bypass checks or change behavior.
- 🎮 **Game Modding** – Reverse game executables for modding fun.

---

## 💡 Pro Tips

- Use the built-in **Decompiler** (powered by Ghidra or RetDec) for readable code.
- Enable **autocomments** to better understand function flows.
- Use **navigation hotkeys** for fast switching.
- Check out **community plugins** for automation tools!

---

## 📚 References
- [Cutter Docs](https://cutter.re/docs/)
- [GitHub Repo](https://github.com/rizinorg/cutter)
- [Rizin Project](https://rizin.re/)
- [Ghidra](https://ghidra-sre.org/)

---

![VIDEO](https://www.youtube.com/watch?v=NBORnYVw4ng)

Enjoy hacking the binary matrix! 💻🧠🔍