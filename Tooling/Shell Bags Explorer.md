# 🛠 Shell Bags Explorer 🛠
#tool #TTDF #EZ

> **🔍 A powerful forensic tool by Eric Zimmerman for analysing Windows ShellBags! 🔎**

---

## ✨ What is Shell Bags Explorer? 
**Shell Bags Explorer** is a **forensic analysis tool** that helps investigators examine Windows **ShellBags**—a feature that stores details about folder views and structures even after deletion. Developed by **Eric Zimmerman**, this tool provides deep insights into user activity on Windows machines. 

🌟 **Key Features:**
- 📂 Extracts folder access history
- 🔍 Reveals timestamps and folder views
- 🔋 Helps in forensic investigations
- 👽 Easy-to-use GUI for quick analysis
- 🔧 CLI mode for automation

---

## 🔧 Installation & Usage

### ✨ Downloading Shell Bags Explorer
1. **Download** the latest release from Eric Zimmerman's [GitHub](https://github.com/EricZimmerman/ShellBagsExplorer/releases).
2. **Extract** the ZIP file to a folder of your choice.
3. **Run** `ShellBagsExplorer.exe` (No installation required!).

---

## ⏳ Using Shell Bags Explorer (GUI Mode)
🔄 **Step-by-Step Guide:**
4. **Open** `ShellBagsExplorer.exe`
5. **Load Registry Hive** by clicking **File → Load Hive**
6. **Navigate** through the parsed ShellBags entries
7. **Analyze** timestamps, folder paths, and GUIDs
8. **Export** the results for further investigation

---

## 🛠 Using Shell Bags Explorer (Command Line)
🎉 CLI mode is great for automation and scripting!

**Basic Command:**
```sh
ShellBagsExplorer.exe -f C:\Path\to\RegistryHive.dat -o output.csv
```

💡 **Pro Tip:** Use `-q` for quiet mode, and `-v` for verbose logging.

---

## ⚖️ Why is ShellBags Important?
- 📝 Tracks deleted folders and their last opened timestamps.
- 💡 Useful in **incident response** and **digital forensics**.
- 🛡️ Helps reconstruct user activity on Windows systems.
