---
title: Beautiful Codestyle
---

The pourpose of this code style is to help keep cohesive, readable, beautioful, and maintainable code. By following this style all code will look as if one person wrote all of it, no matter how many contributers there are. 

This helps some things, such as "style fights", where two or more people keep changing the style of a block of code to thier prefrence.

This code style is very opinionated and specific, and aims to lead zero ambiguity when it comes to any case.

## A. general styles 

General rules that apply to all languages. Examples will be written in a combination of languages.

1. We indent by 4 spaces, not a tab. 

### B. Variables

Variables are named in `snake_case` in all cases. Variable names should

1. **Be descriptive**: We're not stuck with 80 character terminal screens any more and have tools like autofill. Variable names should clear and tell you exactly what they are.
    1. Single letter variable names are not allowed UNLESS: 
        1. It is an argument to a function that is explictly a coordinate handler. 
        2. Said function deals with no more than one set of coordinates at a time
        3. Allowed coordinate variable names are `x`, `y`, `z`. 
    2. Pluralise lists and nothing else. 
        1. Lists contain multiple items, nothing else does. Therefore only list types should end with an s. This also allowed for things like `for post in posts`, as is explored in the next point.
    3. No `i` in Range
        1. `for i in list[]` and simillar statements do not tell you what the list handles. If its an abstract concept and you only go one layer deep it can be acceptable, but its generally its prefered to do something like `for post in posts`
    4. If it deals with specific units, then specify what. 
        - `distance_meters` rather than distance. 
        - `time_secconds` rather than time. 
        - If possible, use a dedicated class or structure like a TimeSpan. 
    5. As a general rule, don't abbreviate. Abbreviations make code harder to read and tell what something is refering to. Abbreviations are however allowed if they are used as a word, or can be easily and commonly understood **and used** Some examples are below:
        - Units like `cm` for centimeters
        - `GUID` for Glbally Unique Identifiers. 
        - Laser for "light amplification by stimulated emission of radiation". If your suprised that is an abbriviation: GOOD. That is the kind of universality we need for it to be used.
2. **Be Short**: while this may seem to contradict point 1, it actually dosen't. This point talks about not over-specifying variable names. 
3. Not include types 
4. **Semantics** are important, they tell us things about the code we might not otherwise know. Here are a few examples.
    1. be in `SCREAMING_SNAKE_CASE` if its constant

- naming 
- style 
- semantics 
Conditionals 

### C. Functions

Functions 
- naming 
- pourpose 
- design 

## D. language specifics 

Curly braced 

Indented 

XML-like 

## E. meta 
Amendments 
Authors 
Copyright