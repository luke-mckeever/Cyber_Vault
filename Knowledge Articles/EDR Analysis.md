#KA #edr
# 🛡️ EDR Analysis

Endpoint Detection and Response (EDR) analysis is the process of monitoring and investigating activities on endpoint devices to detect, respond to, and mitigate potential security threats. It involves using various tools and commands to gather system, network, and process information to identify malicious activities and anomalies. 🖥️💻

---

## 🔷 Windows EDR Analysis

Windows EDR analysis focuses on leveraging built-in tools and command-line utilities to investigate potential security incidents on Windows systems. It allows administrators to analyze processes, network connections, system logs, and more to detect and respond to threats effectively.

### 🚀 Commands Only:

1. **PowerShell** ⚡
   - Check Running Processes:
     ```powershell
     Get-Process | Sort-Object CPU -Descending
     ```
   - List Network Connections:
     ```powershell
     Get-NetTCPConnection | Select-Object LocalAddress, LocalPort, RemoteAddress, RemotePort, State
     ```
   - Retrieve Services:
     ```powershell
     Get-Service | Where-Object {$_.Status -eq 'Running'}
     ```

2. **Command Prompt (CMD)** 🖹
   - List Installed Programs:
     ```cmd
     wmic product get name, version
     ```
   - Show Active Network Connections:
     ```cmd
     netstat -ano
     ```
   - Query System Information:
     ```cmd
     systeminfo
     ```

3. **Windows Defender Command-Line Interface** 🛡️
   - Quick Scan:
     ```cmd
     MpCmdRun.exe -Scan -ScanType 1
     ```
   - Full Scan:
     ```cmd
     MpCmdRun.exe -Scan -ScanType 2
     ```

4. **WMIC (Windows Management Instrumentation Command-line)** 🔍
   - List Running Processes:
     ```cmd
     wmic process list brief
     ```
   - Query System Boot Time:
     ```cmd
     wmic os get lastbootuptime
     ```

---

## 🟢 Linux EDR Analysis

Linux EDR analysis involves using command-line tools to monitor system behavior, analyze logs, and manage processes to identify potential security threats. It is particularly effective in environments where Linux is used for servers or workstations, providing insights into system activities and vulnerabilities.

### 🚀 Commands Only:

1. **Process Monitoring** 📊
   - List Active Processes:
     ```bash
     ps aux --sort=-%cpu
     ```
   - Display Process Tree:
     ```bash
     pstree -p
     ```
   - Interactive Process Viewer:
     ```bash
     htop
     ```

2. **Log Analysis** 📄
   - Review System Logs:
     ```bash
     tail -n 50 /var/log/syslog
     ```
   - Filter Logs for Authentication:
     ```bash
     grep "authentication failure" /var/log/auth.log
     ```

3. **Network Analysis** 🌐
   - Display Active Connections:
     ```bash
     ss -tuln
     ```
   - Monitor Traffic on Interface:
     ```bash
     tcpdump -i eth0
     ```
   - Check Firewall Rules:
     ```bash
     sudo iptables -L -v
     ```

4. **File Integrity and Permissions** 🔒
   - Verify File Hash:
     ```bash
     sha256sum /path/to/file
     ```
   - Check File Permissions:
     ```bash
     ls -l /path/to/directory
     ```
   - Find SUID/SGID Files:
     ```bash
     find / -perm /6000 -type f 2>/dev/null
     ```

5. **Malware Detection** 🛡️
   - Scan with ClamAV:
     ```bash
     clamscan -r /path/to/directory
     ```
   - Update ClamAV Definitions:
     ```bash
     freshclam
     ```

6. **System Information** 📋
   - Display Kernel and OS Details:
     ```bash
     uname -a
     ```
   - Show Disk Usage:
     ```bash
     df -h
     ```
   - Display Memory Usage:
     ```bash
     free -h
     ```

---

✨ With these tools and commands, you can gain better insights into EDR activities and protect your systems effectively! 💪
