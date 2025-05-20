# Apicurio docs analysis

Populate db:

```
python parse_adoc.py ../apicurio-registry/docs/ --db sources/files/files.db
```

Run analysis:

```bash
npm install
npm run sources; npm run build
```

See [the CLI docs](https://docs.evidence.dev/cli/) for more command information.

Learn more about evidence:

- [Docs](https://docs.evidence.dev/)
- [Github](https://github.com/evidence-dev/evidence)
- [Slack Community](https://slack.evidence.dev/)
- [Evidence Home Page](https://www.evidence.dev)


# parse_adoc.py Documentation

This document provides a comprehensive overview of `parse_adoc.py`, a Python script designed to analyze AsciiDoc (`.adoc`) files. It extracts metadata and line-based metrics, and records this information, including attribute-value definitions, into a SQLite database.

---

## Script Overview

The `parse_adoc.py` script facilitates the scanning of a specified directory or a list of `.adoc` files provided via standard input. For each `.adoc` file, it calculates various metrics such as file size, creation and modification timestamps, total lines, and counts of lines starting with alphanumeric characters, special characters, or comments. Crucially, it also parses and extracts attribute-value definitions present within the AsciiDoc files.

All collected data is then stored in a **SQLite database**, with file paths stored relative to the scanned directory. The database is structured with separate tables for files, attributes, values, and their interrelationships. Optionally, the script can also print a summary of the analyzed files in a tab-separated format to standard output.

---

## Features

* **File Analysis**: Scans `.adoc` files to collect comprehensive metadata and line-based metrics.
* **Attribute Extraction**: Identifies and extracts attribute-value definitions (e.g., `:attribute: value`).
* **SQLite Database Storage**: Persists all extracted information into a structured SQLite database.
    * **`files` table**: Stores file-specific metadata and metrics.
    * **`attributes` table**: Stores unique attribute names.
    * **`values_tbl` table**: Stores unique attribute values.
    * **`file_attributes` table**: Links files to their associated attributes.
    * **`attribute_values` table**: Links attributes to their specific values.
* **Relative Paths**: Stores file paths in the database relative to the scanned base directory, ensuring portability.
* **Parallel Processing**: Utilizes a thread pool to analyze multiple files concurrently, improving performance.
* **Summary Output**: Provides an optional tab-separated value (TSV) summary of analyzed files to standard output for quick review.
* **Error Handling**: Logs errors and warnings to `stderr` to prevent corruption of data streams or summary output.

---

## Usage

### Scanning a Directory

To scan all `.adoc` files within a specified directory and store the results in a SQLite database named `files.db`, use the following command:

```bash
./parse_adoc.py /path/to/your/docs --db files.db