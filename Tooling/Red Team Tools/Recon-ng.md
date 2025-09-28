# 🕵️ Recon-ng 🌐✨

#Tool #TTosint #RED 

Recon-ng is a **full-featured web reconnaissance framework** written in Python. It provides a powerful environment for gathering open-source intelligence (OSINT) on targets. Designed like the Metasploit Framework, Recon-ng allows you to **quickly develop, organize, and run OSINT modules** within a structured and powerful interface.

**Official Documentation ➡️ [HERE](https://github.com/lanmaster53/recon-ng)**

Recon-ng is often used by penetration testers, red teamers, and threat hunters to **collect data from a wide variety of sources such as WHOIS records, DNS lookups, social media, and more.**

---

![Recon-ng Logo](https://www.kali.org/tools/recon-ng/images/recon-ng-logo.svg)

---

### 🚀 Installing Recon-ng

#### 🔹 **Linux (Kali/Ubuntu)**

```bash
# Kali Linux already includes Recon-ng
apt install recon-ng -y

# Or clone manually
git clone https://github.com/lanmaster53/recon-ng.git
cd recon-ng
pip3 install -r REQUIREMENTS
python3 recon-ng
```

---

## 🧰 How to Use Recon-ng

1. **Start the Framework**

```bash
recon-ng
```

This launches the interactive console.

2. **Create a Workspace**

```bash
workspaces create project1
```

Keeps your recon data organized per project.

3. **Search for Available Modules**

```bash
modules search
```

Browse the modules included or available via the marketplace.

4. **Load a Module**

```bash
modules load recon/domains-hosts/bing_domain_web
```

5. **View and Configure Options**

```bash
options list
options set SOURCE example.com
```

6. **Run the Module**

```bash
run
```

7. **Export Results**

```bash
db export results.csv
```

➡️ The basic workflow: **Start → Workspace → Search → Load → Configure → Run → Export.**

---

## ⚙️ Advanced Usage

```bash
# Add an API key (for modules requiring external APIs)
keys add shodan_api <YOUR_API_KEY>

# Marketplace - install new modules
marketplace search
marketplace install <module_name>

# Export data from database
db export /path/to/results.csv

# Scripted workflow
workspaces create project1
modules load recon/domains-hosts/google_site_web
options set SOURCE example.com
run
```

---

## 🛒 Marketplace Explained

The **Marketplace** in Recon-ng acts like a built-in app store for OSINT modules. You can **search, install, update, and remove** modules created by the community to extend functionality.

#### 🔹 **Marketplace Commands**

```bash
# Search for available modules
marketplace search

# Install a module
marketplace install recon/profiles-profiles/fullcontact

# Update all installed modules
marketplace update

# Remove a module
marketplace remove recon/profiles-profiles/fullcontact
```

#### 🔹 **Using Installed Modules**

```bash
# After installation, load module
modules load recon/profiles-profiles/fullcontact

# List module options
options list

# Set required options
options set PROFILE john.doe

# Run module
run
```

👉 The marketplace is key for extending Recon-ng beyond its default setup, especially for leveraging **API-based intelligence** (Shodan, Censys, FullContact, etc.).

---

## 📋 Handy Options

|Command|Description|
|---|---|
|`modules search`|Search for modules|
|`modules load`|Load a chosen module|
|`options list`|Show configurable options|
|`options set <opt>`|Set a module option|
|`keys add`|Add API keys for modules|
|`marketplace`|Search/install community modules|
|`db export`|Export collected data from the database|
|`workspaces`|Manage different projects|

---

## 🌐 Example Scenarios
- 🔎 **Domain Recon:** Collect subdomains, hosts, and IPs from a target domain.  
- 🕵️ **People OSINT:** Use social media modules to gather employee info. 
- 🧩 **Infrastructure Mapping:** Combine WHOIS, DNS, and IP footprinting modules.
- 🚨 **Red Teaming:** Automate footprinting before active engagement.
- 📊 **Reporting:** Export clean CSVs for client-ready deliverables.
- 🛒 **Marketplace Add-ons:** Install modules for **API-based reconnaissance**.

---

## 🚀 Pro Tips
- 🔑 Always load **API keys** (Shodan, Censys, etc.) for the most powerful results.
- 📂 Use **workspaces** to keep projects neatly separated.
- 🧰 Install extra modules via the **marketplace** for advanced recon.
- 📊 Export often – Recon-ng stores results in its own database.
- 🐚 Use scripts to automate multi-step recon workflows.

---

## 📚 References
- [Recon-ng GitHub](https://github.com/lanmaster53/recon-ng)
- [Kali Tools – Recon-ng](https://www.kali.org/tools/recon-ng/)
- [Recon-ng Documentation](https://recon-ng.readthedocs.io/en/latest/)

---

![VIDEO](https://www.youtube.com/watch?v=HD2A0oPbGbM)