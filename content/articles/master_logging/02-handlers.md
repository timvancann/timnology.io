---
title: Handlers
order: 2
---

To remedy that, we have to talk about the second concept, handlers. A logger can have multiple handlers assigned, by default it has none. The main purpose of a handler is directing a `LogRecord` to an output.

The most common one is the [`StreamHandler`](https://docs.python.org/3/library/logging.handlers.html#logging.StreamHandler), which print logs to your console.

```python
stream_handler = logging.StreamHandler()
logger.addHandler(stream_handler)
```

And the [`FileHandler`](https://docs.python.org/3/library/logging.handlers.html#filehandler), which writes logs to a file.

```python
file_handler = logging.FileHandler("mylog.log")
logger.addHandler(file_handler)
```

Of course, you can also write your own handlers by extending the `logging.Handler` class and implementing the emit method.
You can do whatever you want, here is a log handler that sends every message to an API.

```python
class CustomHandler(logging.Handler):
	def emit(self, record: logging.LogRecord):
		import json
		import requests

		requests.post(
			"https://my_endpoint.io/logs",
			json={"level": record.levelname, "message": record.getMessage()},
		)

logger.addHandler(CustomHandler())
```
