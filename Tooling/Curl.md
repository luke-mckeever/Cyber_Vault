#Tool #RED #BLUE #TTgen
# Curl Cheatsheet 🌀

Welcome to the ultimate Curl cheatsheet! Curl is a versatile command-line tool for transferring data with URLs. Whether you're downloading files, testing APIs, or troubleshooting network issues, this guide has you covered. 🎉

---

## 🌟 What is Curl?
Curl (short for **Client URL**) is a command-line tool that supports various protocols like HTTP, HTTPS, FTP, and more. It allows you to send requests and receive responses directly from the command line.

### 🛠 Features:
- Supports multiple protocols: HTTP, HTTPS, FTP, SCP, SFTP, and more.
- Handles cookies, user authentication, and data uploads.
- Offers detailed debugging and verbose options.
- Can be scripted for automation tasks.

![Curl Banner](https://via.placeholder.com/800x200?text=Master+Curl+Like+a+Pro)  

---

## 🧰 Common Commands

### 🔍 Basic Usage
```bash
curl https://example.com
```
Fetch the contents of a URL.

### 📥 Download a File
```bash
curl -O https://example.com/file.zip
```
Download a file and save it with its original name.

### 📂 Save File with Custom Name
```bash
curl -o custom_name.zip https://example.com/file.zip
```
Save a file with a custom name.

### 🪪 Include Headers in Request
```bash
curl -H "Authorization: Bearer YOUR_TOKEN" https://api.example.com/data
```
Send a GET request with headers.

### 📨 POST Data
```bash
curl -X POST -d "key1=value1&key2=value2" https://api.example.com/submit
```
Send data in a POST request.

### 📊 Upload File
```bash
curl -X POST -F "file=@/path/to/file" https://api.example.com/upload
```
Upload a file via POST request.

### 🕵️ Verbose Mode
```bash
curl -v https://example.com
```
Enable verbose output for troubleshooting.

---

## ⚙️ Advanced Usage

### 🌐 Follow Redirects
```bash
curl -L https://example.com
```
Follow URL redirects automatically.

### 🔒 SSL Options
```bash
curl --insecure https://example.com
```
Ignore SSL certificate warnings (use with caution!).

### 🕔 Set Timeout
```bash
curl --max-time 10 https://example.com
```
Set a maximum time (in seconds) for the request.

### 🧵 Parallel Requests
```bash
xargs -n 1 -P 4 curl -O < urls.txt
```
Download multiple URLs in parallel (requires `xargs`).

### 🍪 Use Cookies
```bash
curl -b cookies.txt -c cookies.txt https://example.com
```
Send and save cookies to a file.

---

## 📋 Handy Options

| Option       | Description                       |
|--------------|-----------------------------------|
| `-I`         | Fetch headers only                |
| `-k`         | Allow insecure SSL connections    |
| `-u`         | Specify user credentials          |
| `-A`         | Set a custom User-Agent string    |
| `-H`         | Add custom header(s)              |
| `-X`         | Specify HTTP method (e.g., POST)  |
| `-v`         | Verbose mode                      |
| `--data`     | Send POST data                    |
| `--limit-rate`| Limit download speed              |

---

## 🌐 API Testing

### GET Request with Query Parameters
```bash
curl "https://api.example.com/resource?key=value"
```

### POST JSON Data
```bash
curl -X POST -H "Content-Type: application/json" -d '{"key":"value"}' https://api.example.com/resource
```

### Authentication (Basic)
```bash
curl -u username:password https://api.example.com/resource
```

---

## 🚀 Pro Tips

### 1️⃣ Save Output to a File
```bash
curl https://example.com -o output.html
```

### 2️⃣ Check Your Public IP
```bash
curl https://ifconfig.me
```

### 3️⃣ Test Connection Speed
```bash
curl -o /dev/null -s -w 'Time: %{time_total}\n' https://example.com
```

---

## 📚 References
- [Official Curl Documentation](https://curl.se/docs/)
- [Curl GitHub Repository](https://github.com/curl/curl)

![Happy Curling!](https://via.placeholder.com/600x150?text=Happy+Curling!)

---

✨ **Copy, paste, and Curl away!** ✨
