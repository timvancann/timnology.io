---
title: Dunder Methods
order: 1
---

Since built-in types are classes, they have methods and attributes like any other class. The `dir()` function lists them:

```python
print(dir(42))
# ['__abs__', '__add__', '__and__', '__bool__', ...]
```

The methods surrounded by double underscores are called **dunder methods** (short for "double underscore"). These special methods define how objects behave in various contexts.

## Operators Call Dunder Methods

When Python encounters an operator like `+`, it doesn't perform addition directly. Instead, it calls the appropriate dunder method on the operands.

The expression `2 + 3` is equivalent to calling `__add__` on the integer `2`:

```python
# These two are equivalent
result1 = 2 + 3
result2 = (2).__add__(3)

print(result1)  # 5
print(result2)  # 5
```

## Common Dunder Methods

| Operator | Dunder Method |
|----------|---------------|
| `+` | `__add__` |
| `-` | `__sub__` |
| `*` | `__mul__` |
| `/` | `__truediv__` |
| `==` | `__eq__` |
| `<` | `__lt__` |
| `str()` | `__str__` |
| `len()` | `__len__` |

This mechanism applies to all Python operators and many built-in functions. Understanding it is essential for customizing how objects interact with Python's syntax.
