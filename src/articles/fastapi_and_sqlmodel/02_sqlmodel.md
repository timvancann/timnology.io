---
title: SQLModel
order: 2
---

In `models/pokemon.py`, we'll define our SQLModel. By setting the ID as an optional primary key, we let PostgreSQL generate a new ID when creating an entity. Using `default_factory`, the model automatically inserts the creation timestamp along with three required fields: `name`, `number`, and an enum `region`.

```python filename="./src/blazing/models/pokemon.py"
from __future__ import annotations

from datetime import datetime, timezone

import enum
from sqlmodel import Field, SQLModel

class Region(enum.Enum):
    kanto = "Kanto"
    johto = "Johto"


class Pokemon(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    name: str
    number: int
    region: Region
```

We'll create a new `db.py` module to handle database connectivity. Here, we'll read PostgreSQL credentials from environment variables, initialise the engine, and create a function that yields a Session object.

```python filename="./src/blazing/db.py"
from os import environ
from sqlmodel import SQLModel, create_engine, Session

username = environ.get("POSTGRES_USER")
password = environ.get("POSTGRES_PASSWORD")
host = environ.get("POSTGRES_HOST")
db = environ.get("POSTGRES_DB")
postgres_url = f"postgresql://{username}:{password}@{host}:5432/{db}"

engine = create_engine(postgres_url)

get_session():
    with Session(engine) as session:
        yield session
```
