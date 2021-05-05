---
title: "Beta Launch"
description: "Page describing the GlimBoi launch."
lead: "A note about the BlimBoi launch."
date: 2020-11-04T09:19:42+01:00
lastmod: 2020-11-04T09:19:42+01:00
draft: false
weight: 50
images: ["say-hello-to-doks.png"]
contributors: ["Mytho"]
---

## Feature List

These are the current features for the beta. The bot will continue to get new features over time. 

### Commands

 - Basic commands. !command triggers a set response
 - Command variables. Data that is inserted into the code after evaluation. ex. $time returns the current time to the command.
 - Cooldowns. You can set a cooldown for your commands. Note that any command triggers a cooldown and the cooldown affects all other commands. This will likely be adjusted in a future update. (off by default, check settings)
 - Points. Currently a placeholder for future implementations.

### Users

 - GlimBoi can import users from Glimesh. This is done so the bot can store data about the user.
 - !user add NAME or !user new NAME or add a user in the GUI.
 - The user must exist on glimesh.
 - We store points, team, inventory, and watch time (future implementations), name and an array of quotes. 
 - A rank system will be built soon.

### Quotes

 - A quote is a stored string of what a viewer said. The time,user, and message is recorded.
 - Quotes are linked to the user that said the quote. They hold an array of IDs which link to a quote in the quotes DB 
 - !quote triggers a random quote

### Points

GlimBoi has a currency system. It is *mostly* unimplemented but when finished it will...

 - You can change the name of "points" to anything you wish.
 - Viewers earn a set amount to earn every 15 minutes.
 - Viewers start with a set amount.
 -  Points can be spent on special commands and games.
 - A leaderboard is created for all to see.
> Note that although these settings are in the bot they are mostly visual.The point system has not been included in the API just yet. The UI shows what it will look like when its finished. 

### Settings
You can change most of the above information to you liking.

 - Cooldowns
 - Points name
 - Starting amount (coming soon)
 - Earning per 15 min (coming soon)
 - Actual uses for points (soon after)
