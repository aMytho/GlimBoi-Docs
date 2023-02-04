---
title: "Actions"
description: "Doc explaining command actions"
lead: "Sending more than chatmessages..."
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "Commands"
weight: 150
toc: true
---

## Actions

Actions are the instructions that your command follows. You can create a script of instructions for your command to run.

<img src="/docs/commands/actions.png" class="border-0 figure-img img-fluid blur-up lazyautosizes lazyloaded">

#### ChatMessage

The most common action. Sends a message to chat. Each message has a max limit of 255 characters. [Variables](/docs/commands/variables) are supported.

#### API Request *Advanced

Sends a request to a third party API. You can make a HTTP GET request with header values. You then store the response in [variables](/docs/commands/variables). JSON and text based API's are supported.

#### Audio (Sound Effect)

Play a sound effect in the media overlay. You must add the sound effect on the media page before Glimboi can play it. The media overlay must be setup and running in OBS.

#### Ban User

Ban a user from Glimesh chat. The bot account **must** have the permission to ban in the chat that you join. Use with caution! [Variables](/docs/commands/variables) are supported.

#### Image/GIF

Play a image/GIF in the media overlay. You must add the image/GIF on the media page before Glimboi can play it. The media overlay must be setup and running in OBS.

### Matrix

Send a message to the Matrix (discord alternative). You must have the Matrix account information listed in the Integrations Page.

#### OBSWebSocket

This action can interface with OBS and do various things. This requires [OBS Websocket](https://github.com/obsproject/obs-websocket/releases/tag/4.9.1) installed. View our page on this [here](/docs/integrations/obswebsocket).

#### Points

Adds or removes points from a user. [Variables](/docs/commands/variables) are supported.
#### Read File

Reads a file on your PC and stores the output to a variable.

#### Timeout User

Time out a user on Glimesh. You can choose a short (5 min) or long (15 min) duration. [Variables](/docs/commands/variables) are supported. Use with caution.

#### Tweet

This action has been disabled since the Twitter API is now a paid service. Sorry!

#### Update Stream Info

This action allows you to modify your stream title from a command. You must have authorized the bot with the new permission for this to work. Max length is 255 characters. 

#### Video

Play a video in the media overlay. You must add the video on the media page before Glimboi can play it. The media overlay must be setup and running in OBS.

#### Wait

Pauses the script for a set amount of seconds. The command will not run the next action until the wait duration is over. Decimals are supported to get a value less than 1 second.

#### Write File

Writes data to a file. [Variables](/docs/commands/variables) are supported.