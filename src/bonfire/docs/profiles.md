---
title: Profiles
--- 

Profiles are made up of a series of objects that determine its appearnace and details. A profile is a subset of an account, and an account can have multiple profiles which can be swapped between freely. 

## Identification

An account can be identified with a GUID, which is an unchanging ID system which will [virtually never collide](http://guid.one/guid) (1 in 3.403×10³⁸ (340,282,366,900,000,000,000,000,000,000,000,000,000 (340 Decillion)) chance), so to reach the limit, all 8 billion of us on earth would need to each create 269,757,076,750 GUID's every seccond to reach the limit before the sun explodes!


Each account also has a few other identification values, which can change. All names follow the `@username#0001@example.net` format. We know that can be quite unweildy, so you can remove any unneeded sections! For example, if you want to ping `@alice#1234@example.net` and they are the *only* alice in the hub, you can just ping `@alice`. You only need to specify far enough to make it *unique for the time of sending a message*, after that its tracked via GUID. 

So lets say there are two alice's in that hub, now what? Well, you can specify based on instance *or* discriminator! If one or the other is the same, you will need to use the one that is not the same, but that is a rare occurance. 

Users also have a display name (`prefered_name`) property, which is what actually shows up when talking to them. 

You can additionally store info on people, such as a note, thier birthday, etc. This all is stored in JSON, but can be imported or exported as [.vcf](https://en.wikipedia.org/wiki/VCard) or vCard format, which is highly standardised. 

