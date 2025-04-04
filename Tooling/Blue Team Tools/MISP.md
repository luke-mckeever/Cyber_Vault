# MISP - Malware Intelligence Sharing Platform 🚀💻
 #tool #TTintel #BLUE 


MISP is an advanced open-source threat intelligence platform designed to improve the detection and prevention of cyber threats. 

**LINK TO TOOL DOCUMENTATION[ HERE](https://github.com/MISP)**

With MISP, you can **share, store, and collaborate** on threat data effortlessly. 🔒✨

---
![MISP Logo](https://www.misp-project.org/img/logo.png)

---

## 🛠️ Setting Up MISP

MISP offers a hassle-free setup with a preconfigured virtual machine image! 🎉 Here’s how you can get started:

### 1️⃣ Download the Preconfigured Virtual Machine 🖥️

- Navigate to the [Official MISP Downloads Page](https://www.misp-project.org/download/).
- Download the latest **MISP Virtual Machine Image** compatible with your hypervisor (e.g., VMware, VirtualBox). 📥

### 2️⃣ Deploy the Virtual Machine 🚀

1. Open your virtualization software (e.g., VirtualBox or VMware).
2. Import the downloaded MISP image file.
   - **VirtualBox:** Go to `File > Import Appliance` and select the MISP image.
   - **VMware:** Use the `Open a Virtual Machine` option.
3. Start the virtual machine and log in using the default credentials provided in the documentation. ✅

### 3️⃣ Configure the Network 🌐

Ensure the VM is connected to your network:
- Set up a **static IP address** or ensure DHCP is enabled. 
- Verify connectivity by accessing the VM’s web interface in your browser using its IP address (e.g., `http://192.168.x.x`). presented within the MISP VM🌍

### 4️⃣ Access the Web Interface 💻

1. Open a browser and navigate to the IP address of the VM.
2. Log in using the default admin credentials.
3. Begin customizing your MISP instance and importing threat data! 🚨

#### 😲Configuration Troubleshooting 🛠
- upon initialisation of the VM the configuration file must be edited before continuing
- to do so open the following php file with a text editor using the command
`sudo nano /var/www/MISP/app/Config/config.php`
- Change the following options
	1. `baseurl` from the pre-set to `https://<insert the VM IP adress>` 
	2. comment out the line beginning with `external_baseurl` this will ensure no external connections

- Save and Exit -> 

---

## 📖 Using MISP Effectively

### 1. Adding Events ➕
What is an **Event**?
A **MISP event** is a structured package of cybersecurity threat details, including indicators like malicious IPs or file hashes, context about the incident, and tags for categorization. It helps organizations share threat intelligence efficiently.
- Browse to the **Event Actions** tab and click on **Add Event**
- Add the necessary details, an explanation for all headings is available [Here](https://www.circl.lu/doc/misp/using-the-system/)
- Click **Add Event** 

### 2. Populating The Event 🛒
A **MISP event** is a structured package of cybersecurity threat details, including indicators like malicious IPs or file hashes, context about the incident, and tags for categorization. It helps organizations share threat intelligence efficiently.
- Upon Creating the event **Scroll** down to the **Attributes**  Section and click on the **+** Icon this will allow you to add single attribues such as a single IOC
- To add multiple attributes we can use the **Freetext Import Tool** to add bulk attributes this is will look like this: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8000 1000"><path d="M288 64c0 17.7-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l224 0c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32L32 352c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 224c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
  Paste in your Plain text IOC's and this will populate the event 

### 3. Enriching your Data 🤲
**Enriching MISP event attributes** adds context, validates data, integrates threat intelligence, and provides risk insights, making the information more reliable and actionable.
- To enrich your event, within the column on the left of the page click **Enrich event** 
- Select the enrichments you would like to run against your attributes
- Click **Enrich**

---

## 📨Ingesting Threat Intelligence Feeds
**Threat intelligence feeds** in MISP provide up-to-date IOCs, context, and automated updates to enhance threat detection, awareness, and response.
- Within the **Sync Actions** tab click on **List Feeds** 
- Click on **Load default feed metadata** 
- Select the required Threat Feed
- Click on **Enable Selected**
This will load the selected feed into your current event list 

---
## MISP Taxonomy / Tagging
**MISP taxonomy** uses standardized tags to classify and organize data, improving consistency, searchability, and collaboration in threat intelligence.

A Full list of Taxonomies is available here -> [MISP-Project Taxonomies](https://www.misp-project.org/taxonomies.html)

