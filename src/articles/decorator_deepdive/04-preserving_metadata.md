---
title: Preserving metadata
order: 4
---
A common issue with decorators is that they obscure the metadata of the original function. If you inspect a decorated function (e.g., its name, docstring), you'll see the metadata of the wrapper function, not the original one.

Python's functools module provides wraps to solve this.

```python
import time
import functools # Import functools

def time_it_with_metadata(*, use_nanos: bool = False):
  def actual_decorator(func):
    @functools.wraps(func) # Apply functools.wraps to the wrapper
    def wrapper(*args, **kwargs):
      start = time.perf_counter_ns() if use_nanos else time.perf_counter()
      result = func(*args, **kwargs)
      end = time.perf_counter_ns() if use_nanos else time.perf_counter()
      duration = end - start
      unit = 'nanoseconds' if use_nanos else 'seconds'
      print(f"Function '{func.__name__}' took: {duration:.4f} {unit}")
      # debugpy.debug_this(f"Duration: {duration:.4f} {unit}")
      return result
    return wrapper
  return actual_decorator

@time_it_with_metadata(use_nanos=True)
def documented_database_operation():
  """
  This is a very important database operation
  that is well documented.
  """
  time.sleep(1)
  return "Documented DB Op Complete"

print(f"Function Name: {documented_database_operation.__name__}")
print(f"Docstring: {documented_database_operation.__doc__}")
# Try help(documented_database_operation) as well
# print(help(documented_database_operation))
```


By adding `@functools.wraps(func)` to our wrapper function, the metadata from the original func (like `__name__` and `__doc__`) is copied over to the wrapper function.
