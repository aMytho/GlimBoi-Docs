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

Usually a simple restart fixes the problem. Reloading the bot (CTRL+R) may prove helpful.


## Why are commands not working?

Ensure the cooldown is turned off or at a low rate. Check that you have the required rank to run the command. You may also need points to run the command. Most of these conditions will alert you in chat if they are not met. You can also check the state of the command (disabled or enabled) as well as the relevant triggers.

## Why are my stream stats (viewcount, followers, and new subs) not updating?

The stats update on a 15 minute cycle. I have done this to help the Glimesh API. When they add an improved method of getting this information it will update immediately.

## Why did the bot randomly crash?

Good question! Although most errors simply log an error to the console (shift+ctrl+i) some errors crash glimboi. I have tried to catch most of these bugs but some will get through. If your bot crashes please contact me with info about what you were doing. You can also send me a log of the main process. It is located in %appdata%/Roaming/GlimBoi/logs/main.txt. If you have used the bot for an extended amount of time you may have multiple log files. You only need to send the most recent one.


## How do I uninstall GlimBoi?

*Sad GlimBoi*

Find the .exe file you use to start the bot. Right click, open file location. Run Uninstall.exe . If you wish to delete the bot data you must do so manually. The bot data can be found in the below folder. Deleting this data will completely remove all of your commands, users, ranks, etc. Everything will be lost **including** the backups!

%appdata%/Roaming/GlimBoi

## Reinstall
Export a copy of your data from the Integrations page. Make sure to export it somewhere where the bot files cannot access it. Your desktop or documents would work. The app data directory would not. Once the reinstall is complete you can import your data from the Integrations page.

## Get support

- [Twitter DM](https://twitter.com/MythoGM)
- Discord DM Mytho#1108
- [Glimesh.tv/Mytho](https://glimesh.tv/Mytho)
