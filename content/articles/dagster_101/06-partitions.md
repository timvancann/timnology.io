---
title: Partitions
order: 6
---

**Partitions** allow assets to process subsets of data independently. Instead of overwriting an entire table on each run, partitioned assets append or update specific slices.

## Time-Based Partitions

The most common partitioning strategy is by date:

```python
from pathlib import Path
import polars as pl
import dagster as dg
from dagster_duckdb_polars import DuckDBPolarsIOManager

daily_partitions = dg.DailyPartitionsDefinition(start_date="2024-01-01")


@dg.asset(
    io_manager_key="io_manager",
    partitions_def=daily_partitions,
    metadata={"partition_expr": "date"},
)
def plays(context: dg.AssetExecutionContext) -> pl.DataFrame:
    partition_datetime = context.partition_time_window.start

    date = (
        Path(partition_datetime.strftime("%Y"))
        / partition_datetime.strftime("%m")
        / partition_datetime.strftime("%d")
    )
    df = pl.read_csv(date / "plays.csv").with_columns(
        date=partition_datetime.strftime("%Y-%m-%d")
    )
    return df
```

Each asset run processes a specific date. Dagster tracks which partitions have been materialized, which succeeded, and which failed.

## Partition Expression

The `partition_expr` metadata tells the IO manager which column identifies the partition:

```python
metadata={"partition_expr": "date"}
```

This enables:

- **Backfills** — Reprocess historical partitions
- **Selective reruns** — Rerun only failed partitions
- **Incremental loads** — Only process new partitions

## Generating Schedules from Partitions

Dagster can automatically create a schedule that runs once per partition:

```python
io_manager = DuckDBPolarsIOManager(database="db.duckdb")
plays_job = dg.define_asset_job("plays_job", selection=["plays"])

asset_partitioned_schedule = dg.build_schedule_from_partitioned_job(
    plays_job,
    default_status=dg.DefaultScheduleStatus.RUNNING,
)


def definitions() -> dg.Definitions:
    return dg.Definitions(
        assets=[plays],
        resources={"io_manager": io_manager},
        jobs=[plays_job],
        schedules=[asset_partitioned_schedule],
    )
```

This creates a daily schedule aligned with the partition definition, eliminating the need to define a separate cron schedule.
