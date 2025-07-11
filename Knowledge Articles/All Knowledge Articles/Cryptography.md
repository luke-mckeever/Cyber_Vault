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

#### How it works:
1. The sender uses a key to encrypt the message.
2. The receiver uses the **same key** to decrypt it.
3. Both parties must have the key **before** communication.

**Example:** *If Alice wants to send a secret message to Bob, they both must already have the same key. Alice uses it to lock (encrypt) the message, and Bob uses it to unlock (decrypt) it.*

#### Common symmetric algorithms:
- AES (Advanced Encryption Standard)
- DES (Data Encryption Standard)
- RC4, Blowfish, ChaCha20
  
  Symmetric cryptography uses the **same key** for both encryption and decryption. There are **two main types** of symmetric encryption methods:

#### 🔒 1. **Block Cipher**
**How it works:** Encrypts data in **fixed-size blocks** (e.g., 128 bits).
**Example:** If a file is 1024 bits, it's split into 8 blocks of 128 bits and each is encrypted.
**Common Algorithms:** AES, DES, Blowfish
**Use Cases:** Encrypting files, databases, disk storage\

#### 🔑 2. **Stream Cipher**
**How it works:** Encrypts data **bit by bit** or **byte by byte**, like a continuous stream.
**Example:** Ideal for live data like voice or video.
**Common Algorithms:** RC4, ChaCha20
**Use Cases:** Secure calls, real-time messaging, wireless encryption

---

## Asymmetric Cryptography

**Asymmetric cryptography** (also known as **public-key cryptography**) is a type of encryption that uses **two separate keys**: a **public key** to encrypt data, and a **private key** to decrypt it. These keys are mathematically linked.

#### How it works:
1. The sender encrypts a message using the **recipient’s public key**.
2. Only the **recipient's private key** can decrypt that message.
3. This means the message can only be read by the intended recipient.

**Example:** _If Alice wants to send a secure message to Bob, she uses Bob’s public key to encrypt it. Only Bob can decrypt it using his private key — even Alice can’t decrypt what she just sent._

#### Common asymmetric algorithms:
- RSA (Rivest–Shamir–Adleman)
- ECC (Elliptic Curve Cryptography)
- DSA (Digital Signature Algorithm)

Asymmetric cryptography allows **secure communication without sharing a secret key** in advance. It’s also commonly used in **digital signatures** and **key exchange protocols**.

#### 🔐 Uses of Asymmetric Cryptography:

- **Secure Key Exchange** (e.g., during TLS/SSL handshake)
- **Digital Signatures** (authenticating the sender)
- **Email Encryption** (e.g., PGP/GPG)
- **Cryptocurrency Wallets** (signing transactions)

--- 

## Encryption

#### Full Disk Encryption
> **Definition** – A method of encrypting **all data** on a physical disk, including the operating system, system files, and free space. The entire drive is protected, and decryption usually occurs at boot time using a password or key.

#### Partition Encryption
> **Definition** – Encrypts a specific **partition** (a section of a hard drive), rather than the entire disk. Only the selected partition's data is protected, allowing other partitions to remain unencrypted if desired.

#### File Encryption
> **Definition** – Encrypts **individual files** rather than an entire disk or partition. This method allows users to selectively protect sensitive documents, making it ideal for secure file sharing or storage.

#### Volume (Block) Encryption
> **Definition** – A method of encrypting an entire **logical volume** or **block device**, such as a virtual disk or LVM partition. It encrypts data at the block level, regardless of the file system or files stored, providing transparent encryption to the operating system.

#### Database and Record Encryption
> **Definition** – The practice of encrypting data within a **database**, either at the **whole database level** or more granularly at the **record or field level**. This ensures sensitive data such as names, addresses, or credit card numbers remains protected even if the database is compromised.

---

## Cryptographic Hashing 
> **Hashing** is the process of converting data (like a file, password, or message) into a fixed-length string of characters, called a **hash value** or **digest**, using a mathematical function known as a **hash function**.

#### ⚙️ Key Characteristics:
- **One-way**: You can generate a hash from data, but you **can’t reverse** the hash to get the original data.
- **Fixed Output**: No matter the size of the input, the output hash is always the same length (e.g., 256 bits for SHA-256).
- **Unique (ideally)**: Different inputs produce different hashes. If two inputs produce the same hash, it's called a **collision**.
- **Deterministic**: The same input will always produce the same hash.

#### 🔒 Common Uses:
- **Password storage** (storing only the hash, not the actual password)
- **Data integrity checks** (verifying that data hasn't changed)
- **Digital signatures**
- **File or malware identification**

#### 🧪 Example:
|**Hashing Algorithm**|**Hash Output**|
|---|---|
|**MD5**|`5d41402abc4b2a76b9719d911017c592`|
|**SHA-1**|`aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d`|
|**SHA-256**|`2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824`|
|**SHA-512**|`9b71d224bd62f3785d96d46ad3ea3d73319bfc...` _(truncated for readability)_|

### Salting 

####  🧂 What is Salting in Hashing?
> **Salting** is the process of adding **random data (called a salt)** to a password **before hashing it**. This makes the hash **unique**, even if two users have the same password.

#### 🔒 Why Salting is Important:
##### Without a salt:
- Two identical passwords produce the **same hash**.
- Attackers can use **precomputed hash tables** (rainbow tables) to reverse common hashes.

##### With a salt:
- Even if two users choose "password123", the added random salt makes their hashes **completely different**.
- It defeats rainbow table attacks by making each hash unique and unpredictable.

--- 



