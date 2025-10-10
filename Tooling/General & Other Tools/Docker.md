## 🐳 Docker - Container Platform 🛡️🚀📦
#TTgen #Tool 

Docker is an **open-source platform** that automates the deployment, scaling, and management of applications inside **lightweight containers**. It allows security professionals to build, test, and run tools in **isolated, reproducible environments**—ideal for malware analysis, red teaming, and lab automation.

**🔗 LINK TO TOOL DOCUMENTATION [HERE](https://docs.docker.com/)**

Docker makes it easy to deploy cybersecurity tools without dependency hell. From SIEM stacks to phishing kits, to malware sandboxes—**Docker is your go-to engine** for replicating complex environments in seconds.

For a full breakdown of the principle of [[Containerization]] please go to knowledge article 

---
![Docker Logo](https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png)

---

### 🚀 Installing Docker

#### 🔹 **LINUX** 
```bash
# Update packages
sudo apt update

# Install prerequisites
sudo apt install apt-transport-https ca-certificates curl software-properties-common

# Add Docker GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker.gpg

# Add Docker repo
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker
sudo apt update
sudo apt install docker-ce

# Start & enable Docker
sudo systemctl start docker
sudo systemctl enable docker
```

#### 🔹 **Windows**
Download from: [Docker Desktop](https://www.docker.com/products/docker-desktop/)

---

### 1️⃣ PRE-REQUISITES
- 64-bit OS
- Virtualization enabled in BIOS
- Internet access for pulling images

---

## 🧰 How To use

1. **Pull a Docker image**:
```bash
docker pull ubuntu
```

2. **Run a container**:
```bash
docker run -it ubuntu bash
```

3. **Build a custom image** using a Dockerfile:
```bash
docker build -t my-cyber-tool .
```

4. **List running containers**:
```bash
docker ps
```

5. **Stop a container**:
```bash
docker stop <container_id>
```

---

## ⚙️ Advanced Usage

- **Docker Compose for multi-container environments**:
```yaml
version: '3'
services:
  web:
    image: nginx
    ports:
      - "8080:80"
  malwarelab:
    image: remnux/remnux-distro
    privileged: true
```

- **Bind mount host folders** for malware samples:
```bash
docker run -v /host/malware:/container/malware -it ubuntu
```

- **Networking**:
```bash
docker network create cyber-net
```

---

## 📋 Handy Options

| Option              | Description                                  |
|---------------------|----------------------------------------------|
| `docker build`      | Build image from Dockerfile                  |
| `docker run`        | Start a new container                        |
| `-v`                | Mount local volumes                          |
| `--network`         | Connect container to a specific network      |
| `docker exec`       | Run commands inside running containers       |

---

## 🌐 Example Scenarios

- 🧪 **Malware Sandboxing**: Run suspicious binaries inside isolated containers.
- 🔍 **Red Team Infrastructure**: Spin up phishing pages or C2 servers.
- 🛠️ **Tool Testing**: Test new cybersecurity tools without affecting the host.
- 🧰 **DevSecOps Pipelines**: Automate scans (e.g., Trivy, MobSF) in CI/CD workflows.
- 🌐 **Host Simulations**: Launch lab networks for blue team exercises.

---

## 📚 References
- [Official Docker Docs](https://docs.docker.com/)
- [Awesome Docker Security List](https://github.com/kai5263499/awesome-docker)
- [Docker Security Best Practices](https://docs.docker.com/engine/security/)

---

![VIDEO](https://img.youtube.com/vi/3c-iBn73dDE/0.jpg)
👉 [Watch: Docker Crash Course for Cybersecurity](https://www.youtube.com/watch?v=3c-iBn73dDE)

---

> 🔐 *Docker gives cybersecurity professionals the flexibility to safely test tools, analyze malware, and simulate attack environments without putting production systems at risk.*
