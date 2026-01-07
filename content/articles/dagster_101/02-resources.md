---
title: Resources
order: 2
---

A **resource** is a connection to an external system that Dagster injects into assets. Resources are defined once and reused across multiple assets.

## Example: DuckDB Resource

```python
from pathlib import Path
import polars as pl
import dagster as dg
from dagster_duckdb import DuckDBResource


@dg.asset
def plays(duckdb: DuckDBResource) -> None:
    date = Path("2025/10/16")
    df = pl.read_csv(date / "plays.csv")
    df.write_database(
        table_name="plays",
        connection=f"duckdb:///{duckdb.database}"
    )


duckdb_resource = DuckDBResource(database="db.duckdb")


def definitions() -> dg.Definitions:
    return dg.Definitions(
        assets=[plays],
        resources={"duckdb": duckdb_resource},
    )
```

## How It Works

1. **Declaration** — The resource is instantiated once in the definitions
2. **Injection** — Dagster matches the parameter name (`duckdb`) to the resource key
3. **Usage** — The asset receives a configured resource instance

## Limitations

Resources provide raw access to external systems, but the asset still contains the serialization logic (`df.write_database`). This has drawbacks:

- Changing storage backends requires modifying asset code
- Read/write patterns are duplicated across assets
- Testing requires mocking the resource

IO managers address these limitations by abstracting the persistence layer.
