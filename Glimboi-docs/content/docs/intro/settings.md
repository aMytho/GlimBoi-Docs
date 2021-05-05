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

## Cooldown

Glimboi will apply a cooldown to all commands. This prevents viewers from spamming the chat with commands. This applies to ALL commands, not just one command being repeated. Below is an example of how this might work.

30 second cooldown -

!info - Sent to chat

- 5 seconds later

!other - Not sent to chat

- 25 seconds later

!follow - Sent to chat

In a future update I will add cooldowns per command instead of globally. 

## Repeat Delay

Every command can be repeatable. One random repeatable command is sent to chat on a set interval. This interval can be adjusted here. This setting is directly dependent on the repeat delay setting.

## Repeat Protection

This setting helps to prevent the bot from spamming the chat with timed messages. If your chat is having a slow day your repeating messages can take over. Viewers usually don't want to see a chat full of the same few repeated messages and no real chatters. This setting will prevent the next repeating message from going to chat if a minimum amount of non bot messsages has not been met. You can adjust this setting up to 60 messages.

## Log Messages

Glimboi can record your chat for you. You can use this to reflect on your stream and view missed messages. The user and message are listed. When the bot disconnects from chat it will save the file for you.

## Initial Value

This is the amount of points that a new user starts with.

## Rate

This is the amount of points earned per 15 minutes if the user is active in chat.

## Name

This is the name of your curency system. It is recomended to keep this short.