# 🛡️ Endpoint Detection & Response 
#KA #edr

Endpoint Detection and Response (EDR) analysis is the process of monitoring and investigating activities on endpoint devices to detect, respond to, and mitigate potential security threats. It involves using various tools and commands to gather system, network, and process information to identify malicious activities and anomalies. 🖥️💻

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
- **Process Execution**:  Running Processes, Executables, cmdlets, Process Hierarchy.
- **File System Changes**: Create, Modify or Delete.
- **Network Connection**: Traffic, Initiated Connections, Executables.
- **Registry Modifications**: Keys/Values, Backdoors, Persistence, Evasion.

## Windows 

### Core Processes (others available at [[Windows Executables]])

#### System
> The **"System"** process (PID 4) in Windows is a core kernel process handling hardware interactions, drivers, and memory management. It runs under **NT Kernel & System** and is essential for OS stability. High resource usage may indicate driver issues, hardware faults, or malware.

|  Tag   |  Details  |
| --- | --- |
|  **Image Path**   |  None or `C:\Windows\system32\ntoskrnl.exe`   |
|  **PID**   |  4   |
|  **Parent Process**   |  None or System Idle Process   |
|  **No. Of Instances**   |  1   |
|  **User Account**   |  Local System  |
|  **Start Time**   |  At Boot   |

#### smss.exe (Session Manager Subsystem)
> **smss.exe (Session Manager Subsystem)** is a critical Windows process that initializes user sessions, starts system processes, and manages virtual memory. It runs from **C:\Windows\System32**, and only one instance should persist after startup—multiple instances may indicate malware.

|  Tag   |  Details  |
| --- | --- |
|  **Image Path**   |  `%SystemRoot%\System32\smss.exe`   |
|  **Parent Process**   |  System (4)   |
|  **No. Of Instances**   |  1 master, 1 child instance per session (children self-terminate)   |
|  **User Account**   |  Local System  |
|  **Start Time**   |  Within seconds of boot   |

#### csrss.exe (Client/Server Runtime Subsystem)
> **csrss.exe (Client/Server Runtime Subsystem)** is a critical Windows process managing console windows, GUI shutdown, and process handling. It runs from **C:\Windows\System32**, and any instance outside this directory may indicate malware.

|  Tag   |  Details  |
| --- | --- |
|  **Image Path**   |  `%SystemRoot%\System32\csrss.exe`   |
|  **Parent Process**   |  smss.exe (orphan process)   |
|  **No. Of Instances**   |  Two or more   |
|  **User Account**   |  Local System  |
|  **Start Time**   |  Within seconds of boot (first two instances)  |

#### wininit.exe (Windows Initialisation)
> **wininit.exe (Windows Initialization Process)** is a critical system process that starts key services like **lsass.exe** and **services.exe** during startup. It runs from **C:\Windows\System32**, and terminating it will crash the system.

|  Tag   |  Details  |
| --- | --- |
|  **Image Path**   |  `%SystemRoot%\System32\wininit.exe`   |
|  **Parent Process**   |  smss.exe (orphan process)   |
|  **No. Of Instances**   |  1   |
|  **User Account**   |  Local System  |
|  **Start Time**   |  Within seconds of boot  |

#### services.exe (Service Control Manager)
> **services.exe (Service Control Manager)** manages Windows system services, ensuring they run correctly. It operates from **C:\Windows\System32**, and terminating it can cause system instability or a crash.

|  Tag   |  Details  |
| --- | --- |
|  **Image Path**   |  `%SystemRoot%\System32\services.exe`   |
|  **Parent Process**   |  wininit.exe   |
|  **No. Of Instances**   |  1   |
|  **User Account**   |  Local System  |
|  **Start Time**   |  Within seconds of boot  |

#### svchost.exe (Service Host)
> **svchost.exe (Service Host Process)** is a critical Windows process that hosts and manages system services running from dynamic-link libraries (DLLs). Multiple instances run simultaneously, each handling different services. It operates from **C:\Windows\System32**, and suspicious locations may indicate malware.

|  Tag   |  Details  |
| --- | --- |
|  **Image Path**   |  `%SystemRoot%\System32\svchost.exe`   |
|  **Parent Process**   |  services.exe   |
|  **No. Of Instances**   |  Many (typically 10+)   |
|  **User Account**   |  Local System, Network Service, Local Service, or a user account  |
|  **Start Time**   |  Within seconds of boot or whenever services start  |

#### lsass.exe (Local Security Authority Subsystem Service)
> **lsass.exe (Local Security Authority Subsystem Service)** is a critical Windows process responsible for enforcing security policies, handling user authentication, and managing access tokens. It runs from **C:\Windows\System32**, and any instance outside this location may indicate malware. Terminating it will force a system reboot.

|  Tag   |  Details  |
| --- | --- |
|  **Image Path**   |  `%SystemRoot%\System32\lsass.exe`   |
|  **Parent Process**   |  wininit.exe   |
|  **No. Of Instances**   |  1   |
|  **User Account**   |  Local System  |
|  **Start Time**   |  Within seconds of boot  |

#### winlogon.exe (Windows Logon)
> **winlogon.exe (Windows Logon Process)** is a critical Windows process responsible for handling user logins, logouts, and the secure attention sequence (Ctrl+Alt+Del). It runs from **C:\Windows\System32**, and any instance outside this location may indicate malware. Terminating it will crash or log out the system.

|  Tag   |  Details  |
| --- | --- |
|  **Image Path**   |  `%SystemRoot%\System32\winlogon.exe`   |
|  **Parent Process**   |  smss.exe (orphan process)   |
|  **No. Of Instances**   |  1 or more   |
|  **User Account**   |  Local System  |
|  **Start Time**   |  Within seconds of boot (Session 1)  |

#### explorer.exe (Windows Explorer)
> **explorer.exe (Windows Explorer)** is a core Windows process that manages the desktop, taskbar, and file explorer. It provides the graphical user interface (GUI) for navigating files and system resources. Located in **C:\Windows**, terminating it will close the desktop and taskbar but can be restarted via Task Manager.

|  Tag   |  Details  |
| --- | --- |
|  **Image Path**   |  `%SystemRoot%\explorer.exe`   |
|  **Parent Process**   |  userinit.exe (orphan process)   |
|  **No. Of Instances**   |  1 or more   |
|  **User Account**   |  Logged-in User Account  |
|  **Start Time**   |  When interactive user sessions begin  |


### Network Analysis
Network analysis is crucial for triaging EDR (Endpoint Detection and Response) detections because it helps identify and contextualize suspicious activities across the network, enabling quicker and more accurate responses to potential threats.

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

### Process Analysis
Process analysis is important for triaging EDR detections because it allows security teams to understand the behavior of processes on endpoints, identify malicious activities, and respond effectively to security threats.

There are three different kind of processes that can be executed on a windows host:
1. **System Processes** (Windows) - Core functions - e.g. smss.exe, csrss.exe, etc.
2. **User Processes** (Application) - User Initiated - e.g. chrome.exe, notepad.exe, etc.
3. **Service Processes** (Background) - Background Functions - Windows update, Print Spooler, lsass.exe, etc.

### Process Tree
> below shows an example of a parent/child process relationship in terms of explorer.exe

PID= Process ID

![[better process tree.png]]

#### Running Process Analysis 
##### Tasklist Command
- this will present a list of all running processes on the system
```bash
tasklist 
```
- /V presents a more verbose output
```bash
tasklist /V
```
- /M provides a list of dll modules that are loaded by each process
```bash
tasklist /M
```
- /FI allows for filtering the results based of the provided term
```bash
tasklist /FI "<COLUMN NAME> eq <SEARCH TERM>"   #e.g. tasklist /FI "PID eq 2088"
```

##### Windows Management Instrumentation Command-line (WMIC) command
- this will list information of all the processes currently running on the computer utilising WMIC
```bash
wmic process get name, parentprocessid, processid, commandline
```
- this will list information about the processes currently running on the computer utilising WMIC where the process id equals a given PID
```bash
wmic process where processid=<PROCESS ID> get name, parentprocessid, processid, commandline
```
- this will list information about the processes currently running on the computer utilising WMIC filtering by a given term
```bash
wmic processe get name, parentprocessid, processid, commandline | find "<TERM>"  #e.g. find "192"
```

##### Graphical Running Process Analysis
- To view running process **Graphically** we can utilise the windows task manager a.k.a. taskmanager.exe 

- We can also use the SysInternals tool from Microsoft known as **Process Explorer** - Available [HERE](https://learn.microsoft.com/en-us/sysinternals/downloads/process-explorer)
A Full breakdown of the tool is located at [[Process Explorer]]

## Linux

### Network Analysis 

```bash
sudo netstat -tnp
```
> This command will display active connections to the system (-t=active tcp connections, -n=no DNS resolve, -p provides the PID & filename)

```bash
sudo ss -tnp      #socket statistics
```
> This command is a modern version of netstat and provides all active connections to the system

```bash
sudo ss src <SOURCE ADDRESS>
```
> This command shows all active connections from a given source 

```bash
sudo ss dport == <DEST PORT> -tnp
```
> This command shows all active connections from a given source 

```bash
sudo lsof -u <USER> -i -n -P -p <PID> +L1
```
> Lists information about currently opened files on the system
`-u` - user filtering flag
`-i` - list active network connections and listening ports
`-n/-P` - does not preform dns lookup
`-p` - specify a process id to look up
`+L1` - shows deleted files that remain active as the process is still running

### Process Analysis

```bash
sudo ps -u <USER> -AFH -p <PID> | less
```
> shows running processes on the system
`-u` - shows running processes for a particular user 
`-A` - shows all running processes on the system
`-F` - provides a verbose response
`-H` - provides a forest style output
`-p` - specify a process id
`| less` - allows the user to manually navigate through the output 

```bash
sudo pstree -p -s <PID>
```
> provides a tree diagram of running processes 
`-p` - display the process ID of the running process
`-s` - display the parent process ID of the running process

```bash
sudo top -u <USER> -c -o -<FILTERED COLUMN>
```
> provides a live view of running processes on the system
`-u` - shows running processes for a particular user 
`-c` - provides a more verbose output 
`-o` - outputs based on an applied filter 
pressing the `h` key shows other interactable shortcuts for the `top` command

#### Linux `/proc` Directory
A **virtual filesystem** that provides real-time system and process information.
It contains pseudo-files that represent system and kernel data, such as CPU info, memory usage, running processes, and hardware configurations. Some key files and directories include:

**`/proc/cpuinfo`** – CPU details
**`/proc/meminfo`** – Memory usage
**`/proc/{PID}/`** – Process-specific information (e.g., `/proc/1234/` for process 1234)
**`/proc/mounts`** – Mounted filesystems
**`/proc/sys/`** – Kernel parameters (modifiable via `sysctl`)

Since `/proc` is dynamically generated, it doesn’t consume actual disk space and is essential for system monitoring and management.

### Linux Cron Jobs

> Below is an example of a Linux cron job entry

![[cron job.png]]

`05` - This column represents the **minute** the command will be executed
`00` - This column represents the **hour** the command will be executed 
`*` - The First of these columns represents the day of the month the command will be executed (in this case it will be every day)
`*` - The Second of these columns represents the month the command will execute (in this case it will be every month)
`*` - The Third of these columns represents the day of the week this command will execute (in this case every day of the week)
`/tmp/backup.sh` - This is the command field, this represents the command that is scheduled to be executed

The result of the above cron job will execute `backup.sh` from the `/tmp` directory every day at 12:05 am
For a further breakdown on Linux cron jobs the website [crontab guru](https://crontab.guru/) provides a brilliant resource

To view all currently scheduled cron jobs within a system we can execute the following command 
```bash
cat ~/etc/crontab
```

Use the following commands to visually see all subsets of cron jobs 
```bash 
ls -al /etc/cron.daily/
ls -al /etc/cron.hourly/
ls -al /etc/cron.monthly/
ls -al /etc/cron.weekly/
ls -al /etc/cron.yearly/
```

We can also use the `sha256sum` command to provide the hash of the executable scheduled to run e.g.:
```bash
sha256sum /etc/cron.<SUBSET>/*
```


