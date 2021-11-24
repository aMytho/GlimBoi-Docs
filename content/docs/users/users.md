---
title: "User Controls"
description: "Doc explaining how users work in GlimBoi."
lead: "Store data about your viewers for quotes, points, games, and more!"
date: 2020-11-16T13:59:39+01:00
lastmod: 2020-11-16T13:59:39+01:00
draft: false
images: []
menu:
  docs:
    parent: "Users"
weight: 5
toc: true
---

## Users

GlimBoi must add a viewer as a user to store data on them. You can do this manually or let the bot automatically detect new users every 15 minutes. Users can be added and removed at any time.

### Adding Users

You can add users from the users page. You can also add them by typing the following in chat (permissions dependent) -
- !user new NAME
- !user add NAME


### Removing Users

You can remove users from the users page. You can also remove them by typing the following in chat (permissions dependent) -
- !user del NAME
- !user remove NAME

### Editing Users

You can edit some user properties from the users page. Currently you can only edit ranks, points, and watchtime. There is no method to edit users in chat.

## User Properties

A new user has various properties. Some of these are added when the user is created. Others are added over time.

### Name

The username of the user.

### Points

An amount of currency. A user will earn a set amount when created. They earn more currency every 15 minutes if they are active in chat. See [Currency System](/docs/users/points)

### Quotes

Quotes are saved chat messages the user has sent. Anyone can add a quote to any user. See [quotes](/docs/users/quotes)

### Watch Time

The amount of time in minutes a user has been active in chat. Being active requires 1 message every 15 minutes. Note that watch time is added in blocks of 15 minutes. This means you can have 15, 30, 45, 60, etc. minutes of watch time.

### Team

The team the user belongs to. This feature is not yet implemented.

### Rank

A specific rank to group users. Default ranks are users, mods, and Streamers. You can also create custom ranks and change permissions. See [Ranks](/docs/users/ranks)

### Link

The link to the users channel on Glimesh.

<img src="/docs/users/userlist.png" class="border-0 figure-img img-fluid blur-up lazyautosizes lazyloaded">
