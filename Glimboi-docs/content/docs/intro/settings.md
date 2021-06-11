---
title: "Settings"
description: "Doc explaining settings"
lead: "Customize the bot to your preference"
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "intro"
weight: 150
toc: true
---

## Settings Overview

Glimboi has a few settings to help you customize the bot for your stream.

## Chat

### Health Reminder

If enabled Glimboi will remind you to stretch, drink water, and take a break if neccassary. You can set the interval or turn it off completly.

### Log Messages

If enabled Glimboi will log every chat message to a text file. When you join a chat Glimboi will ask you which file you want to save the log to.

## Commands

## Repeat Delay

Every command can be repeatable. One random repeatable command is sent to chat on a set interval. This interval can be adjusted here. This setting is directly dependent on the repeat protection setting.

## Repeat Protection

This setting helps to prevent the bot from spamming the chat with timed messages. If your chat is having a slow day your repeating messages can take over. Viewers usually don't want to see a chat full of the same few repeated messages and no real chatters. This setting will prevent the next repeating message from going to chat if a minimum amount of non bot messsages has not been met. You can adjust this setting up to 60 messages.

## Moderation

### Chat Filter

If enabled Glimboi will automatically time the user out for 5 minutes if they say a word on the banned list. This list can be found in the bot files. Glimboi must have the timeout permission.  A moderation revamp is coming and will replace this setting.

## Music

### Chat Attribution

If enabled Glimboi will send the name and artist of the song to chat when the song starts to play. This info must be included in the metadata for Glimboi to pick it up.

### Write To File

If enabled Glimboi will send the name and artist of the song to a text file. This file can be displayed in OBS or other software. This info must be included in the metadata for Glimboi to pick it up.

## Points

### Initial Value

This is the amount of points that a new user starts with.

### Rate

This is the amount of points earned per 15 minutes if the user is active in chat. They must send at least 1 message to be considered active.

### Name

This is the name of your curency. It is recomended to keep this short.