# 🔫Quick Reference Commands

## 🛡️ Offensive Security Commands
### Nmap default port scan
```bash
nmap -p- -O -v -sV <IP ADDRESS>
```
-- Default mass port scan with OS and Service identification 

### Nmap Aggressive port scan
```bash
nmap -A -v <IP ADDRESS>
```
-- Aggressive Port Scan

### Retrieve a file from an FTP server
```bash
mget *
```
-- Full all files from a directory from an FTP server

### Crack a Password with Hashcat 
```bash
hashcat -O -a 0 -m <HASH Type> <FILE HASH>:<SALT>
```
-- This command runs Hashcat in optimized mode (`-O`) to crack a hash (`<FILE HASH>`) that uses a salt (`<SALT>`), using a dictionary attack (`-a 0`) against a specific hash type 

## 📝File Information

### Retrieve basic file information
```bash
file <FILE NAME>
```
-- This will provide a high level overview of a given file specifying file type and offset

### Provide a hexdump of a file
```bash
xxd <FILE NAME>
```
-- This will provide a hexdump of a given file

## \# File Hashing
### Retrieve a file hash (linux)
```bash
<FILE HASH TYPE>sum <FILE NAME>
```

### Retrieve a file hash (Powershell)
> Default is SHA256 e.g. no provided `-alg` statement
```bash
get-filehash <FILE NAME> -alg <FILE HASH TYPE>
```

### Retrieve a file hash (Win)
```bash
certutil -hashfile <FILE NAME> <FILEHASHTYPE>
```
