---
title: Bonfire Recent Draft
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

Let the keywords that follow be case insensative unless otherwise specified. 

- Let the keywords "MUST", "MUST NOT", "SHOULD", "SHOULD NOT", and "MAY" (and lowercase equivalents) be defined as specified in [RFC:2119](https://www.rfc-editor.org/rfc/rfc2119)
- Let `incorrect` mean MUST NOT; as in, incorrect behaviour violates the standard.
- Let `i<int>` represent 2^int-1. Some examples (and the important ones) are as follows;
    - `i6` equals `63`
    - `i8` equals `255`
    - `i16` equals `65,535`
    - `i32` equals `2,147,483,647`
    - `i64` equals approxamtely `1.844674407×10¹⁹`
- Let `XML Object` represent one XML tag, and any nested objects thereforth. Let this not exeed the maximum status characters of an i16. 
- Let `packet` represent one XML object sent between a client-server, or server-server relationship. 
- Let `snake_case` and `snake case` mean the naming scheme where multiple words are written in all lowercase and are seperated with underscores.
- ~~Let `CID` and mean any valid ID from the the [clean ID system](/specs/cid/recent/).~~
- Let `GUID` and `UUID` represnet a [Universually Unique Identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier). 
- Let the character sets `reserved`, `escaped`, `delims`, `unwise`, `lowalpha`, `upalpha`, `alpha`, `digit`, `alphanum`, `mark` and `unreserved` are to be defined as in [RFC:2396](https://www.ietf.org/rfc/rfc2396.txt). This is only when these keywords are in refrence to a **character set**.
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

Other, smaller goals are to make it extensible so at no point will there ever be breaking changes (No "bonfire 2.0"). While we cannot gaurntee this, a finished 1.0 spec should be backwards compatible for at least the next 30 years, while still being able to add support for new features. 

## Conventions followed

- Variables and XML Objects will be denoted in snake case. (`variable_name`)
- Variables in code which remain constant should be all capitalised. (`VARIABLE_NAME`)

## Objects

### Accounts

An account is an object that represents a `person` in nature. Its XML Object is as follows. It also contains the defult values for privacy. Anything that does not have a `visability` field cannot have its visibility edited. 

```xml
<account type="person">
    <!-- You can specify a bot account with type="bot"; 
        though we reccommend you use integrations instead -->
    <display_name>I am an ACTOR</display_name>
    <username>actor</username>
    <tag>1234</tag>
    <instance>example.net</instance>

    <handle>@actor#1234@example.net</handle>

    <guid>1234:5678:9abc:defg:hijk:lmno:pqrs:tuvw</guid>

    <last_edited unit="s">1673395864</last_edited>
    <!-- UNIX Timestamp in secconds.  -->

    <bio language="en" encoding="UTF-8" visibility="friends">
    Hey, its my bio for my account. It's pretty cool. It has mostly full **markdown** and :emoji: support!
    </bio>

    <icon size="full">https://res.example.net/pfp/1234:5678:9abc:defg:hijk:lmno:pqrs:tuvw:0001.png</icon>
    <icon size="255x255">https://res.example.net/pfp/1234:5678:9abc:defg:hijk:lmno:pqrs:tuvw:0001@255px.png</icon>
    <icon size="90x90">https://res.example.net/pfp/1234:5678:9abc:defg:hijk:lmno:pqrs:tuvw:0001@90px.png</icon>
    <icon size="40x40">https://res.example.net/pfp/1234:5678:9abc:defg:hijk:lmno:pqrs:tuvw:0001@40px.png</icon>

    <banner size="full">https://res.example.net/bannar/1234:5678:9abc:defg:hijk:lmno:pqrs:tuvw:0001.png</banner>

    <primary_color>#512BD4</primary_color>
    <username_color>#512BD4</username_color>

    <status visibility="anyone">
        <!-- Valid Values: online, offline, away, idle, do not disturb -->
        <type>online</type>
        <emoji>:rainbow_flag:</emoji>
        <text>Being gay on example.net</text>
    </status>

    <friends visibility="friends">
        <user handle="@khaim#0919@instance.tld" guid="l012:l10a:9abc:a::nl:pqrs:92" nickname="Khaim :heart:" />
    </friends>

    <blocked visibility="owner">
        <user handle="@jerk#0001@somethingbad.social" guid="nqlvw:sjifg:yo7h:zh9p:dhya:fg9vwc:q553:fg71c" />
        <instance domain="somethingbad.social" />
    </blocked>

    <hubs visibility="shared_and_friend">
        <hub guid="hub:012a:2918:asd1:jq:sad::example.net"></hub>
    </hubs>

    <pronouns summary="she/they" visibility="anyone">
        <o>she/her</o>
        <o>they/them</o>
    </pronouns>

    <links visibility="friends">
        <link rel="nofriend" icon="mastodon">@username@mastodon.social</link> <!-- UNVERIFIED accounts. They get verified by linking to thier bonfire account publicly onthe linked account.-->
        <link rel="me" icon="peertube" visbility="everyone">@username@joinpeertube.org</link> <!-- This is VERIFIED because it has rel="me" -->
        <!-- THIS connection will override the whole links setting. -->

        <!-- The user can specify which icon to use, we recommend you use https://simpleicons.org for the icons.
             If no icon is specified and the network is unrecongnised, use the favicon instead -->
    </links>

    <public_key>999b9af08579802c4d1ca35070b179d610754abd2d601284819493a55e9ce760e1bc9b8adc6f9592311546f88f43237c65577ca7db95919945e63bfbb241b7b6</public_key>
    <!-- This key is arbitrary, but it is a 128 Hex Public Key-->

    <prefrences visibility="owner">
        <!-- Owner (account owner), shared_and_friend (if the friend or hub is mutual, and you are friends with them), Friends, shared (if the friend or hub is mutual), Anyone not blocked (`unblocked`), Everyone-->
        ...
    </prefrences>
</account>
```
*We suggest you store this data minified in a deployed server, as it can get bulky with all the indents.*

XML SHOULD work with the recommended database (MariaDB; recommended because you can easily self-host. All of its features are entirely free, open source, and handles large data loads well. You can pay for them to host it with addons like redundant data though). [^1](https://mariadb.com/kb/en/what-data-type-should-i-use-to-store-xml-natively-in-the-database/). 

For a users GUID, you generate a GUIDv1, and then the result of that that and the users inputted username on signup (this WILL NOT change when they change thier username. Thier GUID is thier GUID for life unless reset*) will be fed in to create a GUIDv5. The users defult tag is generated with the first 14 bytes from thier guid, if the tag would be `0000`, or is above `#9999`, then they instead read the next 14 bits. If no string resulting in a non-zero tag is found, the tag is set to be `#0001`. if it goes above, until the end, then they are instead automatically assigned the tag `#9999`. 

When mentioning users, any of the following structures can be used, as long as one would bring it down to just one user in the current hub. 

```plaintext
@username
@username#1234
@username@example.net
@username#1234@example.net
```

an account suspended by the instance will add the `suspended` keyword to the `<account>`object, such as `<account type="person" suspended>`. 

When an account is suspended, all mentions of them should display as `@suspended#0000`. 

Deleted accounts should instead be removed from the database entirely, and thier mentions should be replaced with `@unknown#0000`. If they simply moved to another instance, thier mentions should update accordingly.

### Messages

A status object can represent a reaction, message, creation, or anything else that is not a `person` or `bot` in nature.

```xml
<message>
    <author>@actor#1234@example.net</author>
    <reactions>
        <:rainbow_flag: count="3" reactors="[@username#1234@instance.tld, @othername#0919@instance.tld, @actor#8008@example.net]"/>
        <:heart: count="5" reactors="[@username#1234@instance.tld, @othername#0919@instance.tld, @actor#8008@example.net], @purr#8888@kitties.social, @neko#1111, @kitties.social"/>
    </reactions>
    <content>hello this is my message content</content>
    <created>1673475563</created>
    <edited>1673475591</edited>
    <signature>(whatever a signature looks like)</signature>
</message>
```

## Federation 

Bonfire uses a protocol similar to [Diaspora*](https://diaspora.github.io/diaspora_federation/federation/magicsig.html) protocol. It is yet unfinished as its specifics are not relevent to the design elegance of Bonfire. 

## URI Scheme

The `bonfire://` URI scheme is motivated by the desire to have a clean inter-instance and inter-client way to denote various locations. This does not need to denote actions as those are sent in **packets** instead. However, they can include links *to* actions like joining a hub or being an invite. 

Generally, it follows a `action:what:details` scheme, however when UUIDs are involved they are instead surrounded by forward slashes. 

```
bonfire://invite/guid

( bonfire://invite/1233:45::671: )
( bonfire://invite/13fg:45::6io: )

bonfire://view:@username#0000@instance.tld

( bonfire://view:@tryoxiss#8100@bonfire.example.net )
( bonfire://view:@khaim#0919@app.instance.tld )

bonfire://view/guid#channel
```

