---
title: Annotated Session Type
order: 4
---

While we could directly supply a `Depends` object with the `get_session` function to the endpoints, this limits code completion since the editor can't determine the type. Instead, we'll wrap `Depends` inside an `Annotated` object, providing context for type-checkers and enabling better code completion.

--- filename: ./src/blazing/db.py ---
```python
...

from typing import Annotated
from fastapi import Depends

...

SessionType = Annotated[Session, Depends(get_session)]

```

--- filename: ./src/blazing/routes/pokemon.py ---
```python
...
def add_pokemon(pokemon: Pokemon, session: SessionType) -> Pokemon:

...

def get_pokemon(pokemon_id: int, session: SessionType) -> Pokemon:

...

def delete_pokemon(pokemon_id: int, session: SessionType):

...

def list_pokemon(session: SessionType) -> list[Pokemon]:

...
```
