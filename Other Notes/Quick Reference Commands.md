# 🔫Quick Reference Commands

```bash
nmap -p- -O -v -sV <IP ADDRESS>
```
-- Default mass port scan with OS and Service identification 

```bash
nmap -A -v <IP ADDRESS>
```
-- Aggressive Port Scan

```bash
mget *
```
-- Full all files from a directory from an FTP server

```bash
hashcat -O -a 0 -m 10 <FILE HASH>:<SALT>
```
-- This command runs Hashcat in optimized mode (`-O`) to crack a hash (`<FILE HASH>`) that uses a salt (`<SALT>`), using a dictionary attack (`-a 0`) against a specific hash type (`-m 10`).

