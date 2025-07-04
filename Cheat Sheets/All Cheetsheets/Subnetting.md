# 🌐 Subnetting Cheat Sheet 🚀

> **A Fancy, Feature-Rich Guide to Mastering Subnetting!**
## 🔢 CIDR & Subnet Mask

| CIDR | Subnet Mask | Total Addresses | Wildcard Mask |
|------|------------|----------------|--------------|
| /32  | 255.255.255.255 | 1 | 0.0.0.0 |
| /31  | 255.255.255.254 | 2 | 0.0.0.1 |
| /30  | 255.255.255.252 | 4 | 0.0.0.3 |
| /29  | 255.255.255.248 | 8 | 0.0.0.7 |
| /28  | 255.255.255.240 | 16 | 0.0.0.15 |
| /27  | 255.255.255.224 | 32 | 0.0.0.31 |
| /26  | 255.255.255.192 | 64 | 0.0.0.63 |
| /25  | 255.255.255.128 | 128 | 0.0.0.127 |
| /24  | 255.255.255.0 | 256 | 0.0.0.255 |
| /23  | 255.255.254.0 | 512 | 0.0.1.255 |

*And more...* 🏗

---

## 🖥 IPv4 Address Classes

| Class | Range | Default Subnet Mask |
|-------|------------------------|----------------|
| A     | 0.0.0.0 - 127.255.255.255 | 255.0.0.0 |
| B     | 128.0.0.0 - 191.255.255.255 | 255.255.0.0 |
| C     | 192.0.0.0 - 223.255.255.255 | 255.255.255.0 |
| D     | 224.0.0.0 - 239.255.255.255 | Multicast |
| E     | 240.0.0.0 - 255.255.255.255 | Reserved |

💡 **Tip:** Classes D & E are reserved for special purposes like Multicast & Research!

---

## 🌍 Special IPv4 Addresses

### 🔒 Private IP Ranges
- **Class A:** `10.0.0.0 - 10.255.255.255`
- **Class B:** `172.16.0.0 - 172.31.255.255`
- **Class C:** `192.168.0.0 - 192.168.255.255`

### 🚀 Reserved & Loopback
- **Localhost:** `127.0.0.0 - 127.255.255.255`
- **APIPA (Automatic Private IP Addressing):** `169.254.0.0 - 169.254.255.255`

---

## 🔄 Decimal to Binary Table

| Decimal | Binary |
|---------|--------|
| 1 | 00000001 |
| 2 | 00000010 |
| 3 | 00000011 |
| 4 | 00000100 |
| 5 | 00000101 |
| ... | ... |
| 255 | 11111111 |

🤖 **Pro Tip:** Use the `ipcalc` or `subnetcalc` CLI tools to quickly convert between decimal and binary! 🛠

---

## 🛠 Useful Tools
🔗 [Subnet Calculator](https://www.subnet-calculator.com/)
🔗 [CIDR to IP Range](https://www.ipaddressguide.com/cidr)
🔗 [Binary to Decimal Converter](https://www.rapidtables.com/convert/number/binary-to-decimal.html)

---

🔥 **Enjoy this cheat sheet? Star ⭐ the repository and share it with fellow network engineers!** 🚀
