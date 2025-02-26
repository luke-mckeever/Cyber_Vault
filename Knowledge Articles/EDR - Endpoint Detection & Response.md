# 🛡️ EDR - Endpoint Detection & Response 
#KA #edr

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

2. **Command Prompt (bash)** 🖹
   - List Installed Programs:
     ```bash
     wmic product get name, version
     ```
   - Show Active Network Connections:
     ```bash
     netstat -ano
     ```
   - Query System Information:
     ```bash
     systeminfo
     ```

3. **Windows Defender Command-Line Interface** 🛡️
   - Quick Scan:
     ```bash
     MpbashRun.exe -Scan -ScanType 1
     ```
   - Full Scan:
     ```bash
     MpbashRun.exe -Scan -ScanType 2
     ```

4. **WMIC (Windows Management Instrumentation Command-line)** 🔍
   - List Running Processes:
     ```bash
     wmic process list brief
     ```
   - Query System Boot Time:
     ```bash
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




# New Notes 


### ❓ What is an endpoint? 
> An endpoint is **any device that is physically an end point on a network**. Laptops, desktops, mobile phones, tablets, servers, and virtual environments can all be considered endpoints.   


### 🖥️ Endpoint Security Controls

#### - **Antivirus**
Antivirus software protects computers and mobile devices from malware such as viruses, worms, and trojans. It scans files and programs to detect malicious patterns and either removes or quarantines threats to prevent damage to the system.

#### - **Endpoint Detection & Response (EDR)**
EDR systems are advanced security tools that monitor endpoint activities in real-time, collecting data that can be used to identify early indicators of attacks. They also provide automated response capabilities to isolate affected endpoints and remediate threats.

#### - **Extended Detection & Response (XDR)**
XDR extends beyond EDR by correlating data from endpoints, networks, servers, cloud services, and emails to provide a holistic view of an organization's security posture. This integration allows for more accurate threat detection and coordinated response across different security layers.

#### - **Data Loss Prevention (DLP)**
DLP technology focuses on identifying and protecting sensitive information from unauthorized access or leaks. It controls and blocks the unauthorized transfer of sensitive information outside the organization's network while ensuring compliance with regulatory requirements like GDPR or HIPAA.

#### - **User & Entity Behaviour Analytics (UBA)**
UEBA tools analyse the behaviours of users and entities (like devices and servers) within a network to establish baseline normal activities. They use advanced analytics, including machine learning, to detect deviations that may indicate a security threat, such as compromised accounts, insider threats, or external attacks, enabling proactive responses to suspicious activities.

#### - **HIDS / HIPS**
*Host Intrusion Detection System (HIDS) / Host Intrusion Prevention System (HIPS)*: HIDS and HIPS are security solutions used to monitor and protect critical system and file integrity on individual hosts, such as servers or workstations. HIDS detects unauthorized or malicious activity by analyzing system and application logs, while HIPS actively prevents intrusion attempts by enforcing policies and rules that block potentially harmful behavior before it can cause damage. Together, they provide comprehensive monitoring and proactive defence against threats at the host level.

#### - **Host-based Firewall**
A host-based firewall is a security application installed directly on a networked device such as a server, desktop, or laptop. It controls incoming and outgoing network traffic to that specific device based on a set of security rules defined by the user or administrator. This type of firewall provides a layer of defense at the device level, protecting against unauthorized access and attacks that might bypass network-level security measures.

### Monitoring:
The below are a list of important items to consider with EDR monitoring.
- **Process Execution**:  Running Processes, Executables, bashlets, Process Hierarchy.
- **File System Changes**: Create, Modify or Delete.
- **Network Connection**: Traffic, Initiated Connections, Executables.
- **Registry Modifications**: Keys/Values, Backdoors, Persistence, Evasion.

## Windows 

### Network Analysis
```bash
net view \\<LOCAL HOST IP>
```
> This command will show shared network resources on the provided host

```bash
net share
```
> This command will list the names and locations of shared network resources on the provided host

```bash
net session
```
> This command will return all active inbound session connections to the system

```bash
net use
```
> This command will list all active inbound session connections to the system and provide local host information for the share 

```bash
net stat -anob 
```
> This command will display active connections to the system (-a=active tcp/udp connections, -n=show IP's numerically, o=include PID, b=Display process filename)





