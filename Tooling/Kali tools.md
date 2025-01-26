#Tool #RED #TTgen 
# Kali Tools Cheatsheet 🐉💻

Kali Linux is packed with hundreds of tools designed for penetration testing, ethical hacking, and cybersecurity research. This guide provides an overview of the most popular tools, grouped by categories and accompanied by descriptions. Use this cheatsheet to explore and master the power of Kali! 🚀

---
# 🗄 All Current Kali Tools
| **Name**                      | **Description**                                                                               | **Category**             |     |
| ----------------------------- | --------------------------------------------------------------------------------------------- | ------------------------ | --- |
| **aircrack-ng**               | A suite of tools for analyzing and cracking WiFi security protocols.                          | Wireless Security        |     |
| **amass**                     | A tool for in-depth DNS enumeration and network mapping.                                      | Reconnaissance           |     |
| **arping**                    | Sends ARP requests to test network connectivity and gather MAC addresses.                     | Network Tools            |     |
| **atk6-thcping6**             | A tool for testing IPv6 connectivity using ICMP echo requests.                                | IPv6 Networking          |     |
| **Autopsy**                   | A digital forensics platform for analyzing disk images and recovering data.                   | Digital Forensics        |     |
| **binwalk**                   | A tool for analyzing and extracting firmware images.                                          | Binary Analysis          |     |
| **blkcalc**                   | Calculates metadata for file system blocks.                                                   | File System Tools        |     |
| **blkcat**                    | Extracts raw data from specific file system blocks.                                           | File System Tools        |     |
| **blkstat**                   | Provides information about file system metadata for a specific block.                         | File System Tools        |     |
| **bulk_extractor**            | Extracts useful information such as emails, URLs, and metadata from disk images.              | Digital Forensics        |     |
| **bully**                     | A WPS vulnerability assessment tool for WiFi networks.                                        | Wireless Security        |     |
| **cadaver**                   | A command-line WebDAV client for managing remote file systems.                                | File Transfer            |     |
| **cewl**                      | A tool for generating custom wordlists by scraping websites.                                  | Password Cracking        |     |
| **chntpw**                    | A tool for editing and resetting Windows passwords.                                           | Password Recovery        |     |
| **clang**                     | A compiler for C language programming, providing static analysis and code optimization.       | Development Tools        |     |
| **clang++**                   | A compiler for C++ language programming, providing static analysis and code optimization.     | Development Tools        |     |
| **commix**                    | Automated tool for testing and exploiting command injection vulnerabilities.                  | Web Security             |     |
| **crackmapexec**              | A post-exploitation tool for Active Directory network reconnaissance and penetration testing. | Post-Exploitation        |     |
| **crunch**                    | A wordlist generator that creates custom password lists.                                      | Password Cracking        |     |
| **cryptsetup**                | A utility for managing encrypted disks and volumes.                                           | Encryption Tools         |     |
| **cutycapt**                  | Captures web pages as images from the command line.                                           | Web Tools                |     |
| **davtest**                   | A tool for testing WebDAV servers for vulnerabilities.                                        | Web Security             |     |
| **dbd**                       | A backdoor tool for maintaining remote access to compromised systems.                         | Remote Access            |     |
| **dirb**                      | A web content scanner used to find hidden directories and files on web servers.               | Web Security             |     |
| **dirbuster**                 | A multi-threaded directory and file brute-forcer.                                             | Web Security             |     |
| **dmitry**                    | A command-line network information gathering tool.                                            | Reconnaissance           |     |
| **dns-rebind**                | A tool for testing and exploiting DNS rebinding vulnerabilities.                              | DNS Attacks              |     |
| **dns2tcpc**                  | A tool for tunneling TCP connections over DNS.                                                | DNS Tunneling            |     |
| **dns2tcpd**                  | A daemon for handling DNS-based TCP tunneling.                                                | DNS Tunneling            |     |
| **dnschef**                   | A customizable DNS proxy for penetration testing.                                             | DNS Tools                |     |
| **dnsenum**                   | A DNS enumeration tool for discovering information about domains and subdomains.              | Reconnaissance           |     |
| **dnsmap**                    | A DNS mapping tool for identifying subdomains.                                                | Reconnaissance           |     |
| **[[DNS Recon]]**                  | A DNS reconnaissance tool for performing advanced queries and zone transfers.                 | Reconnaissance           |     |
| **dsniff**                    | A collection of tools for network traffic analysis and password sniffing.                     | Network Tools            |     |
| **angry IP Scanner**          | A fast and friendly network scanner.                                                          | Network Tools            |     |
| **0trace.sh**                 | A tool for IP-level route tracing while staying undetected.                                   | Network Tools            |     |
| **evil-winrm**                | A WinRM shell for Windows remote management penetration testing.                              | Remote Access            |     |
| **exe2hex**                   | Converts executable files into hexadecimal format for embedding in scripts.                   | Development Tools        |     |
| **Exploit Database**          | A searchable archive of exploits, shellcode, and security papers.                             | Exploit Resources        |     |
| **Faraday**                   | A collaborative pen-testing and vulnerability management platform.                            | Collaboration Tools      |     |
| **fern-wifi-cracker**         | A tool for auditing and attacking WiFi networks.                                              | Wireless Security        |     |
| **ffind**                     | Finds files matching specified criteria within a forensic image.                              | Digital Forensics        |     |
| **[[FFUF]]**                      | A fast web fuzzer for discovering hidden resources.                                           | Web Security             |     |
| **fierce**                    | A DNS enumeration and discovery tool for penetration testing.                                 | Reconnaissance           |     |
| **fls**                       | Lists file and directory names in a forensic image.                                           | Digital Forensics        |     |
| **fping**                     | A fast ping utility for multiple hosts.                                                       | Network Tools            |     |
| **fsstat**                    | Displays detailed file system statistics from a forensic image.                               | Digital Forensics        |     |
| **(spike)generic_chunked**    | A SPIKE framework module for fuzz testing HTTP servers with chunked encoding.                 | Fuzzing Tools            |     |
| **(spike)generic_listed_tcp** | A SPIKE framework module for fuzz testing TCP servers.                                        | Fuzzing Tools            |     |
| **(spike)generic_send_tcp**   | A SPIKE framework module for sending custom TCP packets.                                      | Fuzzing Tools            |     |
| **(spike)generic_send_udp**   | A SPIKE framework module for sending custom UDP packets.                                      | Fuzzing Tools            |     |
| **Hardware Locality lstopo**  | Visualizes the hardware topology of a system for optimization purposes.                       | System Analysis          |     |
| **hash identifier**           | Identifies the type of hash used in a string.                                                 | Hash Analysis            |     |
| **hashcat**                   | A high-performance password recovery tool using GPU acceleration.                             | Password Cracking        |     |
| **hashdeep**                  | A tool for generating and comparing cryptographic file hashes.                                | Hash Analysis            |     |
| **hashid**                    | A tool to identify the type of hash for a given input.                                        | Hash Analysis            |     |
| **hfind**                     | Searches for hash matches in a forensic image.                                                | Digital Forensics        |     |
| **hping3**                    | A packet crafting tool for testing and analyzing TCP/IP protocols.                            | Network Tools            |     |
| **hydra**                     | A fast and flexible password cracking tool supporting many protocols.                         | Password Cracking        |     |
| **icat**                      | Extracts data from files within a forensic image.                                             | Digital Forensics        |     |
| **ifind**                     | Finds allocated and unallocated file entries in a forensic image.                             | Digital Forensics        |     |
| **ike-scan**                  | A tool for discovering, fingerprinting, and testing IPsec VPNs.                               | Network Security         |     |
| **ils**                       | Lists inode information in a forensic image.                                                  | Digital Forensics        |     |
| **img_cat**                   | Concatenates and outputs the contents of image files.                                         | Digital Forensics        |     |
| **img_stat**                  | Displays statistics about disk image files.                                                   | Digital Forensics        |     |
| **impacket-scripts**          | A collection of Python scripts for network protocol manipulation.                             | Network Tools            |     |
| **iodine-client-start**       | Tunnels IPv4 traffic over DNS to bypass firewalls.                                            | DNS Tunneling            |     |
| **istat**                     | Displays detailed information about a file's inode.                                           | Digital Forensics        |     |
| **jcat**                      | Extracts data from files within a forensic image.                                             | Digital Forensics        |     |
| **jls**                       | Lists file system data in a forensic image.                                                   | Digital Forensics        |     |
| **john**                      | A powerful password cracking tool, also known as John the Ripper.                             | Password Cracking        |     |
| **kismet**                    | A wireless network detector, sniffer, and intrusion detection system.                         | Wireless Security        |     |
| **laudanum**                  | A collection of scripts for exploiting vulnerabilities in web applications.                   | Web Security             |     |
| **lbd**                       | Load balancer detector for analyzing web application infrastructures.                         | Web Security             |     |
| **btop++**                    | A modern and interactive system resource monitor.                                             | System Analysis          |     |
| **macchanger**                | A utility for changing the MAC address of a network interface.                                | Network Tools            |     |
| **mactime**                   | Creates a timeline of file activity based on metadata.                                        | Digital Forensics        |     |
| **magic rescue**              | Recovers files based on their magic numbers from a corrupted filesystem.                      | Digital Forensics        |     |
| **masscan**                   | An ultra-fast port scanner that can scan the entire Internet in seconds.                      | Network Tools            |     |
| **medusa**                    | A parallel brute-forcing tool for testing password security.                                  | Password Cracking        |     |
| **metasploit-framework**      | A comprehensive platform for developing and executing exploit code.                           | Exploitation Tools       |     |
| **mimikatz**                  | A post-exploitation tool for extracting credentials from Windows systems.                     | Post-Exploitation        |     |
| **minicom**                   | A text-based terminal emulator for serial communication.                                      | Communication Tools      |     |
| **above**                     | A placeholder tool for development tasks (please specify details).                            | Development Tools        |     |
| **miredo**                    | A Teredo IPv6 tunneling client.                                                               | Networking Tools         |     |
| **mitmproxy**                 | An interactive, SSL-capable man-in-the-middle proxy for HTTP/HTTPS.                           | Web Security             |     |
| **mmcat**                     | Concatenates and extracts data from a forensic image.                                         | Digital Forensics        |     |
| **mmls**                      | Displays the layout of partitions in a forensic image.                                        | Digital Forensics        |     |
| **mmstat**                    | Displays metadata statistics of a forensic image.                                             | Digital Forensics        |     |
| **msf-nasm_shell**            | A Metasploit tool for converting assembly code to machine code.                               | Exploitation Tools       |     |
| **msfpc**                     | A script for generating payloads for Metasploit and other frameworks.                         | Exploitation Tools       |     |
| **nbtscan**                   | Scans networks for NetBIOS name information.                                                  | Network Tools            |     |
| **ncrack**                    | A high-speed network authentication cracking tool.                                            | Password Cracking        |     |
| **[[Net Cat]]**                    | A versatile networking tool for debugging and investigating the network.                      | Network Tools            |     |
| **netdiscover**               | A passive network discovery tool for detecting live hosts on a network.                       | Reconnaissance           |     |
| **netexec**                   | A tool for executing commands over the network.                                               | Remote Access            |     |
| **netmask**                   | A tool for managing and understanding IP address subnetting.                                  | Networking Tools         |     |
| **netsniff-ng**               | A high-performance network packet sniffer and analyzer.                                       | Network Tools            |     |
| **[[Nikto]]**                     | A web server scanner for identifying security vulnerabilities.                                | Web Security             |     |
| **[[NMAP]]**                      | A powerful network scanning tool for discovering hosts and services.                          | Network Tools            |     |
| **onesixtyone**               | A SNMP protocol scanner for detecting SNMP-enabled devices.                                   | Network Tools            |     |
| **ophcrack**                  | A Windows password cracker using rainbow tables.                                              | Password Cracking        |     |
| **ophcrack-cli**              | Command-line interface for Ophcrack.                                                          | Password Cracking        |     |
| **patator**                   | A multi-purpose brute-forcer for testing different protocols.                                 | Password Cracking        |     |
| **pdfparser**                 | A tool for parsing and analyzing PDF files.                                                   | Document Analysis        |     |
| **pdfid**                     | Identifies features and potential exploits in PDF files.                                      | Document Analysis        |     |
| **pipal**                     | Analyzes password dumps to determine patterns and weaknesses.                                 | Password Analysis        |     |
| **pixiewps**                  | A tool for exploiting WPS vulnerabilities to retrieve PINs.                                   | Wireless Security        |     |
| **PowerShell**                | A scripting and task automation framework for Windows.                                        | System Management        |     |
| **powershell-empire**         | A post-exploitation framework for leveraging PowerShell.                                      | Post-Exploitation        |     |
| **powersploit**               | A PowerShell-based post-exploitation toolkit.                                                 | Post-Exploitation        |     |
| **proxychains4**              | A tool for tunneling traffic through proxies.                                                 | Proxy Tools              |     |
| **proxytunnel**               | Tunnels data through HTTPS proxies.                                                           | Proxy Tools              |     |
| **ptunnel**                   | Tunnels data over ICMP to bypass firewalls.                                                   | Tunneling Tools          |     |
| **pwnat**                     | A NAT traversal tool for establishing connections across firewalls.                           | Network Tools            |     |
| **radare2**                   | An advanced binary analysis framework.                                                        | Binary Analysis          |     |
| **reaver**                    | A WPS brute-forcing tool for retrieving WiFi passwords.                                       | Wireless Security        |     |
| **recon-ng**                  | A reconnaissance framework for gathering information.                                         | Reconnaissance           |     |
| **[[responder]]**                 | A tool for poisoning LLMNR, NBT-NS, and MDNS to capture credentials.                          | Network Security         |     |
| **rsmangler**                 | Generates wordlists for password cracking.                                                    | Password Cracking        |     |
| **samdump2**                  | Dumps password hashes from Windows SAM files.                                                 | Password Recovery        |     |
| **sbd**                       | A secure backdoor for maintaining access to compromised systems.                              | Remote Access            |     |
| **scalpel**                   | A file carving tool for recovering deleted files.                                             | Digital Forensics        |     |
| **scapy**                     | A Python-based interactive packet manipulation tool.                                          | Network Tools            |     |
| **scrounge-ntfs**             | Recovers deleted data from NTFS partitions.                                                   | File Recovery            |     |
| **[[Searchsploit]]**              | Searches for exploits in the Exploit Database archive.                                        | Exploit Resources        |     |
| **[[SET (Social Engineering Toolkit)]]**                 | The Social-Engineer Toolkit for performing social engineering attacks.                        | Social Engineering       |     |
| **[[Sherlock]]**                  | A tool for finding usernames across social media platforms.                                   | Reconnaissance           |     |
| **sigfind**                   | Locates potential signatures within memory dumps.                                             | Memory Analysis          |     |
| **skipfish**                  | A web application security scanner.                                                           | Web Security             |     |
| **smbmap**                    | Enumerates Samba shares and their access levels.                                              | Network Tools            |     |
| **smtp-user-enum**            | Enumerates valid email users on an SMTP server.                                               | Email Security           |     |
| **snmp-check**                | Gathers information from SNMP-enabled devices.                                                | Network Tools            |     |
| **sorter**                    | Sorts and categorizes files in forensic investigations.                                       | Digital Forensics        |     |
| **spiderfoot**                | An open-source reconnaissance tool for gathering intelligence.                                | Reconnaissance           |     |
| **spiderfoot-cli**            | Command-line version of Spiderfoot for automation.                                            | Reconnaissance           |     |
| **spooftooph**                | A tool for cloning Bluetooth device information.                                              | Bluetooth Security       |     |
| **sqlitebrowser**             | A GUI-based tool for managing SQLite databases.                                               | Database Tools           |     |
| **sqlmap**                    | An automated tool for detecting and exploiting SQL injection vulnerabilities.                 | Web Security             |     |
| **srch_strings**              | Searches for strings in binary files.                                                         | Binary Analysis          |     |
| **ssldump**                   | Analyzes SSL/TLS traffic for debugging and analysis.                                          | Network Tools            |     |
| **sslh**                      | Allows sharing of a single port for multiple protocols, such as HTTPS and SSH.                | Networking Tools         |     |
| **sslscan**                   | Scans SSL/TLS services for supported ciphers and configurations.                              | Network Tools            |     |
| **sslsplit**                  | Intercepts and decrypts SSL/TLS connections for analysis.                                     | Network Tools            |     |
| **sslyze**                    | Analyzes the security of SSL/TLS configurations on servers.                                   | Network Tools            |     |
| **starkiller**                | A GUI for managing the Empire post-exploitation framework.                                    | Post-Exploitation        |     |
| **stunnel4**                  | Creates secure encrypted tunnels for non-SSL/TLS services.                                    | Networking Tools         |     |
| **swaks**                     | A testing tool for SMTP servers with support for authentication and encryption.               | Email Security           |     |
| **tcpdump**                   | Captures and analyzes network packets in real-time.                                           | Network Tools            |     |
| **tcprelay**                  | Redirects TCP traffic to a different destination.                                             | Network Tools            |     |
| **TeXdoctk**                  | A GUI-based tool for browsing TeX and LaTeX documentation.                                    | Documentation Tools      |     |
| **the-pptp-bruter**           | Brute-forces PPTP VPN authentication credentials.                                             | VPN Security             |     |
| **theHarvester**              | Gathers email addresses, subdomains, and other data for reconnaissance.                       | Reconnaissance           |     |
| **tsk_compare-dir**           | Compares directories in forensic images for differences.                                      | Digital Forensics        |     |
| **tsk_gettimes**              | Extracts file timestamps from a forensic image.                                               | Digital Forensics        |     |
| **tsk_loaddb**                | Loads file system metadata from a forensic image into a database.                             | Digital Forensics        |     |
| **tsk_recover**               | Recovers files from a forensic image.                                                         | Digital Forensics        |     |
| **udptunnel**                 | Tunnels TCP traffic over UDP.                                                                 | Networking Tools         |     |
| **unicornscan**               | A flexible and efficient network reconnaissance tool.                                         | Reconnaissance           |     |
| **unix-privesc-check**        | Identifies potential privilege escalation vulnerabilities on Unix-based systems.              | System Security          |     |
| **voiphopper**                | A tool for VLAN hopping in VoIP networks.                                                     | Network Security         |     |
| **VulnHub**                   | A platform for hosting vulnerable systems for security training.                              | Training Resources       |     |
| **wafw00f**                   | Identifies and fingerprints Web Application Firewalls (WAFs).                                 | Web Security             |     |
| **wapiti**                    | A web application vulnerability scanner.                                                      | Web Security             |     |
| **wash**                      | Scans for WPS-enabled access points and vulnerabilities.                                      | Wireless Security        |     |
| **webshells**                 | A collection of web-based shell scripts for remote administration.                            | Web Tools                |     |
| **weevely**                   | A stealthy PHP web shell for remote administration.                                           | Web Security             |     |
| **wfuzz**                     | A web application fuzzer for finding vulnerabilities and hidden resources.                    | Web Security             |     |
| **whatweb**                   | Identifies web technologies and CMS versions.                                                 | Reconnaissance           |     |
| **wifite**                    | An automated tool for auditing and attacking WiFi networks.                                   | Wireless Security        |     |
| **wordlists**                 | Precompiled lists of common passwords and phrases for password cracking.                      | Password Cracking        |     |
| **wpscan**                    | A WordPress vulnerability scanner.                                                            | Web Security             |     |
| **xfreerdp**                  | A free implementation of the Remote Desktop Protocol.                                         | Remote Access            |     |
| **xhydra**                    | A graphical frontend for the Hydra password cracking tool.                                    | Password Cracking        |     |
| **wireshark**                 | A network protocol analyzer for real-time traffic capture and analysis.                       | Network Tools            |     |
| **[[Burp Suite]]**                 | A comprehensive platform for web application security testing.                                | Web Security             |     |
| **affcat**                    | Extracts data from AFF disk images.                                                           | Digital Forensics        |     |
| **aflfuzz**                   | A security-oriented fuzzer for identifying vulnerabilities in applications.                   | Fuzzing Tools            |     |
| **airgeddon**                 | A multi-purpose tool for auditing and attacking wireless networks.                            | Wireless Security        |     |
| **apache-user**               | Enumerates Apache users and tests for authentication weaknesses.                              | Web Security             |     |
| **apktool**                   | Decompiles and rebuilds Android application packages (APKs).                                  | Mobile Security          |     |
| **armitage**                  | A graphical interface for the Metasploit Framework.                                           | Exploitation Tools       |     |
| **asleap**                    | Cracks LEAP (Lightweight Extensible Authentication Protocol) passwords.                       | Wireless Security        |     |
| **ass**                       | A text-based system monitoring tool.                                                          | System Monitoring        |     |
| **assetfinder**               | Finds related domains and subdomains for a given asset.                                       | Reconnaissance           |     |
| **bed**                       | A network protocol fuzzer for testing server security.                                        | Fuzzing Tools            |     |
| **beef-xss**                  | A browser exploitation framework for testing web browsers.                                    | Web Security             |     |
| **bettercap**                 | A comprehensive network attack and monitoring tool.                                           | Network Security         |     |
| **bloodhound**                | Analyzes Active Directory relationships to find attack paths.                                 | Reconnaissance           |     |
| **bluelog**                   | A Bluetooth scanning and logging tool.                                                        | Bluetooth Security       |     |
| **blueranger**                | Estimates the range of Bluetooth devices.                                                     | Bluetooth Security       |     |
| **bluesnarfer**               | Exploits Bluetooth vulnerabilities to access device information.                              | Bluetooth Security       |     |
| **braa**                      | A SNMP network scanning tool.                                                                 | Network Tools            |     |
| **btscanner**                 | Scans for Bluetooth devices and collects information.                                         | Bluetooth Security       |     |
| **Byobu Terminal**            | An enhanced terminal session manager for Unix systems.                                        | System Tools             |     |
| **bytecode-viewer**           | An interactive tool for analyzing and debugging Java bytecode.                                | Development Tools        |     |
| **CAT**                       | A command-line tool for displaying the contents of files.                                     | System Tools             |     |
| **cdp**                       | Exploits Cisco Discovery Protocol vulnerabilities.                                            | Network Security         |     |
| **cge.pl**                    | A CGI script vulnerability scanner.                                                           | Web Security             |     |
| **chirpw**                    | A tool for programming and managing amateur radio devices.                                    | Communication Tools      |     |
| **chkrootkit**                | Detects rootkits on Unix-based systems.                                                       | System Security          |     |
| **cisco-ocs**                 | A Cisco configuration and scanning tool.                                                      | Network Tools            |     |
| **cisco-torch**               | A multi-threaded tool for testing Cisco devices.                                              | Network Tools            |     |
| **clamscan**                  | A command-line antivirus scanner.                                                             | Malware Analysis         |     |
| **Cmatrix**                   | Displays a terminal-based scrolling text simulation.                                          | System Tools             |     |
| **cmospwd**                   | Recovers or resets BIOS passwords.                                                            | System Tools             |     |
| **Code-OSS**                  | An open-source code editor with extensive development tools.                                  | Development Tools        |     |
| **copy-router-config.pl**     | A tool for copying and analyzing router configurations.                                       | Network Tools            |     |
| **cowpatty**                  | Cracks WPA-PSK passwords using a precomputed hash.                                            | Wireless Security        |     |
| **crackle**                   | A Bluetooth sniffer and decryptor for analyzing secure connections.                           | Bluetooth Security       |     |
| **CuteCom**                   | A GUI-based serial terminal for communication with hardware devices.                          | Communication Tools      |     |
| **cutter**                    | A reverse engineering platform for analyzing binaries.                                        | Binary Analysis          |     |
| **cymothoa**                  | A stealth backdoor tool that injects payloads into running processes.                         | Post-Exploitation        |     |
| **d2j-dex2jar**               | Converts Android DEX files to JAR files for analysis.                                         | Mobile Security          |     |
| **darkstat**                  | A real-time network traffic analyzer and web interface.                                       | Network Monitoring       |     |
| **DBeaver Community**         | A universal database management tool with a GUI.                                              | Database Tools           |     |
| **dc3dd**                     | A forensic disk imaging tool with enhanced features.                                          | Digital Forensics        |     |
| **dcfldd**                    | An enhanced version of dd for forensic imaging.                                               | Digital Forensics        |     |
| **dd_rescue**                 | Recovers data from damaged or partially unreadable drives.                                    | Data Recovery            |     |
| **defectdojo**                | An application security program management tool.                                              | Web Security             |     |
| **dhcpig**                    | A DHCP exhaustion attack tool for testing networks.                                           | Network Security         |     |
| **dirsearch**                 | A web path scanner for discovering directories and files on servers.                          | Web Security             |     |
| **dnstracer**                 | Traces the path to a DNS server and provides details.                                         | DNS Tools                |     |
| **dnswalk**                   | Verifies the integrity of DNS zones and configurations.                                       | DNS Tools                |     |
| **dradis**                    | A collaborative penetration testing platform.                                                 | Collaboration Tools      |     |
| **driftnet**                  | Monitors network traffic and extracts images and media files.                                 | Network Monitoring       |     |
| **eapmd5pass**                | Cracks EAP-MD5 challenge hashes.                                                              | Wireless Security        |     |
| **edb**                       | A graphical debugger for x86 and x64 binaries.                                                | Debugging Tools          |     |
| **enumiax**                   | Enumerates IAX2 protocol users and extensions.                                                | VoIP Security            |     |
| **ettercap**                  | A comprehensive suite for man-in-the-middle attacks on LANs.                                  | Network Security         |     |
| **evilgrade**                 | A framework for exploiting software update vulnerabilities.                                   | Exploitation Tools       |     |
| **ewfaquire**                 | Acquires forensic images in the EWF (Expert Witness Format).                                  | Digital Forensics        |     |
| **exploitdb-papers**          | Security white papers and documents from Exploit Database.                                    | Documentation            |     |
| **ext3grep**                  | Recovers deleted files from ext3 file systems.                                                | File Recovery            |     |
| **ext4magic**                 | Recovers deleted files from ext4 file systems.                                                | File Recovery            |     |
| **extundelete**               | A tool for recovering files from ext3/ext4 file systems.                                      | File Recovery            |     |
| **eyewitness**                | Captures screenshots and gathers information on web applications.                             | Reconnaissance           |     |
| **fang**                      | Finds assets like domains, subdomains, and URLs.                                              | Reconnaissance           |     |
| **[[Fcrackzip]]**                 | A fast password cracker for zip files.                                                        | Password Cracking        |     |
| **ferret-sidejack**           | A session hijacking tool for analyzing HTTP traffic.                                          | Web Security             |     |
| **fiked**                     | A fake DHCP server for testing network clients.                                               | Network Tools            |     |
| **firewalk**                  | Analyzes firewall configurations by sending crafted packets.                                  | Network Security         |     |
| **foremost**                  | Recovers deleted files from disk images.                                                      | File Recovery            |     |
| **fragrouter**                | A network intrusion detection system evasion tool.                                            | Network Security         |     |
| **freeradius**                | An open-source RADIUS server for network authentication.                                      | Authentication Tools     |     |
| **ftest**                     | A web application testing tool.                                                               | Web Security             |     |
| **fwbuilder**                 | A GUI firewall configuration tool for iptables, PF, and more.                                 | Firewall Tools           |     |
| **galleta**                   | Analyzes web browser cookie files.                                                            | Web Security             |     |
| **ghidra**                    | A software reverse engineering framework.                                                     | Binary Analysis          |     |
| **gnuradio-companion**        | A graphical tool for creating software-defined radio (SDR) systems.                           | Communication Tools      |     |
| **gobuster**                  | A directory and file brute-forcer for web servers.                                            | Web Security             |     |
| **gqrx**                      | A software-defined radio (SDR) receiver application.                                          | Communication Tools      |     |
| **grokevt-addlog**            | Adds Windows event log files to an EVT database.                                              | Forensic Tools           |     |
| **grokevt-builddb**           | Builds a database for analyzing Windows event logs.                                           | Forensic Tools           |     |
| **grokevt-findlogs**          | Searches for Windows event log files in disk images.                                          | Forensic Tools           |     |
| **grokevt-parselog**          | Parses Windows event log files into human-readable formats.                                   | Forensic Tools           |     |
| **grokevt-ripdll**            | Extracts message files associated with Windows event logs.                                    | Forensic Tools           |     |
| **Groovy Console**            | An interactive console for experimenting with Groovy scripts.                                 | Development Tools        |     |
| **GtkHash**                   | A GUI tool for computing file checksums and hashes.                                           | File Tools               |     |
| **GVim**                      | A graphical version of the Vim text editor.                                                   | Text Editing             |     |
| **gvm-check-setup**           | Checks the setup of the Greenbone Vulnerability Management (GVM) tool.                        | Vulnerability Management |     |
| **gvm-feed-update**           | Updates the feed for Greenbone Vulnerability Management.                                      | Vulnerability Management |     |
| **gvm-setup**                 | Sets up the Greenbone Vulnerability Management tool.                                          | Vulnerability Management |     |
| **gvm-start**                 | Starts the Greenbone Vulnerability Management services.                                       | Vulnerability Management |     |
| **hackrf_info**               | Displays information about the HackRF software-defined radio.                                 | Communication Tools      |     |
| **hamster-sidejack**          | A session hijacking tool for capturing and replaying HTTP sessions.                           | Web Security             |     |
| **hashrat**                   | A command-line tool for generating multiple types of hashes.                                  | Hash Analysis            |     |
| **havoc**                     | A modern, post-exploitation command-and-control framework.                                    | Post-Exploitation        |     |
| **hb-honeypot**               | A honeypot designed to detect and analyze attacks.                                            | Network Security         |     |
| **heartleech**                | Exploits the Heartbleed vulnerability to extract sensitive data.                              | Exploitation Tools       |     |
| **hexinject**                 | A versatile packet crafting and injection tool.                                               | Network Tools            |     |
| **HexWalk**                   | Analyzes binary files and extracts useful information.                                        | Binary Analysis          |     |
| **Htop**                      | An interactive process viewer and system monitor.                                             | System Monitoring        |     |
| **httrack**                   | A website copier that downloads entire websites for offline use.                              | Web Tools                |     |
| **iaxflood**                  | Generates floods of IAX2 packets for testing VoIP systems.                                    | VoIP Security            |     |
| **lmHex**                     | A hex editor with extensive analysis capabilities.                                            | Binary Analysis          |     |
| **intrace**                   | Traces the path of packets through a network while revealing information about the hops.      | Network Tools            |     |
| **invideflood**               | Tests VoIP systems with INVITE message floods.                                                | VoIP Security            |     |
| **jadx-gui**                  | A graphical tool for decompiling and analyzing Android application packages (APKs).           | Mobile Security          |     |
| **javasnoop**             | A tool for intercepting and modifying Java method calls.                                                  | Exploitation Tools    |
| **jboss-linux**           | A tool for managing JBoss Application Servers on Linux.                                                   | Server Management     |
| **jboss-win**             | A tool for managing JBoss Application Servers on Windows.                                                 | Server Management     |
| **jd-gui**                | A graphical utility for decompiling Java class files.                                                     | Development Tools     |
| **johnny**                | A GUI for John the Ripper password cracking tool.                                                         | Password Cracking     |
| **joomscan**              | A vulnerability scanner for Joomla websites.                                                              | Web Security          |
| **Joplin**                | An open-source note-taking and to-do application.                                                        | Productivity Tools    |
| **jsql**                  | A tool for detecting and exploiting SQL injection vulnerabilities.                                        | Web Security          |
| **Kali Autopilot**        | Automates common penetration testing tasks in Kali Linux.                                                 | Automation Tools      |
| **lynis**                 | A security auditing and compliance tool for Unix-based systems.                                           | System Security       |
| **mac-robber**            | Collects metadata from files on a filesystem for forensic analysis.                                       | Forensic Tools        |
| **maltego**               | A data visualization and link analysis tool for reconnaissance.                                           | Reconnaissance        |
| **maryam**                | A modular OSINT framework for gathering and analyzing information.                                        | Reconnaissance        |
| **maskgen**               | Creates image masks for steganography and digital watermarking.                                           | Steganography         |
| **mdb-sql**               | A tool for interacting with Microsoft Access databases via SQL.                                           | Database Tools        |
| **mdk3**                  | A tool for testing and exploiting wireless network vulnerabilities.                                       | Wireless Security     |
| **merge-router-config.pl**| Merges and analyzes multiple router configuration files.                                                  | Network Tools         |
| **metagoofil**            | Extracts metadata from public documents for information gathering.                                        | Reconnaissance        |
| **mfcuk**                 | A tool for performing cryptanalysis on MIFARE Classic encryption.                                         | Wireless Security     |
| **mfoc**                  | A tool for cracking MIFARE Classic security to access card data.                                          | Wireless Security     |
| **mfterm**                | A terminal for interacting with MIFARE and RFID devices.                                                  | Communication Tools   |
| **Midnight-Comander**     | A text-based file manager for Unix systems.                                                              | File Management       |
| **Midnight-Comander-Editor**| A text editor integrated into Midnight Commander.                                                       | Text Editing          |
| **mifare-classic-format** | Formats MIFARE Classic cards to their default state.                                                     | Wireless Security     |
| **missidentify**          | Identifies incorrect file types based on their magic numbers.                                             | Forensic Tools        |
| **myrescue**              | Recovers data from damaged hard drives by copying sectors.                                                | Data Recovery         |
| **ncat**                  | A networking utility for reading and writing data across networks.                                        | Network Tools         |
| **nfc-list**              | Lists detected NFC devices and their capabilities.                                                       | Wireless Security     |
| **nfc-mfclassic**         | Reads and writes MIFARE Classic tags.                                                                    | Wireless Security     |
| **nipper**                | Analyzes network device configurations for security issues.                                               | Network Security      |
| **nishang**               | A collection of PowerShell scripts for penetration testing and red teaming.                              | Post-Exploitation     |
| **NmapSI4 User mode**     | A graphical front-end for Nmap security scanner.                                                         | Network Tools         |
| **ohrwurm**               | A network audio monitoring tool.                                                                         | Communication Tools   |
| **ollydbg**               | A 32-bit assembler-level debugger for Windows applications.                                              | Debugging Tools       |
| **oscanner**              | Detects Oracle vulnerabilities and misconfigurations.                                                    | Database Security     |
| **osrframework-cli**      | A command-line OSINT framework for gathering intelligence.                                                | Reconnaissance        |
| **owasp-mantra-ff**       | A Firefox-based browser for penetration testing and web application security.                            | Web Security          |
| **p0f**                   | A passive OS fingerprinting tool for identifying remote systems.                                          | Network Security      |
| **padbuster**             | Automated padding oracle attack tool for exploiting cryptographic vulnerabilities.                        | Exploitation Tools    |
| **paros**                 | A web application security scanner and proxy.                                                            | Web Security          |
| **parsero**               | Detects and analyzes robots.txt files for sensitive information.                                          | Reconnaissance        |
| **pasco**                 | Analyzes web browser cache files for forensic investigations.                                             | Forensic Tools        |
| **peass**                 | A collection of scripts for privilege escalation enumeration.                                             | Post-Exploitation     |
| **policygen**             | Generates policies for secure configurations.                                                            | System Security       |
| **protos-sip**            | Tests SIP protocol implementations for vulnerabilities.                                                  | VoIP Security         |
| **rcrack**                | A tool for performing brute-force attacks using rainbow tables.                                           | Password Cracking     |
| **rcracki_mt**            | A multi-threaded version of rcrack for improved performance.                                               | Password Cracking     |
| **readpe**                | Displays information about Portable Executable (PE) files.                                                 | Binary Analysis       |
| **readpst**               | Converts Outlook PST files to other formats.                                                              | File Conversion       |
| **recoverdm**             | Recovers data from damaged CDs, DVDs, and Blu-ray discs.                                                  | Data Recovery         |
| **recoverjpeg**           | Recovers JPEG files from damaged filesystems or media.                                                    | File Recovery         |
| **reglookup**             | Examines Windows registry files for forensic analysis.                                                    | Forensic Tools        |
| **regripper**             | A registry data extraction and analysis tool.                                                             | Forensic Tools        |
| **rfcat**                 | A Python library and tools for interacting with radio frequency (RF) devices.                            | Communication Tools   |
| **RFDump**                | Analyzes and manipulates RFID tag data.                                                                   | RFID Tools            |
| **rifiuti**               | Analyzes the Windows Recycle Bin for forensic purposes.                                                   | Forensic Tools        |
| **rifiuti2**              | An enhanced version of rifiuti with additional features for analyzing the Recycle Bin.                   | Forensic Tools        |
| **rkhunter**              | Scans Unix-based systems for rootkits and vulnerabilities.                                                | System Security       |
| **RouterKegyen**          | A router penetration testing and configuration tool.                                                      | Network Security      |
| **rtpbreak**              | Analyzes RTP streams and extracts audio payloads.                                                         | Network Tools         |
| **rtpflood**              | Generates floods of RTP packets to test VoIP systems.                                                    | VoIP Security         |
| **rtpinsertsoud**         | Injects sound into RTP streams for testing purposes.                                                      | VoIP Security         |
| **rtpmixsound**           | Mixes audio into RTP streams for testing or manipulation.                                                 | VoIP Security         |
| **safecopy**              | Recovers data from defective storage media by skipping bad sectors.                                       | Data Recovery         |
| **sctpscan**              | Scans networks for SCTP-enabled devices and services.                                                    | Network Tools         |
| **sentrypeer**            | A peer-to-peer network security and monitoring tool.                                                      | Network Security      |
| **sfuzz**                 | A network protocol fuzzing tool for vulnerability discovery.                                              | Fuzzing Tools         |
| **shellnoob**             | Automates shellcode writing and analysis tasks.                                                          | Exploitation Tools    |
| **shellter**              | A dynamic shellcode injection tool for Windows applications.                                              | Exploitation Tools    |
| **sidguess**              | A tool for guessing valid SIDs in Windows environments.                                                  | Exploitation Tools    |
| **siege**                 | A tool for stress testing web servers and applications.                                                  | Web Security          |
| **siparmyknife**          | A SIP protocol testing and debugging tool.                                                              | VoIP Security         |
| **sipcrack**              | A tool for sniffing and cracking SIP authentication credentials.                                         | VoIP Security         |
| **sipp**                  | A performance testing tool for SIP-based VoIP systems.                                                  | VoIP Security         |
| **sipsak**                | A command-line SIP testing tool for analyzing and manipulating SIP messages.                            | VoIP Security         |
| **slowhttptest**          | A tool for testing web servers against low-bandwidth denial-of-service attacks.                         | Web Security          |
| **sniffjoke**             | A tool for evading network traffic analysis and fingerprinting.                                          | Network Security      |
| **[[SNORT]]**                 | An open-source network intrusion detection and prevention system.                                        | Network Security      |
| **sparrow-wifi**          | A WiFi analyzer and monitor tool for wireless security testing.                                          | Wireless Security     |
| **sqldict**               | A dictionary attack tool for brute-forcing SQL authentication.                                           | Password Cracking     |
| **sqlninja**              | Automates SQL injection attacks on Microsoft SQL Server databases.                                       | Web Security          |
| **sqlsus**                | A MySQL injection and exploitation tool.                                                                | Web Security          |
| **ssdeep**                | A tool for computing and comparing context-triggered piecewise hashes.                                  | Hash Analysis         |
| **sslsniff**              | A tool for intercepting and modifying SSL/TLS traffic.                                                  | Network Tools         |
| **statsgen**              | Generates statistics for network traffic and protocol usage.                                             | Network Monitoring    |
| **sucrack**               | A command-line tool for brute-forcing Unix/Linux su authentication.                                     | Password Cracking     |
| **svcrack**               | A tool for performing brute-force attacks on VNC servers.                                               | Password Cracking     |
| **svcrash**               | A tool for crashing VNC servers through malformed inputs.                                               | Exploitation Tools    |
| **svmap**                 | A VNC server scanner for discovering open VNC instances.                                                | Network Tools         |
| **svreport**              | Generates detailed reports from svmap and svcrack results.                                              | Reporting Tools       |
| **svwar**                 | A tool for identifying VoIP extensions on SIP-based servers.                                            | VoIP Security         |
| **t50**                   | A network stress testing and protocol fuzzing tool.                                                    | Fuzzing Tools         |
| **tcpflow**               | Captures and reconstructs TCP traffic for analysis.                                                    | Network Tools         |
| **termineter**            | A smart meter testing framework for evaluating AMI (Advanced Metering Infrastructure) security.         | Exploitation Tools    |
| **thc-ssl-dos**           | A tool for launching DoS attacks against SSL servers.                                                    | Exploitation Tools    |
| **tiger**                 | A security auditing tool for Unix-based systems.                                                        | System Security       |
| **tlssled**               | A tool for testing SSL/TLS security configurations.                                                     | Network Security      |
| **tnscmd10g**             | Exploits misconfigurations in Oracle TNS Listener.                                                      | Database Security     |
| **truecrack**             | A password cracker for TrueCrypt volumes.                                                               | Password Cracking     |
| **twofi**                 | A tool for creating wordlists by analyzing Twitter data.                                                | Reconnaissance        |
| **ubertooth-util**        | A utility for analyzing Bluetooth communications with Ubertooth devices.                                | Bluetooth Security    |
| **undbx**                 | Recovers emails from corrupted Outlook Express DBX files.                                               | File Recovery         |
| **unhide**                | Detects hidden processes and ports on Unix-based systems.                                               | System Security       |
| **uniscan-gui**           | A graphical web vulnerability scanner.                                                                  | Web Security          |
| **urlcrazy**              | Detects typo-squatting domains and their potential risks.                                               | Reconnaissance        |
| **veil**                  | A framework for generating payloads to bypass antivirus detection.                                      | Exploitation Tools    |
| **villain**               | A command-and-control (C2) framework for managing compromised systems.                                  | Post-Exploitation     |
| **vinetto**               | Analyzes thumbnails in Windows Thumbs.db files for forensic investigations.                             | Forensic Tools        |
| **watobo**                | A web application vulnerability scanner and testing tool.                                               | Web Security          |
| **webacoo**               | A stealth web shell generator for remote command execution.                                             | Web Security          |
| **webscarab**             | A web security analysis tool for inspecting and manipulating HTTP traffic.                              | Web Security          |
| **wifi-honey**            | Creates fake WiFi access points to detect and monitor attacks.                                          | Wireless Security     |
| **witnessme**             | Captures screenshots of websites and their responses for analysis.                                      | Reconnaissance        |
| **xgps**                  | A graphical interface for monitoring GPS data.                                                         | Communication Tools   |
| **xgpsspeed**             | Displays real-time GPS speed data.                                                                     | Communication Tools   |
| **xplico-webbui**         | A web-based interface for the Xplico network forensic analysis tool.                                   | Forensic Tools        |
| **xsser**                 | A tool for detecting and exploiting cross-site scripting (XSS) vulnerabilities.                        | Web Security          |
| **yara**                  | A malware identification and classification tool.                                                      | Malware Analysis      |
| **yersinia**              | A network attack tool for testing and exploiting Layer 2 protocols.                                     | Network Security      |
| **zaproxy**               | An open-source web application security scanner.                                                       | Web Security          |
| **Zenmap**                | The official GUI for the Nmap Security Scanner.                                                        | Network Tools         |
| **Zim Desktop**           | A graphical text editor for managing notes and tasks.                                                  | Productivity Tools    |
| **Cherrytree**            | A hierarchical note-taking application with rich text and syntax highlighting.                         | Productivity Tools    |
