---
title: Picking formats and standards for Bonfire
author: tryoxiss # terra

eleventyExcludeFromCollections: true # Reason: DRAFT

date: 2022-01-19
---

In the process of making a specification for, what is currently known as bonfire (temperary name), a large part is picking formats and standards to use. Let's start with what I am currently working on, which is the data transmission format. 

## Data Transmission Format
This is the format that packets are sent as. In the current version, this is XML--but that has some downsides. Notably, it sends a LOT of redundent data, which obviously isn't ideal. 

We initally chose this format, because it is what [Diasporta*](https://diaspora.github.io/diaspora_federation/federation/magicsig.html) (our rough base), used. But the time has come to reconsider our transmission format (the format that we send and recieve data as, databases not may, WILL, store it diffrently). 

So what exactly **do we want** out of our data transmission format?
- **Lightweight**: It is more important for it to be light than human readable. This means it will likely be binary. 
- **Partially Human Readable**: If people can't open up thier data and see thier messages in a semi-recigniseable way, it seems like a non-open proprietary format. 
- **Minimise Redundent Data**: If data dosen't need to be sent twice, it shouldn't be. No more `<message> ... </message>`. That's just wasteful. 
- **No big tech**: The format can't be controlled or maintained by big tech. It needs to be an indevidual, non-profit, W3C, or simillar. 
- **Wrapable**: Our basic premise relies on sending messages in Magic Envolpes which define who can open them. because of that, all content needs to be nestable to create meaningful useage. 
- **Minifiable**: The data should be able to be minified to waste no space.

Other things that are good to have, but not needed: 
- **Well Established**: This is useful because it decreeses the chances of needing to write your own interpriter. 
- **Supports Comments**: Not very practical in the real world, but it can be very useful for documentation and test servers if they send a response with a comment explaining why. 
- **Standardised**: This makes interpriters easier to find and use, but it also has the disadvantage of making it harder to modify to our needs. 
- **No JSON**: JavaScript Standard Object Notation is just ugly. There's no denying it. It also sends useless data with the quotes, dosen't support comments, and is generally hated by most people who use it. 

### Why not make your own? 
As mentioned, it makes it harder to find interpriters for it. Also I really want to. 

### Why we made our own. 

Simple: nothing fit all our required needs. (Please note: Signauter is EMPTY for now). 

Create a message: 
```json 
{ 
    "@context": {
            "spec": "https://tryoxiss.github.io/specs/bonfire/recent/",
            "lang": "en",
        },
    "request": "CREATE",
    "type": "message",
    "author": "000000000-0000-5000-0000-000000000000",
    "adressed": ["000000000-0000-5000-0000-000000000000", "000000000-0000-5000-0000-000000000000"], 
    "content": "What does the message contain? Remember to escape doubble quotes with a backslash! \\! if the server recieves an invalid object, it will ignore it!",
    "time": "1673475563",
    "signature": ""
}
```

Edit a message: 
```json 
{ 
    "@context": {
            "spec": "https://tryoxiss.github.io/specs/bonfire/recent/",
            "lang": "en",
        },
    "request": "EDIT",
    "type": "message",
    "author": "000000000-0000-5000-0000-000000000000",
    "editable_id": "000000000-0000-5000-0000-000000000110",
    "content": "I am trying to edit this message!",
    "time": "1673475591",
    "signature": ""
}
```

This way, the database can just add them for thier own things instead of sending it again. 

For reactions, the only content should be the emoji you wish to add. Any other requests will be ignored. They also don't need a timestamp. 
```json 
{ 
    "@context": {
            "spec": "https://tryoxiss.github.io/specs/bonfire/recent/",
            "lang": "en",
        },
    "request": "CREATE",
    "type": "reaction",
    "author": "000000000-0000-5000-0000-000000000000",
    "content": "♥️",
    "signature": ""
}
```

Statuses (plain and rich):

Ok, so we have seen what it looks like with smaller requests, but what about returning data? Well, for that we wrap it with a `"request": "RETURN"` (for raw data).

Hubs: 
```json
{ 
    { 
    "@context": {
            "spec": "https://tryoxiss.github.io/specs/bonfire/recent/",
            "lang": "en",
        },

    "guid": "000000000-0000-5000-0000-000000000000",

    "display_name": "Alice",

    "roles": { 
        "role_name": { 
            "color": "#f00", 
            "badge": "moderator",
            "permissions": { 
                "delete_messages": true,
                "display_seperatly": true,
            },
        },
    },

    "channels": { 
        "#channel1": { 
            "guid": "000000000-0000-5000-0000-000000000000",
            "roles": { 
                "role_name" { 
                    "permission1": true,
                }
            }, 

            "description": "A channel!",
            "type": "text",
        }
    }
}
```

profiles: 
```json
{ 
    "@context": {
            "spec": "https://tryoxiss.github.io/specs/bonfire/recent/",
            "lang": "en",
        },
    "guid": "000000000-0000-5000-0000-000000000000",
    
    "display_name": "Alice",

    "handle": { 
        "username": "alice",
        "tag": "0001",
        "instance": "example.social",
    }, 

    "icon": { 
        "full": "https://res.example.net/pfp/1234:5678:9abc:defg:hijk:lmno:pqrs:tuvw:0001.png",
        "255": "https://res.example.net/pfp/1234:5678:9abc:defg:hijk:lmno:pqrs:tuvw:0001@255px.png",
        "90": "https://res.example.net/pfp/1234:5678:9abc:defg:hijk:lmno:pqrs:tuvw:0001@90px.png",
        "40": "https://res.example.net/pfp/1234:5678:9abc:defg:hijk:lmno:pqrs:tuvw:0001@40px.png",
    },

    "banner": { 
        "full": "https://res.example.net/bannar/1234:5678:9abc:defg:hijk:lmno:pqrs:tuvw:0001.png",
    },

    "colors": { 
        "primary": "#512BD4",
        "username": "#512BD4",
    },

    "status": { 
        "visibility": "friends",
        "type": "plain",
        "activity": "online",
        "emoji": "♥️", 
        "text": "Avatar!",
    },

    "connections": { 
        // asdasda
    }, 

    "friends": [
        {"visibility": "everyone"},
        {
            "guid": "GUID1",
            "nickname": "your nick <3",
            "note": "your note on them", 
            "other info": "sotre whatever custom fields you want!",
        }, {
            "guid": "GUID2",
        }, {
            "guid": "GUID1",
        }, {
            "guid": "GUID2",
        },
    ],

    "blocked": [{
            "guid": "GUID1",
            "note": "your note on them", 
        }, {
            "guid": "GUID2",
        }, {
            "guid": "GUID1",
        }, {
            "guid": "GUID2",
        }],

    "hubs": [
        {"visibility": "friend_and_mutual"},
        {
            "guid": "GUID1",
        }, {
            "guid": "GUID2",
        }, {
            "guid": "GUID1",
        }, {
            "guid": "GUID2",
        },
    ],

    "pronouns": ["she/they", "she/her", "they/them"],
    // the frist one is shown, then seperated by slashes and when hovered it will show the one at that index
    // So if you have "she/they" and you hover "she" with the array above, it will show a tooltip saying "she/her"

    "links": [{ 
            "rel": "nofriend", // UNVERIFIED
            "icon": "mastodon",
            "link": "@username@example.social", 
            "visibility": "everyone",
        }, { 
            "rel": "me", // VERIFIED
            "icon": "peertube",
            "link": "@username@joinpeertube.org",
            "visibility": "everyone",
        },
    ],

    "public_key": "999b9af08579802c4d1ca35070b179d610754abd2d601284819493a55e9ce760e1bc9b8adc6f9592311546f88f43237c65577ca7db95919945e63bfbb241b7b6",

    "prefrences": {
        "visibility": "private",

        // maybe include ALL visabilities in "prefrences"?
    }
}
```

and the type is `"user_data"`. 
Data Package: 