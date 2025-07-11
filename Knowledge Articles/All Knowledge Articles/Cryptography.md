# Cryptography 

> **Cryptography** is the scientific discipline concerned with the design and analysis of techniques for securing information and communications through the use of mathematical and algorithmic methods. It ensures the **confidentiality**, **integrity**, **authenticity**, and **non-repudiation** of data by transforming it in such a way that only authorized parties can access or interpret it.

**In Short** **Cryptography** is the practice of using codes and techniques to protect information so that only the intended people can read or access it.

### Types of Cryptography: 

|Feature|**Symmetric Cryptography**|**Asymmetric Cryptography**|
|---|---|---|
|**Keys Used**|One shared secret key|One public key + one private key|
|**Speed**|Faster|Slower|
|**Security Risk**|Key must be securely shared|No need to share private key|
|**Use Case**|Bulk data encryption|Secure key exchange, authentication|
|**Examples**|AES, RC4, Blowfish|RSA, ECC, DSA|

--- 

## Symmetric Cryptography

**Symmetric cryptography** is a type of encryption where the **same secret key** is used for both **encrypting** (turning readable data into secret code) and **decrypting** (turning it back into readable data).

### How it works:
1. The sender uses a key to encrypt the message.
2. The receiver uses the **same key** to decrypt it.
3. Both parties must have the key **before** communication.

**Example:** *If Alice wants to send a secret message to Bob, they both must already have the same key. Alice uses it to lock (encrypt) the message, and Bob uses it to unlock (decrypt) it.*

### Common symmetric algorithms:
- AES (Advanced Encryption Standard)
- DES (Data Encryption Standard)
- RC4, Blowfish, ChaCha20
  
  Symmetric cryptography uses the **same key** for both encryption and decryption. There are **two main types** of symmetric encryption methods:

### 🔒 1. **Block Cipher**
**How it works:** Encrypts data in **fixed-size blocks** (e.g., 128 bits).
**Example:** If a file is 1024 bits, it's split into 8 blocks of 128 bits and each is encrypted.
**Common Algorithms:** AES, DES, Blowfish
**Use Cases:** Encrypting files, databases, disk storage\

### 🔑 2. **Stream Cipher**
**How it works:** Encrypts data **bit by bit** or **byte by byte**, like a continuous stream.
**Example:** Ideal for live data like voice or video.
**Common Algorithms:** RC4, ChaCha20
**Use Cases:** Secure calls, real-time messaging, wireless encryption

---

## Asymmetric Cryptography

**Asymmetric cryptography** (also known as **public-key cryptography**) is a type of encryption that uses **two separate keys**: a **public key** to encrypt data, and a **private key** to decrypt it. These keys are mathematically linked.

### How it works:
1. The sender encrypts a message using the **recipient’s public key**.
2. Only the **recipient's private key** can decrypt that message.
3. This means the message can only be read by the intended recipient.

**Example:** _If Alice wants to send a secure message to Bob, she uses Bob’s public key to encrypt it. Only Bob can decrypt it using his private key — even Alice can’t decrypt what she just sent._

### Common asymmetric algorithms:
- RSA (Rivest–Shamir–Adleman)
- ECC (Elliptic Curve Cryptography)
- DSA (Digital Signature Algorithm)

Asymmetric cryptography allows **secure communication without sharing a secret key** in advance. It’s also commonly used in **digital signatures** and **key exchange protocols**.

### 🔐 Uses of Asymmetric Cryptography:

- **Secure Key Exchange** (e.g., during TLS/SSL handshake)
- **Digital Signatures** (authenticating the sender)
- **Email Encryption** (e.g., PGP/GPG)
- **Cryptocurrency Wallets** (signing transactions)

--- 


