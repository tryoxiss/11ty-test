--- 
author: tryoxiss
title: Python Basics
code_language: py

eleventyExcludeFromCollections: true # Reason: DRAFT

date: 2022-01-12
---

> [!info] 
> The main pourpose of this article is to test the layout and current markup. Not to be a genuine post. However this will likely still be a perfectly serviceable introduction to Python 3.10.

So you want to get into the single best language except for all the better ones. I am of course joking here, python is a great way to get started: and keep going, most applications dont require speed or being compiled. And python is great for ease of use, prototyping, and such cases where speed is not of the utmost priority. 

Go download an IDE, it dosen't really matter which one, [VSCode](https://code.visualstudio.com) is good and its what I use, and I have also heard that [Pulsar](https://pulsar-edit.dev/) is good, though its still in beta. You will also want to download and install [Python 3.X](https://www.python.org/downloads/) (we will be using 3.10, but as long as its 3.X it should work the same).

So once you have that installed, go into your projects directory and make a new project. This will simply be a directory. I use `~/projects/PROJECT_NAME`. For this example lets call it `python_basics`. Make sure to create a `main.py` file. Python files are denoted by ending with `.py`, and the convention is to name your projects main runtime file `main.py`. 

It is generally best practice to wrap everything in a function, so lets declare one right now, add the following code to your file. 

```py 
def main(): 
    pass

main()
```

Lets go over this line by line, in python you declare a function with the `def` keyword (short for `define`). The pass instruction simply tells the interpriter to skip past it without causing errors. Lastly we run the function. Don't worry about this too much right now, we will get to it more later.

This functon isn't very useful, so lets add a print statement to it with `print(value)`. This is a *built in function*, which means you dont need to--and can't--define it, the interpriter just knows what to do. The print function in its most basic form takes one argument, the value you want to print. We want to print a string, which means we need to wrap it in single or doubble quotes (`""` or `''`). 

```py 
def main(): 
    print("Hello World")

main()
```

Now lets try running our code, the commands your looking for are (this should work in both PowerShell, and BASH):

```sh
# Change to the directory we are working in. 
# If you are already here (e.g., using an embedded terminal 
# in your text editor), you may be able to skip this step.
$ cd projects/python_basics

# Run the python file. 
$ python main.py
```

The most foundational programming concept is an `object`, for now this is basically any variable but later on they can be more complex structures. In python you declare a variable with `variable_name  = value`. Lets make a variable `cookies` and set it equal to 7. To do this we would use the following code: `cookies = 7`. Simple enough, right? 

The variable we just declared is of a type called an `intiger`, or `int`. It funnily enough stores an intiger (a posative or negative number that does not support decimals or fractions). Python is **dynamically typed**, which means you don't need to assign types to variables. ~~This is an amazing feature that dosen't negatively impact performance at all~~ **which makes it good for beginners learning programming**.

Now we can modify our code above to print the variable. You can simply pass it an as the argument of what you want to print.

```py 
def main(): 
    cookies = 7

    print(cookies)

main()
```

