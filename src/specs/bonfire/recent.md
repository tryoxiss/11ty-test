---
title: Bonfire Recent Draft
tags: 
    - bonfire
---

Bonfire is a working (and temperary) name for a standard to allow for community-devided federated instant messaging. In laymans terms, its federated discord. 

## Definitions

- Let `i<int>` represent 2^int-1. Some examples (and the important ones) are as follows;
    - `i16` equals `65,535`
    - `i32` equals `2,147,483,647`
    - `i64` equals approxamtely `1.844674407×10¹⁹`
- Let `XML Object` represent one XML tag, and any nested objects thereforth. Let this not exeed the manimum status characters of an i16. 
- Let `packet` represent one XML object sent between a client-server, or server-server relationship. 

## Objects

### Accounts

An account is an object that represents a `Person` in nature. Its XML Object is as follows: 

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

    <prefrences>
        ...
    </prefrences>
</account>
```
*We suggest you store this data minified in a deployed server, as it can get bulky with all the indents*

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

the `bonfire://` URI scheme is used to link to accounts, messages, hubs on the front end and for the end user, and is used to transmit data on the backend. The frontend portion functions on a basic path function, and the backend functions simillarly to HTTPS. One of the main motivations for the URI sceheme is the ability to redefine reserved characters, and having an inter-instance way to link to things. 

The frontend ideintifer scheme is as follows: 

```plaintext
bonfire://[action (view | get | set | add | remove)]:[what (hub | profile | etc...)]:[details (what to operate on?)]

Maybe [what].[action]:details would be better? 
```

for example, to access a profile: 

```plaintext
bonfire://view:profile:@username#1234@example.net
```

And for a hub, and channel in that order: 

```plaintext
bonfire://view:hub:cid#channel@instance.tld
```

More complex requests, like joining, can also be handled. Below are examples of the remove operator. 

```plaintext
bonfire://remove:hub:cid
bonfire://remove:friend:cid
bonfire://remove:role:hubname:role
```

```plaintext
bonfire://add:hub:cid:access_key
bonfire://add:hub:invite
bonfire://add:instance:invite
bonfire://remove:role:hubname:role
```

maybe define where and then use / commands?? 