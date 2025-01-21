# Sherlock Cheatsheet

![Sherlock Logo](https://www.kali.org/tools/sherlock/images/sherlock-logo.svg)

Welcome to the **Sherlock Cheatsheet**! 🕵️‍♂️ This guide is your go-to reference for mastering **Sherlock**, the open-source username hunting tool. 🚀

---

## 🎯 What is Sherlock?
**Sherlock** is a powerful tool for finding usernames across multiple platforms. It helps ethical hackers, investigators, and OSINT researchers track down online profiles quickly and efficiently. 🌐

---

## ✨ Key Features

- **Wide Platform Support**: Search for usernames across hundreds of websites.
- **Custom Search**: Target specific platforms for tailored searches.
- **Batch Processing**: Search for multiple usernames at once.
- **Docker Support**: Use Sherlock in isolated environments.
- **Free and Open Source**: Completely free with active community support.

---

## 🛠️ Installation

### Install Sherlock with Git
```bash
# Clone the repository
git clone https://github.com/sherlock-project/sherlock.git

# Navigate to the directory
cd sherlock

# Install dependencies
pip install -r requirements.txt
```

### Run with Docker
```bash
# Pull the Docker image
sudo docker pull ghcr.io/sherlock-project/sherlock:latest

# Run Sherlock with Docker
sudo docker run -it sherlock:latest
```

---

## 📚 Common Commands

### 1. **Basic Username Search**
```bash
python3 sherlock username
```

### 2. **Search Multiple Usernames**
```bash
python3 sherlock username1 username2 username3
```

### 3. **Specify Output Directory**
```bash
python3 sherlock username --folderpath /path/to/directory
```

### 4. **Use a Proxy**
```bash
python3 sherlock username --proxy http://127.0.0.1:8080
```

### 5. **Timeout for Requests**
```bash
python3 sherlock username --timeout 10
```

### 6. **Save Results as JSON**
```bash
python3 sherlock username --json
```

### 7. **Search Specific Sites**
```bash
python3 sherlock username --site "twitter,github"
```

---

## ⚙️ Configuration

### Update Sherlock
Keep Sherlock up to date for the best performance:
```bash
cd sherlock

git pull
```

### Check Supported Sites
View the full list of supported websites:
```bash
python3 sherlock --site_list
```

---

## 🚩 Best Practices

1. **Use Responsibly**: Only search for usernames you have permission to investigate.
2. **Anonymize Traffic**: Use proxies or VPNs for added privacy.
3. **Stay Updated**: Regularly update Sherlock to benefit from new features and site additions.

---

## 📸 Screenshots
![Sherlock Demo](https://mintlify.s3-us-west-1.amazonaws.com/sherlockproject/images/preview.png)

---

## 📖 Resources

- [Official Repository](https://github.com/sherlock-project/sherlock)
- [Documentation](https://github.com/sherlock-project/sherlock/wiki)
- [Community Forum](https://github.com/sherlock-project/sherlock/discussions)

---

## 🌟 Contributors
Created by **Siddharth Dushantha** and supported by an amazing community of developers and researchers. 👨‍💻👩‍💻

---

> **Disclaimer**: Sherlock is a tool for ethical use only. Misuse may violate laws or platform terms of service.