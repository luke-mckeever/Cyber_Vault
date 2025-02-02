# 🎩 **Registry Explorer** 🕵️‍♂️🔍

> **A Powerful Forensic Tool by [Eric Zimmerman](https://ericzimmerman.github.io/)**  
> A fast and modern way to analyze Windows Registry hives with ease! 🚀

## 📌 **Introduction**
**Registry Explorer** is a cutting-edge tool designed for forensic analysis of Windows Registry hives. Built for speed and flexibility, it outperforms traditional registry analysis tools, making it an essential asset for digital forensic professionals. 🔥

🔹 **Blazing Fast**: Parses registry hives faster than ever!  
🔹 **Intuitive UI**: Easily navigate through keys and values.  
🔹 **Powerful Search**: Find what you need instantly.  
🔹 **Export & Reporting**: Generate forensic-ready reports effortlessly.

## 🛠 **Getting Started**
### 📥 **Download & Install**
1. Download **Registry Explorer** from [Eric Zimmerman's GitHub](https://github.com/EricZimmerman/RECmd).
2. Extract the ZIP file.
3. Run `RegistryExplorer.exe` (No installation required! 🎉).

### 🏃‍♂️ **Using Registry Explorer**
#### 🔍 **Opening a Registry Hive**
4. Click on `File` → `Load Hive` 📂.
5. Select a registry hive (e.g., `NTUSER.DAT`, `SYSTEM`, `SOFTWARE`).
6. View the parsed structure instantly!

#### 🕵️ **Searching the Registry**
7. Press `Ctrl + F` or click on `Find` 🧐.
8. Enter your search term (e.g., `LastWrite`, `MRUList`).
9. Filter results using **regex** and wildcards!

#### 📤 **Exporting Data**
10. Right-click on a key or value.
11. Select `Export` → Choose **CSV, JSON, or XML** 📊.
12. Save it for forensic reports.

## ⚡ **Command-Line Power: RECmd**
Registry Explorer also includes a command-line counterpart: **RECmd**! 💻

```powershell
RECmd.exe -f C:\Windows\System32\config\SYSTEM -p output_folder
```

✅ **Batch processing** & automated registry parsing!

