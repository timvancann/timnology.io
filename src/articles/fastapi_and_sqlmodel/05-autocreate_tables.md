---
title: Autocreate tables
order: 5
---

Back to `db.py`, to ensure our tables exist when the app starts, we'll add a `create_db_and_tables` function. This reads all registered models (currently just `Pokemon`) and executes the necessary `create table` statements. We'll use a lifespan context manager to run this at startup, with cleanup code after the `yield` executing during graceful shutdown.

```python filename="-./src/blazing/db.py"
...


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)

...
```

```python filename="./src/blazing/main.py"
from contextlib import asynccontextmanager
from fastapi import FastAPI

from blazing.db import create_db_and_tables
from blazing.routes import pokemon

@asynccontextmanager
async def lifespan(_: FastAPI):
    create_db_and_tables()
    yield


app = FastAPI(lifespan=lifespan)
app.include_router(pokemon.router)
```
