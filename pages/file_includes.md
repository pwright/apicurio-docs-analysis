---
title: File Includes
description: Show file includes per file
---

This page lists each AsciiDoc file and all the files it includes, preserving the order in which they appear.


```sql includes
SELECT
  fi.source_file_path,
  fi.include_order,
  fi.included_file_path,
  fi.included_filename,
  CASE
    WHEN LAG(fi.source_file_path) OVER (ORDER BY fi.source_file_path, fi.include_order) IS DISTINCT FROM fi.source_file_path
    THEN 1
    ELSE 0
  END AS is_new_group
FROM file_includes fi
ORDER BY fi.source_file_path, fi.include_order;
```




{#each includes as row}
  {#if row.is_new_group === 1}
  ## {row.source_file_path}
  {/if}

  - {row.included_filename}

{/each}