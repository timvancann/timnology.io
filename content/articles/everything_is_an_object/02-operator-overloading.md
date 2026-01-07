---
title: Operator Overloading
order: 2
---

Since operators call dunder methods, custom classes can define their own behavior for operators. This is called **operator overloading**.

## Example: Custom Multiplication

Consider a scenario where multiplying a `Horse` by a `Donkey` should produce a `Mule`. This can be implemented by defining `__mul__` on the `Horse` class:

```python
class Mule:
    pass


class Donkey:
    pass


class CantBreedError(Exception):
    pass


class Horse:
    def __mul__(self, other: object):
        if isinstance(other, Donkey):
            return Mule()
        if isinstance(other, Horse):
            return Horse()
        raise CantBreedError("Horses can only breed with other horses or donkeys.")


# Usage
print(Horse() * Horse())   # <__main__.Horse object at 0x...>
print(Horse() * Donkey())  # <__main__.Mule object at 0x...>
```

When Python evaluates `Horse() * Donkey()`, it calls `Horse().__mul__(Donkey())`. The `__mul__` method checks the type of the operand and returns the appropriate result.

## Practical Applications

Operator overloading is used extensively in Python libraries:

- **NumPy**: Arrays support arithmetic operators for element-wise operations
- **Pandas**: DataFrames and Series support comparison operators for filtering
- **pathlib**: The `/` operator joins path components
- **SQLAlchemy**: Comparison operators build SQL WHERE clauses

By implementing dunder methods, custom classes can integrate seamlessly with Python's syntax, making code more readable and expressive.
