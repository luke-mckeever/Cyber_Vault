# 🌐 INetSim 🚀
#Tool #BLUE #TTMA 

INetSim (Internet Services Simulation Suite) is a powerful tool designed for simulating common internet services in a controlled environment, making it invaluable for malware analysis, network security research, and forensic investigations. 

🔗 **[Official Documentation](https://www.inetsim.org/)**

---
![INetSim](https://www.inetsim.org/img/logo.png)

---

## 🚀 Installing INetSim

### 🔹 **Linux (Debian-based Systems)**
```bash
sudo apt update && sudo apt install inetsim
```

For other distributions, refer to the [official installation guide](https://www.inetsim.org/).

### 🔹 **Windows**
INetSim is primarily designed for Linux. However, it can be run on Windows using **WSL** or a Linux VM.

---

## 🧰 Common Commands

```bash
sudo inetsim  # Start INetSim with default settings
sudo inetsim --config /path/to/config  # Start INetSim with custom config
sudo inetsim --dns  # Enable DNS simulation
sudo inetsim --http  # Simulate HTTP server
```

---

## ⚙️ Advanced Usage

```bash
sudo inetsim --service all  # Enable all services
sudo inetsim --log-dir /var/log/inetsim/  # Specify log directory
sudo inetsim --verbose  # Enable verbose mode
```

---

## 📋 Handy Options

| Option       | Description                                   |
|-------------|----------------------------------------------|
| `--dns`      | Simulate a DNS server                        |
| `--http`     | Simulate an HTTP server                      |
| `--smtp`     | Simulate an SMTP server                      |
| `--pop3`     | Simulate a POP3 mail server                  |
| `--ftp`      | Simulate an FTP server                       |
| `--config`   | Specify a custom configuration file          |
| `--log-dir`  | Set a directory for log files                |

---

## 🌐 Example Scenarios

📌 **Malware Analysis**: Use INetSim to analyze how malware interacts with different network services by simulating its command and control (C2) server.

📌 **Network Security Testing**: Test how your firewall, IDS, or IPS reacts to simulated internet traffic.

📌 **Forensic Investigations**: Replay network activity in a lab environment without exposing real systems.

---

## 🚀 Pro Tips

💡 Use `iptables` to redirect traffic to INetSim for seamless analysis.
```bash
iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 80
```

💡 Customize responses by editing `/etc/inetsim/inetsim.conf`.

💡 Run INetSim in a sandboxed environment like a VM to avoid unintended network exposure.

---

## 📚 References
- [INetSim Official Documentation](https://www.inetsim.org/)
- [INetSim GitHub Repository](https://github.com/inetsim/inetsim)
- [Malware Analysis Using INetSim](https://malware-analysis.com/inetsim-guide)

---

![VIDEO](https://www.youtube.com/watch?v=INSERT_VIDEO_LINK)
