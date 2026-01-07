---
title: Foundation
order: 0
---

Before diving into decorators, it's crucial to understand a core concept in Python: functions are first-class objects. This means they can be treated like any other variable.

* **Assigned to variables:** You can assign a function to a variable and then use that variable to call the function.
* **Passed as arguments:** Functions can be passed as arguments to other functions.
* **Returned from functions:** Functions can return other functions.

Let's look at a few examples:

Imagine you have simple arithmetic functions and a generic function to apply them:

```python
from typing import Callable # Make sure to import Callable

def multiply(x: float | int, y: float | int) -> float | int:
  return x * y

def add(x: float | int, y: float | int) -> float | int:
  return x + y

def apply(func: Callable[[float | int, float | int], float | int], x: float | int, y: float | int) -> float | int:
  return func(x, y)

```

Passing functions to other functions:
```python
# Using the apply function
print(apply(add, 2, 3))       # Output: 5
print(apply(multiply, 2, 3))  # Output: 6
```

Assigning Functions to Variables:
```python
op = multiply
print(op)       # Output: <function multiply at 0x...> (address will vary)
print(op(2, 3)) # Output: 6
```

Returning Functions from Functions:
```python

def choose_function_to_apply(name: str) -> Callable[[float | int, float | int], float | int]:
  if name == "add":
    return add
  else:
    return multiply

choice = choose_function_to_apply("add")
print(choice)         # Output: <function add at 0x...>
print(choice(2, 7))   # Output: 9

# You can even call it directly
result = choose_function_to_apply("multiply")(2, 7)
print(result)       # Output: 14
```

Understanding this flexibility is key to grasping how decorators work.
