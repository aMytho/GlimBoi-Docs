---
title: "Users"
description: "Doc explaining how users work in GlimBoi."
lead: "Store data about your viewers for quotes, points, games, and more!"
date: 2020-11-16T13:59:39+01:00
lastmod: 2020-11-16T13:59:39+01:00
draft: false
images: []
menu:
  docs:
    parent: "intro"
weight: 120
toc: true
---

## User Controls

GlimBoi must add a viewer as a user to store data on them. This helps the bot to save disk space and resources. Users can be added and removed at any time. 

### Adding Users

You can add users from the users page. You can also add them by typing the following in chat -
- !user new NAME
- !user add NAME


### Removing Users

You can remove users from the users page. You can also remove them by typing the following in chat - 
- !user del NAME * This feature is not yet implemented, delete a user in the GUI *
- !user remove NAME * This feature is not yet implemented, delete a user in the GUI *

### Editing Users

You can edit some user properties from the users page. Currently you can only edit the amount of points for the user. There is no method to edit users in chat.

## User Properties

A new user has various properties. Some of these are added when the user is created. Others are added over time.

### Name

The username of the user.

### Points

An amount of currency. A user will earn a set amount when created. They earn more currency every 15 minutes if they are active in chat.

### Quotes

Quotes are saved chat messages the user has sent. Anyone can add a quote to any user. A random quote can be returned with the !quote command.

### Watch Time

The amount of time in minutes a user has been active in chat. Being active requires 1 message every 15 minutes. Note that watch time is added in blocks of 15 minutes. This means you can have 15, 30, 45, 60, etc. minutes of watch time. 

### Team

The team the user belongs to. This feature is not yet implemented.

### Role

The users rank. This feature is not yet implemented. 

### Link

The link to the users channel.