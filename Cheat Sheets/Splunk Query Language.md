#splunk #logs 
# 🔍 Splunk Query Language (SPL) Cheatsheet

Welcome to the ultimate guide to Splunk's Search Processing Language (SPL)! Use these queries to extract insights from your data with ease. 🎉

---

## Basic Search Queries 📜

| **Query**                 | **Description**                              |
|---------------------------|----------------------------------------------|
| index=*                 | Search across all indexes.                  |
| index=web_logs          | Search within a specific index.             |
| index=web_logs error    | Search for the term "error" in events.      |
| sourcetype=access_logs  | Filter events by sourcetype.                |
| host=server1            | Search events from a specific host.         |
| index=* | head 10       | Return the first 10 results.                |

> **Tip**: Narrow your search by specifying indexes or sourcetypes to improve performance.

---

## Filtering and Sorting 🛠️

| **Query**                          | **Description**                                   |
|------------------------------------|-------------------------------------------------|
| index=web_logs status=404        | Find events with a specific field value.        |
| index=web_logs \| sort - _time    | Sort results by time in descending order.       |
| index=web_logs \| dedup user_id   | Remove duplicate results based on a field.      |
| index=web_logs \| where response>5| Filter results where response time > 5ms.       |
| index=web_logs \| fields user_id  | Show only specific fields in the output.        |

> **Tip**: Combine `sort` and `where` for precise filtering.

---

## Transforming Commands 🔄

| **Query**                              | **Description**                                     |
|----------------------------------------|---------------------------------------------------|
| index=web_logs \| stats count by status| Count events grouped by a field.                 |
| index=web_logs \| top user_agent       | Show the most frequent values for a field.       |
| index=web_logs \| table user_id status | Display specific fields in table format.         |
| index=web_logs \| eval duration=total/60| Create a new calculated field.                   |
| index=web_logs \| rename user_id as user| Rename a field for clarity.                      |

> **Tip**: Use `table` for cleaner results when sharing data.

---

## Statistical Functions 📊

| **Query**                              | **Description**                                     |
|----------------------------------------|---------------------------------------------------|
| index=web_logs \| stats avg(response)  | Calculate the average value of a field.          |
| index=web_logs \| stats max(response)  | Find the maximum value of a field.               |
| index=web_logs \| stats sum(bytes)     | Calculate the total sum of a field.              |
| index=web_logs \| stats count by host  | Count events grouped by a field.                 |
| index=web_logs \| stats range(response)| Find the range of values in a field.             |

> **Tip**: Combine stats commands for advanced analytics.

---

## Time-Based Searches ⏳

| **Query**                                 | **Description**                                   |
|-------------------------------------------|-------------------------------------------------|
| index=web_logs earliest=-24h            | Search events from the last 24 hours.           |
| index=web_logs latest=now               | Search events up to the current time.           |
| index=web_logs \| bucket span=1h _time   | Group events into hourly intervals.             |
| index=web_logs \| timechart count span=1d| Create a daily event count chart.               |
| index=web_logs \| bin span=15m _time     | Group events into 15-minute intervals.          |

> **Tip**: Use `earliest=` and `latest=` to define precise time ranges.

---

## Visualization and Reporting 📈

| **Query**                                  | **Description**                                   |
|--------------------------------------------|-------------------------------------------------|
| index=web_logs \| chart count by status    | Generate a bar chart by field.                  |
| index=web_logs \| timechart avg(response)  | Plot the average response time over time.       |
| index=web_logs \| top user_agent           | Create a visualization of top user agents.      |
| index=web_logs \| chart sum(bytes) by host | Visualize total bytes transferred by host.      |
| index=web_logs \| stats values(user_agent) | List unique values of a field.                 |

> **Tip**: Save frequently used visualizations to dashboards.

---

## Tips and Tricks 💡

- **Wildcards**: Use `*` for partial matches (e.g., `error*` for "error" and "errors").
- **Boolean Operators**: Combine terms with `AND`, `OR`, and `NOT`.
- **Dashboards**: Save queries and visualizations for quick access.
- **Alerts**: Set alerts on critical queries to stay proactive.

Master these queries and unlock the full potential of your Splunk data! 🚀
