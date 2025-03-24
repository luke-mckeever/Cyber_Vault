### 📷 ExifTool - The Ultimate Metadata Swiss Army Knife 🛠️
#tool #TTDF  #BLUE 

![ExifTool Logo](https://exiftool.org/ET-256.png)

🚀 **ExifTool** is a powerful tool created by **Phil Harvey** for viewing, modifying, and managing metadata in images, videos, PDFs, and many other file formats. While it is widely known for its command-line capabilities, **ExifToolGUI** provides a user-friendly interface for easier access and manipulation of metadata.

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
exiftool <Insert File>
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

## Supported Files:
|File Type|Support|Description|[EXIF](https://exiftool.org/TagNames/EXIF.html)|[IPTC](https://exiftool.org/TagNames/IPTC.html)|[XMP](https://exiftool.org/TagNames/XMP.html)|[ICC](https://exiftool.org/TagNames/ICC_Profile.html)1|[C2PA](https://exiftool.org/TagNames/Jpeg2000.html)|Other|
|---|---|---|---|---|---|---|---|---|
|---|---|---|---|---|---|---|---|---|
|3FR|R|Hasselblad RAW ([TIFF](https://exiftool.org/TagNames/EXIF.html)-based)|R|R|R|R|R|-|
|3G2, 3GP2|R/W|3rd Gen. Partnership Project 2 a/v ([QuickTime](https://exiftool.org/TagNames/QuickTime.html)-based)|R/W3|R/W3|R/W/C|-|R/D|R/W/C [QuickTime](https://exiftool.org/TagNames/QuickTime.html)|
|3GP, 3GPP|R/W|3rd Gen. Partnership Project a/v ([QuickTime](https://exiftool.org/TagNames/QuickTime.html)-based)|R/W3|R/W3|R/W/C|-|R/D|R/W/C [QuickTime](https://exiftool.org/TagNames/QuickTime.html)|
|[7z](https://exiftool.org/TagNames/ZIP.html#RAR5)|R|7z Archive|-|-|-|-|-|R [ZIP](https://exiftool.org/TagNames/ZIP.html#RAR5)|
|[A](https://exiftool.org/TagNames/EXE.html#AR)|R|Unix static library code Archive|-|-|-|-|-|R [EXE](https://exiftool.org/TagNames/EXE.html#AR)|
|[AA](https://exiftool.org/TagNames/Audible.html)|R|Audible Audiobook|-|-|-|-|-|R [Audible](https://exiftool.org/TagNames/Audible.html)|
|[AAC](https://exiftool.org/TagNames/AAC.html)|R|Advanced Audio Codec|-|-|-|-|-|R [AAC](https://exiftool.org/TagNames/AAC.html)|
|AAE|R|Apple edit information (XML [PLIST](https://exiftool.org/TagNames/PLIST.html)-based)|-|-|-|-|-|R [PLIST](https://exiftool.org/TagNames/PLIST.html)|
|AAX|R/W|Audible Enhanced Audiobook ([QuickTime](https://exiftool.org/TagNames/QuickTime.html)-based)|R/W3|R/W3|R/W/C|-|R/D|R/W/C [QuickTime](https://exiftool.org/TagNames/QuickTime.html)|
|[ACR](https://exiftool.org/TagNames/DICOM.html)|R|American College of Radiology ACR-NEMA (DICOM-like)|-|-|-|-|-|R [DICOM](https://exiftool.org/TagNames/DICOM.html)|
|[AFM, ACFM, AMFM](https://exiftool.org/TagNames/Font.html)|R|Adobe [Composite/Multiple Master] Font Metrics|-|-|-|-|-|R [Font](https://exiftool.org/TagNames/Font.html)|
|AI, AIT|R/W|Adobe Illustrator [Template] ([PS](https://exiftool.org/TagNames/PostScript.html) or [PDF](https://exiftool.org/TagNames/PDF.html))|R/W/C4|R/W/C4|R/W/C5|R/W/C4|-|R/W/C [PDF](https://exiftool.org/TagNames/PDF.html) [PostScript](https://exiftool.org/TagNames/PostScript.html), R [Photoshop](https://exiftool.org/TagNames/Photoshop.html)|
|[AIFF, AIF, AIFC](https://exiftool.org/TagNames/AIFF.html)|R|Audio Interchange File Format [Compressed]|-|-|-|-|R|R [AIFF](https://exiftool.org/TagNames/AIFF.html) [ID3](https://exiftool.org/TagNames/ID3.html) [Lyrics3](https://exiftool.org/TagNames/ID3.html#Lyrics3)|
|[APE](https://exiftool.org/TagNames/APE.html)|R|Monkey's Audio|-|-|-|-|R|R [APE](https://exiftool.org/TagNames/APE.html) [ID3](https://exiftool.org/TagNames/ID3.html) [Lyrics3](https://exiftool.org/TagNames/ID3.html#Lyrics3)|
|ARQ|R/W|Sony Alpha Pixel-Shift RAW ([TIFF](https://exiftool.org/TagNames/EXIF.html)-based)|R/W/C|R/W/C|R/W/C|R/W/C|R/D|R/W [Sony](https://exiftool.org/TagNames/Sony.html) [SonyIDC](https://exiftool.org/TagNames/SonyIDC.html)|
|ARW|R/W|Sony Alpha RAW ([TIFF](https://exiftool.org/TagNames/EXIF.html)-based)|R/W/C|R/W/C|R/W/C|R/W/C|R/D|R/W [Sony](https://exiftool.org/TagNames/Sony.html) [SonyIDC](https://exiftool.org/TagNames/SonyIDC.html)|
|[ASF](https://exiftool.org/TagNames/ASF.html)|R|Microsoft Advanced Systems Format|-|-|R|-|-|R [ASF](https://exiftool.org/TagNames/ASF.html)|
|AVI|R|Audio Video Interleaved ([RIFF](https://exiftool.org/TagNames/RIFF.html)-based)|R3|-|R|-|R|R [RIFF](https://exiftool.org/TagNames/RIFF.html)|
|AVIF|R/W|AV1 Image File Format ([QuickTime](https://exiftool.org/TagNames/QuickTime.html)-based)|R/W/C|-|R/W/C|R/W|R/D|R/W [QuickTime](https://exiftool.org/TagNames/QuickTime.html)|
|[BMP, DIB](https://exiftool.org/TagNames/BMP.html)|R|Windows BitMaP / Device Independent Bitmap|-|-|-|-|-|R [BMP](https://exiftool.org/TagNames/BMP.html)|
|[BPG](https://exiftool.org/TagNames/BPG.html)|R|Better Portable Graphics|R|-|R|R|-|R [BPG](https://exiftool.org/TagNames/BPG.html)|
|[BTF](https://exiftool.org/TagNames/EXIF.html)|R|BigTIFF (64-bit Tagged Image File Format)|R|R|R|R|R|-|
|C2PA, JUMBF|R|C2PA JPEG Universal Metadata Box Format|-|-|-|-|R|R [Jpeg2000](https://exiftool.org/TagNames/Jpeg2000.html)|
|[CHM](https://exiftool.org/TagNames/EXE.html#CHM)|R|Microsoft Compiled HTML format|-|-|-|-|-|R [EXE](https://exiftool.org/TagNames/EXE.html#CHM)|
|COS|R|Capture One Settings (XML-based)|-|-|-|-|-|R XML|
|CR2|R/W|Canon RAW 2 ([TIFF](https://exiftool.org/TagNames/EXIF.html)-based) ([CR2 spec](http://lclevy.free.fr/cr2/))|R/W/C|R/W/C|R/W/C|R/W/C|R/D|R/W [Canon](https://exiftool.org/TagNames/Canon.html), R/W/C [CanonVRD](https://exiftool.org/TagNames/CanonVRD.html)2|
|CR3|R/W|Canon RAW 3 ([QuickTime](https://exiftool.org/TagNames/QuickTime.html)-based) ([CR3 spec](https://github.com/lclevy/canon_cr3))|R/W/C|-|R/W/C|-|R/D|R/W [Canon](https://exiftool.org/TagNames/Canon.html) [QuickTime](https://exiftool.org/TagNames/QuickTime.html), R/W/C [CanonVRD](https://exiftool.org/TagNames/CanonVRD.html)2|
|CRM|R/W|Canon RAW Movie ([QuickTime](https://exiftool.org/TagNames/QuickTime.html)-based)|R/W/C|-|R/W/C|-|R/D|R/W [Canon](https://exiftool.org/TagNames/Canon.html) [QuickTime](https://exiftool.org/TagNames/QuickTime.html)|
|[CRW, CIFF](https://exiftool.org/TagNames/CanonRaw.html)|R/W|Canon RAW Camera Image File Format ([CRW spec](https://exiftool.org/canon_raw.html))|-|-|R/W/C|-|-|R/W [CanonRaw](https://exiftool.org/TagNames/CanonRaw.html), R/W/C [CanonVRD](https://exiftool.org/TagNames/CanonVRD.html)2|
|CS1|R/W|Sinar CaptureShop 1-shot RAW ([PSD](https://exiftool.org/TagNames/Photoshop.html)-based)|R/W/C|R/W/C|R/W/C|R/W/C|-|R [Photoshop](https://exiftool.org/TagNames/Photoshop.html)|
|CSV|R|Comma-Separated Values|-|-|-|-|-|R [Text](https://exiftool.org/TagNames/Text.html)|
|[CZI](https://exiftool.org/TagNames/ZISRAW.html)|R|Zeiss Integrated Software RAW ([ZISRAW](https://exiftool.org/TagNames/ZISRAW.html))|-|-|-|-|-|R [ZISRAW](https://exiftool.org/TagNames/ZISRAW.html), R XML|
|[DCM, DC3, DIC, DICM](https://exiftool.org/TagNames/DICOM.html)|R|DICOM - Digital Imaging and Communications in Medicine|-|-|-|-|-|R [DICOM](https://exiftool.org/TagNames/DICOM.html)|
|DCP|R/W|DNG Camera Profile ([DNG](https://exiftool.org/TagNames/DNG.html)-like)|R/W/C|R/W/C|R/W/C|R/W/C|R/D|-|
|DCR|R|Kodak Digital Camera RAW ([TIFF](https://exiftool.org/TagNames/EXIF.html)-based)|R|R|R|R|R|-|
|[DFONT](https://exiftool.org/TagNames/Font.html)|R|Macintosh Data Fork Font|-|-|-|-|-|R [Font](https://exiftool.org/TagNames/Font.html)|
|DIVX|R|DivX media format ([ASF](https://exiftool.org/TagNames/ASF.html)-based)|-|-|R|-|-|R [ASF](https://exiftool.org/TagNames/ASF.html)|
|[DJVU, DJV](https://exiftool.org/TagNames/DjVu.html)|R|DjVu image (AIFF-like)|-|-|R|-|-|R [DJVU](https://exiftool.org/TagNames/DjVu.html)|
|[DNG](https://exiftool.org/TagNames/DNG.html)|R/W|Digital Negative ([TIFF](https://exiftool.org/TagNames/EXIF.html)-based)|R/W/C|R/W/C|R/W/C|R/W/C|R/D|-|
|DOC, DOT|R|Microsoft Word Document/Template ([FPX](https://exiftool.org/TagNames/FlashPix.html)-like)|-|-|R|R|-|R [FlashPix](https://exiftool.org/TagNames/FlashPix.html)|
|[DOCX, DOCM](https://exiftool.org/TagNames/OOXML.html)|R|Office Open XML Document [Macro-enabled]|-|-|-|-|-|R [XML](https://exiftool.org/TagNames/OOXML.html) [ZIP](https://exiftool.org/TagNames/ZIP.html)|
|[DOTX, DOTM](https://exiftool.org/TagNames/OOXML.html)|R|Office Open XML Document Template [Macro-enabled]|-|-|-|-|-|R [XML](https://exiftool.org/TagNames/OOXML.html) [ZIP](https://exiftool.org/TagNames/ZIP.html)|
|[DPX](https://exiftool.org/TagNames/DPX.html)|R|Digital Picture Exchange|-|-|-|-|-|R [DPX](https://exiftool.org/TagNames/DPX.html)|
|[DR4](https://exiftool.org/TagNames/CanonVRD.html#DR4)|R/W/C2|Canon DPP version 4 Recipe|-|-|-|-|-|R/W/C [CanonVRD](https://exiftool.org/TagNames/CanonVRD.html)2|
|[DSS, DS2](https://exiftool.org/TagNames/Olympus.html#DSS)|R|Digital Speech Standard [2]|-|-|-|-|-|R [Olympus](https://exiftool.org/TagNames/Olympus.html#DSS)|
|[DYLIB](https://exiftool.org/TagNames/EXE.html#MachO)|R|MacOS Mach-O executable and library files|-|-|-|-|-|R [EXE](https://exiftool.org/TagNames/EXE.html#MachO)|
|[DV](https://exiftool.org/TagNames/DV.html)|R|Digital Video|-|-|-|-|-|R [DV](https://exiftool.org/TagNames/DV.html)|
|DVB|R/W|Digital Video Broadcasting ([QuickTime](https://exiftool.org/TagNames/QuickTime.html)-based)|R/W3|R/W3|R/W/C|-|R/D|R/W/C [QuickTime](https://exiftool.org/TagNames/QuickTime.html)|
|DVR-MS|R|Microsoft Digital Video Recording ([ASF](https://exiftool.org/TagNames/ASF.html)-based)|-|-|R|-|-|R [ASF](https://exiftool.org/TagNames/ASF.html)|
|EIP|R|Capture One Enhanced Image Package ([ZIP](https://exiftool.org/TagNames/ZIP.html)-based)|R|-|-|-|-|R XML [ZIP](https://exiftool.org/TagNames/ZIP.html)|
|[EPS, EPSF, PS](https://exiftool.org/TagNames/PostScript.html)|R/W|[Encapsulated] PostScript Format|R/W/C|R/W/C|R/W/C|R/W/C|-|R/W/C [PostScript](https://exiftool.org/TagNames/PostScript.html), R [Photoshop](https://exiftool.org/TagNames/Photoshop.html)|
|EPUB|R|Electronic Publication (ZIP/XML-based)|-|-|-|-|-|R XML [ZIP](https://exiftool.org/TagNames/ZIP.html)|
|ERF|R/W|Epson RAW Format ([TIFF](https://exiftool.org/TagNames/EXIF.html)-based)|R/W/C|R/W/C|R/W/C|R/W/C|R/D|R/W [Olympus](https://exiftool.org/TagNames/Olympus.html)|
|[EXE, DLL](https://exiftool.org/TagNames/EXE.html)|R|DOS/Windows executable and library files|-|-|-|-|-|R [EXE](https://exiftool.org/TagNames/EXE.html)|
|[EXIF](https://exiftool.org/TagNames/EXIF.html)|R/W/C|Exchangeable Image File Format metadata ([TIFF](https://exiftool.org/TagNames/EXIF.html)-based)|R/W/C|-|-|-|R/D|-|
|[EXR](https://exiftool.org/TagNames/OpenEXR.html)|R|Open EXR (Extended Range)|R|-|R|-|-|R [OpenEXR](https://exiftool.org/TagNames/OpenEXR.html)|
|EXV|R/W/C|Exiv2 metadata file ([JPEG](https://exiftool.org/TagNames/JPEG.html)-based)|R/W/C|R/W/C|R/W/C|R/W/C|R/D|[Supported JPEG Meta Information](https://exiftool.org/#JPEG)|
|F4A, F4B, F4P, F4V|R/W|Adobe Flash Player 9+ Audio/Video ([QuickTime](https://exiftool.org/TagNames/QuickTime.html)-based)|R/W3|R/W3|R/W/C|-|R/D|R/W/C [QuickTime](https://exiftool.org/TagNames/QuickTime.html)|
|FFF|R/W6|Hasselblad Flexible File Format ([TIFF](https://exiftool.org/TagNames/EXIF.html)-based)|R/W/C|R/W/C|R/W/C|R/W/C|R/D|-|
|[FFF](https://exiftool.org/TagNames/FLIR.html#FFF)|R|FLIR Systems thermal image File Format|-|-|-|-|-|R [FLIR](https://exiftool.org/TagNames/FLIR.html#FFF)|
|[FITS](https://exiftool.org/TagNames/FITS.html)|R|Flexible Image Transport System|-|-|-|-|-|R [FITS](https://exiftool.org/TagNames/FITS.html)|
|FLA|R|Macromedia/Adobe Flash project ([FPX](https://exiftool.org/TagNames/FlashPix.html)-like)|-|-|R|R|-|R [FlashPix](https://exiftool.org/TagNames/FlashPix.html)|
|[FLAC](https://exiftool.org/TagNames/FLAC.html)|R|Free Lossless Audio Codec|-|-|-|-|R|R [FLAC](https://exiftool.org/TagNames/FLAC.html) [ID3](https://exiftool.org/TagNames/ID3.html) [Lyrics3](https://exiftool.org/TagNames/ID3.html#Lyrics3)|
|[FLIF](https://exiftool.org/TagNames/FLIF.html)|R/W|Free Lossless Image Format|R/W/C|-|R/W/C|R/W/C|-|R [FLIF](https://exiftool.org/TagNames/FLIF.html)|
|[FLV](https://exiftool.org/TagNames/Flash.html#FLV)|R|Flash Video|-|-|R|-|-|R [Flash](https://exiftool.org/TagNames/Flash.html#FLV)|
|[FPF](https://exiftool.org/TagNames/FLIR.html#FPF)|R|FLIR Public image Format|-|-|-|-|-|R [FLIR](https://exiftool.org/TagNames/FLIR.html#FPF)|
|[FPX](https://exiftool.org/TagNames/FlashPix.html)|R|FlashPix image|-|-|R|R|-|R [FlashPix](https://exiftool.org/TagNames/FlashPix.html)|
|[GIF](https://exiftool.org/TagNames/GIF.html)|R/W|Compuserve Graphics Interchange Format|-|-|R/W/C|R/W/C|R/D|R/W/C [GIF](https://exiftool.org/TagNames/GIF.html)|
|GLV|R/W|Garmin Low-resolution Video ([QuickTime](https://exiftool.org/TagNames/QuickTime.html)-based)|R/W3|R/W3|R/W/C|-|R/D|R/W/C [QuickTime](https://exiftool.org/TagNames/QuickTime.html)|
|GPR|R/W|GoPro RAW ([DNG](https://exiftool.org/TagNames/DNG.html)-based)|R/W/C|R/W/C|R/W/C|R/W/C|R/D|-|
|[GZ, GZIP](https://exiftool.org/TagNames/ZIP.html#GZIP)|R|GNU ZIP compressed archive|-|-|-|-|-|R [ZIP](https://exiftool.org/TagNames/ZIP.html#GZIP)|
|HDP, WDP, JXR|R/W|Windows HD Photo / Media Photo / JPEG XR ([TIFF](https://exiftool.org/TagNames/EXIF.html)-based)|R/W/C|R/W/C|R/W/C|R/W/C|R/D|-|
|[HDR](https://exiftool.org/TagNames/Radiance.html)|R|Radiance RGBE High Dynamic-Range|-|-|-|-|-|R [Radiance](https://exiftool.org/TagNames/Radiance.html)|
|HEIC, HEIF, HIF|R/W|High Efficiency Image Format ([QuickTime](https://exiftool.org/TagNames/QuickTime.html)-based)|R/W/C|-|R/W/C|R/W|R/D|R/W [QuickTime](https://exiftool.org/TagNames/QuickTime.html)|
|[HTML, HTM, XHTML](https://exiftool.org/TagNames/HTML.html)|R|[Extensible] HyperText Markup Language|-|-|-|-|-|R [HTML](https://exiftool.org/TagNames/HTML.html)|
|[ICC, ICM](https://exiftool.org/TagNames/ICC_Profile.html)|R/W/C1|International Color Consortium color profile|-|-|-|R/W/C|-|-|
|[ICO, CUR](https://exiftool.org/TagNames/ICO.html)|R|Windows Icon / Cursor|-|-|-|-|-|R [ICO](https://exiftool.org/TagNames/ICO.html)|
|[ICS, ICAL](https://exiftool.org/TagNames/VCard.html#VCalendar)|R|iCalendar Schedule|-|-|-|-|-|R [VCalendar](https://exiftool.org/TagNames/VCard.html#VCalendar)|
|IDML|R|Adobe InDesign Markup Language (ZIP/XML-based)|-|-|-|-|-|R XML [ZIP](https://exiftool.org/TagNames/ZIP.html)|
|[IIQ](https://exiftool.org/TagNames/PhaseOne.html)|R/W|Phase One Intelligent Image Quality RAW ([TIFF](https://exiftool.org/TagNames/EXIF.html)-based)|R/W/C|R/W/C|R/W/C|R/W/C|R/D|R/W [PhaseOne](https://exiftool.org/TagNames/PhaseOne.html)|
|IND, INDD, INDT|R/W|Adobe InDesign Document/Template|-|-|R/W/C|-|-|-|
|INSP|R/W|Insta360 Picture ([JPEG](https://exiftool.org/TagNames/JPEG.html)-based)|R/W/C|R/W/C|R/W/C|R/W/C|R/D|[Supported JPEG Meta Information](https://exiftool.org/#JPEG)|
|INSV|R|Insta360 Video ([QuickTime](https://exiftool.org/TagNames/QuickTime.html)-based)|-|-|R|-|R|R [QuickTime](https://exiftool.org/TagNames/QuickTime.html)|
|INX|R|Adobe InDesign Interchange (XML-based)|-|-|R|-|-|-|
|[ISO](https://exiftool.org/TagNames/ISO.html)|R|ISO 9660 disk image|-|-|-|-|-|R [ISO](https://exiftool.org/TagNames/ISO.html)|
|[ITC](https://exiftool.org/TagNames/ITC.html)|R|iTunes Cover Flow artwork|-|-|-|-|-|R [ITC](https://exiftool.org/TagNames/ITC.html)|
|J2C, J2K, JPC|R|JPEG 2000 codestream|R3|R3|R|R|-|R [Jpeg2000](https://exiftool.org/TagNames/Jpeg2000.html) [Photoshop](https://exiftool.org/TagNames/Photoshop.html)3|
|[JP2, JPF, JPM,  <br>JPX, JPH](https://exiftool.org/TagNames/Jpeg2000.html)|R/W|JPEG 2000 image [Compound/Extended/High-throughput]|R/W/C3|R/W/C3|R/W/C|R|-|R/W/C [Jpeg2000](https://exiftool.org/TagNames/Jpeg2000.html), R [Photoshop](https://exiftool.org/TagNames/Photoshop.html)3|
|[JPEG, JPG, JPE](https://exiftool.org/TagNames/JPEG.html)|R/W|Joint Photographic Experts Group image|R/W/C|R/W/C|R/W/C|R/W/C|R/D|[Supported JPEG Meta Information](https://exiftool.org/#JPEG)|
|[JSON](https://exiftool.org/TagNames/JSON.html)|R|JavaScript Object Notation|-|-|-|-|-|R [JSON](https://exiftool.org/TagNames/JSON.html)|
|JXL|R/W|JPEG XL (codestream and ISO BMFF) ([Jpeg2000](https://exiftool.org/TagNames/Jpeg2000.html)-based)|R/W/C|-|R/W/C|-|-|-|
|K25|R|Kodak DC25 RAW ([TIFF](https://exiftool.org/TagNames/EXIF.html)-based)|R|R|R|R|R|-|
|KDC|R|Kodak Digital Camera RAW ([TIFF](https://exiftool.org/TagNames/EXIF.html)-based)|R|R|R|R|R|R [Kodak](https://exiftool.org/TagNames/Kodak.html)|
|[KEY, KTH](https://exiftool.org/TagNames/iWork.html)|R|Apple iWork '09 Keynote presentation/Theme|-|-|-|-|-|R [XML](https://exiftool.org/TagNames/iWork.html) [ZIP](https://exiftool.org/TagNames/ZIP.html)|
|LA|R|Lossless Audio ([RIFF](https://exiftool.org/TagNames/RIFF.html)-based)|R3|-|R|-|R|R [RIFF](https://exiftool.org/TagNames/RIFF.html)|
|[LFP, LFR](https://exiftool.org/TagNames/Lytro.html)|R|Lytro Light Field Picture|-|-|-|-|-|R [Lytro](https://exiftool.org/TagNames/Lytro.html)|
|[LIF](https://exiftool.org/TagNames/LIF.html)|R|Leica Image File|-|-|-|-|-|R [LIF](https://exiftool.org/TagNames/LIF.html)|
|[LNK](https://exiftool.org/TagNames/LNK.html)|R|Microsoft Shell Link (Windows shortcut)|-|-|-|-|-|R [LNK](https://exiftool.org/TagNames/LNK.html)|
|LRV|R/W|Low-Resolution Video ([QuickTime](https://exiftool.org/TagNames/QuickTime.html)-based)|R/W3|R/W3|R/W/C|-|-|R/W/C [QuickTime](https://exiftool.org/TagNames/QuickTime.html)|
|[M2TS, MTS, M2T, TS](https://exiftool.org/TagNames/M2TS.html)|R|MPEG-2 Transport Stream (used for AVCHD video)|-|-|-|-|-|R [M2TS](https://exiftool.org/TagNames/M2TS.html) [H264](https://exiftool.org/TagNames/H264.html) [MISB](https://exiftool.org/TagNames/MISB.html)|
|M4A, M4B, M4P, M4V|R/W|MPEG-4 Audio/Video ([QuickTime](https://exiftool.org/TagNames/QuickTime.html)-based)|R/W3|R/W3|R/W/C|-|R/D|R/W/C [QuickTime](https://exiftool.org/TagNames/QuickTime.html)|
|MACOS|R|MacOS "._" sidecar file (may have any extension)|-|-|-|-|-|R [XAttr](https://exiftool.org/TagNames/MacOS.html#XAttr) [RSRC](https://exiftool.org/TagNames/RSRC.html)|
|MAX|R|3D Studio MAX ([FPX](https://exiftool.org/TagNames/FlashPix.html)-like)|-|-|R|R|-|R [FlashPix](https://exiftool.org/TagNames/FlashPix.html)|
|MEF|R/W|Mamiya (RAW) Electronic Format ([TIFF](https://exiftool.org/TagNames/EXIF.html)-based)|R/W/C|R/W/C|R/W/C|R/W/C|R/D|-|
|[MIE](https://exiftool.org/TagNames/MIE.html)|R/W/C|Meta Information Encapsulation ([MIE specification](https://exiftool.org/MIE1.1-20070121.pdf))|R/W/C|R/W/C|R/W/C|R/W/C|R/D|R/W/C [MIE](https://exiftool.org/TagNames/MIE.html)|
|[MIFF, MIF](https://exiftool.org/TagNames/MIFF.html)|R|Magick Image File Format|R|R|R|R|-|R [MIFF](https://exiftool.org/TagNames/MIFF.html) [Photoshop](https://exiftool.org/TagNames/Photoshop.html)|
|[MKA, MKV, MKS](https://exiftool.org/TagNames/Matroska.html)|R|Matroska Audio/Video/Subtitle|-|-|-|-|-|R [Matroska](https://exiftool.org/TagNames/Matroska.html)|
|[MOBI, AZW, AZW3](https://exiftool.org/TagNames/Palm.html)|R|Mobipocket electronic book ([Palm](https://exiftool.org/TagNames/Palm.html)-based)|-|-|-|-|-|R [Palm](https://exiftool.org/TagNames/Palm.html) [MOBI](https://exiftool.org/TagNames/Palm.html#MOBI)|
|MODD|R|Sony Picture Motion metadata (XML [PLIST](https://exiftool.org/TagNames/PLIST.html)-based)|-|-|-|-|-|R [PLIST](https://exiftool.org/TagNames/PLIST.html)|
|[MOI](https://exiftool.org/TagNames/MOI.html)|R|MOD Information file|-|-|-|-|-|R [MOI](https://exiftool.org/TagNames/MOI.html)|
|[MOS](https://exiftool.org/TagNames/Leaf.html)|R/W|Creo Leaf Mosaic ([TIFF](https://exiftool.org/TagNames/EXIF.html)-based)|R/W/C|R/W/C|R/W/C|R/W/C|R/D|R [Leaf](https://exiftool.org/TagNames/Leaf.html)|
|[MOV, QT](https://exiftool.org/TagNames/QuickTime.html)|R/W|Apple QuickTime Movie|R/W3|R/W3|R/W/C|-|R/D|R/W/C [QuickTime](https://exiftool.org/TagNames/QuickTime.html)|
|[MP3](https://exiftool.org/TagNames/MPEG.html#Audio)|R|MPEG-1 layer 3 audio|-|-|-|-|R|R [MPEG](https://exiftool.org/TagNames/MPEG.html) [ID3](https://exiftool.org/TagNames/ID3.html) [Lyrics3](https://exiftool.org/TagNames/ID3.html#Lyrics3) [APE](https://exiftool.org/TagNames/APE.html)|
|MP4|R/W|Motion Picture Experts Group version 4 ([QuickTime](https://exiftool.org/TagNames/QuickTime.html)-based)|R/W3|R/W3|R/W/C|-|R/D|R/W/C [QuickTime](https://exiftool.org/TagNames/QuickTime.html)|
|[MPC](https://exiftool.org/TagNames/MPC.html)|R|Musepack Audio|-|-|-|-|R|R [MPC](https://exiftool.org/TagNames/MPC.html) [ID3](https://exiftool.org/TagNames/ID3.html) [Lyrics3](https://exiftool.org/TagNames/ID3.html#Lyrics3) [APE](https://exiftool.org/TagNames/APE.html)|
|[MPEG, MPG, M2V](https://exiftool.org/TagNames/MPEG.html)|R|Motion Picture Experts Group version 1 or 2|-|-|-|-|R|R [MPEG](https://exiftool.org/TagNames/MPEG.html) [ID3](https://exiftool.org/TagNames/ID3.html) [Lyrics3](https://exiftool.org/TagNames/ID3.html#Lyrics3)|
|MPO|R/W|Extended Multi-Picture format ([JPEG](https://exiftool.org/TagNames/JPEG.html) with [MPF](https://exiftool.org/TagNames/MPF.html) extensions)|R/W/C|R/W/C|R/W/C|R/W/C|R/D|[Supported JPEG Meta Information](https://exiftool.org/#JPEG)|
|[MQV](https://exiftool.org/TagNames/QuickTime.html)|R/W|Sony Mobile QuickTime Video|R/W3|R/W3|R/W/C|-|R/D|R/W/C [QuickTime](https://exiftool.org/TagNames/QuickTime.html)|
|[MRW](https://exiftool.org/TagNames/MinoltaRaw.html)|R/W|Minolta RAW|R/W/C|R/W/C|R/W/C|R/W/C|R/D|R/W [MinoltaRaw](https://exiftool.org/TagNames/MinoltaRaw.html) [Minolta](https://exiftool.org/TagNames/Minolta.html)|
|[MRC](https://exiftool.org/TagNames/MRC.html)|R|Medical Research Council|-|-|-|-|-|R [MRC](https://exiftool.org/TagNames/MRC.html)|
|[MXF](https://exiftool.org/TagNames/MXF.html)|R|Material Exchange Format|-|-|-|-|-|R [MXF](https://exiftool.org/TagNames/MXF.html)|
|NEF|R/W|Nikon (RAW) Electronic Format ([TIFF](https://exiftool.org/TagNames/EXIF.html)-based)|R/W/C|R/W/C|R/W/C|R/W/C|R/D|R/W [Nikon](https://exiftool.org/TagNames/Nikon.html) [NikonCapture](https://exiftool.org/TagNames/NikonCapture.html)|
|NKA|R|Nikon NX Studio Adjustments|-|-|-|-|-|R XML|
|NKSC|R/W|Nikon Sidecar ([XMP](https://exiftool.org/TagNames/XMP.html)-based)|-|-|R/W/C|-|-|-|
|[NMBTEMPLATE](https://exiftool.org/TagNames/iWork.html)|R|Apple iWork '09 Numbers Template|-|-|-|-|-|R [XML](https://exiftool.org/TagNames/iWork.html) [ZIP](https://exiftool.org/TagNames/ZIP.html)|
|NRW|R/W|Nikon RAW (2) ([TIFF](https://exiftool.org/TagNames/EXIF.html)-based)|R/W/C|R/W/C|R/W/C|R/W/C|R/D|R/W [Nikon](https://exiftool.org/TagNames/Nikon.html) [NikonCapture](https://exiftool.org/TagNames/NikonCapture.html)|
|NXD|R|Nikon Capture NX-D adjustments (XMP-based)|-|-|R|-|-|-|
|[NUMBERS](https://exiftool.org/TagNames/iWork.html)|R|Apple iWork '09 Numbers spreadsheet|-|-|-|-|-|R [XML](https://exiftool.org/TagNames/iWork.html) [ZIP](https://exiftool.org/TagNames/ZIP.html)|
|[O](https://exiftool.org/TagNames/EXE.html#ELF)|R|Unix compiled code Object|-|-|-|-|-|R [EXE](https://exiftool.org/TagNames/EXE.html#ELF)|
|ODB, ODC, ODF, ODG,  <br>ODI, ODP, ODS, ODT|R|Open Document Database/Chart/Formula/Graphics/  <br>Image/Presentation/Spreadsheet/Text (ZIP/XML-based)|-|-|-|-|-|R XML [ZIP](https://exiftool.org/TagNames/ZIP.html)|
|OFR|R|OptimFROG audio ([RIFF](https://exiftool.org/TagNames/RIFF.html)-based)|R3|-|R|-|R|R [RIFF](https://exiftool.org/TagNames/RIFF.html)|
|[OGG, OGV](https://exiftool.org/TagNames/Ogg.html)|R|Ogg bitstream container|-|-|-|-|R|R [FLAC](https://exiftool.org/TagNames/FLAC.html) [ID3](https://exiftool.org/TagNames/ID3.html) [Lyrics3](https://exiftool.org/TagNames/ID3.html#Lyrics3) [Theora](https://exiftool.org/TagNames/Theora.html) [Vorbis](https://exiftool.org/TagNames/Vorbis.html)|
|ONP|R|ON1 Presets|-|-|-|-|-|R [JSON](https://exiftool.org/TagNames/JSON.html) [PLIST](https://exiftool.org/TagNames/PLIST.html)|
|[OPUS](https://exiftool.org/TagNames/Opus.html)|R|Ogg Opus audio|-|-|-|-|R|R [FLAC](https://exiftool.org/TagNames/FLAC.html) [ID3](https://exiftool.org/TagNames/ID3.html) [Lyrics3](https://exiftool.org/TagNames/ID3.html#Lyrics3) [Opus](https://exiftool.org/TagNames/Opus.html) [Vorbis](https://exiftool.org/TagNames/Vorbis.html)|
|ORF, ORI|R/W|Olympus RAW Format ([TIFF](https://exiftool.org/TagNames/EXIF.html)-based)|R/W/C|R/W/C|R/W/C|R/W/C|R/D|R/W [Olympus](https://exiftool.org/TagNames/Olympus.html)|
|[OTF](https://exiftool.org/TagNames/Font.html)|R|Open Type Font|-|-|-|-|R|R [Font](https://exiftool.org/TagNames/Font.html)|
|PAC|R|Lossless Predictive Audio Compression ([RIFF](https://exiftool.org/TagNames/RIFF.html)-based)|R3|-|R|-|R|R [RIFF](https://exiftool.org/TagNames/RIFF.html)|
|[PAGES](https://exiftool.org/TagNames/iWork.html)|R|Apple iWork '09 Pages document|-|-|-|-|-|R [XML](https://exiftool.org/TagNames/iWork.html) [ZIP](https://exiftool.org/TagNames/ZIP.html)|
|[PCD](https://exiftool.org/TagNames/PhotoCD.html)|R|Kodak Photo CD Image Pac|-|-|-|-|-|R [PhotoCD](https://exiftool.org/TagNames/PhotoCD.html)|
|[PCX](https://exiftool.org/TagNames/PCX.html)|R|PC Paintbrush|-|-|-|-|-|R [PCX](https://exiftool.org/TagNames/PCX.html)|
|[PDB, PRC](https://exiftool.org/TagNames/Palm.html)|R|Palm Database|-|-|-|-|-|R [Palm](https://exiftool.org/TagNames/Palm.html)|
|[PDF](https://exiftool.org/TagNames/PDF.html)|R/W7|Adobe Portable Document Format|R3|R3|R/W/C|R3|R|R/W/C [PDF](https://exiftool.org/TagNames/PDF.html), R [Photoshop](https://exiftool.org/TagNames/Photoshop.html)|
|PEF|R/W|Pentax (RAW) Electronic Format ([TIFF](https://exiftool.org/TagNames/EXIF.html)-based)|R/W/C|R/W/C|R/W/C|R/W/C|R/D|R/W [Pentax](https://exiftool.org/TagNames/Pentax.html)|
|[PFA, PFB](https://exiftool.org/TagNames/Font.html)|R|PostScript Font ASCII/Binary|-|-|-|-|-|R [Font](https://exiftool.org/TagNames/Font.html)|
|[PFM](https://exiftool.org/TagNames/Font.html)|R|Printer Font Metrics|-|-|-|-|-|R [Font](https://exiftool.org/TagNames/Font.html)|
|[PFM](https://exiftool.org/TagNames/Other.html#PFM)|R|Portable FloatMap|-|-|-|-|-|R [PFM](https://exiftool.org/TagNames/Other.html#PFM)|
|[PGF](https://exiftool.org/TagNames/PGF.html)|R|Progressive Graphics File|-|-|-|-|-|R [PGF](https://exiftool.org/TagNames/PGF.html) [PNG](https://exiftool.org/TagNames/PNG.html)|
|[PICT, PCT](https://exiftool.org/TagNames/PICT.html)|R|Apple Picture file|-|-|-|R|-|R [PICT](https://exiftool.org/TagNames/PICT.html) [Photoshop](https://exiftool.org/TagNames/Photoshop.html)|
|[PLIST](https://exiftool.org/TagNames/PLIST.html)|R|Apple Property List (binary and XML formats)|-|-|-|-|-|R [PLIST](https://exiftool.org/TagNames/PLIST.html)|
|[PMP](https://exiftool.org/TagNames/Sony.html#PMP)|R|Sony DSC-F1 Cyber-Shot image|-|-|-|-|-|R [Sony](https://exiftool.org/TagNames/Sony.html#PMP)|
|[PNG](https://exiftool.org/TagNames/PNG.html), [JNG, MNG](https://exiftool.org/TagNames/MNG.html)|R/W|Portable/JPEG/Multiple-image Network Graphics|R/W/C3|R/W/C3|R/W/C|R/W/C|R/D|R/W/C [PNG](https://exiftool.org/TagNames/PNG.html)|
|PPM, PBM, PGM|R/W|Portable Pixel/Bit/Gray Map|-|-|-|-|-|R PPM, R/W/C Comment|
|PPT, PPS, POT|R|PowerPoint Presentation/Slideshow/Template ([FPX](https://exiftool.org/TagNames/FlashPix.html)-like)|-|-|R|R|-|R [FlashPix](https://exiftool.org/TagNames/FlashPix.html)|
|[POTX, POTM](https://exiftool.org/TagNames/OOXML.html)|R|Office Open XML Presentation Template [Macro-enabled]|-|-|-|-|-|R [XML](https://exiftool.org/TagNames/OOXML.html) [ZIP](https://exiftool.org/TagNames/ZIP.html)|
|[PPAX, PPAM](https://exiftool.org/TagNames/OOXML.html)|R|Office Open XML Presentation Addin [Macro-enabled]|-|-|-|-|-|R [XML](https://exiftool.org/TagNames/OOXML.html) [ZIP](https://exiftool.org/TagNames/ZIP.html)|
|[PPSX, PPSM](https://exiftool.org/TagNames/OOXML.html)|R|Office Open XML Presentation Slideshow [Macro-enabled]|-|-|-|-|-|R [XML](https://exiftool.org/TagNames/OOXML.html) [ZIP](https://exiftool.org/TagNames/ZIP.html)|
|[PPTX, PPTM](https://exiftool.org/TagNames/OOXML.html)|R|Office Open XML Presentation [Macro-enabled]|-|-|-|-|-|R [XML](https://exiftool.org/TagNames/OOXML.html) [ZIP](https://exiftool.org/TagNames/ZIP.html)|
|[PSD, PSB, PSDT](https://exiftool.org/TagNames/Photoshop.html)|R/W|PhotoShop Document / Large Document / Template|R/W/C|R/W/C|R/W/C|R/W/C|-|R [Photoshop](https://exiftool.org/TagNames/Photoshop.html)|
|[PSP, PSPIMAGE](https://exiftool.org/TagNames/PSP.html)|R|Paint Shop Pro|R|-|-|-|-|R [PSP](https://exiftool.org/TagNames/PSP.html)|
|[QTIF, QTI, QIF](https://exiftool.org/TagNames/QuickTime.html)|R/W|QuickTime Image File|R/W3|R/W3|R/W/C|-|R/D|R/W/C [QuickTime](https://exiftool.org/TagNames/QuickTime.html)|
|[R3D](https://exiftool.org/TagNames/Red.html)|R|Redcode RAW video|-|-|-|-|-|R [Red](https://exiftool.org/TagNames/Red.html)|
|[RA](https://exiftool.org/TagNames/Real.html#Audio)|R|Real Audio|-|-|-|-|R|R [Real](https://exiftool.org/TagNames/Real.html#Audio) [ID3](https://exiftool.org/TagNames/ID3.html) [Lyrics3](https://exiftool.org/TagNames/ID3.html#Lyrics3)|
|[RAF](https://exiftool.org/TagNames/FujiFilm.html#RAF)|R/W|FujiFilm RAW Format|R/W/C|R/W/C|R/W/C|R/W/C|R/D|R/W [FujiFilm](https://exiftool.org/TagNames/FujiFilm.html)|
|[RAM, RPM](https://exiftool.org/TagNames/Real.html#Metafile)|R|Real Audio/Plug-in Metafile|-|-|-|-|-|R [Real](https://exiftool.org/TagNames/Real.html#Metafile)|
|[RAR](https://exiftool.org/TagNames/ZIP.html#RAR)|R|RAR Archive|-|-|-|-|-|R [ZIP](https://exiftool.org/TagNames/ZIP.html#RAR)|
|[RAW](https://exiftool.org/TagNames/KyoceraRaw.html)|R|Kyocera Contax N Digital RAW|-|-|-|-|-|R [KyoceraRaw](https://exiftool.org/TagNames/KyoceraRaw.html)|
|[RAW](https://exiftool.org/TagNames/PanasonicRaw.html)|R/W|Panasonic RAW ([TIFF](https://exiftool.org/TagNames/EXIF.html)-based)|R/W/C|R/W/C|R/W/C|R/W/C|R/D|R/W [PanasonicRaw](https://exiftool.org/TagNames/PanasonicRaw.html) [Panasonic](https://exiftool.org/TagNames/Panasonic.html)|
|[RIFF, RIF](https://exiftool.org/TagNames/RIFF.html)|R|Resource Interchange File Format|R3|-|R|-|R|R [RIFF](https://exiftool.org/TagNames/RIFF.html)|
|[RM, RV, RMVB](https://exiftool.org/TagNames/Real.html)|R|Real Media/Video [Variable Bitrate]|-|-|-|-|-|R [Real](https://exiftool.org/TagNames/Real.html)|
|[RSRC](https://exiftool.org/TagNames/RSRC.html)|R|Mac OS Resource|-|-|-|-|-|R [RSRC](https://exiftool.org/TagNames/RSRC.html) [Photoshop](https://exiftool.org/TagNames/Photoshop.html) [PostScript](https://exiftool.org/TagNames/PostScript.html) [Font](https://exiftool.org/TagNames/Font.html)|
|[RTF](https://exiftool.org/TagNames/RTF.html)|R|Rich Text Format|-|-|-|-|-|R [RTF](https://exiftool.org/TagNames/RTF.html)|
|[RW2](https://exiftool.org/TagNames/PanasonicRaw.html)|R/W|Panasonic RAW 2 ([TIFF](https://exiftool.org/TagNames/EXIF.html)-based)|R/W/C|R/W/C|R/W/C|R/W/C|R/D|R/W [PanasonicRaw](https://exiftool.org/TagNames/PanasonicRaw.html) [Panasonic](https://exiftool.org/TagNames/Panasonic.html)|
|[RWL](https://exiftool.org/TagNames/PanasonicRaw.html)|R/W|Leica RAW ([TIFF](https://exiftool.org/TagNames/EXIF.html)-based)|R/W/C|R/W/C|R/W/C|R/W/C|R/D|R/W [PanasonicRaw](https://exiftool.org/TagNames/PanasonicRaw.html) [Panasonic](https://exiftool.org/TagNames/Panasonic.html)|
|[RWZ](https://exiftool.org/TagNames/Rawzor.html)|R|Rawzor compressed image|R|R|R|R|-|R [Rawzor](https://exiftool.org/TagNames/Rawzor.html)|
|[SEQ](https://exiftool.org/TagNames/FLIR.html#AFF)|R|FLIR Systems image Sequence|-|-|-|-|-|R [FLIR](https://exiftool.org/TagNames/FLIR.html#AFF)|
|SKETCH|R|Sketch design file|-|-|-|-|-|R [JSON](https://exiftool.org/TagNames/JSON.html) [ZIP](https://exiftool.org/TagNames/ZIP.html)|
|[SO](https://exiftool.org/TagNames/EXE.html#ELF)|R|Unix ELF executable and Shared Object files|-|-|-|-|-|R [EXE](https://exiftool.org/TagNames/EXE.html#ELF)|
|SR2|R/W|Sony RAW 2 ([TIFF](https://exiftool.org/TagNames/EXIF.html)-based)|R/W/C|R/W/C|R/W/C|R/W/C|R/D|R/W [Sony](https://exiftool.org/TagNames/Sony.html)|
|SRF|R|Sony RAW Format ([TIFF](https://exiftool.org/TagNames/EXIF.html)-based)|R|R|R|R|R|R [Sony](https://exiftool.org/TagNames/Sony.html)|
|SRW|R/W|Samsung RAW format ([TIFF](https://exiftool.org/TagNames/EXIF.html)-based)|R/W/C|R/W/C|R/W/C|R/W/C|R/D|R/W [Samsung](https://exiftool.org/TagNames/Samsung.html)|
|[SVG](https://exiftool.org/TagNames/XMP.html#SVG)|R|Scalable Vector Graphics (XML-based)|-|-|-|-|R|R [SVG](https://exiftool.org/TagNames/XMP.html#SVG)|
|[SWF](https://exiftool.org/TagNames/Flash.html)|R|Shockwave Flash|-|-|R|-|-|R [Flash](https://exiftool.org/TagNames/Flash.html)|
|THM|R/W|Thumbnail image ([JPEG](https://exiftool.org/TagNames/JPEG.html))|R/W/C|R/W/C|R/W/C|R/W/C|R/D|[Supported JPEG Meta Information](https://exiftool.org/#JPEG)|
|[THMX](https://exiftool.org/TagNames/OOXML.html)|R|Office Open XML Theme|-|-|-|-|-|R [XML](https://exiftool.org/TagNames/OOXML.html) [ZIP](https://exiftool.org/TagNames/ZIP.html)|
|[TIFF, TIF](https://exiftool.org/TagNames/EXIF.html)|R/W|Tagged Image File Format|R/W/C|R/W/C|R/W/C|R/W/C|R/D|R/W/C [GeoTIFF](https://exiftool.org/TagNames/GeoTiff.html)1, R/W [Trailers](https://exiftool.org/#Trailers)|
|[TTF, TTC](https://exiftool.org/TagNames/Font.html)|R|True Type Font/Collection|-|-|-|-|R|R [Font](https://exiftool.org/TagNames/Font.html)|
|[TORRENT](https://exiftool.org/TagNames/Torrent.html)|R|BitTorrent description file|-|-|-|-|-|R [Torrent](https://exiftool.org/TagNames/Torrent.html)|
|[TXT](https://exiftool.org/TagNames/Text.html)|R|Text files|-|-|-|-|-|R [Text](https://exiftool.org/TagNames/Text.html)|
|[VCF, VCARD](https://exiftool.org/TagNames/VCard.html)|R|Virtual Card|-|-|-|-|-|R [VCard](https://exiftool.org/TagNames/VCard.html)|
|VNT|R|Scene7 Vignette ([FPX](https://exiftool.org/TagNames/FlashPix.html)-like)|-|-|-|R|-|R [FlashPix](https://exiftool.org/TagNames/FlashPix.html)|
|[VNT](https://exiftool.org/TagNames/VCard.html#VNote)|R|V-Note document|-|-|-|-|-|R [VNote](https://exiftool.org/TagNames/VCard.html#VNote)|
|VOB|R|Video Object ([MPEG](https://exiftool.org/TagNames/MPEG.html)-based)|-|-|-|-|-|R [MPEG](https://exiftool.org/TagNames/MPEG.html)|
|[VRD](https://exiftool.org/TagNames/CanonVRD.html)|R/W/C2|Canon DPP Recipe Data|-|-|R/W/C|-|-|R/W/C [CanonVRD](https://exiftool.org/TagNames/CanonVRD.html)2|
|VSD|R|Microsoft Visio Drawing ([FPX](https://exiftool.org/TagNames/FlashPix.html)-like)|-|-|R|R|-|R [FlashPix](https://exiftool.org/TagNames/FlashPix.html)|
|WAV|R|Windows digital audio WAVeform ([RIFF](https://exiftool.org/TagNames/RIFF.html)-based)|R3|-|R|-|R|R [RIFF](https://exiftool.org/TagNames/RIFF.html)|
|WEBM|R|Google Web Movie ([Matroska](https://exiftool.org/TagNames/Matroska.html)-based)|-|-|-|-|-|R [Matroska](https://exiftool.org/TagNames/Matroska.html)|
|WEBP|R/W|Google Web Picture ([RIFF](https://exiftool.org/TagNames/RIFF.html)-based)|R/W/C|-|R/W/C|R/W/C|R/D|R [RIFF](https://exiftool.org/TagNames/RIFF.html)|
|WMA, WMV|R|Windows Media Audio/Video ([ASF](https://exiftool.org/TagNames/ASF.html)-based)|-|-|R|-|-|R [ASF](https://exiftool.org/TagNames/ASF.html)|
|[WPG](https://exiftool.org/TagNames/WPG.html)|R|WordPerfect Graphics|-|-|-|-|-|R [WPG](https://exiftool.org/TagNames/WPG.html)|
|[WTV](https://exiftool.org/TagNames/WTV.html)|R|Windows recorded TV show|-|-|-|-|-|R [WTV](https://exiftool.org/TagNames/WTV.html)|
|WV|R|WavePack lossless audio ([RIFF](https://exiftool.org/TagNames/RIFF.html)-based)|R3|-|R|-|R|R [RIFF](https://exiftool.org/TagNames/RIFF.html)|
|[X3F](https://exiftool.org/TagNames/SigmaRaw.html)|R/W|Sigma/Foveon RAW|R/W/C|R/W/C|R/W/C|R/W/C|R/D|R/W [Sigma](https://exiftool.org/TagNames/Sigma.html), R [SigmaRaw](https://exiftool.org/TagNames/SigmaRaw.html)|
|[XCF](https://exiftool.org/TagNames/GIMP.html)|R|GIMP native image format|R|R|R|R|-|R [GIMP](https://exiftool.org/TagNames/GIMP.html)|
|[XISF](https://exiftool.org/TagNames/XISF.html)|R|Extensible Image Serialization Format|-|-|-|-|-|R [XISF](https://exiftool.org/TagNames/XISF.html)|
|XLS, XLT|R|Microsoft Excel Spreadsheet/Template ([FPX](https://exiftool.org/TagNames/FlashPix.html)-like)|-|-|R|R|-|R [FlashPix](https://exiftool.org/TagNames/FlashPix.html)|
|[XLSX, XLSM, XLSB](https://exiftool.org/TagNames/OOXML.html)|R|Office Open XML Spreadsheet [Macro-enabled/Binary]|-|-|-|-|-|R [XML](https://exiftool.org/TagNames/OOXML.html) [ZIP](https://exiftool.org/TagNames/ZIP.html)|
|[XLTX, XLTM](https://exiftool.org/TagNames/OOXML.html)|R|Office Open XML Spreadsheet Template [Macro-enabled]|-|-|-|-|-|R [XML](https://exiftool.org/TagNames/OOXML.html) [ZIP](https://exiftool.org/TagNames/ZIP.html)|
|[XMP](https://exiftool.org/TagNames/XMP.html)|R/W/C|Extensible Metadata Platform sidecar file|-|-|R/W/C|-|-|-|
|[ZIP](https://exiftool.org/TagNames/ZIP.html)|R|ZIP archive|-|-|-|-|-|R [ZIP](https://exiftool.org/TagNames/ZIP.html)|

---

## Video 

![How to Extract Image Metadata with ExifTool: Ultimate Guide for Beginners](https://www.youtube.com/watch?v=8gL-uCnbLn0)