#cs #splunk #logs 
# Splunk Query Language (SPL) Cheatsheet 🚀

Welcome to the ultimate Splunk Query Language (SPL) Cheatsheet! 🎉 Whether you're a seasoned Splunk user or just getting started, this page is packed with all the essential commands, tips, and tricks to supercharge your SPL skills. 💡

---

## 🗂️ Table of Contents

1. [Getting Started with SPL](#getting-started-with-spl)
2. [Basic Commands](#basic-commands)
3. [Filtering and Searching](#filtering-and-searching)
4. [Transforming Commands](#transforming-commands)
5. [Statistical Analysis](#statistical-analysis)
6. [Data Visualization](#data-visualization)
7. [Advanced Techniques](#advanced-techniques)
8. [Pro Tips & Best Practices](#pro-tips--best-practices)
9. [Helpful Resources](#helpful-resources)

---

## 🚀 Getting Started with SPL

Splunk Query Language (SPL) is used to query and manipulate data within Splunk. Here's a quick overview:

- **Search Commands**: Retrieve events from indexes.
- **Pipeline (`|`)**: Chain multiple commands together.
- **Fields**: Extract, filter, and manipulate fields.

### Basic Syntax:
```spl
<search string> | command1 [arguments] | command2 [arguments]
```

Example:
```spl
index=web_logs | stats count by status_code
```

---

## 🔍 Basic Commands

| **Command**   | **Description**                             | **Example** |
|---------------|---------------------------------------------|-------------|
| `search`      | Filters events based on keywords.           | `search error` |
| `fields`      | Includes/excludes specific fields.          | `fields host, status` |
| `table`       | Displays results in table format.           | `table user, status` |
| `dedup`       | Removes duplicate events.                   | `dedup user` |
| `sort`        | Sorts results by fields.                    | `sort - count` |

---

## 🛠️ Filtering and Searching

### Use Field-Based Searching:
```spl
index=web_logs status_code=200
```

### Exclude Data:
```spl
index=web_logs NOT status_code=404
```

### Wildcards:
```spl
index=web_logs user=*admin*
```

---

## 🔄 Transforming Commands

| **Command**   | **Description**                             | **Example** |
|---------------|---------------------------------------------|-------------|
| `eval`        | Creates or transforms fields.               | `eval status=if(status_code==200,"OK","Error")` |
| `rename`      | Renames fields.                             | `rename host AS hostname` |
| `replace`     | Replaces field values.                      | `replace "404" WITH "Not Found" IN status_code` |
| `rex`         | Extracts fields using regex.                | `rex field=_raw "(?<user>\w+)"` |

---

## 📊 Statistical Analysis

| **Command**   | **Description**                             | **Example** |
|---------------|---------------------------------------------|-------------|
| `stats`       | Provides statistical summaries.             | `stats count by user` |
| `timechart`   | Generates time-based visualizations.        | `timechart avg(response_time)` |
| `eventstats`  | Adds summary statistics to each event.      | `eventstats avg(bytes) as avg_bytes` |
| `tstats`      | Performs accelerated searches.              | `tstats count WHERE index=* BY host` |

---

## 📈 Data Visualization

### Chart Command:
```spl
index=web_logs | chart count by status_code
```

### Timechart Command:
```spl
index=web_logs | timechart span=1h avg(response_time)
```

---

## 🧙 Advanced Techniques

### Using Subsearches:
```spl
index=web_logs [search index=users user=admin | fields session_id]
```

### Custom Regex Extraction:
```spl
index=web_logs | rex "(?<method>GET|POST|PUT|DELETE)"
```

### Transaction Command:
```spl
index=web_logs | transaction session_id startswith="login" endswith="logout"
```

---

## 💡 Pro Tips & Best Practices

1. **Use Indexing Wisely**: Always specify an index for faster searches.
2. **Limit Fields**: Use `fields` to include only necessary data.
3. **Use `eval` for Calculations**: Simplify complex logic.
4. **Leverage Dashboards**: Save and visualize queries for repeated use.
5. **Profile Your Queries**: Use `Job Inspector` to analyze performance.

---

## 📚 Helpful Resources

- [Splunk Documentation](https://docs.splunk.com/)
- [Splunk YouTube Channel](https://www.youtube.com/user/splunkvideos)
- [SPL Query Examples](https://splunktool.com/)

🎉 Happy Splunking! 💻
