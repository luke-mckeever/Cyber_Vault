# 📱 PhoneInfoga 🔍✨

#Tool #RED #TTosint 

PhoneInfoga is one of the most advanced tools for scanning international phone numbers using only free resources. It allows OSINT investigators to **gather information such as carrier, line type, and possible region** of a phone number, and also check footprints across platforms.

**Official Documentation ➡️ [HERE](https://github.com/sundowndev/phoneinfoga)**

PhoneInfoga is perfect for penetration testers, investigators, and cybersecurity professionals who need to **trace phone numbers, perform reconnaissance, and link phone numbers to digital footprints.**

---

![PhoneInfoga Logo](https://github.com/sundowndev/phoneinfoga/raw/master/assets/logo.png)

---

### 🚀 Installing PhoneInfoga

#### 🔹 **Linux**

```bash
# Clone repository
git clone https://github.com/sundowndev/phoneinfoga.git
cd phoneinfoga

# Install dependencies
python3 -m pip install -r requirements.txt

# Run setup
python3 phoneinfoga.py -h
```

---

## 🧰 Common Commands

```bash
# Basic scan
python3 phoneinfoga.py -n "+353871234567"

# Run OSINT scan (checks social media & web traces)
python3 phoneinfoga.py -n "+353871234567" --osint

# Export results
python3 phoneinfoga.py -n "+353871234567" -o results.json

# List available formats
python3 phoneinfoga.py --help
```

---

## ⚙️ Advanced Usage

```bash
# Bulk scan using a file of phone numbers
python3 phoneinfoga.py -i numbers.txt --osint

# Specify output format (json, txt)
python3 phoneinfoga.py -n "+353871234567" -o output.json

```

---

## 🌐 Web Server Version (Serve Mode)

PhoneInfoga also comes with a **built-in web server** for a graphical experience. This is handy if you want to explore results in your browser rather than the CLI.

```bash
# Start the web server locally
python3 phoneinfoga.py serve -p 8080

# Access via your browser:
http://127.0.0.1:8080
```

---

## 📋 Handy Options

|Option|Description|
|---|---|
|`-n`|Phone number to scan|
|`--osint`|Perform an OSINT scan on the number|
|`-i <file>`|Input file containing multiple phone numbers|
|`-o <file>`|Save output to a file|
|`serve -p <port>`|Launch web server on specified port|
|`--help`|Show help menu with all options|

---

## 🌐 Example Scenarios

- 🕵️ **Investigating Scam Calls:** Trace numbers reported in phishing SMS campaigns.
- 🔍 **Due Diligence:** Validate contact information before investigations.
- 🚨 **Incident Response:** Identify possible attacker-controlled numbers.
- 📱 **Red Team Engagement:** Use for recon in authorized penetration testing.
- 🌐 **Web UI Recon:** Quickly spin up a server and demo findings in a browser.

---

## 🚀 Pro Tips

- ✅ Use **VPNs or proxies** when scanning to protect your identity.
- 📂 Always **export results** for later analysis.
- 🧾 Combine with other OSINT tools like **Sherlock** or **Dehashed** for richer intel. 
- 🐳 For quick setup, consider running **PhoneInfoga in Docker**.
- 🌐 Use **serve mode** to present findings neatly during a team briefing.

---

## 📚 References

---

![VIDEO](https://www.youtube.com/watch?v=7UMy6xJ7x2A)