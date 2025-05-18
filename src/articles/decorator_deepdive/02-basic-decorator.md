---
title: Basic Decorators
order: 2
---
Let's build a simple decorator to time how long a function takes to execute.

Suppose we have a function that simulates a time-consuming operation:

```python
import time

def database_operation_slow():
  """Simulates a slow database operation."""
  print("Starting a slow database operation...")
  time.sleep(2) # Simulate work
  print("Finished database operation.")
  return "Data fetched"
```

Now, let's create a `time_it` decorator

```python
import time

def time_it(func):
  def wrapper(*args, **kwargs):
    start = time.perf_counter()
    result = func(*args, **kwargs) # Call the original function
    end = time.perf_counter()
    duration = end - start
    print(f"Function '{func.__name__}' took: {duration:.4f} seconds")
    return result
  return wrapper

# Applying the decorator
@time_it
def database_operation():
  """Simulates a database operation."""
  time.sleep(1)
  return "DB Operation Complete"

database_operation()
```

How it works:

`time_it` is our decorator. It takes a function func as input.
Inside `time_it`, we define another function called `wrapper`. This function will eventually replace the original database_operation.

`wrapper` does three things:

- Records the time before calling the original function (`func`).
- Calls the original function (`func(*args, **kwargs)`) and stores its result. `*args` and `**kwargs` ensure our `wrapper` can handle any arguments the original function might take.
- Records the time after, calculates the duration, prints it, and returns the result of the original function.
`time_it` returns the wrapper function.

The `@time_it` syntax above database_operation is Python's syntactic sugar for:
`database_operation = time_it(database_operation)`
