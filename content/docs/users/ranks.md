---
title: "Ranks & Roles"
description: "Doc explaining the rank system"
lead: "Group users and set various permissions"
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

## Ranks Overview

A rank is a way to group users. You can use the default ranks or create custom ones. Below lists the default ranks. Capitalization does matter.

- Streamer: The top rank by default.
- Mod: Second rank by default.
- user: Default rank automatically assigned to all new users.

> Note that the Glimesh API doesn't support roles. You have to manually add the Streamer and Mod ranks in Glimboi. Users are added automatically.

Ranks are designed to protect your bot data from unwanted actions. New ranks have low permissions. Normal users cannot delete data unless you modify the rank to do so. You should adjust the rank system to fit your needs.

## Rank Permissions

The below permissions are self explanatory and refer to chat commands only.

- Add Commands (chatMessage only)
- Edit Commands (not yet supported)
- Remove Commands
- Add quotes
- Edit Quotes (not yet supported)
- Remove Quotes (not yet supported)
- Add Points
- Edit Points
- Remove Points

The below permissions are a little more complicated and require an explanation.

- Control Music Player: Allows the user to play, pause, skip, and go to the previous song.
- Mod Immunity: Protects them from the bad word filter **only**. If you delete/timeout/ban them from Glimesh mod immunity cannot protect them.
- Start Events/Games: Allows the user to start various events such as bankheist, glimroyale, etc.
- Rank Tier: This is a tier for *command* ranks. If the rank selected on a command has a minimum tier of 3 then only ranks 3 and above can run the command. Useful for mod only commands.

<img src="/docs/users/permissions.png" class="border-0 figure-img img-fluid blur-up lazyautosizes lazyloaded">
