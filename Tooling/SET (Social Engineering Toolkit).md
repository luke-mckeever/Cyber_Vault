# SET (Social Engineering Toolkit) 
#Tool #RED #TTemail

This guide is your one-stop reference for mastering **SET**, a powerful tool for social engineering attacks. 💻🔒

**LINK TO TOOL DOCUMENTATION[ HERE](https://www.kali.org/tools/set/)**

The **Social Engineering Toolkit (SET)** is an open-source penetration testing framework designed for social engineering. It provides multiple attack vectors, making it a favourite among ethical hackers and security researchers.

---
![SET](https://www.kali.org/tools/set/images/set-logo.svg)

---

## ✨ Key Features

- **Phishing Attacks**: Craft convincing phishing campaigns with ease.
- **Credential Harvesting**: Intercept and collect sensitive information.
- **Payload Delivery**: Create and deploy malicious payloads.
- **Web Attack Vectors**: Exploit client-side vulnerabilities in web browsers.
- **Mass Mailer**: Send customized emails for phishing campaigns.
- **Highly Customizable**: Tweak attack parameters to suit your needs.

---

## 🛠️ Installation
```bash
# Clone the repository
sudo git clone https://github.com/trustedsec/social-engineer-toolkit.git /opt/set/

# Navigate to the directory
cd /opt/set

# Install dependencies
sudo python3 setup.py
```

---

## 📚 Common Commands

### 1. **Start SET**
```bash
sudo setoolkit
```

### 2. **Interactive Menu**
SET features an intuitive menu system:
- **1**: Social-Engineering Attacks
- **2**: Penetration Testing
- **3**: Third Party Modules
- **99**: Exit

### 3. **Clone a Website (Phishing)**
```bash
1. Select "Social-Engineering Attacks".
2. Choose "Website Attack Vectors".
3. Pick "Credential Harvester Attack Method".
4. Opt for "Site Cloner" and enter the target URL.
```

### 4. **Create a Payload**
```bash
1. Select "Social-Engineering Attacks".
2. Choose "Infectious Media Generator".
3. Generate a malicious payload for USB/DVD.
```

### 5. **Send a Phishing Email**
```bash
1. Select "Mass Mailer Attack".
2. Configure SMTP server and sender details.
3. Craft and send your phishing email.
```

---

## ⚙️ Configuration
Customize SET by editing the **`/opt/set/config/set.config`** file. Key options:
- `METASPLOIT_PATH`: Path to Metasploit framework.
- `WEBATTACK_SSL`: Enable SSL for web attacks.
- `SMTP_SERVER`: Default mail server for phishing.

---

## 🚩 Best Practices

1. **Use in Legal Environments**: Obtain permission before running any tests.
2. **Stay Updated**: Regularly update SET to leverage the latest features.
3. **Practice Ethical Hacking**: Avoid using SET for malicious purposes.

---

## 📸 Screenshots
![SET Menu](https://assets.securitytrails.com/cdn-cgi/image/width=450,quality=100,format=auto/blog/the-social-engineering-toolkit/common-options.png)

---

## 📖 Resources
- [Official Repository](https://github.com/trustedsec/social-engineer-toolkit)
- [SET Documentation](https://www.trustedsec.com/)
- [Tutorials and Guides](https://www.youtube.com/results?search_query=social+engineering+toolkit)

---


