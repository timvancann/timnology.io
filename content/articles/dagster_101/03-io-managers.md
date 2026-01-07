---
title: IO Managers
order: 3
---

An **IO manager** abstracts the persistence layer. Instead of manually writing data to a resource, assets return Python objects and the IO manager handles serialization.

## Example: DuckDB Polars IO Manager

```python
from pathlib import Path
import polars as pl
import dagster as dg
from dagster_duckdb_polars import DuckDBPolarsIOManager


@dg.asset(io_manager_key="io_manager")
def plays() -> pl.DataFrame:
    date = Path("2025/10/16")
    df = pl.read_csv(date / "plays.csv")
    return df


io_manager = DuckDBPolarsIOManager(database="db.duckdb")


def definitions() -> dg.Definitions:
    return dg.Definitions(
        assets=[plays],
        resources={"io_manager": io_manager},
    )
```

The asset returns a Polars DataFrame. The IO manager converts it to a DuckDB table automatically.

## Storage Agnostic Assets

With IO managers, assets become independent of their storage backend. Switching from DuckDB to Snowflake requires changing only the IO manager:

```python
# DuckDB
io_manager = DuckDBPolarsIOManager(database="db.duckdb")

# Snowflake
io_manager = SnowflakePolarsIOManager(...)
```

The asset code remains unchanged. This separation enables:

- **Testing** — Use an in-memory IO manager for unit tests
- **Development** — Use a local database during development
- **Production** — Use a cloud data warehouse in production

All without modifying the asset's business logic.
