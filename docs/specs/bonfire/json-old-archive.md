---
title: Bonfire 0.4 JSON Archive
tags: 
    - bonfire
---

Bonfire is a working (and temporary) name for a standard to allow for community-divided federated instant messaging. In laymans terms, its federated discord. 

<blockquote class="callout callout--info">
    <!-- <svg src="/_shared-content/lucide/alert-triangle.svg" color="red"></svg> -->
    <div class="callout__header">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
        <p>This specification is a draft!</p>
    </div>
    <p>it is not finished and is due for many, many revisions down the road. </p>
</blockquote>

<blockquote class="callout callout--warning">
    <!-- <svg src="/_shared-content/lucide/alert-triangle.svg" color="red"></svg> -->
    <div class="callout__header">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"></path><path d="M14 2v6h6"></path><path d="m3 12.5 5 5"></path><path d="m8 12.5-5 5"></path></svg>
        <p>Dependy Issue</p>
    </div>
    <p>This specification seems to refrence or cite 1 or more speicfications that appear to be missing. These issues must be resolved before 1.0. A list can be found below: </p>
    <ul style="margin-top: -1rem;">
        <li>Clean ID System</li>
    </ul>
</blockquote>

## Definitions

Let the keywords that follow be case insensitive unless otherwise specified. 

- Let the keywords "MUST", "MUST NOT", "SHOULD", "SHOULD NOT", and "MAY" (and lowercase equivalents) be defined as specified in [RFC:2119](https://www.rfc-editor.org/rfc/rfc2119)
- Let `incorrect` mean MUST NOT; as in, incorrect behaviour violates the standard.
- Let `i<int>` represent 2^int-1. Some examples (and the important ones) are as follows;
    - `i6` equals `63`
    - `i8` equals `255`
    - `i16` equals `65,535`
    - `i32` equals `2,147,483,647`
    - `i64` equals approximately `1.844674407×10¹⁹`
- Let `JSON Object` or `Object` represent one JSON object, and any nested objects thereforth. Let this not exceed the maximum status characters of an i16. 
- Let `packet` represent one JSON Object sent between a client-server, or server-server relationship. 
- Let `snake_case` and `snake case` mean the naming scheme where multiple words are written in all lowercase and are seperated with underscores.
- ~~Let `CID` and mean any valid ID from the the [clean ID system](/specs/cid/recent/).~~
- Let `GUID` and `UUID` represent a [Universally Unique Identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier). 
- Let the character sets `reserved`, `escaped`, `delims`, `unwise`, `lowalpha`, `upalpha`, `alpha`, `digit`, `alphanum`, `mark` and `unreserved` are to be defined as in [RFC:2396](https://www.ietf.org/rfc/rfc2396.txt). This is only when these keywords are in reference to a **character set**.
- Let `inalpha` represent the character set including `upalpha` and `lowalpha`, where no distinction is made between uppercase and lowercase. ("A" is the same as "a").
- Let the character set `safe` be the culmination of `inalpha` and `digit` and the characters `_` and `-`. 

## Design Philosophy 

*Some of the following definitions are from [ariadne.space's post on ActivityPub's design falings](https://ariadne.space/2019/01/07/activitypub-the-worse-is-better-approach-to-federated-social-networking/).

- **Simplicity**: The standard and protocol should be simple to implement. It is much more important for the protocol and standard to be simple than the backend implementation. 
- **Cleanliness**: The standard must be clean and easily usable from a end-user perspective. It is more important for it to be clean and simple for end-users than the backend implementation. 
- **Correctness**: All packets and URI's must be verifiably correct or incorrect. It MUST NOT ever be unclear. 
- **Safety**: The standard and protocol is designed in a way that is safe, any unsafe implementations are considered incorrect. 
- **Completeness**: The standard and protocol must cover all reasonably expected situations. 
- **Privacy**: All content should be encrypted and sent through secure channels. It is considered incorrect to send unencrypted data with the exception of pre-written public HTML pages. 
- **Prevent Consolidation**: We don't want this to end up like email, where you *can* self host and join a smaller provider, but good luck with all the limitations in place.

Other, smaller goals are to make it extensible so at no point will there ever be breaking changes (No "bonfire 2.0"). While we cannot guarantee this, a finished 1.0 spec should be backwards compatible for at least the next 30 years, while still being able to add support for new features. 

## Conventions followed

- Variables and JSON Objects will be denoted in snake case. (`variable_name`)
- Variables in code which remain constant should be all capitalised. (`VARIABLE_NAME`)

## Objects

Objects are just how we send stuff store it however you please, ideally SQL. 

### Accounts

An account is an object that represents a `person` in nature. Its XML Object is as follows. It also contains the defult values for privacy. Anything that does not have a `visibility` field cannot have its visibility edited. You can store any information you want on the persons paramaters. 

```json
{ 
    "@context": {
        "spec": "https://tryoxiss.github.io/specs/bonfire/recent/",
        "lang": "en"
    },
    
    "guid": "000000000-0000-5000-0000-000000000000",
    
    "display_name": "Alice",

    "handle": { 
        "username": "alice",
        "discriminator": "0001",
        "instance": "example.social"
    }, 

    "icon": { 
        "full": "https://res.example.net/pfp/1234:5678:9abc:defg:hijk:lmno:pqrs:tuvw:0001.png",
        "255": "https://res.example.net/pfp/1234:5678:9abc:defg:hijk:lmno:pqrs:tuvw:0001@255px.png",
        "90": "https://res.example.net/pfp/1234:5678:9abc:defg:hijk:lmno:pqrs:tuvw:0001@90px.png",
        "40": "https://res.example.net/pfp/1234:5678:9abc:defg:hijk:lmno:pqrs:tuvw:0001@40px.png"
    },

    "banner": { 
        "full": "https://res.example.net/bannar/1234:5678:9abc:defg:hijk:lmno:pqrs:tuvw:0001.png"
    },

    "colors": { 
        "primary": "#512BD4",
        "username": "#512BD4"
    },

    "status": { 
        "visibility": "friends",
        "type": "plain",
        "activity": "online",
        "emoji": "♥️", 
        "text": "Avatar!"
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
            "birthday": "your note on them", 
            "other info": "sotre whatever custom fields you want!"
        }, {
            "guid": "GUID2",
        }, {
            "guid": "GUID1",
        }, {
            "guid": "GUID2",
        }
    ],

    "blocked": [{
            "guid": "GUID1",
            "note": "your note on them", 
        }, {
            "guid": "GUID2",
        }, {
            "guid": "GUID1",
        }, {
            "guid": "GUID2"
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
            "guid": "GUID2"
        }
    ],

    "pronouns": ["she/they", "she/her", "they/them"],
    // the frist one is shown, then seperated by slashes and when hovered it will show the one at that index
    // So if you have "she/they" and you hover "she" with the array above, it will show a tooltip saying "she/her"

    "links": [{ 
            "rel": "nofriend", // UNVERIFIED
            "icon": "mastodon",
            "link": "@username@example.social", 
            "visibility": "everyone"
        }, { 
            "rel": "me", // VERIFIED
            "icon": "peertube",
            "link": "@username@joinpeertube.org",
            "visibility": "everyone"
        }
    ],

    "public_key": "999b9af08579802c4d1ca35070b179d610754abd2d601284819493a55e9ce760e1bc9b8adc6f9592311546f88f43237c65577ca7db95919945e63bfbb241b7b6",

    "prefrences": {
        "visibility": "private"

        // maybe include ALL visabilities in "prefrences"?
    }
}
```

For a users GUID, you generate a GUIDv1, and then the result of that that and the users inputted username on signup (this WILL NOT change when they change their username. Their GUID is their GUID for life unless reset*) will be fed in to create a GUIDv5. The users default tag is generated with the first 4 digits of the timestamp denoted in decimal, if the tag would be `#0000`, defult it to `#0001`.

When mentioning users, any of the following structures can be used, as long as one would bring it down to just one user in the current hub. 

```plaintext
@username
@username#1234
@username@example.net
@username#1234@example.net
```

an account suspended by the instance will add the `suspended` keyword to the `<account>` object, such as `<account type="person" suspended>`. 

When an account is suspended, all mentions of them should display as `@suspended#0000`. 

Deleted accounts should instead be removed from the database entirely, and their mentions should be replaced with `@unknown#0000`. If they simply moved to another instance, their mentions should update accordingly.

The tag `0000` is *always* reserved, but the following cases use it. Mentions defult to #0000 if no tag is specified. If no #0000 exists, but multiple non-zero tags exist, digits must be specified until they are differntiated. 

- @**suspended**#0000 - A suspended user account. 
- @**unknown**#0000 - An unknown user account. 
- @**everyone**#0000 - Mentions everyone
- @**someone**#0000 - mentions a random person. 

### Messages

A status object can represent a reaction, message, creation, or anything else that is not a `person` or `bot` in nature.

Creation:
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

## Federation

All packets must be encrypted end-to-end via RSA, with the exception of voice protocol packets, which can use AES with a key establed via RSA. This key must be diffrent for every voice session. If a voice session lasts longer than 6 hours, it must be rotated every 6 hours. 

Bonfire uses a protocol similar to [Diaspora*](https://diaspora.github.io/diaspora_federation/federation/magicsig.html) protocol. It is yet unfinished as its specifics are not relevent to the design elegance of Bonfire. 

## Commands
Bonfire has a lot of commands that must or should be built in and supported. Any action that is possible via the UI must be possible via a command. 

Therefore, every implenetation MUST have support for the following commands: 

| Command | Description | 
| ------- | ----------- |
| /invite <span class="violet-2">[duration]</span> <span class="blue-2">[uses]</span> | Invite a user to your hub! |
| /addbot <span class="violet-2">{URI}</span> | Integrate a bot into your hub! | 
| /kick <span class="violet-2">{user}</span> <span class="blue-2">[reason]</span> | Removes a user from your hub or group chat. |
| /ban {user} [reason] [duratation (default: permenent)] | Removes a user from your hub, and prevents them fron returning with a new invite for the specified time. |
| /mute {user} [reason] [duration (defult: 10m)] | Prevents a user in your hub from talking in voice or text chat for the specified time. |
| /quarintine {user} [reason] | prevents a user from seeing any main voice or text channels, and removes all permissions. They can only see rules, server info, and a help channel. Useful for if you believe an account has been compromised.  |
| /role {([add \| remove] {role} {user})| ([create | edit | delete] {role} {paramater} {new_value})} | Manages roles |
| /archive {channel} | Makes a channel read-only and be taken out of the standard channels list. Used for clearing up clutter without deleting history. |
| /nuke {channel} | Clears all messages in a channel. |
| /emote {add \| delete \| edit} {name} (specific cases) | Manages emojis |
| /nick (user) {nick} | Change your or someone elses nicknames. | 

## Permissions

| Permission | Description |
| ---------- | ----------- |
| viewChannels | Allow members to view channels by defult. | 
| manageChannels | Allow this group to create, edit, and delete channels. | 
| manageRoles | Allow this group to manage all roles below them. | 
| manageEmoji | Allow users in this group to manage hub emoji | 
| viewAuditLog | Allow members to view a reccord of all changes to the hub |
| manageWebhooks | Allow members to create, edit, or delete webhooks, which can post messages in the hub. | 
| manageIntegrations | Allow members to add, remove, and edit integrated bots. | 
| manageGuild | Allow members to edit the hubs name, avatar, rules, and description | 
| createInvite | Allow users to create hub invites by defult. | 
| changeAlias | Allow users to change thier own nickname in the hub | 
| manageAlias | Allow users to change anyones nickname in the hub | 
| canKick | Allow users to kick members | 
| canBan | Allow users to ban members. | 
| canMute | Allow users to issue mutes | 
| sendMessages | Allow users to send messages in text channels. | 
| createThreads | |
| messageTreads | | 
| createPrivateThreads | |
| embedImages | Allows users to embed only image links | 
| embedLinks | Can embed links to make them look better. |
| canReact | Allows users to react to messages |
| useExternalEmoji | Allows users to use emoji  from other hubs, instnaces, or thier own in your hub. | 
| canPingAll | Allow users to mention @everyone | 
| canPingHere | Allow users to mention @here | 
| canPingOnline | Allow users to mention @online | 
| canPingRandom | Allow users to mention @someone | 
| canPingThis | Allow users to ping this role | 
| canPingRoles | Allow users to ping all roles raguardless of `canPingThis` | 
| manageMessages | Allow members to delete messages sent by other people. | 
| manageThreads | Allow users to delete or archive threads by other people | 
| viewMessageHistory | Allow users to view messgages sent before an hour ago | 
| blindMessages | Hide all messages in a channel to a user, except for replies to thier messages and messages sent by them. useful for verification channels | 
| useCommands | A blanket commands off button, Probably NOT what you are looking for. | 
| voiceConnect | Can connect to voice channels | 
| voiceSpeak | Can speak in voice channels | 
| voiceVideo | Can use video in voice channels | 
| voiceActivity | | 
| voicePriority | Determine if this user can speak over other people with a keybind | 
| voiceForceMute | Allow muting of other members | 
| voiceForceDeafen | Allow force deafing members | 
| voiceDeafenNoMute | Determine if a user can deafen without also muting. | 
| moveMembers | Determine if you can move members between channels |
| manageEvents | | 
| manageAll | Override all permissions given with yes, for all channels. Doing this will make someone have all the same powers as the hub owner, except for deleting it. |

## URI Scheme

The `bonfire://` URI scheme is motivated by the desire to have a clean inter-instance and inter-client way to denote various locations. This does not need to denote actions as those are sent in **packets** instead. However, they can include links *to* actions like joining a hub or being an invite. 

As a general rule, it follows the sceme `bonfire://guid` scheme. 

Examples: 



```
View a users profile: 
bonfire://@username#0000@instance.tld  -- Can change if they change thier username
bonfire://d1cp:e0fg:ms56:wf2a:ygkd:fveb:82  - Cannot change

View a channel: 
bonfire://d1cp:e0fg:ms56:wf2a:ygkd:fveb:82

View a specific message: 
bonfire://d1cp:e0fg:ms56:wf2a:ygkd:fveb:82
```
