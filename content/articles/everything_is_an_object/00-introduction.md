---
title: Introduction
order: 0
---

One of Python's most fundamental design principles is that **everything is an object**. This isn't just a philosophical statement—it has practical implications for how Python code works and what's possible with the language.

The built-in `type()` function reveals the class of any value:

```python
print(type(42))      # <class 'int'>
print(type(3.14))    # <class 'float'>
print(type("hello")) # <class 'str'>
```

These aren't just labels. `int`, `float`, and `str` are actual classes, and the values `42`, `3.14`, and `"hello"` are instances of those classes.

## Literals Are Instances

Python's syntax for literals—writing `5` instead of `int(5)`—is a convenience provided by the interpreter. During compilation, these are equivalent:

```python
x = 5
x = int(5)
```

The implication is significant: integers, floats, strings, and other "primitive" types are not special cases. They're objects with methods and attributes, just like any user-defined class.

This uniformity is what enables Python's flexibility. Understanding it unlocks more advanced features like operator overloading, metaclasses, and the descriptor protocol.
