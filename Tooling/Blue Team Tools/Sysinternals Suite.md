# ⚡ Microsoft Sysinternals Suite 🔍🖥️

#Tool #TTgen #BLUE #Win #Sysinternals 

The **Microsoft Sysinternals Suite** is a collection of advanced utilities created by **Mark Russinovich** and now maintained by Microsoft. These tools are widely used by system administrators, penetration testers, forensic investigators, and SOC analysts to troubleshoot, analyze, and secure Windows environments.  

**📘 Official Documentation & Downloads:** [Sysinternals Suite](https://learn.microsoft.com/en-us/sysinternals/)  

---

![Sysinternals Logo](https://learn.microsoft.com/en-us/sysinternals/media/sysinternals-logo.png)

---

### 🚀 Installing Sysinternals Suite

#### 🔹 **Windows**
You can download the full suite directly here:  
➡️ [Download Sysinternals Suite](https://download.sysinternals.com/files/SysinternalsSuite.zip)

Alternatively, run directly without installation using **Sysinternals Live**:  
👉 Open `\\live.sysinternals.com\tools` in **Windows Explorer**

---

## 🧰 Included Tools in Sysinternals Suite

Here’s the complete list of tools, with links to download each individually:

- [Autoruns](https://learn.microsoft.com/en-us/sysinternals/downloads/autoruns) – Shows what programs are configured to run during system bootup or login.
- [Process Explorer](https://learn.microsoft.com/en-us/sysinternals/downloads/process-explorer) – Advanced task manager showing detailed information about processes.
- [Process Monitor](https://learn.microsoft.com/en-us/sysinternals/downloads/procmon) – Real-time file system, registry, and process/thread activity monitor.
- [PsExec](https://learn.microsoft.com/en-us/sysinternals/downloads/psexec) – Execute processes on remote systems.
- [PsTools Suite](https://learn.microsoft.com/en-us/sysinternals/downloads/pstools) – A set of command-line utilities for remote management.
- [TCPView](https://learn.microsoft.com/en-us/sysinternals/downloads/tcpview) – View detailed listings of all TCP and UDP endpoints.
- [BgInfo](https://learn.microsoft.com/en-us/sysinternals/downloads/bginfo) – Display relevant system info on the desktop background.
- [AccessChk](https://learn.microsoft.com/en-us/sysinternals/downloads/accesschk) – View effective permissions on files, registry keys, and more.
- [Handle](https://learn.microsoft.com/en-us/sysinternals/downloads/handle) – See which processes have opened which files.
- [Disk2vhd](https://learn.microsoft.com/en-us/sysinternals/downloads/disk2vhd) – Create a VHD version of a physical disk for use in Microsoft Virtual PC.
- [Sigcheck](https://learn.microsoft.com/en-us/sysinternals/downloads/sigcheck) – Verify digital signatures of files and check for malware.
- [RAMMap](https://learn.microsoft.com/en-us/sysinternals/downloads/rammap) – Advanced physical memory usage analysis.
- [WinObj](https://learn.microsoft.com/en-us/sysinternals/downloads/winobj) – Explore Windows object namespace.
- [VMMap](https://learn.microsoft.com/en-us/sysinternals/downloads/vmmap) – Show a detailed breakdown of a process’s virtual memory.
- [ADExplorer](https://learn.microsoft.com/en-us/sysinternals/downloads/adexplorer) – Active Directory Explorer.
- [PsLoggedOn](https://learn.microsoft.com/en-us/sysinternals/downloads/psloggedon) – Find out who is logged on locally or via resource sharing.
- [Desktops](https://learn.microsoft.com/en-us/sysinternals/downloads/desktops) – Create up to four virtual desktops.
- [ZoomIt](https://learn.microsoft.com/en-us/sysinternals/downloads/zoomit) – Presentation zoom and annotation tool.
- [Sysmon](https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon) – System monitoring tool for detecting advanced persistent threats.
- [Streams](https://learn.microsoft.com/en-us/sysinternals/downloads/streams) – Reveal NTFS alternate data streams.
- [Whois](https://learn.microsoft.com/en-us/sysinternals/downloads/whois) – Simple domain name lookup utility.
- [PendMoves](https://learn.microsoft.com/en-us/sysinternals/downloads/pendmoves) – Show file rename and delete commands pending on reboot.
- [DbgView](https://learn.microsoft.com/en-us/sysinternals/downloads/debugview) – Capture debug output on local or remote computers.
- [NotMyFault](https://learn.microsoft.com/en-us/sysinternals/downloads/notmyfault) – Crash a system deliberately for testing crash recovery.

_For the full list, visit the [Sysinternals Downloads Page](https://learn.microsoft.com/en-us/sysinternals/downloads/)._

---

## 🌐 Example Scenarios

- 🕵️ **Malware Analysis**: Use **Autoruns** + **Sigcheck** to detect persistence and unsigned executables.  
- 🔍 **Forensics**: Monitor suspicious behavior in real time using **Process Monitor** and **Sysmon**.  
- ⚙️ **Incident Response**: Identify remote processes with **PsExec** and **PsLoggedOn** during an investigation.  
- 📡 **Network Monitoring**: Track unexpected outbound connections with **TCPView**.  
- 🛠️ **System Troubleshooting**: Use **RAMMap** to analyze memory leaks and **VMMap** to debug memory usage.

---

## 🚀 Pro Tips

- 🔑 Always run Sysinternals tools with **Administrator privileges** for full access.  
- 🕵️ Combine **Autoruns** + **VirusTotal integration** for quick malware detection.  
- 💡 Use `\\live.sysinternals.com\tools` to avoid downloading and always have the latest version.  
- ⚡ Pair **Sysmon** with a SIEM like Splunk or ELK for real-time threat detection.

---

## 📚 References
- [Microsoft Sysinternals Official Site](https://learn.microsoft.com/en-us/sysinternals/)
- [Sysinternals Live](https://learn.microsoft.com/en-us/sysinternals/live)
- [Sysmon Configuration Examples](https://github.com/SwiftOnSecurity/sysmon-config)

---

![VIDEO](https://img.youtube.com/vi/7XY3xsyVZ9E/0.jpg)  
▶️ [Watch: Introduction to Sysinternals](https://www.youtube.com/watch?v=7XY3xsyVZ9E)