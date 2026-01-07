---
title: Assets
order: 1
---

An **asset** represents a materialized piece of data. Assets can be:

- Database tables (DuckDB, Snowflake, PostgreSQL)
- Files (CSV, Parquet, JSON)
- Binary data (audio, images)
- In-memory structures (Arrow tables, DataFrames)

## Defining an Asset

The `@dg.asset` decorator marks a function as an asset definition:

```python
from pathlib import Path
import polars as pl
import dagster as dg


@dg.asset
def plays() -> None:
    date = Path("2025/10/16")
    _ = pl.read_csv(date / "plays.csv")


def definitions():
    return dg.Definitions(
        assets=[plays],
    )
```

This asset reads a CSV file containing Spotify listening history for a specific date.

## The Persistence Problem

The example above reads data but doesn't persist it anywhere. For Dagster to track the asset's state and enable features like backfills and lineage, the data needs to be stored.

There are two approaches to persistence in Dagster:

1. **Resources** — Direct access to external systems
2. **IO Managers** — Abstraction layer that handles serialization automatically

The following sections cover both approaches.
