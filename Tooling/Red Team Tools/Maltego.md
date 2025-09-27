# Maltego 🕵️‍♂️🔍💻
#RED #Tool #TTosint 

Maltego is a powerful **open-source intelligence (OSINT)** and **forensic analysis tool** used for **link analysis** and **data visualization**. It is widely adopted by security researchers, SOC analysts, law enforcement, and penetration testers to map relationships between people, companies, domains, emails, phone numbers, and infrastructure.

**Official Documentation [HERE](https://docs.maltego.com/)**

Maltego allows you to discover hidden connections using **transforms**, which pull information from multiple sources (DNS, WHOIS, social media, leaks, etc.) and display them in interactive graphs.

---

![Maltego](https://www.paterva.com/web7/images/maltego_logo.png)

---

### 🚀 Installing Maltego

#### 🔹 **Linux**

```bash
# Download Maltego from official site
wget https://downloads.maltego.com/maltego/latest/maltego.vx.x.x.deb

# Install package
dpkg -i maltego.vx.x.x.deb

# Fix missing dependencies
apt --fix-broken install
```

---

## 🧰 How To use
1. Launch Maltego and **create a new graph**.
2. Choose an **entity** (email, domain, IP, phone, etc.).
3. Apply **transforms** to gather intelligence.
4. Analyze the **graph of relationships**.
5. Export findings to **PDF, CSV, or Image reports**.

---

## ⚙️ Advanced Usage

- Use **Custom Transforms** to connect with your own APIs.
- Integrate with **VirusTotal, Shodan, HaveIBeenPwned, AbuseIPDB**.
- Perform **Pivot Analysis**: Start with a single email → find domains → connected IPs → hosting companies → other linked entities.
- Automate workflows using **Machines** in Maltego.

---

## 📋 Handy Options

|Option|Description|
|---|---|
|`Ctrl+T`|Run selected transform|
|`Ctrl+Shift+T`|Run all transforms on entity|
|`Ctrl+E`|Export graph to file (PDF, CSV, Image)|
|`Ctrl+Shift+M`|Run a machine (automated series of transforms)|

---

## 🌐 Example Scenarios

- **Phishing Investigation** 🐟: Start with a suspicious email address, pivot to domains, IPs, and hosting services.
- **Infrastructure Mapping** 🏢: From a company domain, expand to subdomains, MX records, and related infrastructure.
- **Social Media Tracking** 📱: Trace usernames and aliases across platforms.
- **Threat Actor Profiling** 🎭: Link leaked emails, domains, and IPs to uncover attacker infrastructure.

---

## 🚀 Pro Tips

- Start small: pick **one entity** and expand gradually.
- Use **Maltego Machines** for automation.
- Combine multiple data sources for stronger OSINT.
- Save graphs frequently to avoid data loss.

---

## 📚 References

- [Maltego Docs](https://docs.maltego.com/)
- [Maltego YouTube Channel](https://www.youtube.com/user/paterva)
- [Maltego Community Edition (Free)](https://www.maltego.com/downloads/)

---

![VIDEO](https://www.youtube.com/watch?v=7eD0nUr3AtY)