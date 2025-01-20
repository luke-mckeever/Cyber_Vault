# 🐧 **Linux Commands Cheatsheet**

Master your Linux environment with these commonly used commands, organized for quick reference and enhanced with Markdown styling. 🚀

---

## 📋 **Table of Contents**
1. [Basic Commands](#basic-commands)
2. [File and Directory Management](#file-and-directory-management)
3. [Permissions](#permissions)
4. [Networking](#networking)
5. [System Monitoring](#system-monitoring)

---

## 🛠️ **Basic Commands**

| **Command**     | **Description**                                | **Example**            |
|------------------|-----------------------------------------------|------------------------|
| `pwd`           | Prints the current working directory.         | `pwd`                 |
| `whoami`        | Displays the current logged-in username.      | `whoami`              |
| `date`          | Shows the current date and time.              | `date`                |
| `clear`         | Clears the terminal screen.                   | `clear`               |
| `exit`          | Closes the terminal session.                  | `exit`                |

---

## 📂 **File and Directory Management**

| **Command**          | **Description**                                      | **Example**                   |
|-----------------------|-----------------------------------------------------|-------------------------------|
| `ls`                 | Lists files and directories.                        | `ls -al`                     |
| `cd`                 | Changes the current directory.                      | `cd /home/user`              |
| `mkdir`              | Creates a new directory.                            | `mkdir my_folder`            |
| `rmdir`              | Deletes an empty directory.                         | `rmdir empty_folder`         |
| `touch`              | Creates a new empty file.                           | `touch new_file.txt`         |
| `cp`                 | Copies files or directories.                        | `cp file1.txt file2.txt`     |
| `mv`                 | Moves or renames files or directories.              | `mv file.txt /destination/`  |
| `rm`                 | Deletes files or directories.                       | `rm -rf folder/`             |
| `find`               | Searches for files in a directory hierarchy.        | `find / -name "file.txt"`    |

---

## 🔐 **Permissions**

| **Command**          | **Description**                                      | **Example**                   |
|-----------------------|-----------------------------------------------------|-------------------------------|
| `chmod`              | Changes file permissions.                           | `chmod 755 script.sh`        |
| `chown`              | Changes file ownership.                             | `chown user:group file.txt`  |
| `ls -l`              | Displays file permissions in detail.                | `ls -l`                      |

---

## 🌐 **Networking**

| **Command**          | **Description**                                      | **Example**                   |
|-----------------------|-----------------------------------------------------|-------------------------------|
| `ping`               | Sends ICMP echo requests to test connectivity.      | `ping google.com`            |
| `curl`               | Transfers data from or to a server.                 | `curl https://example.com`   |
| `wget`               | Downloads files from the web.                       | `wget https://file.com/file` |
| `ifconfig`           | Displays or configures network interfaces.          | `ifconfig`                   |
| `netstat`            | Displays network connections, routing tables, etc.  | `netstat -tuln`              |

---

## 📊 **System Monitoring**

| **Command**          | **Description**                                      | **Example**                   |
|-----------------------|-----------------------------------------------------|-------------------------------|
| `top`                | Displays real-time system processes.                | `top`                        |
| `htop`               | Interactive process viewer (if installed).          | `htop`                       |
| `free`               | Shows memory usage.                                 | `free -h`                    |
| `df`                 | Reports disk space usage.                           | `df -h`                      |
| `uptime`             | Shows system uptime and load averages.              | `uptime`                     |
| `ps`                 | Displays currently running processes.               | `ps aux`                     |

---

## 🌟 **Pro Tips**

- Use `man [command]` to get a manual for any Linux command (e.g., `man ls`).
- Combine commands with pipes (`|`) for advanced workflows.
- Use `sudo` before commands to run them with root privileges.

---

> **💡 Remember:** Practice makes perfect! Try these commands in a test environment to get comfortable with them. 🔧
