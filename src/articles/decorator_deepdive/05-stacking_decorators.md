---
title: Stacking decorators
order: 5
---
You can apply multiple decorators to a single function.  The order matters! They are applied from bottom to top (or, the one closest to the function definition is applied first). 

```python
def bold_decorator(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        return "<b>" + func(*args, **kwargs) + "</b>"
    return wrapper

def italic_decorator(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        return "<em>" + func(*args, **kwargs) + "</em>"
    return wrapper

@bold_decorator
@italic_decorator # italic_decorator is applied first, then bold_decorator
@time_it_with_metadata(use_nanos=False)
def get_greeting():
  """Returns a friendly greeting."""
  time.sleep(0.1) # Simulate some work
  return "Hello, Decorators!"

print(get_greeting())
# Expected output will show timing, and then: <b><em>Hello, Decorators!</em></b>
```
