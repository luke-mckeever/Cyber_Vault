## 🛠️ Mobile Security Framework (MobSF) 📱💥🔐
#BLUE #Tool #TTMA 

A **powerful all-in-one tool** for mobile application security testing, MobSF supports **automated static, dynamic, and malware analysis** of Android, iOS, and Windows mobile apps.

**🔗 LINK TO TOOL DOCUMENTATION [HERE](https://github.com/MobSF/Mobile-Security-Framework-MobSF)**

MobSF allows you to perform **static code analysis, dynamic runtime behavior analysis, and web API security testing** all within a sleek web interface.

---
![MobSF Logo](https://raw.githubusercontent.com/MobSF/Mobile-Security-Framework-MobSF/master/logo.png)

---

## 🧰 How To Set up and Use

1. on Linux (preferable RemNux) execute the follwoing command with an active internet connection:
   ```bash
   docker pull opensecurity/mobile-security-framework-mobsf //this will download and build the docker container for mobsf
   ```
2. Launch the container with the following command:
   ```bash
   docker run -it --rm -p 8000:8000 opensecurity/mobile-security-framework-mobsf:latest
   ```
3. This will then run the container and provide the web access typically on `http://0.0.0.0:8000`
4. Open your browser and navigate to `http://127.0.0.1:8000`
5. you should now have the ability to upload malware samples for analysis
6. For dynamic analysis:
   - Setup Android emulator or real device.
   - Enable ADB access.
   - Click on **Dynamic Analysis** and follow on-screen instructions.
> please ensure you disconnect all network connection before uploading malware samples 

---

## ⚙️ Advanced Usage

- **Scan via API:**
```bash
curl -F "file=@my_app.apk" http://127.0.0.1:8000/api/v1/upload -H "Authorization: <Your API Key>"
```

- **Automate with CI/CD:**
  - Use MobSF REST APIs to integrate with your DevSecOps pipeline.

- **Run Static Analysis Only:**
  - Upload APK/IPA and skip dynamic configuration.

---

## 📋 Handy Options

| Option                  | Description                                 |
|------------------------|---------------------------------------------|
| `upload_file`          | Upload an APK or IPA file                   |
| `scan_type=static`     | Only perform static analysis                |
| `scan_type=dynamic`    | Launch dynamic analysis environment         |
| `api_key`              | Auth key for REST API integration           |

---

## 🌐 Example Scenarios

- 🔍 **Malware Analysis**: Upload suspicious APKs to decompile and analyze code.
- 🛡️ **Penetration Testing**: Simulate attacks via dynamic analysis.
- 🔄 **DevSecOps Integration**: Integrate into CI pipelines for automated scans.
- 📱 **Mobile App Auditing**: Assess app permissions, trackers, and insecure code.

---

## 📚 References
- [Official MobSF GitHub](https://github.com/MobSF/Mobile-Security-Framework-MobSF)
- [MobSF Wiki (Docs)](https://mobsf.github.io/docs/)
- [MobSF API Docs](https://mobsf.github.io/docs/#/rest_api/)

---

![VIDEO](https://img.youtube.com/vi/kiaTmYpT_Bk/0.jpg)
👉 [Watch How To Use MobSF](https://www.youtube.com/watch?v=kiaTmYpT_Bk)

---

> ✨ *MobSF is a must-have tool for any mobile malware analyst or pentester. With just a few clicks or API calls, you can uncover hidden risks in mobile apps before threat actors exploit them.*
