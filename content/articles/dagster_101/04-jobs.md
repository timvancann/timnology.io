---
title: Jobs
order: 4
---

Assets can be materialized manually through the Dagster UI. For automation, assets are grouped into **jobs**.

A job defines a selection of assets that execute together as a unit:

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
plays_job = dg.define_asset_job("plays_job", selection=["plays"])


def definitions() -> dg.Definitions:
    return dg.Definitions(
        assets=[plays],
        resources={"io_manager": io_manager},
        jobs=[plays_job]
    )
```

## Job Selection

The `selection` parameter accepts:

- **Asset names** — `["plays", "artists"]`
- **Asset groups** — `AssetSelection.groups("spotify")`
- **Upstream/downstream** — `AssetSelection.keys("plays").upstream()`

## Jobs vs Assets

| Concept | Defines |
|---------|---------|
| Asset | **What** data to produce |
| Job | **Which** assets to run together |
| Schedule/Sensor | **When** to run a job |

Jobs are the bridge between asset definitions and execution triggers.
