---
title: Logger hierarchy
order: 8
--- 
A larger application will have many modules and many logger instances.
The strength of Python logging lies in its hierarchical structure.
Loggers instances are arranged like a family tree, with the root logger at the top.
The `dot` in the name of a logger indicates there is an ancestor relationship.
This nicely matches how module hierarchy in python also works.

When a log record is created by a logger, first it’s level and filters are checked.
If both allow the log record to be processed it is passed to each of its handlers.
The handlers also check the log level and filters before directing the record to its configured output.

When the logger is fully done with the log record, it passes the record to its parent.
This is called propagation. The parent passes it to its handlers and then to its parent.
This continues until the log record hits the root logger.

Here's a key point though: log level and filter checks on loggers only happen at the logger that creates the message.
Any ancestor, including the root logger do not re-check these. All handlers will still process all of their log levels and filters.

```python
import logging

parent = logging.getLogger("parent")
parent_stream_handler = logging.StreamHandler()
parent_stream_handler.setFormatter(logging.Formatter("PARENT - %(message)s"))
parent.addHandler(parent_stream_handler)

child = logging.getLogger("parent.child")
child_stream_handler = logging.StreamHandler()
child_stream_handler.setFormatter(logging.Formatter("CHILD - %(message)s"))
child.addHandler(child_stream_handler)

child.warning("This is a warning message")
```

This will output:

```bash
$ python my_app.py
CHILD - This is a warning message
PARENT - This is a warning message
```

If you do NOT want your log record to be passed to a parent, you can set the propagation field on a logger to false.
This will stop the record propagation to any ancestor.

```python
child.propagate = False
```

Now the output will only be:

```bash
$ python my_app.py
CHILD - This is a warning message
```

