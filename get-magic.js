const signatures = {
	"47": {
		"signature": "47",
		"extension": "ts | tsv | tsa | mpg | mpeg",
		"description": "MPEG Transport Stream (MPEG-2 Part 1)[61]"
	},
	"23 21": {
		"signature": "23 21",
		"extension": "",
		"description": "Script or data to be passed to the program following the shebang (#!)[1]"
	},
	"D4 C3 B2 A1 ": {
		"signature": "D4 C3 B2 A1 (little-endian)",
		"extension": "pcap",
		"description": "Libpcap File Format[2]"
	},
	"A1 B2 C3 D4 ": {
		"signature": "A1 B2 C3 D4 (big-endian)",
		"extension": null,
		"description": null
	},
	"4D 3C B2 A1 ": {
		"signature": "4D 3C B2 A1 (little-endian)",
		"extension": "pcap",
		"description": "Libpcap File Format (nanosecond-resolution)[2]"
	},
	"A1 B2 3C 4D ": {
		"signature": "A1 B2 3C 4D (big-endian)",
		"extension": null,
		"description": null
	},
	"0A 0D 0D 0A": {
		"signature": "0A 0D 0D 0A",
		"extension": "pcapng",
		"description": "PCAP Next Generation Dump File Format[3]"
	},
	"ED AB EE DB": {
		"signature": "ED AB EE DB",
		"extension": "rpm",
		"description": "RedHat Package Manager (RPM) package[4]"
	},
	"53 51 4C 69 74 65 20 666F 72 6D 61 74 20 33 00": {
		"signature": "53 51 4C 69 74 65 20 666F 72 6D 61 74 20 33 00",
		"extension": "sqlitedb | sqlitedb",
		"description": "SQLite Database[5]"
	},
	"53 50 30 31": {
		"signature": "53 50 30 31",
		"extension": "bin",
		"description": "Amazon Kindle Update Package[6]"
	},
	"49 57 41 44": {
		"signature": "49 57 41 44",
		"extension": "wad",
		"description": "internal WAD (main resource file of Doom)[7]"
	},
	"00": {
		"signature": "00",
		"extension": "PIC | PIF | SEA | YTR",
		"description": "IBM Storyboard bitmap fileWindows Program Information FileMac Stuffit Self-Extracting ArchiveIRIS OCR data file"
	},
	"00 00 00 00 00 00 00 0000 00 00 00 00 00 00 0000 00 00 00 00 00 00 00": {
		"signature": "00 00 00 00 00 00 00 0000 00 00 00 00 00 00 0000 00 00 00 00 00 00 00",
		"extension": "PDB",
		"description": "PalmPilot Database/Document File"
	},
	"BE BA FE CA": {
		"signature": "BE BA FE CA",
		"extension": "DBA",
		"description": "Palm Desktop Calendar Archive"
	},
	"00 01 42 44": {
		"signature": "00 01 42 44",
		"extension": "DBA",
		"description": "Palm Desktop To Do Archive"
	},
	"00 01 44 54": {
		"signature": "00 01 44 54",
		"extension": "TDA",
		"description": "Palm Desktop Calendar Archive"
	},
	"54 44 46 24": {
		"signature": "54 44 46 24",
		"extension": "TDF$",
		"description": "Telegram Desktop File"
	},
	"54 44 45 46": {
		"signature": "54 44 45 46",
		"extension": "TDEF",
		"description": "Telegram Desktop Encrypted File"
	},
	"00 01 00 00": {
		"signature": "00 01 00 00",
		"extension": "",
		"description": "Palm Desktop Data File (Access format)"
	},
	"00 00 01 00": {
		"signature": "00 00 01 00",
		"extension": "ico",
		"description": "Computer icon encoded in ICO file format[8]"
	},
	"69 63 6E 73": {
		"signature": "69 63 6e 73",
		"extension": "icns",
		"description": "Apple Icon Image format"
	},
	"66 74 79 70 33 67": {
		"signature": "66 74 79 70 33 67",
		"extension": "3gp | 3g2",
		"description": "3rd Generation Partnership Project 3GPP and 3GPP2 multimedia files"
	},
	"1F 9D": {
		"signature": "1F 9D",
		"extension": "ztar.z",
		"description": "compressed file (often tar zip) using Lempel-Ziv-Welch algorithm"
	},
	"1F A0": {
		"signature": "1F A0",
		"extension": "ztar.z",
		"description": "Compressed file (often tar zip) using LZH algorithm"
	},
	"2D 68 6C 30 2D": {
		"signature": "2D 68 6C 30 2D",
		"extension": "lzh",
		"description": "Lempel Ziv Huffman archive file Method 0 (No compression)"
	},
	"2D 68 6C 35 2D": {
		"signature": "2D 68 6C 35 2D",
		"extension": "lzh",
		"description": "Lempel Ziv Huffman archive file Method 5 (8KiB sliding window)"
	},
	"42 41 43 4B 4D 49 4B 4544 49 53 4B": {
		"signature": "42 41 43 4B 4D 49 4B 4544 49 53 4B",
		"extension": "bac",
		"description": "AmiBack Amiga Backup data file"
	},
	"49 4E 44 58": {
		"signature": "49 4E 44 58",
		"extension": "idx",
		"description": "AmiBack Amiga Backup index file"
	},
	"62 70 6C 69 73 74": {
		"signature": "62 70 6C 69 73 74",
		"extension": "plist",
		"description": "Binary Property List file"
	},
	"42 5A 68": {
		"signature": "42 5A 68",
		"extension": "bz2",
		"description": "Compressed file using Bzip2 algorithm"
	},
	"47 49 46 38 37 6147 49 46 38 39 61": {
		"signature": "47 49 46 38 37 6147 49 46 38 39 61",
		"extension": "gif",
		"description": "Image file encoded in the Graphics Interchange Format (GIF)[9]"
	},
	"49 49 2A 00 ": {
		"signature": "49 49 2A 00 (little-endian)",
		"extension": "tif | tiff",
		"description": "Tagged Image File Format (TIFF)[10]"
	},
	"4D 4D 00 2A ": {
		"signature": "4D 4D 00 2A (big-endian)",
		"extension": null,
		"description": null
	},
	"49 49 2A 00 10 00 00 0043 52": {
		"signature": "49 49 2A 00 10 00 00 0043 52",
		"extension": "cr2",
		"description": "Canon RAW Format Version 2[11]Canon's RAW format is based on TIFF.[12]"
	},
	"80 2A 5F D7": {
		"signature": "80 2A 5F D7",
		"extension": "cin",
		"description": "Kodak Cineon image"
	},
	"52 4E 43 0152 4E 43 02": {
		"signature": "52 4E 43 0152 4E 43 02",
		"extension": "",
		"description": "Compressed file using Rob Northen Compression (version 1 and 2) algorithm"
	},
	"4E 55 52 55 49 4D 474E 55 52 55 50 41 4C": {
		"signature": "4E 55 52 55 49 4D 474E 55 52 55 50 41 4C",
		"extension": "nui | nup",
		"description": "nuru ASCII/ANSI image and palette files"
	},
	"53 44 50 58 ": {
		"signature": "53 44 50 58 (big-endian format)",
		"extension": "dpx",
		"description": "SMPTE DPX image"
	},
	"58 50 44 53 ": {
		"signature": "58 50 44 53 (little-endian format)",
		"extension": null,
		"description": null
	},
	"76 2F 31 01": {
		"signature": "76 2F 31 01",
		"extension": "exr",
		"description": "OpenEXR image"
	},
	"42 50 47 FB": {
		"signature": "42 50 47 FB",
		"extension": "bpg",
		"description": "Better Portable Graphics format[13]"
	},
	"FF D8 FF DB": {
		"signature": "FF D8 FF DB",
		"extension": "jpg | jpeg",
		"description": "JPEG raw or in the JFIF or Exif file format[14]"
	},
	"FF D8 FF E0 00 10 4A 4649 46 00 01": {
		"signature": "FF D8 FF E0 00 10 4A 4649 46 00 01",
		"extension": null,
		"description": null
	},
	"FF D8 FF EE": {
		"signature": "FF D8 FF EE",
		"extension": null,
		"description": null
	},
	"FF D8 FF E1 45 7869 66 00 00": {
		"signature": "FF D8 FF E1 45 7869 66 00 00",
		"extension": null,
		"description": null
	},
	"FF D8 FF E0": {
		"signature": "FF D8 FF E0",
		"extension": "jpg",
		"description": "JPEG raw or in the JFIF or Exif file format[14]"
	},
	"00 00 00 0C 6A 50 20 20 0D 0A 87 0A": {
		"signature": "00 00 00 0C 6A 50 20 20 0D 0A 87 0A",
		"extension": "jp2 | j2k | jpf | jpm | jpg2 | j2c | jpc | jpx | mj2",
		"description": "JPEG 2000 format[15]"
	},
	"FF 4F FF 51": {
		"signature": "FF 4F FF 51",
		"extension": null,
		"description": null
	},
	"71 6F 69 66": {
		"signature": "71 6f 69 66",
		"extension": "",
		"description": "QOI - The “Quite OK Image Format”[16]"
	},
	"46 4F 52 4D 49 4C 42 4D": {
		"signature": "46 4F 52 4D 49 4C 42 4D",
		"extension": "ilbm | lbm | ibm | iff",
		"description": "IFF Interleaved Bitmap Image"
	},
	"46 4F 52 4D 38 53 56 58": {
		"signature": "46 4F 52 4D 38 53 56 58",
		"extension": "8svx | 8sv | svx | snd | iff",
		"description": "IFF 8-Bit Sampled Voice"
	},
	"46 4F 52 4D 41 43 42 4D": {
		"signature": "46 4F 52 4D 41 43 42 4D",
		"extension": "acbm | iff",
		"description": "Amiga Contiguous Bitmap"
	},
	"46 4F 52 4D 41 4E 42 4D": {
		"signature": "46 4F 52 4D 41 4E 42 4D",
		"extension": "anbm | iff",
		"description": "IFF Animated Bitmap"
	},
	"46 4F 52 4D 41 4E 49 4D": {
		"signature": "46 4F 52 4D 41 4E 49 4D",
		"extension": "anim | iff",
		"description": "IFF CEL Animation"
	},
	"46 4F 52 4D 46 41 58 58": {
		"signature": "46 4F 52 4D 46 41 58 58",
		"extension": "faxx | fax | iff",
		"description": "IFF Facsimile Image"
	},
	"46 4F 52 4D 46 54 58 54": {
		"signature": "46 4F 52 4D 46 54 58 54",
		"extension": "ftxt | iff",
		"description": "IFF Formatted Text"
	},
	"46 4F 52 4D 53 4D 55 53": {
		"signature": "46 4F 52 4D 53 4D 55 53",
		"extension": "smus | smu | mus | iff",
		"description": "IFF Simple Musical Score"
	},
	"46 4F 52 4D 43 4D 55 53": {
		"signature": "46 4F 52 4D 43 4D 55 53",
		"extension": "cmus | mus | iff",
		"description": "IFF Musical Score"
	},
	"46 4F 52 4D 59 55 56 4E": {
		"signature": "46 4F 52 4D 59 55 56 4E",
		"extension": "yuvn | yuv | iff",
		"description": "IFF YUV Image"
	},
	"46 4F 52 4D 46 41 4E 54": {
		"signature": "46 4F 52 4D 46 41 4E 54",
		"extension": "iff",
		"description": "Amiga Fantavision Movie"
	},
	"46 4F 52 4D 41 49 46 46": {
		"signature": "46 4F 52 4D 41 49 46 46",
		"extension": "aiff | aif | aifc | snd | iff",
		"description": "Audio Interchange File Format"
	},
	"4C 5A 49 50": {
		"signature": "4C 5A 49 50",
		"extension": "lz",
		"description": "lzip compressed file[17]"
	},
	"30 37 30 37 30 37": {
		"signature": "30 37 30 37 30 37",
		"extension": "cpio",
		"description": "cpio archive file[18]"
	},
	"4D 5A": {
		"signature": "4D 5A",
		"extension": "exe | scr | sys | dll | fon | cpl | iec | ime | rs | tsp | mz",
		"description": "DOS-STUB MZ subprogram executable and its descendants (including NE and PE)"
	},
	"5A 4D": {
		"signature": "5A 4D",
		"extension": "exe",
		"description": "DOS MZ executable and its descendants (rare as main magic number, usually comes after '4D 5A' dos-stub signature)"
	},
	"50 4B 03 0450 4B 05 06 50 4B 07 08 ": {
		"signature": "50 4B 03 0450 4B 05 06 (empty archive)50 4B 07 08 (spanned archive)",
		"extension": "zip | aar | apk | docx | epub | ipa | jar | kmz | maff | msix | odp | ods | odt | pk3 | pk4 | pptx | usdz | vsdx | xlsx | xpi",
		"description": "zip file format and formats based on it, such as EPUB, JAR, ODF, OOXML"
	},
	"52 61 72 21 1A 07 00": {
		"signature": "52 61 72 21 1A 07 00",
		"extension": "rar",
		"description": "Roshal ARchive compressed archive v1.50 onwards[19]"
	},
	"52 61 72 21 1A 07 01 00": {
		"signature": "52 61 72 21 1A 07 01 00",
		"extension": "rar",
		"description": "Roshal ARchive compressed archive v5.00 onwards[20]"
	},
	"7F 45 4C 46": {
		"signature": "7F 45 4C 46",
		"extension": "",
		"description": "Executable and Linkable Format"
	},
	"89 50 4E 47 0D 0A 1A 0A": {
		"signature": "89 50 4E 47 0D 0A 1A 0A",
		"extension": "png",
		"description": "Image encoded in the Portable Network Graphics format[21]"
	},
	"C9": {
		"signature": "C9",
		"extension": "com",
		"description": "CP/M 3 and higher with overlays[22]"
	},
	"CA FE BA BE": {
		"signature": "CA FE BA BE",
		"extension": "class",
		"description": "Java class file, Mach-O Fat Binary"
	},
	"EF BB BF": {
		"signature": "EF BB BF",
		"extension": "txt | others",
		"description": "UTF-8 byte order mark, commonly seen in text files.[23][24][25]"
	},
	"FF FE": {
		"signature": "FF FE",
		"extension": "txt | others",
		"description": "UTF-16LE byte order mark, commonly seen in text files.[23][24][25]"
	},
	"FE FF": {
		"signature": "FE FF",
		"extension": "txt | others",
		"description": "UTF-16BE byte order mark, commonly seen in text files.[23][24][25]"
	},
	"FF FE 00 00": {
		"signature": "FF FE 00 00",
		"extension": "txt | others",
		"description": "UTF-32LE byte order mark for text[23][25]"
	},
	"00 00 FE FF": {
		"signature": "00 00 FE FF",
		"extension": "txt | others",
		"description": "UTF-32BE byte order mark for text[23][25]"
	},
	"2B 2F 76 382B 2F 76 392B 2F 76 2B2B 2F 76 2F": {
		"signature": "2B 2F 76 382B 2F 76 392B 2F 76 2B2B 2F 76 2F",
		"extension": "",
		"description": "UTF-7 byte order mark for text[26][25]"
	},
	"0E FE FF": {
		"signature": "0E FE FF",
		"extension": "txt | others",
		"description": "SCSU byte order mark for text[26][25]"
	},
	"DD 73 66 73": {
		"signature": "DD 73 66 73",
		"extension": "",
		"description": "UTF-EBCDIC byte order mark for text[26][25]"
	},
	"FE ED FA CE": {
		"signature": "FE ED FA CE",
		"extension": "",
		"description": "Mach-O binary (32-bit)"
	},
	"FE ED FA CF": {
		"signature": "FE ED FA CF",
		"extension": "",
		"description": "Mach-O binary (64-bit)"
	},
	"FE ED FE ED": {
		"signature": "FE ED FE ED",
		"extension": "",
		"description": "JKS JavakeyStore"
	},
	"CE FA ED FE": {
		"signature": "CE FA ED FE",
		"extension": "",
		"description": "Mach-O binary (reverse byte ordering scheme, 32-bit)[27]"
	},
	"CF FA ED FE": {
		"signature": "CF FA ED FE",
		"extension": "",
		"description": "Mach-O binary (reverse byte ordering scheme, 64-bit)[27]"
	},
	"25 21 50 53": {
		"signature": "25 21 50 53",
		"extension": "ps",
		"description": "PostScript document"
	},
	"25 21 50 53 2D 41 64 6F 62 65 2D 33 2E 30 20 45 50 53 46 2D 33 2E 30": {
		"signature": "25 21 50 53 2D 41 64 6F 62 65 2D 33 2E 30 20 45 50 53 46 2D 33 2E 30",
		"extension": "eps | epsf",
		"description": "Encapsulated PostScript file version 3.0[28]"
	},
	"25 21 50 53 2D 41 64 6F 62 65 2D 33 2E 31 20 45 50 53 46 2D 33 2E 30": {
		"signature": "25 21 50 53 2D 41 64 6F 62 65 2D 33 2E 31 20 45 50 53 46 2D 33 2E 30",
		"extension": "eps | epsf",
		"description": "Encapsulated PostScript file version 3.1[28]"
	},
	"49 54 53 46 03 00 00 0060 00 00 00": {
		"signature": "49 54 53 46 03 00 00 0060 00 00 00",
		"extension": "chm",
		"description": "MS Windows HtmlHelp Data"
	},
	"3F 5F": {
		"signature": "3F 5F",
		"extension": "hlp",
		"description": "Windows 3.x/95/98 Help file"
	},
	"25 50 44 46 2D": {
		"signature": "25 50 44 46 2D",
		"extension": "pdf",
		"description": "PDF document[29]"
	},
	"30 26 B2 75 8E 66 CF 11A6 D9 00 AA 00 62 CE 6C": {
		"signature": "30 26 B2 75 8E 66 CF 11A6 D9 00 AA 00 62 CE 6C",
		"extension": "asf | wma | wmv",
		"description": "Advanced Systems Format[30]"
	},
	"24 53 44 49 30 30 30 31": {
		"signature": "24 53 44 49 30 30 30 31",
		"extension": "",
		"description": "System Deployment Image, a disk image format used by Microsoft"
	},
	"4F 67 67 53": {
		"signature": "4F 67 67 53",
		"extension": "ogg | oga | ogv",
		"description": "Ogg, an open source media container format"
	},
	"38 42 50 53": {
		"signature": "38 42 50 53",
		"extension": "psd",
		"description": "Photoshop Document file, Adobe Photoshop's native file format"
	},
	"52 49 46 46 57 41 56 45": {
		"signature": "52 49 46 46 57 41 56 45",
		"extension": "wav",
		"description": "Waveform Audio File Format[31]"
	},
	"52 49 46 46 41 56 49 20": {
		"signature": "52 49 46 46 41 56 49 20",
		"extension": "avi",
		"description": "Audio Video Interleave video format[32]"
	},
	"FF FBFF F3FF F2": {
		"signature": "FF FBFF F3FF F2",
		"extension": "mp3",
		"description": "MPEG-1 Layer 3 file without an ID3 tag or with an ID3v1 tag (which is appended at the end of the file)"
	},
	"49 44 33": {
		"signature": "49 44 33",
		"extension": "mp3",
		"description": "MP3 file with an ID3v2 container"
	},
	"42 4D": {
		"signature": "42 4D",
		"extension": "bmp | dib",
		"description": "BMP file, a bitmap format used mostly in the Windows world"
	},
	"43 44 30 30 31": {
		"signature": "43 44 30 30 31",
		"extension": "cdi",
		"description": "CD-i CD image file"
	},
	"6D 61 69 6E 2E 62 73": {
		"signature": "6D 61 69 6E 2E 62 73",
		"extension": "mgw",
		"description": "Nintendo Game &amp; Watch image file"
	},
	"4E 45 53": {
		"signature": "4E 45 53",
		"extension": "nes",
		"description": "Nintendo Entertainment System image file"
	},
	"A0 32 41 A0 A0 A0": {
		"signature": "A0 32 41 A0 A0 A0",
		"extension": "d64",
		"description": "Commodore 64 1541 disk image (D64 format)"
	},
	"47 53 52 2D 31 35 34 31": {
		"signature": "47 53 52 2D 31 35 34 31",
		"extension": "g64",
		"description": "Commodore 64 1541 disk image (G64 format)"
	},
	"A0 33 44 A0 A0": {
		"signature": "A0 33 44 A0 A0",
		"extension": "d81",
		"description": "Commodore 64 1581 disk image (D81 format)"
	},
	"43 36 34 20 74 61 70 65 20 69 6D 61 67 65 20 66 69 6C 65": {
		"signature": "43 36 34 20 74 61 70 65 20 69 6D 61 67 65 20 66 69 6C 65",
		"extension": "t64",
		"description": "Commodore 64 tape image"
	},
	"43 36 34 20 43 41 52 54 52 49 44 47 45 20 20 20": {
		"signature": "43 36 34 20 43 41 52 54 52 49 44 47 45 20 20 20",
		"extension": "crt",
		"description": "Commodore 64 cartridge image"
	},
	"53 49 4D 50 4C 45 20 203D 20 20 20 20 20 20 2020 20 20 20 20 20 20 2020 20 20 20 20 54": {
		"signature": "53 49 4D 50 4C 45 20 203D 20 20 20 20 20 20 2020 20 20 20 20 20 20 2020 20 20 20 20 54",
		"extension": "fits",
		"description": "Flexible Image Transport System (FITS)[34]"
	},
	"66 4C 61 43": {
		"signature": "66 4C 61 43",
		"extension": "flac",
		"description": "Free Lossless Audio Codec[35]"
	},
	"4D 54 68 64": {
		"signature": "4D 54 68 64",
		"extension": "mid | midi",
		"description": "MIDI sound file[36]"
	},
	"D0 CF 11 E0 A1 B1 1A E1": {
		"signature": "D0 CF 11 E0 A1 B1 1A E1",
		"extension": "doc | xls | ppt | msi | msg",
		"description": "Compound File Binary Format, a container format defined by Microsoft COM. It can contain the equivalent of files and directories. It is used by Windows Installer and for documents in older versions of Microsoft Office.[37] It can be used by other programs as well that rely on the COM and OLE API's."
	},
	"64 65 78 0A 30 33 35 00": {
		"signature": "64 65 78 0A 30 33 35 00",
		"extension": "dex",
		"description": "Dalvik Executable"
	},
	"4B 44 4D": {
		"signature": "4B 44 4D",
		"extension": "vmdk",
		"description": "VMDK files[38][39]"
	},
	"23 20 44 69 73 6B 20 44 65 73 63 72 69 70 74 6F": {
		"signature": "23 20 44 69 73 6B 20 44 65 73 63 72 69 70 74 6F",
		"extension": "vmdk",
		"description": "VMware 4 Virtual Disk desription file (split disk)"
	},
	"43 72 32 34": {
		"signature": "43 72 32 34",
		"extension": "crx",
		"description": "Google Chrome extension[40] or packaged app[41]"
	},
	"41 47 44 33": {
		"signature": "41 47 44 33",
		"extension": "fh8",
		"description": "FreeHand 8 document[42][43][44]"
	},
	"05 07 00 00 42 4F 42 4F05 07 00 00 00 00 00 0000 00 00 00 00 01": {
		"signature": "05 07 00 00 42 4F 42 4F05 07 00 00 00 00 00 0000 00 00 00 00 01",
		"extension": "cwk",
		"description": "AppleWorks 5 document"
	},
	"06 07 E1 00 42 4F 42 4F06 07 E1 00 00 00 00 0000 00 00 00 00 01": {
		"signature": "06 07 E1 00 42 4F 42 4F06 07 E1 00 00 00 00 0000 00 00 00 00 01",
		"extension": "cwk",
		"description": "AppleWorks 6 document"
	},
	"45 52 02 00 00 00": {
		"signature": "45 52 02 00 00 00",
		"extension": "toast",
		"description": "Roxio Toast disc image file"
	},
	"8B 45 52 02 00 00 00": {
		"signature": "8B 45 52 02 00 00 00",
		"extension": null,
		"description": null
	},
	"6B 6F 6C 79": {
		"signature": "6B 6F 6C 79",
		"extension": "dmg",
		"description": "Apple Disk Image file"
	},
	"78 61 72 21": {
		"signature": "78 61 72 21",
		"extension": "xar",
		"description": "eXtensible ARchive format[45]"
	},
	"50 4D 4F 43 43 4D 4F 43": {
		"signature": "50 4D 4F 43 43 4D 4F 43",
		"extension": "dat",
		"description": "Windows Files And Settings Transfer Repository[46] See also USMT 3.0 (Win XP)[47] and USMT 4.0 (Win 7)[48] User Guides"
	},
	"4E 45 53 1A": {
		"signature": "4E 45 53 1A",
		"extension": "nes",
		"description": "Nintendo Entertainment System ROM file[49]"
	},
	"75 73 74 61 72 00 30 3075 73 74 61 72 20 20 00": {
		"signature": "75 73 74 61 72 00 30 3075 73 74 61 72 20 20 00",
		"extension": "tar",
		"description": "tar archive[50]"
	},
	"4F 41 52": {
		"signature": "4F 41 52 ",
		"extension": "oar",
		"description": "OAR file archive format, where is the format version."
	},
	"74 6F 78 33": {
		"signature": "74 6F 78 33",
		"extension": "tox",
		"description": "Open source portable voxel file[51]"
	},
	"4D 4C 56 49": {
		"signature": "4D 4C 56 49",
		"extension": "MLV",
		"description": "Magic Lantern Video file[52]"
	},
	"44 43 4D 01 50 41 33 3050 41 33 30": {
		"signature": "44 43 4D 01 50 41 33 3050 41 33 30",
		"extension": "",
		"description": "Windows Update Binary Delta Compression file[53]"
	},
	"37 7A BC AF 27 1C": {
		"signature": "37 7A BC AF 27 1C",
		"extension": "7z",
		"description": "7-Zip File Format"
	},
	"1F 8B": {
		"signature": "1F 8B",
		"extension": "gztar.gz",
		"description": "GZIP compressed file[54]"
	},
	"FD 37 7A 58 5A 00": {
		"signature": "FD 37 7A 58 5A 00",
		"extension": "xztar.xz",
		"description": "XZ compression utility using LZMA2 compression"
	},
	"04 22 4D 18": {
		"signature": "04 22 4D 18",
		"extension": "lz4",
		"description": "LZ4 Frame Format[55]Remark: LZ4 block format does not offer any magic bytes.[56]"
	},
	"4D 53 43 46": {
		"signature": "4D 53 43 46",
		"extension": "cab",
		"description": "Microsoft Cabinet file"
	},
	"53 5A 44 44 88 F0 27 33": {
		"signature": "53 5A 44 44 88 F0 27 33",
		"extension": "_",
		"description": "Microsoft compressed file in Quantum format, used prior to Windows XP. File can be decompressed using Extract.exe or Expand.exe distributed with earlier versions of Windows. After compression, the last character of the original filename extension is replaced with an underscore, e.g. ‘Setup.exe’ becomes ‘Setup.ex_’."
	},
	"46 4C 49 46": {
		"signature": "46 4C 49 46",
		"extension": "flif",
		"description": "Free Lossless Image Format"
	},
	"1A 45 DF A3": {
		"signature": "1A 45 DF A3",
		"extension": "mkv | mka | mks | mk3d | webm",
		"description": "Matroska media container, including WebM"
	},
	"4D 49 4C 20": {
		"signature": "4D 49 4C 20",
		"extension": "stg",
		"description": "\"SEAN : Session Analysis\" Training file. Also used in compatible software \"Rpw : Rowperfect for Windows\" and \"RP3W : ROWPERFECT3 for Windows\"."
	},
	"41 54 26 54 46 4F 52 4D 44 4A 56": {
		"signature": "41 54 26 54 46 4F 52 4D 44 4A 56",
		"extension": "djv | udjv",
		"description": "DjVu documentThe following byte is either 55 (U) for single-page or 4D (M) for multi-page documents."
	},
	"30 82": {
		"signature": "30 82",
		"extension": "der",
		"description": "DER encoded X.509 certificate"
	},
	"2D 2D 2D 2D 2D 42 45 47 49 4E 20 43 45 52 54 49 46 49 43 41 54 45 2D 2D 2D 2D 2D": {
		"signature": "2D 2D 2D 2D 2D 42 45 47 49 4E 20 43 45 52 54 49 46 49 43 41 54 45 2D 2D 2D 2D 2D",
		"extension": "crtpem",
		"description": "PEM encoded X.509 certificate"
	},
	"2D 2D 2D 2D 2D 42 45 47 49 4E 20 43 45 52 54 49 46 49 43 41 54 45 20 52 45 51 55 45 53 54 2D 2D 2D 2D 2D": {
		"signature": "2D 2D 2D 2D 2D 42 45 47 49 4E 20 43 45 52 54 49 46 49 43 41 54 45 20 52 45 51 55 45 53 54 2D 2D 2D 2D 2D",
		"extension": "csrpem",
		"description": "PEM encoded X.509 Certificate Signing Request"
	},
	"2D 2D 2D 2D 2D 42 45 47 49 4E 20 50 52 49 56 41 54 45 20 4B 45 59 2D 2D 2D 2D 2D": {
		"signature": "2D 2D 2D 2D 2D 42 45 47 49 4E 20 50 52 49 56 41 54 45 20 4B 45 59 2D 2D 2D 2D 2D",
		"extension": "keypem",
		"description": "PEM encoded X.509 PKCS#8 private key"
	},
	"2D 2D 2D 2D 2D 42 45 47 49 4E 20 44 53 41 20 50 52 49 56 41 54 45 20 4B 45 59 2D 2D 2D 2D 2D": {
		"signature": "2D 2D 2D 2D 2D 42 45 47 49 4E 20 44 53 41 20 50 52 49 56 41 54 45 20 4B 45 59 2D 2D 2D 2D 2D",
		"extension": "keypem",
		"description": "PEM encoded X.509 PKCS#1 DSA private key"
	},
	"2D 2D 2D 2D 2D 42 45 47 49 4E 20 52 45 41 20 50 52 49 56 41 54 45 20 4B 45 59 2D 2D 2D 2D 2D": {
		"signature": "2D 2D 2D 2D 2D 42 45 47 49 4E 20 52 45 41 20 50 52 49 56 41 54 45 20 4B 45 59 2D 2D 2D 2D 2D",
		"extension": "keypem",
		"description": "PEM encoded X.509 PKCS#1 RSA private key"
	},
	"50 75 54 54 59 2D 55 73 65 72 2D 4B 65 79 2D 46 69 6C 65 2D 32 3A": {
		"signature": "50 75 54 54 59 2D 55 73 65 72 2D 4B 65 79 2D 46 69 6C 65 2D 32 3A",
		"extension": "ppk",
		"description": "PuTTY private key file version 2"
	},
	"50 75 54 54 59 2D 55 73 65 72 2D 4B 65 79 2D 46 69 6C 65 2D 33 3A": {
		"signature": "50 75 54 54 59 2D 55 73 65 72 2D 4B 65 79 2D 46 69 6C 65 2D 33 3A",
		"extension": "ppk",
		"description": "PuTTY private key file version 3"
	},
	"2D 2D 2D 2D 2D 42 45 47 49 4E 20 4F 50 45 4E 53 53 48 20 50 52 49 56 41 54 45 20 4B 45 59 2D 2D 2D 2D 2D": {
		"signature": "2D 2D 2D 2D 2D 42 45 47 49 4E 20 4F 50 45 4E 53 53 48 20 50 52 49 56 41 54 45 20 4B 45 59 2D 2D 2D 2D 2D",
		"extension": "",
		"description": "OpenSSH private key file"
	},
	"2D 2D 2D 2D 2D 42 45 47 49 4E 20 53 53 48 32 20 4B 45 59 2D 2D 2D 2D 2D": {
		"signature": "2D 2D 2D 2D 2D 42 45 47 49 4E 20 53 53 48 32 20 4B 45 59 2D 2D 2D 2D 2D",
		"extension": "pub",
		"description": "OpenSSH public key file"
	},
	"44 49 43 4D": {
		"signature": "44 49 43 4D",
		"extension": "dcm",
		"description": "DICOM Medical File Format"
	},
	"77 4F 46 46": {
		"signature": "77 4F 46 46",
		"extension": "woff",
		"description": "WOFF File Format 1.0"
	},
	"77 4F 46 32": {
		"signature": "77 4F 46 32",
		"extension": "woff2",
		"description": "WOFF File Format 2.0"
	},
	"3C 3F 78 6D 6C 20": {
		"signature": "3C 3F 78 6D 6C 20",
		"extension": "xml",
		"description": "eXtensible Markup Language[24][57]"
	},
	"3C 00 3F 00 78 00 6D 006C 00 20": {
		"signature": "3C 00 3F 00 78 00 6D 006C 00 20",
		"extension": null,
		"description": null
	},
	"00 3C 00 3F 00 78 00 6D00 6C 00 20": {
		"signature": "00 3C 00 3F 00 78 00 6D00 6C 00 20",
		"extension": null,
		"description": null
	},
	"3C 00 00 00 3F 00 00 0078 00 00 00 6D 00 00 006C 00 00 00 20 00 00 00": {
		"signature": "3C 00 00 00 3F 00 00 0078 00 00 00 6D 00 00 006C 00 00 00 20 00 00 00",
		"extension": null,
		"description": null
	},
	"00 00 00 3C 00 00 00 3F00 00 00 78 00 00 00 6D00 00 00 6C 00 00 00 20": {
		"signature": "00 00 00 3C 00 00 00 3F00 00 00 78 00 00 00 6D00 00 00 6C 00 00 00 20",
		"extension": null,
		"description": null
	},
	"4C 6F A7 94 93 40": {
		"signature": "4C 6F A7 94 93 40",
		"extension": null,
		"description": null
	},
	"00 61 73 6D": {
		"signature": "00 61 73 6D",
		"extension": "wasm",
		"description": "WebAssembly binary format[58]"
	},
	"CF 84 01": {
		"signature": "CF 84 01",
		"extension": "lep",
		"description": "Lepton compressed JPEG image[59]"
	},
	"43 57 53": {
		"signature": "43 57 53",
		"extension": "swf",
		"description": "Adobe Flash .swf"
	},
	"46 57 53": {
		"signature": "46 57 53",
		"extension": null,
		"description": null
	},
	"21 3C 61 72 63 68 3E 0A": {
		"signature": "21 3C 61 72 63 68 3E 0A",
		"extension": "deb",
		"description": "linux deb file"
	},
	"52 49 46 46 57 45 42 50": {
		"signature": "52 49 46 46 57 45 42 50",
		"extension": "webp",
		"description": "Google WebP image file, where is the file size. More information on WebP File Header"
	},
	"27 05 19 56": {
		"signature": "27 05 19 56",
		"extension": "",
		"description": "U-Boot / uImage. Das U-Boot Universal Boot Loader.[60]"
	},
	"7B 5C 72 74 66 31": {
		"signature": "7B 5C 72 74 66 31",
		"extension": "rtf",
		"description": "Rich Text Format"
	},
	"54 41 50 45": {
		"signature": "54 41 50 45",
		"extension": "",
		"description": "Microsoft Tape Format"
	},
	"00 00 01 BA": {
		"signature": "00 00 01 BA",
		"extension": "m2p | vob | mpg | mpeg",
		"description": "MPEG Program Stream (MPEG-1 Part 1 (essentially identical) and MPEG-2 Part 1)"
	},
	"00 00 01 B3": {
		"signature": "00 00 01 B3",
		"extension": "mpg | mpeg",
		"description": "MPEG-1 video and MPEG-2 video (MPEG-1 Part 2 and MPEG-2 Part 2)"
	},
	"66 74 79 70 69 73 6F 6D": {
		"signature": "66 74 79 70 69 73 6F 6D",
		"extension": "mp4",
		"description": "ISO Base Media file (MPEG-4)"
	},
	"78 01": {
		"signature": "78 01",
		"extension": "zlib",
		"description": "No Compression (no preset dictionary)"
	},
	"78 5E": {
		"signature": "78 5E",
		"extension": null,
		"description": null
	},
	"78 9C": {
		"signature": "78 9C",
		"extension": null,
		"description": null
	},
	"78 DA": {
		"signature": "78 DA",
		"extension": null,
		"description": null
	},
	"78 20": {
		"signature": "78 20",
		"extension": null,
		"description": null
	},
	"78 7D": {
		"signature": "78 7D",
		"extension": null,
		"description": null
	},
	"78 BB": {
		"signature": "78 BB",
		"extension": null,
		"description": null
	},
	"78 F9": {
		"signature": "78 F9",
		"extension": null,
		"description": null
	},
	"62 76 78 32": {
		"signature": "62 76 78 32",
		"extension": "lzfse",
		"description": "LZFSE - Lempel-Ziv style data compression algorithm using Finite State Entropy coding. OSS by Apple.[62]"
	},
	"4F 52 43": {
		"signature": "4F 52 43",
		"extension": "orc",
		"description": "Apache ORC (Optimized Row Columnar) file format"
	},
	"4F 62 6A 01": {
		"signature": "4F 62 6A 01",
		"extension": "avro",
		"description": "Apache Avro binary file format"
	},
	"53 45 51 36": {
		"signature": "53 45 51 36",
		"extension": "rc",
		"description": "RCFile columnar file format"
	},
	"65 87 78 56": {
		"signature": "65 87 78 56",
		"extension": "p25 | obt",
		"description": "PhotoCap Object Templates"
	},
	"55 55 AA AA": {
		"signature": "55 55 AA AA",
		"extension": "pcv",
		"description": "PhotoCap Vector"
	},
	"78 56 34": {
		"signature": "78 56 34",
		"extension": "pbt | pdt | pea | peb | pet | pgt | pict | pjt | pkt | pmt",
		"description": "PhotoCap Template"
	},
	"50 41 52 31": {
		"signature": "50 41 52 31",
		"extension": "",
		"description": "Apache Parquet columnar file format"
	},
	"45 4D 58 32": {
		"signature": "45 4D 58 32",
		"extension": "ez2",
		"description": "Emulator Emaxsynth samples"
	},
	"45 4D 55 33": {
		"signature": "45 4D 55 33",
		"extension": "ez3 | iso",
		"description": "Emulator III synth samples"
	},
	"1B 4C 75 61": {
		"signature": "1B 4C 75 61",
		"extension": "luac",
		"description": "Lua bytecode[63]"
	},
	"62 6F 6F 6B 00 00 00 006D 61 72 6B 00 00 00 00": {
		"signature": "62 6F 6F 6B 00 00 00 006D 61 72 6B 00 00 00 00",
		"extension": "alias",
		"description": "macOS file Alias[64] (Symbolic link)"
	},
	"5B 5A 6F 6E 65 54 72 616E 73 66 65 72 5D": {
		"signature": "5B 5A 6F 6E 65 54 72 616E 73 66 65 72 5D",
		"extension": "Identifier",
		"description": "Microsoft Zone Identifier for URL Security Zones[65]"
	},
	"52 65 63 65 69 76 65 643A": {
		"signature": "52 65 63 65 69 76 65 643A",
		"extension": "eml",
		"description": "Email Message var5[citation needed]"
	},
	"20 02 01 62 A0 1E AB 0702 00 00 00": {
		"signature": "20 02 01 62 A0 1E AB 0702 00 00 00",
		"extension": "tde",
		"description": "Tableau Datasource"
	},
	"37 48 03 02 00 00 00 0058 35 30 39 4B 45 59": {
		"signature": "37 48 03 02 00 00 00 0058 35 30 39 4B 45 59",
		"extension": "kdb",
		"description": "KDB file"
	},
	"85 03": {
		"signature": "85 03",
		"extension": "pgp",
		"description": "PGP file [66]"
	},
	"28 B5 2F FD": {
		"signature": "28 B5 2F FD",
		"extension": "zst",
		"description": "Zstandard compress[67][68]"
	},
	"52 53 56 4B 44 41 54 41": {
		"signature": "52 53 56 4B 44 41 54 41",
		"extension": "rs",
		"description": "QuickZip rs compressed archive[69][70]"
	},
	"3A 29 0A": {
		"signature": "3A 29 0A",
		"extension": "sml",
		"description": "Smile file"
	},
	"4A 6F 79 21": {
		"signature": "4A 6F 79 21",
		"extension": "",
		"description": "Preferred Executable Format"
	},
	"31 0A 30 30": {
		"signature": "31 0A 30 30",
		"extension": "srt",
		"description": "SubRip File"
	},
	"34 12 AA 55": {
		"signature": "34 12 AA 55",
		"extension": "vpk",
		"description": "VPK file, used to store game data for some Source Engine games"
	},
	"2A 2A 41 43 45 2A 2A": {
		"signature": "2A 2A 41 43 45 2A 2A",
		"extension": "ace",
		"description": "ACE (compressed file format)[citation needed]"
	},
	"60 EA": {
		"signature": "60 EA",
		"extension": "arj",
		"description": "ARJ"
	},
	"49 53 63 28": {
		"signature": "49 53 63 28",
		"extension": "cab",
		"description": "InstallShield CAB Archive File"
	},
	"4B 57 41 4A": {
		"signature": "4B 57 41 4A",
		"extension": "_",
		"description": "Windows 3.1x Compressed File"
	},
	"53 5A 44 44": {
		"signature": "53 5A 44 44",
		"extension": "_",
		"description": "Windows 9x Compressed File"
	},
	"5A 4F 4F": {
		"signature": "5A 4F 4F",
		"extension": "zoo",
		"description": "Zoo (file format)"
	},
	"50 31 0A": {
		"signature": "50 31 0A",
		"extension": "pbm",
		"description": "Portable bitmap ASCII"
	},
	"50 34 0A": {
		"signature": "50 34 0A",
		"extension": "pbm",
		"description": "Portable bitmap binary"
	},
	"50 32 0A": {
		"signature": "50 32 0A",
		"extension": "pgm",
		"description": "Portable Gray Map ASCII"
	},
	"50 35 0A": {
		"signature": "50 35 0A",
		"extension": "pgm",
		"description": "Portable Gray Map binary"
	},
	"50 33 0A": {
		"signature": "50 33 0A",
		"extension": "ppm",
		"description": "Portable Pixmap ASCII"
	},
	"50 36 0A": {
		"signature": "50 36 0A",
		"extension": "ppm",
		"description": "Portable Pixmap binary"
	},
	"D7 CD C6 9A": {
		"signature": "D7 CD C6 9A",
		"extension": "wmf",
		"description": "Windows Metafile"
	},
	"67 69 6D 70 20 78 63 66": {
		"signature": "67 69 6D 70 20 78 63 66",
		"extension": "xcf",
		"description": "XCF (file format)"
	},
	"2F 2A 20 58 50 4D 20 2A2F": {
		"signature": "2F 2A 20 58 50 4D 20 2A2F",
		"extension": "xpm",
		"description": "X PixMap"
	},
	"41 46 46": {
		"signature": "41 46 46",
		"extension": "aff",
		"description": "Advanced Forensics Format"
	},
	"45 56 46 32": {
		"signature": "45 56 46 32",
		"extension": "Ex01",
		"description": "EnCase EWF version 2 format"
	},
	"45 56 46": {
		"signature": "45 56 46",
		"extension": "e01",
		"description": "EnCase EWF version 1 format"
	},
	"51 46 49": {
		"signature": "51 46 49",
		"extension": "qcow",
		"description": "qcow file format"
	},
	"52 49 46 46 41 43 4F 4E": {
		"signature": "52 49 46 46 41 43 4F 4E",
		"extension": "ani",
		"description": "Animated cursor"
	},
	"52 49 46 46 43 44 44 41": {
		"signature": "52 49 46 46 43 44 44 41",
		"extension": "cda",
		"description": ".cda file"
	},
	"52 49 46 46 51 4C 43 4D": {
		"signature": "52 49 46 46 51 4C 43 4D",
		"extension": "qcp",
		"description": "Qualcomm PureVoice file format"
	},
	"52 49 46 58 46 47 44 4D ": {
		"signature": "52 49 46 58 46 47 44 4D (big-endian)",
		"extension": "dcr",
		"description": "Adobe Shockwave[71][72][73]"
	},
	"58 46 49 52 4D 44 47 46 ": {
		"signature": "58 46 49 52 4D 44 47 46 (little-endian)",
		"extension": null,
		"description": null
	},
	"52 49 46 58 4D 56 39 33 ": {
		"signature": "52 49 46 58 4D 56 39 33 (big-endian)",
		"extension": "dir | dxr | drx",
		"description": "Macromedia Director file format[74][72][73]"
	},
	"58 46 49 52 33 39 56 4D ": {
		"signature": "58 46 49 52 33 39 56 4D (little-endian)",
		"extension": null,
		"description": null
	},
	"46 4C 56": {
		"signature": "46 4C 56",
		"extension": "flv",
		"description": "Flash Video file"
	},
	"3C 3C 3C 20 4F 72 61 636C 65 20 56 4D 20 56 6972 74 75 61 6C 42 6F 7820 44 69 73 6B 20 49 6D61 67 65 20 3E 3E 3E": {
		"signature": "3C 3C 3C 20 4F 72 61 636C 65 20 56 4D 20 56 6972 74 75 61 6C 42 6F 7820 44 69 73 6B 20 49 6D61 67 65 20 3E 3E 3E",
		"extension": "vdi",
		"description": "VirtualBox Virtual Hard Disk file format"
	},
	"63 6F 6E 6E 65 63 74 6978": {
		"signature": "63 6F 6E 6E 65 63 74 6978",
		"extension": "vhd",
		"description": "Windows Virtual PC Virtual Hard Disk file format"
	},
	"76 68 64 78 66 69 6C 65": {
		"signature": "76 68 64 78 66 69 6C 65",
		"extension": "vhdx",
		"description": "Windows Virtual PC Windows 8 Virtual Hard Disk file format"
	},
	"49 73 5A 21": {
		"signature": "49 73 5A 21",
		"extension": "isz",
		"description": "Compressed ISO image"
	},
	"44 41 41": {
		"signature": "44 41 41",
		"extension": "daa",
		"description": "Direct Access Archive PowerISO"
	},
	"4C 66 4C 65": {
		"signature": "4C 66 4C 65",
		"extension": "evt",
		"description": "Windows Event Viewer file format"
	},
	"45 6C 66 46 69 6C 65": {
		"signature": "45 6C 66 46 69 6C 65",
		"extension": "evtx",
		"description": "Windows Event Viewer XML file format"
	},
	"73 64 62 66": {
		"signature": "73 64 62 66",
		"extension": "sdb",
		"description": "Windows customized database"
	},
	"50 4D 43 43": {
		"signature": "50 4D 43 43",
		"extension": "grp",
		"description": "Windows 3.x Program Manager Program Group file format"
	},
	"4B 43 4D 53": {
		"signature": "4B 43 4D 53",
		"extension": "icm",
		"description": "ICC profile"
	},
	"72 65 67 66": {
		"signature": "72 65 67 66",
		"extension": "dat | hiv",
		"description": "Windows Registry file"
	},
	"21 42 44 4E": {
		"signature": "21 42 44 4E",
		"extension": "pst",
		"description": "Microsoft Outlook Personal Storage Table file"
	},
	"44 52 41 43 4F": {
		"signature": "44 52 41 43 4F",
		"extension": "drc",
		"description": "3D model compressed with Google Draco[75]"
	},
	"47 52 49 42": {
		"signature": "47 52 49 42",
		"extension": "grib | grib2",
		"description": "Gridded data (commonly weather observations or forecasts) in the WMO GRIB or GRIB2 format[76]"
	},
	"42 4C 45 4E 44 45 52": {
		"signature": "42 4C 45 4E 44 45 52",
		"extension": "blend",
		"description": "Blender File Format[77]"
	},
	"00 00 00 0C 4A 58 4C 20 0D 0A 87 0A": {
		"signature": "00 00 00 0C 4A 58 4C 20 0D 0A 87 0A",
		"extension": "jxl",
		"description": "Image encoded in the JPEG XL format[78]"
	},
	"FF 0A": {
		"signature": "FF 0A",
		"extension": null,
		"description": null
	},
	"00 01 00 00 00": {
		"signature": "00 01 00 00 00",
		"extension": "ttf | tte | dfont",
		"description": "TrueType font"
	},
	"4F 54 54 4F": {
		"signature": "4F 54 54 4F",
		"extension": "otf",
		"description": "OpenType font[79]"
	},
	"23 25 4D 6F 64 75 6C 65": {
		"signature": "23 25 4D 6F 64 75 6C 65",
		"extension": "",
		"description": "Modulefile for Environment Modules[80]"
	},
	"4D 53 57 49 4D 00 00 00D0 00 00 00 00": {
		"signature": "4D 53 57 49 4D 00 00 00D0 00 00 00 00",
		"extension": "wim | swm | esd",
		"description": "Windows Imaging Format file"
	},
	"21 2D 31 53 4C 4F 42 1F": {
		"signature": "21 2D 31 53 4C 4F 42 1F",
		"extension": "slob",
		"description": "Slob (sorted list of blobs) is a read-only, compressed data store with dictionary-like interface[81]"
	},
	"AC ED": {
		"signature": "AC ED",
		"extension": "",
		"description": "Serialized Java Data[82]"
	},
	"43 72 65 61 74 69 76 65 20 56 6F 69 63 65 20 46 69 6C 65 1A 1A 00": {
		"signature": "43 72 65 61 74 69 76 65 20 56 6F 69 63 65 20 46 69 6C 65 1A 1A 00",
		"extension": "voc",
		"description": "Creative Voice file"
	},
	"2E 73 6E 64": {
		"signature": "2E 73 6E 64",
		"extension": "ausnd",
		"description": "Au audio file format"
	},
	"DB 0A CE 00": {
		"signature": "DB 0A CE 00",
		"extension": "",
		"description": "OpenGL Iris Perfomer .PFB (Performer Fast Binary)[83]"
	},
	"48 5A 4C 52 00 00 00 18": {
		"signature": "48 5a 4c 52 00 00 00 18",
		"extension": "hazelrules",
		"description": "Noodlesoft Hazel [84]"
	},
	"46 4C 68 64": {
		"signature": "46 4C 68 64",
		"extension": "flp",
		"description": "FL Studio Project File"
	},
	"31 30 4C 46": {
		"signature": "31 30 4C 46",
		"extension": "flm",
		"description": "FL Studio Mobile Project File"
	},
	"52 4B 4D 43 32 31 30": {
		"signature": "52 4b 4d 43 32 31 30",
		"extension": "",
		"description": "Vormetric Encryption DPM Version 2.1 Header[85]"
	},
	"00 01 00 00 4D 53 49 53 41 4D 20 44 61 74 61 62 61 73 65": {
		"signature": "00 01 00 00 4D 53 49 53 41 4D 20 44 61 74 61 62 61 73 65",
		"extension": "mny",
		"description": "Microsoft Money file"
	},
	"00 01 00 00 53 74 61 6E 64 61 72 64 20 41 43 45 20 44 42": {
		"signature": "00 01 00 00 53 74 61 6E 64 61 72 64 20 41 43 45 20 44 42",
		"extension": "accdb",
		"description": "Microsoft Access 2007 Database"
	},
	"00 01 00 00 53 74 61 6E 64 61 72 64 20 4A 65 74 20 44 42": {
		"signature": "00 01 00 00 53 74 61 6E 64 61 72 64 20 4A 65 74 20 44 42",
		"extension": "mdb",
		"description": "Microsoft Access Database"
	},
	"01 FF 02 04 03 02": {
		"signature": "01 FF 02 04 03 02",
		"extension": "drw",
		"description": "Micrografx vector graphic file"
	},
	"02 64 73 73": {
		"signature": "02 64 73 73",
		"extension": "dss",
		"description": "Digital Speech Standard (Olympus, Grundig, &amp; Phillips) v2"
	},
	"03 64 73 73": {
		"signature": "03 64 73 73",
		"extension": "dss",
		"description": "Digital Speech Standard (Olympus, Grundig, &amp; Phillips) v3"
	},
	"03 00 00 00 41 50 50 52": {
		"signature": "03 00 00 00 41 50 50 52",
		"extension": "adx",
		"description": "Approach index file"
	},
	"06 06 ED F5 D8 1D 46 E5 BD 31 EF E7 FE 74 B7 1D": {
		"signature": "06 06 ED F5 D8 1D 46 E5 BD 31 EF E7 FE 74 B7 1D",
		"extension": "indd",
		"description": "Adobe InDesign document"
	},
	"06 0E 2B 34 02 05 01 01 0D 01 02 01 01 02": {
		"signature": "06 0E 2B 34 02 05 01 01 0D 01 02 01 01 02",
		"extension": "mxf",
		"description": "Material Exchange Format file"
	},
	"07 53 4B 46": {
		"signature": "07 53 4B 46",
		"extension": "skf",
		"description": "SkinCrafter skin file"
	},
	"07 64 74 32 64 64 74 64": {
		"signature": "07 64 74 32 64 64 74 64",
		"extension": "dtd",
		"description": "DesignTools 2D Design file"
	},
	"0A 16 6F 72 67 2E 62 69 74 63 6F 69 6E 2E 70 72": {
		"signature": "0A 16 6F 72 67 2E 62 69 74 63 6F 69 6E 2E 70 72",
		"extension": "wallet",
		"description": "MultiBit Bitcoin wallet file"
	},
	"0D 44 4F 43": {
		"signature": "0D 44 4F 43",
		"extension": "doc",
		"description": "DeskMate Document file"
	},
	"0E 4E 65 72 6F 49 53 4F": {
		"signature": "0E 4E 65 72 6F 49 53 4F",
		"extension": "nri",
		"description": "Nero CD Compilation"
	},
	"0E 57 4B 53": {
		"signature": "0E 57 4B 53",
		"extension": "wks",
		"description": "DeskMate Worksheet"
	},
	"0F 53 49 42 45 4C 49 55 53": {
		"signature": "0F 53 49 42 45 4C 49 55 53",
		"extension": "sib",
		"description": "Sibelius Music - Score file"
	},
	"23 20 4D 69 63 72 6F 73 6F 66 74 20 44 65 76 65 6C 6F 70 65 72 20 53 74 75 64 69 6F": {
		"signature": "23 20 4D 69 63 72 6F 73 6F 66 74 20 44 65 76 65 6C 6F 70 65 72 20 53 74 75 64 69 6F",
		"extension": "dsp",
		"description": "Microsoft Developer Studio project file"
	},
	"23 21 41 4D 52": {
		"signature": "23 21 41 4D 52",
		"extension": "amr",
		"description": "Adaptive Multi-Rate ACELP (Algebraic Code Excited Linear Prediction) Codec, commonly audio format with GSM cell phones."
	},
	"23 21 53 49 4C 4B 0A": {
		"signature": "23 21 53 49 4C 4B 0A",
		"extension": "sil",
		"description": "Audio compression format developed by Skype"
	},
	"23 3F 52 41 44 49 41 4E 43 45 0A": {
		"signature": "23 3F 52 41 44 49 41 4E 43 45 0A",
		"extension": "hdr",
		"description": "Radiance High Dynamic Range image file"
	},
	"23 40 7E 5E": {
		"signature": "23 40 7E 5E",
		"extension": "vbe",
		"description": "VBScript Encoded script"
	}
}

const help = `
    [get-magic-js]

    Description: 
        A tool for extracting file signatures (magic numbers).

    Usage:
        get-magic <file> [--help] [--all] [--describe]

    Info:
        > Setting --all, forces the program to output all magic numbers found, 
          including the suspicious ones in the middle of bytecode.
        > Setting --describe makes all the extension descriptions to be logged. 
          This is useful for different programs with the same extension.
`;

const fs = require('fs');
const args = process.argv.slice(2).map(x => x.toLowerCase());
const file = (args[0] || '').toLowerCase();
const dumpall = args.includes('--all');
const describe = args.includes('--describe');

function getSignature (stream) {
    let bytes = stream.toString('hex').toUpperCase();
    let results = [];
    for (let sign in signatures) {
        if (bytes.startsWith(sign.split(' ').join(''))) {
            results.push({ 
                signature:signatures[sign].signature, 
                type:signatures[sign].extension, 
                offset:'0x'+''.padStart(8,'0')
            });
        }
    }
    if (results.length === 0) {
        results.push({ 
            signature:'??', 
            type:'txt | plain | other', 
            offset:'0x'+''.padStart(8,'0')
        });
    }

    if (dumpall) {
        for (let sign in signatures) {
            let index = bytes.indexOf(sign);
            let offset = '0x'+Buffer.from([index]).toString('hex').padStart(8,'0');
            if (index > 0) {
                let obj = { 
                    signature:signatures[sign].signature, 
                    type:signatures[sign].extension, 
                    offset:offset 
                }
                if (describe) obj.description = (signatures[sign].description || '0');
                results.push(obj);
            }
        }
    }
    results = results.map(x => `${x.offset} :: Signature[${x.signature}] :: Mime[${x.type}] `+(describe ? x.description : ' ')).join('\n');
    return results;
}

(function main () {
    if (file === '--help' || !file) return console.log(help);
    try {
        let stream = fs.readFileSync(file);
        let dump = getSignature(stream);
        console.log(dump);
    } catch (err) {
        console.log("ERROR: File Not Found | Impossible to complete dump");
        console.log(err.message);
    }
    return;
})()
