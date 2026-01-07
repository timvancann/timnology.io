---
title: The Descriptor Protocol
order: 4
---

Python's dynamic nature extends to modifying objects at runtime. Methods can be added to instances after creation—but doing so requires understanding the **descriptor protocol**.

## The Problem: Adding Methods Dynamically

Consider adding a method to an existing instance:

```python
class MyClass:
    def __init__(self):
        self.value = 10


def power(self, x):
    return self.value ** x


my_instance = MyClass()
my_instance.power = power
```

Calling `my_instance.power(2)` raises an error:

```
TypeError: power() missing 1 required positional argument: 'x'
```

The function was assigned as an attribute, but Python doesn't automatically pass the instance as the first argument. The function isn't bound to the instance.

## How Method Binding Works

When a method is accessed on an instance, Python uses the descriptor protocol to bind it. Any object that defines `__get__`, `__set__`, or `__delete__` is a **descriptor**.

Functions are descriptors—they implement `__get__`. When accessed through a class or instance, `__get__` creates a **bound method** that includes the instance as the first argument.

## Manual Binding

The `__get__` method can be called directly to bind a function:

```python
# Manually bind the function to the instance
bound_method = power.__get__(my_instance, MyClass)
print(bound_method(2))  # 100 (10 ** 2)
```

The bound method now knows about `my_instance` and will pass it as `self`.

## Assigning the Bound Method

The bound method can be assigned to the instance:

```python
my_instance.power = power.__get__(my_instance, MyClass)
print(my_instance.power(3))  # 1000 (10 ** 3)
```

This demonstrates that methods in Python are objects that can be created, passed around, and assigned like any other value.

## Why This Matters

The descriptor protocol underlies several Python features:

- **`@property`**: Uses descriptors to create managed attributes
- **`@classmethod` and `@staticmethod`**: Modify how functions are bound
- **ORMs**: Use descriptors to map object attributes to database columns

Understanding descriptors provides insight into how Python's attribute access actually works.
