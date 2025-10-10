## 📘 Blue Jupyter - Malware Analysis with Jupyter Notebooks 🔬🐍💻
#Tool #TTMA #BLUE 

**Blue Jupyter** is a tailored Jupyter notebook environment for conducting malware analysis and threat intelligence enrichment. Built by [HuskyHacks](https://github.com/HuskyHacks), it allows analysts to load malware samples and enrich them using tools like VirusTotal, IPVoid, and more—**all from within a Pythonic notebook workflow**.

**🔗 LINK TO TOOL DOCUMENTATION [HERE](https://github.com/HuskyHacks/blue-jupyter)**

This tool combines data science with blue team workflows, ideal for SOC analysts, CTI researchers, and malware analysts looking to automate enrichment.

---
![Blue Jupyter](https://raw.githubusercontent.com/HuskyHacks/blue-jupyter/PMAT-lab/bluejupyter.png)

---

### 🚀 Installing Blue Jupyter (LINUX) Option 1
1. Clone the PMAT-lab branch & Change directory into the newly created one
```bash
git clone --branch PMAT-lab https://github.com/HuskyHacks/blue-jupyter.git && cd blue-jupyter
```
2. Install dependencies 
```bash
pip3 install poetry && pip3 instal jupyter
```
3. Installation of poetry dependency
```bash
poetry install
```
4. Open a poetry shell
```bash
poetry shell
```
5. Change directory into malware analysis directory
```bash 
cd malware-analysis
```
6. Open the Jupyter notebook
```bash
jupyter notebook
```
6. Move samples for analysis into the drobox directory
Located at: `blue-jupyter/malware-analysis/dropbox`
7. Detonate the repl's in the notebook by pressing the `run` option from the Jupyter notebook previously open


### 🚀 Installing Blue Jupyter (LINUX) Option 2
1. Clone the PMAT-lab branch & Change directory into the newly created one
```bash
git clone --branch PMAT-lab https://github.com/HuskyHacks/blue-jupyter.git && cd blue-jupyter
``` 
2. Build the docker image
```bash
sudo docker build -t bluejupyter .
```
3. Run Blue Jupyter with port 8888 exposed and local volume mounted
```bash
sudo docker run -it -p 8888:8888 -v /home/remnux/blue-jupyter:/src bluejupyter
```
4. Now navigate to `http://127.0.0.1:8888` to access the Jupyter environment in your browser.
5. Detonate the repl's in the notebook by pressing the `run` option from the Jupyter notebook previously open

> 📂 To add malware samples: copy them into `/home/remnux/blue-jupyter/malware-analysis/dropbox/` and they will be automatically visible within the container.

---

## 🧰 How To use

1. Launch the container and open the Jupyter URL provided.
2. Navigate to the `PMAT-Lab.ipynb` notebook.
3. Run cells sequentially to:
   - Load malware samples
   - Parse metadata (hashes, filetype, etc.)
   - Query VirusTotal and other APIs
   - Document findings within the notebook
4. Use Python code directly within cells to automate additional analysis tasks.

---

## ⚙️ Advanced Usage

- **Custom Enrichment**: Add new API integrations (IPVoid, AbuseIPDB, etc.)
- **Visualization**: Use pandas, matplotlib, or seaborn for data visualization.
- **Notebook Export**: Export findings as HTML, PDF, or Markdown for reporting.
- **Integration**: Pair with static/dynamic tools like `pefile`, `yara`, or `volatility`.

---

## 📋 Handy Options

| Option                          | Description                                      |
|---------------------------------|--------------------------------------------------|
| `malware-analysis/dropbox/`     | Directory to drop malware samples                |
| `PMAT-Lab.ipynb`                | Main interactive analysis notebook               |
| `VirusTotal API`                | Required for enrichment queries                  |
| `Docker volume mount`           | Keeps analysis state persistent                  |

---

## 🌐 Example Scenarios

- 🔎 **SOC Triage**: Rapid triage of suspicious samples via VT enrichment
- 🧪 **Malware Sandbox Companion**: Analyze dumped samples post-sandbox run
- 🧠 **Threat Intel**: Extract hashes and IOC context from uploaded files
- 📊 **Report Generation**: Export findings for documentation or knowledge base

---

## 📚 References
- [Blue Jupyter GitHub (PMAT Branch)](https://github.com/HuskyHacks/blue-jupyter/tree/PMAT-lab)
- [VirusTotal API Docs](https://developers.virustotal.com/reference)
- [Intro Video to PMAT Lab](https://www.youtube.com/watch?v=Ns4LfhzNR2g)

---

![VIDEO](https://img.youtube.com/vi/Ns4LfhzNR2g/0.jpg)
👉 [Watch: Blue Jupyter Walkthrough](https://www.youtube.com/watch?v=Ns4LfhzNR2g)

---

> 🧠 *Blue Jupyter merges traditional malware analysis with modern data science techniques, giving you a structured, automated way to enrich and explore samples—all in one notebook.*
