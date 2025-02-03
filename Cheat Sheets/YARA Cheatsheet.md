# YARA Cheatsheet 🕵️‍♂️✨
#CS #BLUE 

Welcome to the **Ultimate YARA Cheatsheet**! 🎯 This guide is packed with everything you need to master YARA rules for malware detection, pattern matching, and more. Let’s dive into the syntax and best practices! 🚀

For a full breakdown on YARA and what it is please visit this page -> [[YARA and You]]

---

## 🛠️ Basic Syntax Overview

```yara
global rule <rule_name> {
    meta:
        author = "<Your Name>"
        description = "<Description of the rule>"
        date = "YYYY-MM-DD"

    strings:
        $string_name = "<string_value>"
        $hex_string = { 01 23 ?? 45 [4-6] 89 }
        $regex = /<regex_pattern>/ nocase wide

    condition:
        <logical_condition>
}
```

---

## 🎯 **Sections Explained**

### 📜 `meta` Section
- Add metadata to describe the rule.
- **Example:**
    ```yara
    meta:
        author = "Jane Doe"
        description = "Detects suspicious files"
        version = "1.0"
    ```

### 🔍 `strings` Section
- Define text, hexadecimal, or regex patterns to search.
- **String Modifiers:**
  - `nocase` - Case insensitive.
  - `wide` - Matches UTF-16 strings.
  - `ascii` - Matches ASCII strings.
  - `xor` - Matches XOR-encoded strings.
- **Example:**
    ```yara
    strings:
        $text = "malicious_string" nocase wide
        $hex = { 4D 5A 90 00 ?? ?? ?? 00 }
        $regex = /malicious_regex/ nocase
    ```

### 🧮 `condition` Section
- Logical expressions to trigger the rule.
- **Operators:**
  - `and`, `or`, `not`
  - `of` - Matches a set of strings.
  - `for` - Iterates over conditions.
- **Example:**
    ```yara
    condition:
        any of ($text, $hex, $regex)
    ```

---

## 🧩 **Advanced Syntax**

### ➕ Boolean Logic
```yara
condition:
    $string1 and ($string2 or $string3)
```

### 🔗 Combining Strings
```yara
condition:
    all of them
```

### 🔁 Loops
```yara
condition:
    for any i in (1..#string_name): ( @string_name[i] < 100 )
```

### 🎯 Matching File Sizes
```yara
condition:
    filesize < 1MB
```

---

## 📌 Best Practices & Tips 🧠

1. **Use Descriptive Names**: Make string and rule names meaningful.
2. **Optimize Performance**: Limit regex complexity and avoid overlapping string matches.
3. **Comment Your Rules**: Use `//` for comments.
4. **Test Extensively**: Use diverse samples to validate rules.

---

## 🚀 Quick Reference Table

| Feature            | Syntax                                   | Example                          |
|--------------------|------------------------------------------|----------------------------------|
| Define a String    | `$name = "value"`                       | `$malware = "malicious"`        |
| Hexadecimal Match  | `$name = { AA BB CC ?? DD [4-6] EE }`   | `$hex = { 4D 5A 90 00 }`        |
| Regex Match        | `$name = /regex/`                       | `$email = /\w+@\w+\.com/`      |
| String Modifiers   | `nocase, wide, ascii, xor`              | `$mod = "string" nocase wide`   |
| Match File Size    | `filesize < X`                          | `filesize < 10KB`               |
| Logical Operators  | `and, or, not, of, any, all`            | `any of them`                   |

---

## 🛡️ Resources 📚

- [Official YARA Documentation](https://virustotal.github.io/yara/)
- [YARA GitHub Repository](https://github.com/VirusTotal/yara)
- [YARA Rule Writing Tutorials](https://yara.readthedocs.io/)

---

💡 **Pro Tip**: Keep improving your rules by collaborating and reviewing others' work. Happy hunting! 🐾
