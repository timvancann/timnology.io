---
title: Conclusion
order: 5
---

Python's "everything is an object" principle has concrete implications:

## Summary

**Literals are class instances** — Integers, floats, and strings are objects with methods and attributes, not primitive values. The syntax `5` is shorthand for `int(5)`.

**Dunder methods define behavior** — Operators and built-in functions call dunder methods on objects. `2 + 3` calls `(2).__add__(3)`.

**Operator overloading is accessible** — Custom classes can define dunder methods to work with Python's operators, enabling expressive APIs.

**Classes are objects too** — All classes are instances of `type`, Python's metaclass. `type` is an instance of itself.

**Dynamic class creation** — The `type()` constructor creates classes at runtime, enabling metaprogramming patterns.

**The descriptor protocol** — Functions use `__get__` to become bound methods. This mechanism underlies properties, class methods, and ORM field mappings.

## Object Model Hierarchy

```
type ──────────────────┐
  │                    │
  ▼                    │
int, str, list, ...   type (instance of itself)
  │
  ▼
42, "hello", [1,2,3]
```

This unified object model is what makes Python flexible. Features that seem like special syntax—operators, attribute access, method calls—are implemented through regular method calls on objects. Understanding this enables writing more powerful and idiomatic Python code.
