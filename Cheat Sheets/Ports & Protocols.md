#CS #networking
# 🌐 Ports and Protocols Cheat Sheet

A comprehensive guide to common port numbers and their corresponding protocols! 🛠️ Use this reference to better understand network communications and secure your systems. 🚀

---

## 📋 Common Ports and Protocols

| **Port Number** | **Protocol**       | **Description**                                   |
|------------------|--------------------|-------------------------------------------------|
| 7                | Echo              | Used for testing and debugging by echoing back data. |
| 20, 21           | FTP               | File Transfer Protocol (data transfer and control). |
| 22               | SSH               | Secure Shell (remote login and command execution). |
| 23               | Telnet            | Unencrypted remote login protocol.               |
| 25               | SMTP              | Simple Mail Transfer Protocol (email sending).   |
| 53               | DNS               | Domain Name System (name resolution).            |
| 67, 68           | DHCP              | Dynamic Host Configuration Protocol (IP assignment). |
| 69               | TFTP              | Trivial File Transfer Protocol (lightweight file transfer). |
| 80               | HTTP              | Hypertext Transfer Protocol (web browsing).      |
| 88               | Kerberos          | Authentication protocol for secure identity verification. |
| 110              | POP3              | Post Office Protocol version 3 (email retrieval).|
| 119              | NNTP              | Network News Transfer Protocol (newsgroups).     |
| 123              | NTP               | Network Time Protocol (time synchronization).    |
| 139              | NetBIOS           | Provides session-level support for file and printer sharing. |
| 143              | IMAP              | Internet Message Access Protocol (email retrieval). |
| 161, 162         | SNMP              | Simple Network Management Protocol (network monitoring). |
| 194              | IRC               | Internet Relay Chat (real-time chat).            |
| 389              | LDAP              | Lightweight Directory Access Protocol (directory services). |
| 443              | HTTPS             | HTTP Secure (secure web browsing).               |
| 445              | SMB               | Server Message Block (file and printer sharing). |
| 465              | SMTPS             | Secure SMTP (email sending with SSL).            |
| 514              | Syslog            | System Logging Protocol (event logging).         |
| 636              | LDAPS             | Secure LDAP (directory services over SSL).       |
| 691              | MS Exchange Routing | Used for Microsoft Exchange server routing.   |
| 993              | IMAPS             | Secure IMAP (email retrieval with SSL).          |
| 995              | POP3S             | Secure POP3 (email retrieval with SSL).          |
| 1194             | OpenVPN           | VPN tunneling protocol.                          |
| 1433, 1434       | MS-SQL            | Microsoft SQL Server database management.        |
| 1521             | Oracle SQL        | Oracle Database communication.                   |
| 1725             | Valve Steam Client | Used for Steam gaming client communications.     |
| 2967             | Symantec AV       | Symantec AntiVirus server communication.         |
| 3074             | Xbox Live         | Used for Xbox Live gaming services.              |
| 3306             | MySQL             | MySQL Database communication.                    |
| 3389             | RDP               | Remote Desktop Protocol (remote desktop access). |
| 5432             | PostgreSQL        | PostgreSQL Database communication.               |
| 6379             | Redis             | Redis database service.                          |
| 6881-6999        | BitTorrent        | Peer-to-peer file sharing.                       |
| 8080             | HTTP-Alt          | Alternative HTTP port.                           |
| 8086             | InfluxDB          | Time-series database service.                    |
| 8087             | InfluxDB UI       | Web UI for InfluxDB.                             |
| 8443             | HTTPS-Alt         | Alternative HTTPS port.                          |

---

## 🔍 Key Usage Scenarios

- **Web Services**: Ports 80 (HTTP) and 443 (HTTPS) are essential for web servers.
- **Remote Access**: Secure remote connections use ports like 22 (SSH) and 3389 (RDP).
- **Email Services**: Email communication often uses ports 25 (SMTP), 110 (POP3), and 143 (IMAP).
- **Database Connections**: Database servers rely on ports like 3306 (MySQL) and 5432 (PostgreSQL).
- **Gaming and P2P**: Ports like 3074 (Xbox Live) and 6881-6999 (BitTorrent) are used for gaming and file sharing.

---

## 💡 Pro Tips

1. **Secure Unused Ports**: Close unnecessary ports to reduce attack surfaces.
2. **Monitor Traffic**: Use tools like Wireshark to monitor activity on specific ports.
3. **Firewalls**: Configure firewalls to allow only required ports for enhanced security.

Stay informed and secure your network with this ports and protocols cheat sheet! 🌟
