# JumpList Explorer 🚀🛠️🔥
#EZ #TTDF #Tool  #BLUE 

>**🔍 A powerful forensic tool by Eric Zimmerman for analysing Windows Jump List Files 🔎**

---
🔗 **[Official Documentation](https://ericzimmerman.github.io/#!index.md)**

---
## 🛠 What is JumpList Explorer?
JumpList Explorer is a powerful forensic tool created by **Eric Zimmerman** for analyzing Windows JumpLists. These files store valuable evidence of recently and frequently accessed files, making them crucial in digital forensics investigations. 

---

### 🚀 Installing JumpList Explorer

#### 🔹 **LINUX** 
```plaintext 
(This tool is Windows-exclusive. Use Wine or a VM for execution.)
```

#### 🔹 **Windows**
Download from: [JumpList Explorer](https://f001.backblazeb2.com/file/EricZimmermanTools/JLECmd.zip)

Extract and run `JLECmd.exe` from the command line.

---
## 🖥️ Using JumpList Explorer (GUI)

1. **Open the Application:**
   - Double-click `JumpListExplorer.exe` to launch the GUI.
   
2. **Load JumpLists:**
   - Click **Open Folder** and select the JumpList directory.
   - Drag-and-drop JumpList files into the tool.
   
3. **Analyze Data:**
   - Use the **Table View** to inspect file paths, timestamps, and program usage.
   - Filter results using the search bar.
   
4. **Export Reports:**
   - Click **Export** to save findings in CSV or JSON format.
   
5. **Visualize Findings:**
   - Utilize **sorting and filtering** to focus on relevant evidence.


## 🧰 Common Commands

```plaintext
JLECmd.exe -f "C:\Users\User\AppData\Roaming\Microsoft\Windows\Recent\AutomaticDestinations\*.automaticDestinations-ms" -d OutputFolder
```

```plaintext
JLECmd.exe -d "C:\JumpListAnalysis" -r
```

---

## ⚙️ Advanced Usage

```plaintext
JLECmd.exe -f "C:\JumpLists\example.automaticDestinations-ms" -d "C:\Output" -q -t "yyyy-MM-dd HH:mm:ss"
```

```plaintext
JLECmd.exe -d "C:\JumpLists" -r -o "output.csv"
```

---
## 📋 Handy Options - GUI

| Option             | Description                                      |
|-------------------|--------------------------------------------------|
| **Open Folder**    | Load an entire directory of JumpLists           |
| **Search Bar**     | Quickly filter relevant entries                 |
| **Export CSV/JSON**| Save parsed JumpLists for external analysis     |
| **Sort & Filter**  | Organize data based on timestamps, paths, etc.  |

## 📋 Handy Options - CLI

| Option       | Description                                |
|-------------|--------------------------------------------|
| `-f`        | Specify a single JumpList file to analyze  |
| `-d`        | Directory mode - process all JumpLists     |
| `-r`        | Recursive mode - analyze subdirectories    |
| `-o`        | Output results to CSV file                |
| `-t`        | Set custom timestamp format               |

---

## 🌐 Example Scenarios

🔍 **Investigating User Activity:**

```plaintext
JLECmd.exe -d "C:\Users\Admin\AppData\Roaming\Microsoft\Windows\Recent\AutomaticDestinations" -r -o "JumpListReport.csv"
```

🔍 **Extracting Data from a Specific JumpList File:**

```plaintext
JLECmd.exe -f "C:\JumpLists\example.automaticDestinations-ms" -d "C:\Output"
```

---

## 🚀 Pro Tips

- 🛠 Run with `-q` to suppress non-essential output for cleaner logs.
- 🔥 Use CSV or JSON export for easy data parsing and automation.
- ⚡ Combine with other Zimmerman tools for a full forensic workflow.

---

## 📚 References
- [Eric Zimmerman's Official Tools](https://ericzimmerman.github.io/#!index.md)
- [Windows JumpLists Forensics Guide](https://dfir.pub/jumplists)
- [Analysis of AutomaticDestinations Files](https://forensicswiki.xyz/jumplists)

---

![VIDEO](https://www.youtube.com/watch?v=wu4-nREmzGM)
