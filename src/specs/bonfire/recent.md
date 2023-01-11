---
title: Bonfire Recent Draft
tags: 
    - bonfire
---

Bonfire is a working (and temperary) name for a standard to allow for community-devided federated instant messaging. In laymans terms, its federated discord. 

<blockquote class="callout callout--info">
    <!-- <svg src="/_shared-content/lucide/alert-triangle.svg" color="red"></svg> -->
    <div class="callout__header">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
        <p>This specification is a draft!</p>
    </div>
    <p>it is not finished and is due for many, many revisions down the road. </p>
</blockquote>

## Definitions

- Let the keywords "MUST", "MUST NOT", "SHOULD", "SHOULD NOT", and "MAY" (and lowercase equivelents) be defined as specified in [RFC:2119](https://www.rfc-editor.org/rfc/rfc2119)
- Let `incorrect` mean MUST NOT; as in, incorrect behaviour comes close to violating the standard. 
- Let `i<int>` represent 2^int-1. Some examples (and the important ones) are as follows;
    - `i6` equals `63`
    - `i8` equals `255`
    - `i16` equals `65,535`
    - `i32` equals `2,147,483,647`
    - `i64` equals approxamtely `1.844674407×10¹⁹`
- Let `XML Object` represent one XML tag, and any nested objects thereforth. Let this not exeed the manimum status characters of an i16. 
- Let `packet` represent one XML object sent between a client-server, or server-server relationship. 
- Let `snake_case` and `snake case` mean the naming scheme where multiple words are written in all lowercase and words are seperated with underscores.

## Design Philopshy 

*Some of the following definitions are from [ariadne.space's post on ActivityPub's design falings](https://ariadne.space/2019/01/07/activitypub-the-worse-is-better-approach-to-federated-social-networking/).

- **Simplicity**: The standard and protocol should be simple to implement. It is much more important for the protocol and standard to be simple than the backend implementation. 
- **Cleanliness**: The standard must be clean and easily useable from a end-user perspecrtive. It is more important for it to be clean and simple for end-users than the backend implementation. 
- **Correctness**: All packets and URI's must be verifiably correct or incorrect. It MUST NOT ever be unclear. 
- **Safety**: The standard and protocol is designed in a way that is safe, any unsafe implementations are considered incorrect. 
- **Completeness**: The standard and protocol must cover all reasonably expected situations. 
- **Privacy**: All content should be encyrpted and sent through secure channels. It is considered incorrect to send unencrypted data with the exception of pre-written public HTML pages. 
- **Prevent Consolidation**: We don't want this to end up like email, where you *can* self host and join a smaller provider, but good luck with all the limitations in place.

## Objects

### Accounts

An account is an object that represents a `Person` in nature. Its XML Object is as follows: 

```xml
<account>
    <display_name>I am an ACTOR</display_name>
    <username>actor</username>
    <hash>1234</hash>
    <instance>example.net</instance>

    <handle>@actor#1234@example.net</handle>

    <cid>1234:5678:9abc:defg:hijk:lmno:pqrs:tuvw</cid>

    <last_edited unit="s">1673395864</last_edited>
    <!-- UNIX Timestamp in secconds.  -->

    <bio language="en" encoding="UTF-8">
    Hey, its my bio for my account. It's pretty cool. It has mostly full **markdown** and :emoji: support!
    </bio>

    <icon size="full">https://res.example.net/pfp/1234:5678:9abc:defg:hijk:lmno:pqrs:tuvw:0001.png</icon>
    <icon size="255x255">https://res.example.net/pfp/1234:5678:9abc:defg:hijk:lmno:pqrs:tuvw:0001@255px.png</icon>
    <icon size="90x90">https://res.example.net/pfp/1234:5678:9abc:defg:hijk:lmno:pqrs:tuvw:0001@90px.png</icon>
    <icon size="40x40">https://res.example.net/pfp/1234:5678:9abc:defg:hijk:lmno:pqrs:tuvw:0001@40px.png</icon>

    <banner size="full">https://res.example.net/bannar/1234:5678:9abc:defg:hijk:lmno:pqrs:tuvw:0001.png</banner>

    <primary_color>#512BD4</primary_color>
    <username_color>#512BD4</username_color>

    <status>
        <!-- Valid Values: online, offline, away, idle, do not disturb -->
        <type>online</type>
        <emoji>:rainbow_flag:</emoji>
        <text>Being gay on example.net</text>
    </status>

    <friends>
        <friend handle="@khaim#0919@instance.tld" cid="l012:l10a:9abc:a::nl:pqrs:92" nickname="Khaim :heart:"></friend>
    </friends>

    <hubs>
        <hub cid="hub:012a:2918:asd1:jq:sad::example.net"></hub>
    </hubs>

    <links>
        <link rel="nofriend" icon="mastodon">@username@mastodon.social</link> <!-- UNVERIFIED accounts. They get verified by linking to thier bonfire account publicly onthe linked account.-->
        <link rel="me" icon="peertube">@username@joinpeertube.org</link> <!-- This is VERIFIED because it has rel="me" -->

        <!-- The user can specify which icon to use, we reccommend you use https://simpleicons.org for the icons
             if no icon is specified and the network is unrecignised, use the favicon instead -->
    </links>

    <public_key>999b9af08579802c4d1ca35070b179d610754abd2d601284819493a55e9ce760e1bc9b8adc6f9592311546f88f43237c65577ca7db95919945e63bfbb241b7b6</public_key>
    <!-- This key is arbitrary, but it is a 128 Hex Public Key-->

    <prefrences scope="to_owner_only">
        ...
    </prefrences>
</account>
```
*We suggest you store this data minified in a deployed server, as it can get bulky with all the indents. The following is the same code minified: (you can just FEEL the savings)*

```xml
<account><display_name>I am an ACTOR</display_name><username>actor</username><hash>1234</hash><instance>example.net</instance><handle>@actor#1234@example.net</handle><cid>1234:5678:9abc:defg:hijk:lmno:pqrs:tuvw</cid><last_edited unit="s">1673395864</last_edited><bio language="en" encoding="UTF-8">Hey, its my bio for my account. It's pretty cool. It has mostly full **markdown** and :emoji: support!</bio><icon size="full">https://res.example.net/pfp/1234:5678:9abc:defg:hijk:lmno:pqrs:tuvw:0001.png</icon><icon size="255x255">https://res.example.net/pfp/1234:5678:9abc:defg:hijk:lmno:pqrs:tuvw:0001@255px.png</icon><icon size="90x90">https://res.example.net/pfp/1234:5678:9abc:defg:hijk:lmno:pqrs:tuvw:0001@90px.png</icon><icon size="40x40">https://res.example.net/pfp/1234:5678:9abc:defg:hijk:lmno:pqrs:tuvw:0001@40px.png</icon><banner size="full">https://res.example.net/bannar/1234:5678:9abc:defg:hijk:lmno:pqrs:tuvw:0001.png</banner><primary_color>#512BD4</primary_color><username_color>#512BD4</username_color><status><type>online</type><emoji>:rainbow_flag:</emoji><text>Being gay on example.net</text</status><friends><friend handle="@khaim#0919@instance.tld" cid="l012:l10a:9abc:a::nl:pqrs:92" nickname="Khaim :heart:"></friend></friends><hubs><hub cid="hub:012a:2918:asd1:jq:sad::example.net"></hub></hubs><links><link rel="nofriend" icon="mastodon">@username@mastodon.social</link><link rel="me" icon="peertube">@username@joinpeertube.org</link></links><public_key>999b9af08579802c4d1ca35070b179d610754abd2d601284819493a55e9ce760e1bc9b8adc6f9592311546f88f43237c65577ca7db95919945e63bfbb241b7b6</public_key><prefrences scope="to_owner_only"></prefrences></account>
```

XML SHOULD work with the reccommended DB (MariaDB (reccommended because you can easily self-host will all features and it is entirely free and open source, and handles large data loads well. You can pay for them to host it with extra stuff like redundent data tho)) [^1](https://mariadb.com/kb/en/what-data-type-should-i-use-to-store-xml-natively-in-the-database/), 

When mentioning users, any of the following strucutres can be used, as long as one would bring it down to just one user in the current hub. 

```plaintext
@username
@username#1234
@username@example.net
@username#1234@example.net
```

## Federation 

Bonfire uses a protocol simillar to [Diaspora*](https://diaspora.github.io/diaspora_federation/federation/magicsig.html) protocol. It is yet unfinished as its specifics are not relevent to the design elegance of Bonfire. 

## URI Sceheme

The `bonfire://` URI Sceheme is motivated by the desire to have a clean, inter-instance and inter-client way to denote various locations. This does not need to denote actions as those are sent in __packets__ instead. However, they can include links *to* actions like joining a hub or being an invite. 

Generally, it follows a `action:what:details` sceheme, however when CIDs are involved they are instead surrounded by forward slashes. 

Hub CIDs MUST include the inststance in them at the begining, in the following format: `CID:sub.domain.tld`. This allows URIs to be cleaner. 

```
bonfire://invite/cid/instance.tld

( bonfire://invite/1233:45::671: )
( bonfire://invite/13fg:45::6io: )

bonfire://view:@username#0000@instance.tld

( bonfire://view:@tryoxiss#8100@bonfire.example.net )
( bonfire://view:@khaim#0919@app.instance.tld )

bonfire://view/cid#channel
```