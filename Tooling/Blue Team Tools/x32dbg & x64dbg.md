# 🐞 x32dbg / x64dbg – Graphical Debugging Tools for Malware Analysis 🧠🧩🛠️  
#BLUE #TTMA #Tool  

**x32dbg** and **x64dbg** are open-source graphical debuggers used for analyzing Windows executables in 32-bit and 64-bit architectures, respectively. Built for malware analysts, reverse engineers, and security researchers, these tools offer deep inspection capabilities like memory analysis, API tracing, patching, and process manipulation.

> 🔄 **x32dbg** is designed for 32-bit executables  
> 🔁 **x64dbg** is designed for 64-bit executables  
Both share a unified interface and feature set, tailored for their target architecture.

📚 **Official Documentation**: [HERE](https://x64dbg.com)

---

![x64dbg Logo](https://raw.githubusercontent.com/x64dbg/x64dbg/development/src/bug_black.png)

---

## 🔧 What Is x64dbg / x32dbg?

x64dbg is a feature-rich graphical debugger used to analyze, reverse engineer, and dissect Windows binaries. It provides a user-friendly interface to:

- 🧬 Step through instructions in real-time  
- 🎯 Set breakpoints, watch registers, and inspect memory  
- 🧠 Understand complex malware behaviors  
- 🔌 Extend functionality with powerful plugin support  
- 🧪 Perform unpacking and dynamic manipulation of binaries  

It is an essential tool in the reverse engineering and malware analysis workflow.

---

## 🚀 Installing x64dbg / x32dbg

#### 🔹 **Linux**  
❌ Not natively supported on Linux. Use Wine or a Windows VM for proper operation.

#### 🔹 Windows
📥 Download from: [x64dbg Official Site](https://x64dbg.com/)
1. Download the ZIP release
2. Extract the folder
3. Launch x64dbg.exe (for 64-bit) or x32dbg.exe (for 32-bit)  
    ✅ No installation required

---

## 🧰 Common Features

Since x64dbg is a GUI-based tool, it doesn’t use terminal commands. Here are commonly used features:

- 🔍 Load and debug .exe files via File > Open
- 📌 Set breakpoints (right-click instruction → Toggle Breakpoint or press F2)
- 🧠 Step through code using F7 (Step Into), F8 (Step Over), F9 (Run)
- 🧵 Inspect threads, registers, memory regions, and stack
- 🔎 Use String References (Ctrl+R) to find suspicious strings
- 📜 View and edit Import/Export tables, symbols, and memory dumps

---

## ⚙️ Advanced Usage

- 🧪 **Unpack malware** by placing breakpoints after unpacking routines (e.g. `VirtualAlloc`)
- 🛠 **Patch conditional branches** to bypass anti-debugging logic
- 💾 **Dump modified memory regions** for static analysis
- 🔌 Use plugins like:
    - **Scylla** (IAT fixing)
    - **TitanHide** (Anti-anti-debugging)
    - **Labeless** (IDA sync)
- 📜 Write scripts using x64dbg’s command system for automated analysis

---

## 📋 Handy Options

|Feature|Description|
|---|---|
|`Patch`|Modify assembly in real-time|
|`Dump`|Extract memory for external analysis|
|`Log`|Monitor API calls and debugging output|
|`Graph View`|Visualize control flow and function structure|
|`Memory Map`|Overview of loaded modules and memory permissions|

---

## 📂 How To Use – Analyzing a Windows Executable in x64dbg / x32db

1. Determine Architecture  
Identify if the binary is 32-bit or 64-bit using tools like PEStudio or DIE.  
Launch x32dbg.exe for 32-bit, x64dbg.exe for 64-bit binaries.

2. Open the Executable  
Click File > Open, select the target .exe.  
x64dbg will pause execution at the entry point (EP).

3. Set Initial Breakpoints  
Common breakpoints:
Use F2 to set a Breakpoint 
- VirtualAlloc, WriteProcessMemory, CreateProcess*, ShellExecute, LoadLibrary
- Right-click on instruction → Toggle Breakpoint or press F2

4. Begin Execution Safely  
Use  F9 to run until a breakpoint is hit.  
Use F7 to step in to a call
Use F8 to step through instructions.  
Observe register/memory/log behavior to identify unpacking or payload routines.

5. Inspect Behavior  
- Open Strings (Ctrl+R) for hidden indicators (e.g. URLs, file paths)
- Monitor memory via Memory Map and Dump regions of interest
- Use Import Table to understand API usage

6. Dump and Analyze  
If the malware unpacks in memory, dump the region (Ctrl+D), save it, and optionally use Scylla to rebuild imports.

7. Modify Execution Flow.
- Patch JNE to JE to bypass logic
- Use Right-click > Assemble to rewrite instructions
- Save changes using the Patch tab

8. Document Observations    
- Add inline comments (Right-click > Comment)
- Save sessions for future review
- Record strings, suspicious behavior, and C2 indicators

>💡 Always analyze in a VM. Use snapshots and isolate your environment.

---
  
## 🌐 Example Scenarios

- 🔓 Unpacking a packed malware binary
- 👀 Bypassing anti-debugging checks with instruction patching
- 🔍 Extracting embedded payloads from memory
- 🧰 Debugging a suspicious executable to locate IOCs or encryption routines

---

📚 References

- [x64dbg Official Website](https://x64dbg.com/)
- [Malware Analysis with x64dbg (YouTube)](https://www.youtube.com/watch?v=acMYzQZb1LY)
- [GitHub Repository](https://github.com/x64dbg/x64dbg)
- [Beginner Debugging Guide](https://www.youtube.com/watch?v=VYPSZr9L8Go)


---