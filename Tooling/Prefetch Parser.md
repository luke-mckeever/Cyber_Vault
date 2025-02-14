# Prefetch Parser 🚀🔎🖥️
#EZ #TTDF #Tool 

>**🔍 A powerful forensic tool by Eric Zimmerman for analysing Windows Prefetch Files 🔎**

---
**🔗 [Official Documentation](https://ericzimmerman.github.io/#!index.md)**

---
## 🛠 What is Prefetch Parser?
**Prefetch Parser** is a powerful tool developed by **Eric Zimmerman** to analyze Windows Prefetch files. Prefetch files help forensic analysts track program execution history, making them invaluable for incident response and malware investigations. This tool enables users to efficiently parse, analyze, and extract crucial forensic artifacts from Prefetch files.

### 🌟 **Features:**
- 🛠 Parses Windows Prefetch files quickly and efficiently.
- 📊 Outputs detailed execution data, including timestamps and file paths.
- 🔍 Supports batch processing for large forensic investigations.
- 📝 Exports results in multiple formats (CSV, JSON, SQLite, etc.).
- 🚀 Lightweight and easy to use with a simple command-line interface.
- 🔒 Trusted by forensic professionals worldwide.

---

## 🚀 Installing Prefetch Parser

### 🔹 **Windows**
Download the latest version from: [Eric Zimmerman's GitHub](https://github.com/EricZimmerman/)

Extract the ZIP file and execute the tool via command prompt.

```plaintext
PECmd.exe -h
```

---

## 🧰 Common Commands

```plaintext
PECmd.exe -f C:\Windows\Prefetch -o C:\Output
```
➡ Parses all Prefetch files in the directory and saves results to C:\Output.

```plaintext
PECmd.exe -f C:\Windows\Prefetch\EXAMPLE.EXE-12345678.pf
```
➡ Parses a specific Prefetch file.

```plaintext
PECmd.exe -f C:\Windows\Prefetch -o C:\Output --json
```
➡ Outputs results in JSON format.

---

## ⚙️ Advanced Usage

```plaintext
PECmd.exe -f C:\Windows\Prefetch --db C:\Forensics\results.db
```
➡ Saves Prefetch analysis results into a SQLite database.

```plaintext
PECmd.exe -f C:\Windows\Prefetch -o C:\Output --csv --include-all
```
➡ Exports results as CSV with extended metadata.

```plaintext
PECmd.exe -f C:\Windows\Prefetch --json --pretty
```
➡ Outputs JSON data in a human-readable format.

---

## 📋 Handy Options

| Option          | Description |
|----------------|-------------|
| `-f`          | Specifies the input file or directory. |
| `-o`          | Specifies the output directory. |
| `--json`      | Outputs results in JSON format. |
| `--csv`       | Outputs results in CSV format. |
| `--include-all` | Includes additional metadata in the output. |
| `--db`        | Saves results to a SQLite database. |

---

## 🌐 Example Scenarios

🔹 **Incident Response**: A malware analyst uses Prefetch Parser to determine the execution history of a suspicious executable found on a compromised machine.

🔹 **Threat Hunting**: A SOC analyst scans Prefetch files to identify unusual program executions across multiple endpoints.

🔹 **User Activity Analysis**: A forensic investigator examines Prefetch data to build a timeline of user activity on a suspect's computer.

---

## 🚀 Pro Tips

✅ Use `--include-all` to extract additional metadata for deeper analysis.  
✅ Combine Prefetch Parser with **EZViewer** for a GUI-based examination.  
✅ Export data as SQLite for easy correlation with other forensic artifacts.  
✅ Automate Prefetch parsing with batch scripts for large-scale investigations.

---

## 📚 References
- [Eric Zimmerman's Official Site](https://ericzimmerman.github.io/)
- [Kroll's Digital Forensics Blog](https://www.kroll.com/en/insights/publications/cyber/prefetch-parser-forensic-analysis)
- [Windows Prefetch Forensics Guide](https://www.sans.org/blog/using-prefetch-files-for-incident-response/)

---

![VIDEO](https://www.youtube.com/watch?v=4X_0LrsB1v4)  
*Video tutorial on how to use Prefetch Parser effectively.*
