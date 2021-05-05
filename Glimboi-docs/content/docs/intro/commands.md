---
title: "Commands"
description: "Doc explaining commands"
lead: "Commands syntax and variables"
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu: 
  docs:
    parent: "intro"
weight: 110
toc: true
---

## Basic Info

Commands work the same as any other chatbot. A viewer types !commandName in chat and a response is sent. Commands are created on the commands page or from chat using the syntax - 

- !command add !NAME RESPONSE 
- !command new !NAME RESPONSE
- !cmd add !NAME RESPONSE
- !cmd new !NAME RESPONSE
- !cmd remove !NAME * Not yet Public, delete from the GUI. *
- !cmd del !NAME * Not yet public, delete from the GUI *


## Response

The command response is what is sent to chat when the command is activated. The response has a max limit of 255 characters. Be aware that some variables may go over the limit which would result in the response not being sent to chat.

### Variables

Glimboi supports various variables. These variables represent data. A variable is added into the response as $variablename .
The following variables are supported - 
- $user - The user who activated the command.
- $target - The first word after the command. ex. !test Mytho | Mytho is the target
- $cmdcount - The amount of times the command has been used. This value can be adjusted.
- $dadjoke - Inserts a dad joke into the command. These can be long and may go over the message limit.
- $advice - Inserts a random piece of advice. These can be long and may go over the message limit.
- $watchtime - The amount of time the user has watched th stream.
- $discord - The channel's discord invite code.
- $guilded - The channel's guilded invite code.
- $instagram - The channel's instagram page.
- $youtube - The channel's youtube channel.
- $twtter - The channel's twitter page.
- $catfact - A random cat fact.
- $dogfact - A random dog fact.


### Points

You can set a point limit for the command. This will check if the user has a minimum amount of points to run the command. The points will be subtracted from the user. 

## Uses

This is the amount of times the command has been used. You can set this to any value or leave it at 0. Every time the command is used the command counter will increase by one. This can be seen in the $cmdcount variable.

### Rank

You can limit points by bot ranks. This can be used to make mod only commands or limit certain commands to long time supporters.
This feature is currently unimplemented but will be added soon.

## Repeat

If the command has repeat enabled it will be added to the repeat list. This list will repeat one of the commands on a set timer. The timer and other settings related to repeating commands can be found on the settings page. 

## Sound Effect

When the command is activated this sound effect will play. This requires the Glimboi overlay to be active and going through the stream (OBS browser source). Currently limited to one sound per command.

## Media

When the command is activated this media will display in the overlay. You can choose an image, GIF, or video. Most formats are supported. The ovelay must be active and viewable from OBS (browser source).
