---
title: The Type Metaclass
order: 3
---

If everything in Python is an object, then classes themselves must also be objects. This raises a question: what is the class of a class?

```python
print(type(int))    # <class 'type'>
print(type(list))   # <class 'type'>
print(type(str))    # <class 'type'>
```

All classes are instances of `type`. This includes user-defined classes:

```python
class Horse:
    pass

print(type(Horse))  # <class 'type'>
```

## The Metaclass

`type` is Python's **metaclass**—the class that creates other classes. But what is the type of `type` itself?

```python
print(type(type))  # <class 'type'>
```

`type` is an instance of itself. This self-referential relationship is the foundation of Python's object model.

## Creating Classes Dynamically

Since `type` is a callable class, it can be used to create new classes at runtime. The constructor takes three arguments:

1. The class name (string)
2. A tuple of parent classes
3. A dictionary of class attributes

```python
# Creating a class dynamically
Bar = type("Bar", (), {})
print(type(Bar))  # <class 'type'>

bar = Bar()
print(type(bar))  # <class '__main__.Bar'>
```

## Inheritance and Attributes

Dynamic class creation supports inheritance and arbitrary attributes:

```python
class Foo:
    pass

# Create a class that inherits from Foo with attributes
Foobar = type("Foobar", (Foo,), {"name": "Tim", "age": 25})

print(Foobar.__dict__)   # {..., 'name': 'Tim', 'age': 25}
print(Foobar.__bases__)  # (<class '__main__.Foo'>,)

foobar = Foobar()
print(foobar.name)              # Tim
print(isinstance(foobar, Foo))  # True
```

This capability enables advanced patterns like ORMs that generate model classes from database schemas, or testing frameworks that create mock classes dynamically.
