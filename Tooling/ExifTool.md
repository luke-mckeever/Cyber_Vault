### 📷 ExifTool - The Ultimate Metadata Swiss Army Knife 🛠️

![ExifTool Logo](https://exiftool.org/ET-256.png)

🚀 **ExifTool** is a powerful tool created by **Phil Harvey** for viewing, modifying, and managing metadata in images, videos, PDFs, and many other file formats. While it is widely known for its command-line capabilities, **ExifToolGUI** provides a user-friendly interface for easier access and manipulation of metadata.

---

## 🌟 Features

✅ View and edit metadata without using command-line commands 🎯  
✅ Supports EXIF, IPTC, XMP, and many other metadata standards 📜  
✅ Batch processing for efficiency ⚡  
✅ Available for Windows 🖥️  
✅ Open-source and highly customizable 🛠️  

---

## 📥 Installation

### 🔹 Downloading ExifToolGUI
1. Download **ExifTool** from the official [ExifTool website](https://exiftool.org/).
2. Download **ExifToolGUI** from a trusted source such as [ExifToolGUI on Softpedia](https://www.softpedia.com/get/Multimedia/Graphic/Graphic-Editors/ExifTool-GUI.shtml).
3. Extract the contents of both downloads into the same directory.
4. Rename `exiftool(-k).exe` to `exiftool.exe`.
5. Run `ExifToolGUI.exe` to start the GUI.

---

## 🚀 Basic Usage

### GUI Interface

![Exif Tool Gui](https://exiftool.org/gui/img/gui01.png)

### Command Line Based

#### 🔍 Viewing Metadata
```bash
exiftool image.jpg
```
🔹 This command displays all metadata for `image.jpg`.

### 📂 Exporting Metadata
```bash
exiftool -r -ext jpg -csv my_photos/ > metadata.csv
```
🔹 Extracts metadata from all `.jpg` files recursively in `my_photos/` and saves it to `metadata.csv`.

### 🔍 Viewing Metadata
6. Open `ExifToolGUI`.
7. Navigate to the folder containing your images.
8. Select an image to display its metadata in the right-hand pane.
9. Click on different metadata categories (EXIF, IPTC, XMP) to explore the details.

### ✏️ Editing Metadata
10. Select an image from the file list.
11. Click on the **Modify** tab.
12. Edit the desired metadata fields, such as **Artist**, **Title**, or **Date**.
13. Click **Save** to apply changes.

### 📦 Batch Processing
14. Select multiple images using Ctrl+Click.
15. Click on the **Modify** tab.
16. Change metadata fields that should apply to all selected files.
17. Click **Save** to update metadata for all selected images.

### 🗑️ Removing Metadata
18. Select one or more images.
19. Navigate to the **Remove Metadata** option.
20. Choose whether to remove all metadata or only specific tags.
21. Confirm and apply changes.

---

## 🔥 Advanced Usage

### 📂 Exporting Metadata
22. Select one or more images.
23. Click on **Export Metadata**.
24. Choose the output format (CSV, TXT, etc.).
25. Save the file for later use.

### 🏷️ Copying Metadata Between Files
26. Select the source image containing the correct metadata.
27. Choose **Copy Metadata**.
28. Select the target image(s) to apply the metadata.
29. Click **Apply** to transfer metadata.

### 🔍 Searching for Specific Metadata
30. Use the **Search Metadata** function in ExifToolGUI.
31. Enter the field name or keyword (e.g., "Camera Model").
32. Results will highlight files containing matching metadata.

---

## 📚 More Resources

📜 **Official Documentation**: [ExifTool by Phil Harvey](https://exiftool.org/)  
💬 **Community & Support**: [ExifTool Forum](https://exiftool.org/forum/)  
🐙 **GitHub Repo**: [ExifTool on GitHub](https://github.com/exiftool/exiftool)  

---

## Video 

![How to Extract Image Metadata with ExifTool: Ultimate Guide for Beginners](https://www.youtube.com/watch?v=8gL-uCnbLn0)