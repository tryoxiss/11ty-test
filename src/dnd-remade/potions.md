---
title: DnD Remade Potions
layout: "dndr-framework.njk"
---

**Potions** can be bought and bewed. How effective they are is related to the **size** and **potency** of a potion. It's potency determines rarity, while its size determines the uses before it runs out. Consuming a potion returns the bottle it was in. 

A potions **potency** determines what and how many dice you roll, and its rarity. Most health potions are 1d6 per dose, but this varries based on recipie and dilution. You can dilute potions with 1/4 its weight in water to lower it a tier, but multiply its doses by 1.25 (rounding up). For standard potency, see the types section.

Most potions are sold in bottles with 3 or sometimes 4 doses in them. If they were made with the same recipie, partially used potions can be combined into the same bottle without negative effects. If diffrent recipies were used, either run the potion calculations again or roll 1d4, on 4 the potion is safe, otherwise it is spoiled.

In general, potions that require a roll can be drank as normal for 1 action, or with advantage for 2 actions. If drank outside of combat, always roll advantage or assume a perfect roll. 

## Types

Potions come in many types, and you can add anything you want for your game! However, these are the default and most common types!

### Healing

Healing potions restore health instantly.

| Tier | Healing | Average Cost |
| ---- | ---- | ---- |
| <span class="blueviolet-2">Grand</span> | 1d20 | <span class="stiya-icon">9000</span> |
| <span class="blue-2">Greater</span> | 1d12 |  <span class="stiya-icon">3000</span> |
| <span class="green-2">Standard</span> | 1d6 | <span class="stiya-icon">800</span> |
| Lesser | 1d4 | <span class="stiya-icon">400</span> |

### Regeneration

Regeneration potions restore health over time. They do more healing per money, and are more consistant. One turn is 6 secconds, making 10 turns in a minute. If out of combat, you can calculate this in bulk if you would like.

| Tier | Healing | Average Cost |
| ---- | ---- | ---- |
| <span class="blueviolet-2">Grand</span> | 2d4 for 2d12 turns | <span class="stiya-icon">9000</span> |
| <span class="blue-2">Greater</span> | (1d4)-1 for 1d20 turns |  <span class="stiya-icon">3000</span> |
| <span class="green-2">Standard</span> | (1d4)-2 for 1d12 turns | <span class="stiya-icon">800</span> |
| Lesser | (1d4)-3 for 1d8 turns | <span class="stiya-icon">400</span> |

### Mana

Mana potions restore mana or spell slots instantly.

| Tier | Healing | Average Cost |
| ---- | ---- | ---- |
| <span class="blueviolet-2">Grand</span> | 10 mana OR a tier 4 slot | <span class="stiya-icon">9000</span> |
| <span class="blue-2">Greater</span> | 6 mana OR a tier 3 slot |  <span class="stiya-icon">3000</span> |
| <span class="green-2">Standard</span> | 3 mana OR a tier 2 slot | <span class="stiya-icon">800</span> |
| Lesser | 1 mana OR tier 1 slot | <span class="stiya-icon">400</span> |

## Obtaining
Potions can be obtained in a variety of ways, but the most common are below. 

### Brewing Potions
Brewing potions is determined by the ingedients used (*including* its base), time brewed, and a bit more. Potions have the following stats, which are used to determine map coordinates. The potion brewing system is directly based on that found in [Potion Craft](https://store.steampowered.com/app/1210320/Potion_Craft_Alchemist_Simulator/), but highly simplified and designed to work in a TTRPG setting. I don't feel like working on it, so for now take this apprxamte map. 

![A map guide for making potions. Top left: Explosions, Wrath, Top Middle: Air, Flight, Top Right: Magic, Energy, Middle left: Fire, Warmth, Middle Right, Water, Cold, Bottom Left: Poison, Death, Bottom Middle: Earth, Endurance, Bottom Right: Life, Growth](https://steamuserimages-a.akamaihd.net/ugc/1751356955877207072/67DF517B4289CC8447BEA359A35D46CECE5D7A50/)
*Image Credit: [Potion Craft steam news post](https://store.steampowered.com/news/app/1210320/view/3195878989272230918)*

The potion formula is a bit complicated, but as follows

[Written with this isual MathML writer](https://visualmatheditor.equatheque.net/)

<!-- And for potion size
| Direction | Effect |
| ---- | ---- |
| Up | Potions with a lot of up tend to give effects such as jump height, speed (attack or movement), etc. |
| Left | The more left a potion is, the hotter it is. Potions with a lot of left tend to give effects such as cold resistance and fire resistance. |
| Right | The more right a potion is determines how cold it is, often giving effects such as increesed endurance.  |
| Down | The more down a potion is | -->

<!-- ### Buying Potions -->

## Footnotes
(1): **Overheal** any health beyond your max. 