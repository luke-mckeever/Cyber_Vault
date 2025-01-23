#CS 
# 🔍 Regex Cheat Sheet

Your go-to guide for mastering Regular Expressions (Regex)! 🛠️ Use these patterns to match, search, and manipulate text with precision. 🎯

---

## 📋 Basic Syntax

| **Pattern**    | **Description**                            | **Example**                          |
|----------------|--------------------------------------------|--------------------------------------|
| `.`            | Matches any character except a newline.    | `a.c` matches `abc`, `axc`, `a@c`.  |
| `^`            | Matches the start of a string.             | `^Hello` matches `Hello world`.     |
| `$`            | Matches the end of a string.               | `world$` matches `Hello world`.     |
| `*`            | Matches 0 or more of the preceding token.  | `ab*c` matches `ac`, `abc`, `abbc`. |
| `+`            | Matches 1 or more of the preceding token.  | `ab+c` matches `abc`, `abbc`.       |
| `?`            | Matches 0 or 1 of the preceding token.     | `ab?c` matches `ac`, `abc`.         |
| `{n}`          | Matches exactly `n` occurrences.           | `a{3}` matches `aaa`.               |
| `{n,}`         | Matches `n` or more occurrences.           | `a{2,}` matches `aa`, `aaa`, `aaaa`.|
| `{n,m}`        | Matches between `n` and `m` occurrences.   | `a{1,3}` matches `a`, `aa`, `aaa`.  |

---

## 🔍 Character Classes

| **Pattern**    | **Description**                            | **Example**                          |
|----------------|--------------------------------------------|--------------------------------------|
| `[abc]`        | Matches any of the characters inside.      | `[abc]` matches `a`, `b`, or `c`.   |
| `[^abc]`       | Matches any character not inside.          | `[^abc]` matches `x`, `y`, `z`.     |
| `[a-z]`        | Matches any character in range.            | `[a-z]` matches `a` to `z`.         |
| `\d`          | Matches any digit (0-9).                   | `\d` matches `3` in `abc3`.        |
| `\D`          | Matches any non-digit.                     | `\D` matches `a` in `abc3`.        |
| `\w`          | Matches any word character (alphanumeric). | `\w` matches `a` in `abc`.         |
| `\W`          | Matches any non-word character.            | `\W` matches `!` in `a!b`.         |
| `\s`          | Matches any whitespace character.          | `\s` matches space in `a b`.       |
| `\S`          | Matches any non-whitespace character.      | `\S` matches `a` in `a b`.         |

---

## 🎭 Anchors and Boundaries

| **Pattern**    | **Description**                            | **Example**                          |
|----------------|--------------------------------------------|--------------------------------------|
| `\b`          | Matches a word boundary.                   | `\bcat\b` matches `cat`.           |
| `\B`          | Matches a non-word boundary.               | `\Bcat` matches `scatter`.         |
| `^`            | Start of string.                          | `^Hello` matches `Hello world`.     |
| `$`            | End of string.                            | `world$` matches `Hello world`.     |

---

## 🔗 Groups and Lookarounds

| **Pattern**    | **Description**                            | **Example**                          |
|----------------|--------------------------------------------|--------------------------------------|
| `(abc)`        | Captures group for backreference.          | `(abc)` matches `abc`.              |
| `(?:abc)`      | Non-capturing group.                       | `(?:abc)` matches `abc` but does not capture. |
| `(?=abc)`      | Positive lookahead.                        | `\d(?=px)` matches `5` in `5px`.    |
| `(?!abc)`      | Negative lookahead.                        | `\d(?!px)` matches `5` in `5em`.    |
| `(?<=abc)`     | Positive lookbehind.                       | `(?<=\$)\d+` matches `100` in `$100`.|
| `(?<!abc)`     | Negative lookbehind.                       | `(?<!\$)\d+` matches `100` in `100`.|

---

## 📋 Special Characters

| **Pattern**    | **Description**                            |
|----------------|--------------------------------------------|
| `\`           | Escapes special characters.                |
| `|`            | OR operator (alternation).                 |
| `.`            | Matches any character except newline.      |
| `\n`          | Matches a newline character.               |
| `\t`          | Matches a tab character.                   |

---

## 🛠️ Practical Examples

| **Task**                            | **Regex**                         | **Description**                                   |
|-------------------------------------|-----------------------------------|-------------------------------------------------|
| Match an email address              | `[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}` | Validates email format.                        |
| Match a phone number                | `\d{3}-\d{3}-\d{4}`             | Matches `123-456-7890`.                        |
| Match a URL                         | `https?://[\w.-]+`               | Matches `http://example.com`.                  |
| Extract numbers from text           | `\d+`                           | Matches sequences of digits.                   |
| Match a date in `YYYY-MM-DD` format | `\d{4}-\d{2}-\d{2}`             | Matches `2023-01-20`.                          |
| Match an IPv4 address               | `\b(?:\d{1,3}\.){3}\d{1,3}\b` | Matches `192.168.0.1`.                         |
| Match an IPv6 address               | `([a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}` | Matches `2001:0db8:85a3:0000:0000:8a2e:0370:7334`. |
| Match an MD5 hash                   | `[a-fA-F0-9]{32}`                | Matches a 32-character hexadecimal hash.       |
| Match a SHA-256 hash                | `[a-fA-F0-9]{64}`                | Matches a 64-character hexadecimal hash.       |

---

## 💡 Tips and Tricks

1. **Test Your Regex**: Use online tools like [regex101](https://regex101.com) to test patterns.
2. **Combine Patterns**: Use groups and alternations for flexible matching.
3. **Escape Special Characters**: Remember to escape special characters when needed.
4. **Keep It Simple**: Start small and build up your regex for complex tasks.

Unlock the power of Regex to streamline text processing and pattern matching! 🚀
