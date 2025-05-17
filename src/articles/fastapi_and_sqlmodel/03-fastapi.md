---
title: FastAPI
order: 3
---

To keep our code organized, we'll use FastAPI's Router instead of putting everything in one file. Let's create a routes package with a `pokemon.py` module. We'll create a router and prefix all endpoints with `/pokemon` to avoid repetition.

Our pokemon router needs four key functions:

```python filename="./src/blazing/routes/pokemon.py"
from fastapi import APIRoute

from blazing.db import SessionType
from blazing.models.pokemon import Pokemon


router = APIRouter(
    prefix="/pokemon",
)

@router.post("/")
def add_pokemon(pokemon: Pokemon, session: SessionType) -> Pokemon:
    pass

@router.get("/{pokemon_id}")
def get_pokemon(pokemon_id: int, session: SessionType) -> Pokemon:
    pass

@router.delete("/{pokemon_id}")
def delete_pokemon(pokemon_id: int, session: SessionType):
    pass

@router.get("/")
def list_pokemon(session: SessionType) -> list[Pokemon]:
    pass
```

In `main.py`, we'll register our router with the app.

```python filename="./src/blazing/main.py"
from fastapi import FastAPI

from blazing.routes import pokemon


app = FastAPI()
app.include_router(pokemon.router)
```
