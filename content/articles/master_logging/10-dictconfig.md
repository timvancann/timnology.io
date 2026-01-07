---
title: dictConfig
order: 10
--- 

So far, we've been configuring loggers one by one. But for complex applications, you might prefer a more organised approach.
Using `logging.config.dictConfig` allows you to define a dictionary containing all your loggers configurations, including levels, handlers, and filters.
It's a powerful construct for managing your logging setup efficiently.

```python
config_dict = {
    "version": 1,
    "formatters": {
        "default": {
            "format": "%(asctime)s - %(name)s - %(levelname)s - %(message)s",
        },
    },
    "handlers": {
        "console": {
            "class": "logging.StreamHandler",
            "formatter": "default",
        },
        "file": {
            "class": "logging.FileHandler",
            "filename": "app.log",
            "formatter": "default",
        },
    },
    "loggers": {
        "my_app": {
            "level": "WARNING",
            "handlers": ["file"],
            "propagate": False,
        },
        "my_app.database": {
            "level": "WARNING",
            "handlers": ["console"],
        },
    },
}

logging.config.dictConfig(config_dict)

logger = logging.getLogger("my_app.database")
logger.warning("This is a warning message")
```

This will output:

```bash
$ python my_app.py
2021-08-15 15:00:00,000 - my_app.database - WARNING - This is a warning message

$ cat app.log
2021-08-15 15:00:00,000 - my_app.database - WARNING - This is a warning message
```

