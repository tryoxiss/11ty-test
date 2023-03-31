---
title: The ultimate guide to switching to linux
author: Tryoxiss

eleventyExcludeFromCollections: true # Reason: DRAFT

date: 2022-01-13
---

> [!info]
> *This is a written text-based article. However, if you would prefer a video guide, [Install Linux instead of Windows 11](https://www.youtube.com/watch?v=_Ua-d9OeUOg) is a good guide. This is much more comprehensive, but they cover largely the same stuff (except they use Pop_OS! instead of fedora) when installing and inital setup.*

Ok, if you're here I think its fairly safe to say your frustrated with your walled garden of choice, be it MacOS or Windows, and want to try something more open. Well, your in luck, because this guide will cover everyting you should need to know to get started with linux, it's really not that complex! Its a bit lengthly because I will be giving explanations on things, so you are better equipped to deal with things down the road. 

This should be fairly non-technical but I will use some stuff here and there, but I will explain what it all means.

Also this isn't just installing, this will cover getting started and your first steps, plus some common problems and how to get help. 

## Basics and termonology

The first thing is to pick your **distribution** or (**distro**). You see, linux is the **kernel**, which is basically how your hardware interacts with the software. An operating system also has other things, commonly a **Desktop Enviorment** (which contains other things, such as window managers, etc). 

The Desktop Enviorment is generally what people think of when they think "Operating System", because, unless your a sysadmin, thats what they spend all thier time interacting with!

Linux has a few main desktop enviorments: 
- [**Gnome**](https://www.gnome.org/) is a very simple and clean desktop enviorment, its really simple and natural to use, but may be weird for users who are not used to it at first due to the lack of common things such as a taskbar. 
- [**KDE Plasma**](https://kde.org/plasma-desktop/) is a very windows-like experince out of the box, and offers by far the most customiseability of them all. 
- Many distros ship thier own desktop enviornment aswell. 

For this guide, I will try and avoid mentioning desktops too much since since experinces can varry wildly, but from my experince **KDE Can be very buggy depending on distro**, and is always complecated. **I would not reccommend it for beginers** unless you know what you are getting into, or are truly a no-tinkering person. 

## Get your ISO
What an ISO file is isn't super important, (It's an optical disk image, for those curious). Whats important is that due to the wacky world we live in, we need to get a USB stick to pretend to be a laser disk by embedding one. **It's not nearly as complicated as it sounds**. 

For this tutorial, we will be focusing on Fedora, because it's my first experince with linux, what I am still using, and it was fairly easy for me from the start. Also, because Mint is a pain to install, despite being the best for beginers once installed. 

Anyhow, this is a simple process, rapid fire time!

1. Download your ISO from [getfedora.org](https://getfedora.org/en/workstation/download/).
2. Download [BalenaEtcher](https://www.balena.io/etcher/), this is an AMAZING piece of software that does all the leg work of tricking your USB drive into thinking its a laser disk. Don't worry, you can revert it just by whiping or reformatting the drive. 
3. Open BalenaEtcher, select your drive, select your ISO, and and click flash! 

Now, if everything went according to plan, you have a flash drive with linux on it. Neat!

Now, before we continue, it's time to dicuss... 

## All About Linux

Linux is a lot of things, but the exact same as your current system it is not! There WILL be a learning curve--for me, I was using linux just as efficently as windows in about 4 days. More advnaced things like shortcuts can come later. 

I have this chapter because I want you to understand what your getting into. Linux is amazing, don't get me wrong. But it has some shortcomings, at least as of this post. They are all rapidly improving, but for the standard person: linux is not just ready, it's been ready and more than ready for nearly 6 years!

That being said, here are its major falling points: 
**Microsoft's or Specialised Software**, you won't find Adobe applications, you won't find Microsoft office. 

What we do have however, is a whole suite of applications that are comperable and do the same pourpose. If you just keep reading, I will help you replace all lost apps with alternatives. 

**AAA Gaming**, sorry to burst your bubble, you won't be playing the new god of war at 300 FPS on launch day. 

Here in linux land, we have various tools: one is called **Proton** and is developed by Valve--yes, you heard that right, the company that makes steam has invested millions of dollars into making linux gaming better.

Don't get me wrong, linux gaming is nothing to scoff at. According to [ProtonDB](https://www.protondb.com/) 256 of the top 1000 games on steam run indistinuqisably from on native platforms (Platinum), an an additional 419 run very well with little to no tinkering (Gold, and often "tinkering" is adding `-force-opengl` in launch options). 

Think those numbers are low? Well, in some ways, yes, but they rise A LOT. Nearly 70% of games run so well, you will barely even notice.

The ones that don't tend to fall into one of three camps: 
1. **Online, Compettive, games**. Anti-cheat is a thing, and many games have invaisve anti-cheats that require Kernel-Level integration. I would say stay away from them anyway, but if you no-life valorant, your going to need to put it down. 
2. **Brand new, AAA games** tend not to run well. They often take advantage of new technologies and are not focused on compatability. Don't worry, 90% of these run at a silver or better in a few years, sometimes even less than a month!
3. **Quite small, neiche, games**: I'm talking mostly about games with less than 2000 copies sold. Since those numbers are top games, they don't influence that, but they are there. 

-- Specialised hardware

As for other software, we have many alternatives--some of which you may already be familliar with, as they are also quite popular on windows and mac!

Office Software: 
- [LibreOffice](https://www.libreoffice.org/): Deals well with Microsoft Office documents, but has its issues. Though the world is incresingly using OpenDocument formats and they are compatible with almost everything, so you will be dealing with native file types most of the time. 
- [OnlyOffice](https://www.onlyoffice.com/) isn't entirely free, but deals much better with Microsoft Office document formats. 

Drawing and Photo Editing: 
- [GIMP](https://www.gimp.org/) (GNU Image Manipulation Program), is, in my huble opinion, just better than photoshop. In most ways. It has a bit of a diffrent workflow, but is ultimately very good at what it does!
- [Krita](https://krita.org/en/) is an amazing drawing software, entirely free and open source. It's actually one of the most popular, even on windows!

## Getting your applications



-- Software Repos
--- Package Managers
-- basic BASH
-- File System
--- Safe Directories
--- Setup
--- Etc.

--- Wayland v. X11
