---
title: Decorators with arguments
order: 3
--- 

What if you want to pass arguments to the decorator itself? For example, to customize the `time_it` decorator to measure in nanoseconds instead of seconds.

This requires an extra layer of nesting:
```python

import time
# import debugpy

def time_it_configurable(*, use_nanos: bool = False): # Decorator now takes an argument
  def actual_decorator(func):                          # This is the actual decorator
    def wrapper(*args, **kwargs):
      start = time.perf_counter_ns() if use_nanos else time.perf_counter()
      result = func(*args, **kwargs)
      end = time.perf_counter_ns() if use_nanos else time.perf_counter()
      duration = end - start
      unit = 'nanoseconds' if use_nanos else 'seconds'
      print(f"Function '{func.__name__}' took: {duration:.4f} {unit}")
      return result
    return wrapper
  return actual_decorator # Decorator factory returns the actual decorator

@time_it_configurable(use_nanos=True)
def another_database_operation(sleep_time: float = 0.5):
  time.sleep(sleep_time)
  return "Another DB Op Complete"

@time_it_configurable(use_nanos=False) # Or use default seconds
def yet_another_op():
    time.sleep(0.2)
    return "Yet another op done"

another_database_operation()
yet_another_op()
```

Here, `time_it_configurable` is a "decorator factory." When you call `another_database_operation`
there are three layers happening and without the `@` syntactic sugar it can be written as:
`time_it_configurable(use_nanos=True)(another_database_operation)(sleep_time=1.0)`
