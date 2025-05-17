---
title: Handler Filters
order: 7
--- 

Not only loggers can have filters.
Handlers can also be given filters! Making handlers the most versatile concept in python logging.

```python
def custom_filter(record: logging.LogRecord):
    return "oops" in record.getMessage()

handler.addFilter(custom_filter)
```

