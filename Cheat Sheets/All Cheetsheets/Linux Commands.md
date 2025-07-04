# 🐧 Linux Command Line Cheatsheet
#CS #linux 

A comprehensive table of common Linux commands for quick reference.

## File and Directory Management

| **Command**              | **Description**                                               | **Example**                                                   |
|--------------------------|-----------------------------------------------------------|---------------------------------------------------------------|
| `ls`                    | List directory contents                                     | `ls -al` (list all files in long format)                      |
| `cd`                    | Change directory                                           | `cd /home/user/Documents`                                     |
| `pwd`                   | Print working directory                                    | `pwd`                                                         |
| `touch`                 | Create an empty file                                       | `touch file.txt`                                              |
| `mkdir`                 | Create a new directory                                     | `mkdir new_folder`                                            |
| `rm`                    | Remove files or directories                                | `rm file.txt`, `rm -r folder`                                 |
| `cp`                    | Copy files or directories                                  | `cp file.txt /destination`, `cp -r folder /destination`       |
| `mv`                    | Move or rename files or directories                       | `mv old_name new_name`, `mv file.txt /destination`            |

## Viewing and Editing Files

| **Command** | **Description**                       | **Example**                   |
| ----------- | ------------------------------------- | ----------------------------- |
| `cat`       | View file contents                    | `cat file.txt`                |
| `less`      | View file contents one page at a time | `less file.txt`               |
| `grep`      | Search for text in files              | `grep 'search_term' file.txt` |
| `nano`      | Open a text file in the nano editor   | `nano file.txt`               |
| `vim`       | Open a text file in the vim editor    | `vim file.txt`                |

## Searching and Finding

| **Command**              | **Description**                                               | **Example**                                                   |
|--------------------------|-----------------------------------------------------------|---------------------------------------------------------------|
| `find`                  | Search for files or directories                           | `find /path -name 'filename'`                                 |
| `locate`                | Find files quickly (requires `mlocate` package)           | `locate file.txt`                                             |

## Permissions and Ownership

| **Command**              | **Description**                                               | **Example**                                                   |
|--------------------------|-----------------------------------------------------------|---------------------------------------------------------------|
| `chmod`                 | Change file permissions                                    | `chmod 755 script.sh`                                         |
| `chown`                 | Change file owner                                         | `chown user:group file.txt`                                   |

## Disk and File System Management

| **Command**              | **Description**                                               | **Example**                                                   |
|--------------------------|-----------------------------------------------------------|---------------------------------------------------------------|
| `df`                    | Display disk space usage                                   | `df -h` (human-readable format)                               |
| `du`                    | Show directory or file size                                | `du -sh folder`                                               |

## Process Management

| **Command**              | **Description**                                               | **Example**                                                   |
|--------------------------|-----------------------------------------------------------|---------------------------------------------------------------|
| `top`                   | Display running processes                                  | `top`                                                         |
| `ps`                    | View running processes                                     | `ps aux`                                                      |
| `kill`                  | Terminate a process by ID                                  | `kill 1234`                                                   |

## Networking

| **Command**              | **Description**                                               | **Example**                                                   |
|--------------------------|-----------------------------------------------------------|---------------------------------------------------------------|
| `wget`                  | Download files from the web                                | `wget https://example.com/file.zip`                           |
| `curl`                  | Transfer data from or to a server                         | `curl -O https://example.com/file.zip`                        |
| `ssh`                   | Connect to a remote machine                               | `ssh user@remote_host`                                        |
| `scp`                   | Copy files between machines securely                      | `scp file.txt user@remote_host:/destination`                  |
| `rsync`                 | Synchronize files between machines                        | `rsync -avz source/ destination/`                             |
| `ping`                  | Test network connectivity                                 | `ping google.com`                                             |
| `netstat`               | Display network connections                               | `netstat -tuln`                                               |
| `ip`                    | Configure or show network interfaces                      | `ip a`, `ip r`                                                |
| `ifconfig`              | Show or configure network interfaces                      | `ifconfig` (deprecated, use `ip` instead)                     |

## Package Management

| **Command**              | **Description**                                               | **Example**                                                   |
|--------------------------|-----------------------------------------------------------|---------------------------------------------------------------|
| `sudo`                  | Execute a command as another user (root by default)       | `sudo apt update`                                             |
| `apt`                   | Package manager for Debian-based systems                 | `sudo apt install package`, `sudo apt update`                 |
| `yum`                   | Package manager for RHEL-based systems                   | `sudo yum install package`                                    |
| `dnf`                   | Modern package manager for RHEL-based systems            | `sudo dnf install package`                                    |
| `pacman`                | Package manager for Arch-based systems                   | `sudo pacman -S package`                                      |

## System Management

| **Command**              | **Description**                                               | **Example**                                                   |
|--------------------------|-----------------------------------------------------------|---------------------------------------------------------------|
| `systemctl`             | Manage system services                                    | `systemctl start service`, `systemctl status service`         |
| `journalctl`            | View system logs                                          | `journalctl -xe`                                              |

## Miscellaneous

| **Command**              | **Description**                                               | **Example**                                                   |
|--------------------------|-----------------------------------------------------------|---------------------------------------------------------------|
| `alias`                 | Create command shortcuts                                  | `alias ll='ls -al'`                                           |
| `uname`                 | Display system information                                | `uname -a`                                                    |
| `whoami`                | Show the current user                                     | `whoami`                                                      |
| `history`               | Show command history                                      | `history`                                                     |
| `clear`                 | Clear the terminal screen                                 | `clear`                                                       |

This cheatsheet covers essential Linux commands and their basic usage. Keep it handy for quick reference!