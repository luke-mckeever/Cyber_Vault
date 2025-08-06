# 🐺 BloodHound 🐺

#RED #TTAD #TTintel  #Tool 

BloodHound is a **graphical penetration testing and red team tool** used for exploring and exploiting **Active Directory (AD)** environments. It allows security professionals to **discover hidden attack paths** by mapping relationships, group memberships, and delegated rights inside a domain. Using graph theory, it can uncover **complex privilege escalation routes** that would be nearly impossible to identify manually.  

BloodHound has become one of the most critical tools in the toolkit of penetration testers, red teamers, and advanced threat hunters. 🔍

**📖 [Official Documentation Here](https://bloodhound.readthedocs.io/en/latest/)**  

---
![BloodHound](https://github.com/BloodHoundAD/BloodHound/blob/master/BloodHoundLogo.png)

---

## 🚀 Installing BloodHound

### 🔹 **Windows**
1. Download from [BloodHound Releases](https://github.com/BloodHoundAD/BloodHound/releases).
2. Extract the archive.
3. Install **Neo4j Desktop** ([Download Here](https://neo4j.com/download/)).
4. Launch Neo4j and set a username/password (default: `neo4j/neo4j`).
5. Run `BloodHound.exe`.

### 🔹 **Linux (Kali)**
```plaintext
sudo apt update
sudo apt install bloodhound neo4j
neo4j console &
bloodhound
```

💡 **Tip:** Always start Neo4j before launching BloodHound.

---

## 🛠️ Key Components

- **BloodHound (GUI):** Visual interface to analyze and interact with data.
- **SharpHound:** The **data collection tool** that gathers AD data for import.
- **Neo4j:** The **graph database** that stores collected AD data and powers queries.

---

## 📊 Using the GUI: Step-by-Step

### 1️⃣ Launching BloodHound
- Start **Neo4j** first and log in (`neo4j console` on Linux or Neo4j Desktop on Windows).
- Open **BloodHound** and log in with the same credentials.

### 2️⃣ Data Collection with SharpHound
- Run **SharpHound** from a domain-joined machine.
- SharpHound can collect:
  - Group Memberships
  - Local Admin Rights
  - ACLs and Permissions
  - Trust Relationships
- Output is saved as `.json` files (often compressed into a `.zip`).

**Example Command (Windows):**
```plaintext
SharpHound.exe --CollectionMethod All --Domain CONTOSO.local
```

### 3️⃣ Importing Data into BloodHound
- Drag-and-drop the `.json` or `.zip` files into the BloodHound GUI.
- Wait for data ingestion (progress displayed in the bottom bar).

### 4️⃣ Navigating the Graph
- Use the **search bar** to look up specific users, groups, or computers.
- Nodes are color-coded:
  - 👤 **Blue**: Users  
  - 💻 **Green**: Computers  
  - 📂 **Yellow**: Groups  
  - 🔑 **Red**: High-value targets (e.g., Domain Admins)
- Edges (arrows) represent the relationship/permission type.

### 5️⃣ Running Built-In Queries
BloodHound comes with **pre-built queries** that highlight common attack paths:
- **Find shortest paths to Domain Admins**: See how a low-privilege user could escalate.
- **Find all Domain Admins**: Quickly locate the most powerful accounts.
- **Find unconstrained delegation computers**: Identify misconfigurations.
- **Find Kerberoastable users**: Users with Service Principal Names vulnerable to Kerberoasting.
- **Find shortest paths to high-value targets**: Customizable to specific users/groups.

---

## 🧭 Real Attack Path Example

**Scenario:**  
A user `jdoe` is a member of a HelpDesk group. BloodHound shows:

1. `jdoe` → Local admin on `WORKSTATION01`
2. `WORKSTATION01` has a session open for user `mgrsmith`
3. `mgrsmith` has **GenericAll** (full control) over a security group
4. That group contains a **Domain Admin**

➡️ **Attack Path:**  
`jdoe` → Admin rights on `WORKSTATION01` → Harvest `mgrsmith`'s credentials → Abuse GenericAll → Domain Admin.  

This entire chain would be extremely hard to spot manually but is clear in BloodHound’s graph view.

---

## 📀 SharpHound Collection Methods

| Method          | Description                                                                 |
|-----------------|-----------------------------------------------------------------------------|
| **All**        | Runs every collection method (most thorough, slower).                       |
| **Default**    | Most common queries for initial analysis.                                   |
| **ACL**        | Collects Access Control List permissions.                                   |
| **Trusts**     | Maps domain trusts for multi-domain attacks.                                |
| **LocalAdmin** | Finds users/groups with local admin rights.                                 |
| **Sessions**   | Captures active logins on computers (useful for lateral movement).          |

---

## 📀 Neo4j Basics

BloodHound runs queries against Neo4j using **Cypher Query Language**.  
Common tasks include:

- Listing Domain Admins:
```cypher
MATCH (u:User)-[:MemberOf*1..]->(g:Group {name:"DOMAIN ADMINS@DOMAIN.LOCAL"}) RETURN u
```

- Shortest path to Domain Admin:
```cypher
MATCH p=shortestPath((n:User {name:"jdoe@DOMAIN.LOCAL"})-[*1..]->(m:Group {name:"DOMAIN ADMINS@DOMAIN.LOCAL"})) RETURN p
```

⚡ You don’t need to know Cypher to use BloodHound — the GUI’s built-in queries handle this — but advanced users benefit from custom Cypher queries.

---

## 🌐 Advanced Features

- **Custom Queries:** Tailor Cypher queries for specific use cases.
- **Tagging & Notes:** Add labels to nodes for tracking investigations.
- **Pathfinding:** Visualize shortest or all possible paths to objectives.
- **Export Options:** Save graphs as images for reporting.
- **Dark Mode:** Enable for comfortable extended usage.

---

## ⚠️ Ethical Considerations

⚠️ **Warning:** BloodHound must only be used in environments you are **authorized** to test. Unauthorized use is illegal and unethical. Always obtain written permission before running BloodHound or SharpHound.

---

## 🚀 Pro Tips

- Always update to the latest SharpHound collector for compatibility.
- Start with **Default** collection for stealth and speed; escalate to **All** if needed.
- After importing data, run **"Shortest paths to Domain Admins"** as your baseline query.
- Use the **right-click context menu** on nodes to expand paths dynamically.
- Regularly export your findings for reporting and documentation.

---

## 📚 References
- [BloodHound GitHub](https://github.com/BloodHoundAD/BloodHound)
- [SharpHound Documentation](https://bloodhound.readthedocs.io/en/latest/data-collection/sharphound.html)
- [Neo4j Official Site](https://neo4j.com/)
- [Harmj0y Blog on BloodHound](https://blog.harmj0y.net/)

---

🎬 [BloodHound Usage Video Tutorial](https://www.youtube.com/watch?v=E6a8AC3bMQM)