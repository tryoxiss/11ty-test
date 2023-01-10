---
title: Code Stress Tests
author: tryoxiss
#code_language: python
--- 

Stress test Example

```python
print("The docs are at https://docs.example.com/example")
# The docs are at https://docs.example.com/example

def pythonCodeBlock(betterThanJavascript): 
    for i in range(1, 10): 
        print(i)
        print('Just... why?')

        if i == NaN: 
            break
    if betterThanJavascript == True: 
        print("you dont deserve me then")
        break up
```

ALWAYS wrap inline/not full screen canvas in a div with the class `code-toolbar` so it has the buttons. Can't figure out why it works diffrenly than its own seperate wrapper, but it does. 

<div class="code-toolbar">
<canvas id="app"></canvas>
</div>

here is a [link](https://example.com)

`print('hello world')`

And here is some rust .rs code

```rust
mod my {
    // A public struct with a public field of generic type `T`
    pub struct OpenBox<T> {
        pub contents: T,
    }

    // A public struct with a private field of generic type `T`
    pub struct ClosedBox<T> {
        contents: T,
    }

    impl<T> ClosedBox<T> {
        // A public constructor method
        pub fn new(contents: T) -> ClosedBox<T> {
            ClosedBox {
                contents: contents,
            }
        }
    }
}

fn main() {
    // Public structs with public fields can be constructed as usual
    let open_box = my::OpenBox { contents: "public information" };

    // and their fields can be normally accessed.
    println!("The open box contains: {}", open_box.contents);

    // Public structs with private fields cannot be constructed using field names.
    // Error! `ClosedBox` has private fields
    //let closed_box = my::ClosedBox { contents: "classified information" };
    // TODO ^ Try uncommenting this line

    // However, structs with private fields can be created using
    // public constructors
    let _closed_box = my::ClosedBox::new("classified information");

    // and the private fields of a public struct cannot be accessed.
    // Error! The `contents` field is private
    //println!("The closed box contains: {}", _closed_box.contents);
    // TODO ^ Try uncommenting this line
}

```

And here is are yarn-aligned dialogue system beta dictionary file and dialogue file. 

```yaml
[items] 
- color: ff3b3b

vault_key: {
  - name: vault key
  - description: a key to open the vault # shown on hover. # means comment. 
}

[characters] # color
Mira: 
  - color: 008cff # it will be hex by defult, and is currently the only supported option.

mira: Some dialogue that has stuff
  -> Option 1
  -> Option 2 {function()} # function is optional
mira: include dictionary items by using [square brackets] around them to make the game know you want the dictionary entry 
mira: every time a characters name is mentioned, it creates a new disloaue box. 
```

Here is a basic scene showing an option and a fn call option. 

```yaml
mira: Some dialogue that has stuff
  -> Option 1
  -> Option 2 {function()} # function is optional
mira: include dictionary items by using [square brackets] around them to make the game know you want the dictionary entry 
mira: every time a characters name is mentioned, it creates a new disloaue box. 
```

And here is a cutscene. 

```yaml
[cutscene_1]
mira: the first time a characters name
mira: is mentioned in a sceneit will have
mira: thier name show up and it will 
mira: be colored in.
mira: after that; it will only
mira: be colored in, unless the 
mira: always show names
mira: accesability option is checked. 

tip: try to keep lines of 
tip: subtitles to 3-8 words
tip: Never seperate a subject
tip: from its object in a line, hovever. 
tip: commas, colons, and periods 
tip: are the best places to split a line

tip: subtitles will stay up for an 
tip: amount of time detemrned by the game
tip: based on the number of spaces

tip: but you CAN use the \{wait} function # functuions need to be escaped witg a \ if you dont want them to run
tip: to manually add pauses. 

{wait: 500ms} 

tip: but you CANNOT run most other 
tip: functions in subtitles
```

```xml
<account>
    <username>Actor</username>
    <hash>1234</hash>
    <instance>example.net</instance>
    <cid>1234:5678:9abc:defg:hijk:lmno:pqrs:tuvw</cid>

    <status>
        <emoji>:rainbow_flag:</emoji>
        <text>Being gay on example.net</text>
    </status>

    <public_key>999b9af08579802c4d1ca35070b179d610754abd2d601284819493a55e9ce760e1bc9b8adc6f9592311546f88f43237c65577ca7db95919945e63bfbb241b7b6</public_key>
    <!-- This key is arbitrary, but it is a 128 Hex Public Key-->
</account>
```
