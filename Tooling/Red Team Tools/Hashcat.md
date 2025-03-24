# Hashcat 🔥🛡️💻
#Tool #RED #TTPW

Hashcat is the world's fastest and most advanced password recovery tool. It is designed to brute-force, dictionary attack, and hybrid attack various hash algorithms with optimized performance and customization options.

**LINK TO TOOL DOCUMENTATION [HERE](https://hashcat.net/hashcat/)**

Hashcat is an open-source, multi-threaded, and GPU-accelerated password recovery tool that supports a vast range of hashing algorithms. It is used by cybersecurity professionals, ethical hackers, and penetration testers for recovering lost passwords and assessing security strength.

---
![Hashcat](https://www.kali.org/tools/hashcat/images/hashcat-logo.svg)

---

### 🚀 Installing Hashcat

#### 🔹 **Linux** 
```bash
sudo apt update && sudo apt install hashcat
```

#### 🔹 **Windows**
Download from: [Hashcat](https://hashcat.net/hashcat/)

---

## 🧰 Common Commands

```bash
hashcat -m 0 -a 0 example.hash rockyou.txt
```
\-Dictionary attack using a predefined wordlist
**Dictionary attack**: Uses a wordlist to try predefined passwords.

```bash
hashcat -m 100 -a 3 example.hash ?a?a?a?a  
```
\-Brute-force attack with a 4-character mask
**Brute-force attack**: Tries every possible combination for a given length.

```bash
hashcat -m 500 -a 6 example.hash wordlist.txt ?d?d?d  
```
\-Hybrid attack combining dictionary and mask
 **Hybrid attack**: Combines dictionary words with brute-force characters.
 
```bash
hashcat --show -m 0 example.hash 
```
\-Show cracked hashes from previous runs
**Show cracked hashes**: Displays already cracked hashes without reprocessing.

```basg
hashcat --restore 
```
\-Restore a session that was previously interrupted
**Restore session**: Resumes a previously stopped cracking session.

---

## ⚙️ Advanced Usage

```bash
hashcat -m 1800 -a 3 example.hash ?1?1?1?1 --custom-charset1=?l?u?d  
```
\-Custom charset attack for stronger passwords
**Custom charset attack**: Uses a defined set of lowercase, uppercase, and digits for more controlled brute-force attempts.

```bash
hashcat -m 1000 -a 0 example.hash -r rules/best64.rule rockyou.txt  
```
\-Rule-based attack modifying dictionary words
**Rule-based attack**: Applies complex modifications to dictionary words to create variations.

```bash
hashcat -m 300 -a 1 example.hash dict1.txt dict2.txt  
```
\-Combinator attack merging two wordlists
**Combinator attack**: Merges two wordlists to create hybrid word combinations.

```bash
hashcat -m 10 -a 9 example.hash dict.txt   
```
\-Association attack using pre-mapped key-value pairs
**Association attack**: Uses key-value pairs to associate potential passwords with user details.

---

## 📋 Handy Options

| Option       | Description                                            |
|-------------|--------------------------------------------------------|
| `-m`       | Hash type selection                                    |
| `-a`       | Attack mode selection                                  |
| `-r`       | Rule-based attack file                                 |
| `--show`   | Display cracked hashes                                |
| `--restore` | Restore a previous session                            |
| `-w`       | Workload tuning (low to extreme)                       |
| `-O`       | Optimize for performance                               |
| `--force`  | Bypass warnings and force execution                    |
| `--session`| Specify a session name                                 |
| `-o`       | Output file to save cracked passwords                  |
| `--status` | Show real-time cracking status updates                 |
| `--increment` | Enable incremental attack mode                     |
| `--gpu-temp-abort` | Set maximum GPU temperature before aborting   |
| `--self-test-disable` | Disable self-test on startup               |
| `--benchmark` | Run performance benchmarks                         |

---
## Hash Types
|Hash-Mode|Hash-Name|Example|
|---|---|
|0|MD5|
|10|md5(\$pass.$salt)|
|20|md5(\$salt.$pass)|
|100|SHA1|
|500|md5crypt, MD5 (Unix), Cisco-IOS \$1$ (MD5)|
|1000|NTLM|
|1400|SHA2-256|
|1700|SHA2-512||
|1800|sha512crypt $6$, SHA512 (Unix)|
|2500|WPA-EAPOL-PBKDF2|
|3200|bcrypt $2*$, Blowfish (Unix)|
|5600|NetNTLMv2|
|5800|Samsung Android Password/PIN|
|7400|sha256crypt $5$, SHA256 (Unix)|
|10000|Django (PBKDF2-SHA256)|
|10900|PBKDF2-HMAC-SHA256|
|12100|PBKDF2-HMAC-SHA512|
|12800|MS-AzureSync PBKDF2-HMAC-SHA256|
|13400|KeePass 2 AES / without keyfile|
|14000|Cloudflare API Key|
|14100|Blockchain, My Wallet|


---

## 🌐 Example Scenarios

### 🔐 Recovering a forgotten password
```bash
hashcat -m 0 -a 0 hash.txt rockyou.txt
```
### 🚀 Cracking Windows NTLM Hashes
```bash
hashcat -m 1000 -a 3 hash.txt ?a?a?a?a?a?a
```
### 🔥 Optimizing for GPU performance
```bash
hashcat -m 2500 -a 3 handshake.hccapx -w 4
```

---

## 🚀 Pro Tips
- 🏎️ Use `-w 3` or `-w 4` for faster performance on powerful GPUs.
- 📂 Always keep your wordlists updated for better results.
- 🔄 Utilize `--restore` to continue long-running sessions.
- 🔥 Combine rule-based attacks (`-r`) with dictionaries for maximum efficiency.
- 🛠️ Experiment with mask attacks (`?a?a?a?a`) for targeted brute-force attempts.

---

## 📚 References
- [Official Hashcat Website](https://hashcat.net/hashcat/)
- [Hashcat Wiki](https://hashcat.net/wiki/)
- [GitHub Repository](https://github.com/hashcat/hashcat)

---

![VIDEO](https://www.youtube.com/watch?v=z4_oqTZJqCo)
