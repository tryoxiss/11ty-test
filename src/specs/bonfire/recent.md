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
- Let `CID` and mean any valid ID from the the [clean ID system](/specs/cid/recent/).

## Design Philosophy 

*Some of the following definitions are from [ariadne.space's post on ActivityPub's design falings](https://ariadne.space/2019/01/07/activitypub-the-worse-is-better-approach-to-federated-social-networking/).

- **Simplicity**: The standard and protocol should be simple to implement. It is much more important for the protocol and standard to be simple than the backend implementation. 
- **Cleanliness**: The standard must be clean and easily usable from a end-user perspective. It is more important for it to be clean and simple for end-users than the backend implementation. 
- **Correctness**: All packets and URI's must be verifiably correct or incorrect. It MUST NOT ever be unclear. 
- **Safety**: The standard and protocol is designed in a way that is safe, any unsafe implementations are considered incorrect. 
- **Completeness**: The standard and protocol must cover all reasonably expected situations. 
- **Privacy**: All content should be encrypted and sent through secure channels. It is considered incorrect to send unencrypted data with the exception of pre-written public HTML pages. 
- **Prevent Consolidation**: We don't want this to end up like email, where you *can* self host and join a smaller provider, but good luck with all the limitations in place.

## Conventions followed

- Variables and XML Objects will be denoted in snake case. Variables in code which remain constant should be all capitalised. 

## Objects

### Accounts

An account is an object that represents a `person` in nature. Its XML Object is as follows: 

```xml
<account type="person">
    <!-- You can specify a bot account with type="bot"; 
        though we reccommend you use integrations instead -->
    <display_name>I am an ACTOR</display_name>
    <username>actor</username>
    <tag>1234</tag>
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
        <user handle="@khaim#0919@instance.tld" cid="l012:l10a:9abc:a::nl:pqrs:92" nickname="Khaim :heart:" />
    </friends>

    <blocked>
        <user handle="@jerk#0001@conservative.social" cid="nqlvw:sjifg:yo7h:zh9p:dhya:fg9vwc:q553:fg71c" />
        <instance domain="somethingbad.social" />
    </blocked>

    <hubs>
        <hub cid="hub:012a:2918:asd1:jq:sad::example.net"></hub>
    </hubs>

    <pronouns>
    she/they
        <o>she/her</o>
        <o>they/them</o>
    </pronouns>

    <links>
        <link rel="nofriend" icon="mastodon">@username@mastodon.social</link> <!-- UNVERIFIED accounts. They get verified by linking to thier bonfire account publicly onthe linked account.-->
        <link rel="me" icon="peertube">@username@joinpeertube.org</link> <!-- This is VERIFIED because it has rel="me" -->

        <!-- The user can specify which icon to use, we recommend you use https://simpleicons.org for the icons.
             If no icon is specified and the network is unrecongnised, use the favicon instead -->
    </links>

    <public_key>999b9af08579802c4d1ca35070b179d610754abd2d601284819493a55e9ce760e1bc9b8adc6f9592311546f88f43237c65577ca7db95919945e63bfbb241b7b6</public_key>
    <!-- This key is arbitrary, but it is a 128 Hex Public Key-->

    <prefrences scope="to_owner_only">
        ...
    </prefrences>
</account>
```
*We suggest you store this data minified in a deployed server, as it can get bulky with all the indents.*

XML SHOULD work with the recommended database (MariaDB; recommended because you can easily self-host. All of its features are entirely free, open source, and handles large data loads well. You can pay for them to host it with addons like redundant data though). [^1](https://mariadb.com/kb/en/what-data-type-should-i-use-to-store-xml-natively-in-the-database/), 

When mentioning users, any of the following structures can be used, as long as one would bring it down to just one user in the current hub. 

```plaintext
@username
@username#1234
@username@example.net
@username#1234@example.net
```

### Messages

A status object can represent a reaction, message, creation, or anything else that is not a `person` or `bot` in nature.

```xml
<msg>
    <author>@actor#1234@example.net</author>
    <reactions>
        <o emoji=":rainbow_flag:" count="3" reactors="[@username#1234@instance.tld, @othername#0919@instance.tld, @actor#8008@example.net]"/>
        <o emoji=":heart:" count="5" reactors="[@username#1234@instance.tld, @othername#0919@instance.tld, @actor#8008@example.net], @purr#8888@kitties.social, @neko#1111, @kitties.social"/>
    </reactions>
    <content>hello this is my message content</content>
    <created>1673475563</created>
    <edited>1673475591</edited>
    <signature>(whatever a signature looks like)</signature>
</msg>
```

## Federation 

Bonfire uses a protocol similar to [Diaspora*](https://diaspora.github.io/diaspora_federation/federation/magicsig.html) protocol. It is yet unfinished as its specifics are not relevent to the design elegance of Bonfire. 

## URI Scheme

The `bonfire://` URI scheme is motivated by the desire to have a clean inter-instance and inter-client way to denote various locations. This does not need to denote actions as those are sent in __packets__ instead. However, they can include links *to* actions like joining a hub or being an invite. 

Generally, it follows a `action:what:details` scheme, however when CIDs are involved they are instead surrounded by forward slashes. 

Hub CIDs MUST include the instance at the begining in the following format: `CID:sub.domain.tld`. This allows URIs to be cleaner. 

```
bonfire://invite/cid/instance.tld

( bonfire://invite/1233:45::671: )
( bonfire://invite/13fg:45::6io: )

bonfire://view:@username#0000@instance.tld

( bonfire://view:@tryoxiss#8100@bonfire.example.net )
( bonfire://view:@khaim#0919@app.instance.tld )

bonfire://view/cid#channel
```
