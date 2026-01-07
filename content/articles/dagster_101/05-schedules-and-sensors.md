---
title: Schedules and Sensors
order: 5
---

Jobs define which assets to run. **Schedules** and **sensors** define when to run them.

## Schedules

A schedule triggers jobs on a time-based interval using cron notation:

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

daily_schedule = dg.ScheduleDefinition(
    name="daily_refresh",
    cron_schedule="0 0 * * *",  # Runs at midnight daily
    job=plays_job,
    default_status=dg.DefaultScheduleStatus.RUNNING,
)


def definitions() -> dg.Definitions:
    return dg.Definitions(
        assets=[plays],
        resources={"io_manager": io_manager},
        jobs=[plays_job],
        schedules=[daily_schedule],
    )
```

Setting `default_status=RUNNING` enables the schedule immediately. Otherwise, it must be enabled through the UI or CLI.

## Sensors

Sensors monitor external events and trigger jobs when conditions are met. Unlike schedules, sensors are event-driven rather than time-driven.

Example use cases:

- Trigger when a new file appears in S3
- Trigger when a database table is updated
- Trigger when an external API returns new data

Sensors poll at a configurable interval and evaluate whether to trigger a run based on custom logic.
