---
title: "Currency System"
description: "Doc explaining points"
lead: "Use points to reward your viewers for being active in chat."
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "Users"
weight: 140
toc: true
---

<img src="/docs/users/pointsleaderboard.png" class="border-0 figure-img img-fluid blur-up lazyautosizes lazyloaded">


## Currency Overview

Viewers can become users in GlimBoi. Once they are added as a user they can start to earn currency. Every 15 minutes the bot will check if the user has spoken in chat. If the user has been active Glimboi will give the user a set amount of points. These points can be used for features within the bot.

Chat Commands (Info):

- !points : Returns how many points the user has.
- !points top : Returns the user with the most amount of points.
- !points NUMBER : Returns the user with the specified position on the point leaderboard.
- !points get USER : Returns the specified users points.
- !points help : Returns the above info.

## Currency Settings

You can change the amount of points that a user starts with. You can also change how many points are earned if the user is active in chat. The name of your currency can also be adjusted.

## Give/Take Currency

You can edit a users points on the users page. Select "Edit User". Enter the name of the user. Now you can edit the points of the user. You can also adjust users points from chat. The user who is changing the points must have the linked permission for doing so.

Chat Commands (Modify):

- !points (set or =) USER AMOUNT : Seta a users points to a specified value.
- !points (add or inc or +) USER AMOUNT : Adds points to a user.
- !points (sub or dec or -) USER AMOUNT : Removes points from a user.