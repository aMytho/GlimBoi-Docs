---
title: "Troubleshooting"
description: "Solutions to common problems."
lead: "Solutions to common problems."
date: 2020-11-12T15:22:20+01:00
lastmod: 2020-11-12T15:22:20+01:00
draft: false
images: []
menu:
  docs:
    parent: "help"
weight: 620
toc: true
---

# Restart

Usually a simple restart fixes the problem. Reloading the bot may prove helpful.


## Why are commands not working?

Ensure the cooldown is turned off or at a low rate. Check that you have the required rank to run the command. You may also need points to run the command. Most of these conditions will alert you in chat if they are not met.

## Why are my stream stats (viewcount, followers, and new subs) not updating?

This feature does not update frequently. I have done this to help the Glimesh API. When they add an improved method of getting this information it will update immediately.

## Why did the bot randomly crash?

Good question! Although most errors simply log an error to the console (shift+ctrl+i) some errors crash glimboi. I have tried to catch most of these bugs but some will get through. If your bot crashes please contact me with info about what you were doing. You can also send me a log of the main process. It is located in %appdata%/Roaming/GlimBoi/logs/main.txt

I will get a crash reporter in the future!

## How do I resize the bot?

Click and drag the blue navigation bar on the top of the screen. Move the window down. Then click on the edges of the window and resize normally.

## How do I uninstall GlimBoi?

*Sad GlimBoi*

Find the .exe file you use to start the bot. Right click, open file location. Run Uninstall.exe . If you wish to delete the bot data you must do so manually.

%appdata%/Roaming/GlimBoi

## Reinstall
Create a copy of the data folder and paste in somewhere safe. The location of this folder can be found by opening dev tools while in the bot (shift+ctrl+i). Near the top of the console tab a config file path will be shown. You can use this path to find the data folder. Copy the folder or the contents of it and save them to another location. After updating you can go back and paste the old data folder over the new one. This will prevent a possible loss of data.

## Get support

- [Twitter DM](https://twitter.com/MythoGM)
- Discord DM Mytho#1108
- [Glimesh.tv/Mytho](https://glimesh.tv/Mytho)

