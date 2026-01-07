---
title: Handler Formatter
order: 4
---

A handler's output can customized by setting a [Formatter](https://docs.python.org/3/library/logging.html#logging.Formatter).
A formatter can be created by adding a formatting string to `logging.Formatter`. This can contain normal text and predefined fields, such as time and loglevel.

```python
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)
```

You can also create a fully custom formatter by extending the `logging.Formatter` class and implementing the format method. This allows you to do whatever you want, such as logging as json.

```python
class JsonFormatter(logging.Formatter):
    def format(self, record: logging.LogRecord) -> str:
        return json.dumps({
            "time": record.asctime,
            "name": record.name,
            "level": record.levelname,
            "message": record.getMessage(),
        })

handler.setFormatter(JsonFormatter())
```
