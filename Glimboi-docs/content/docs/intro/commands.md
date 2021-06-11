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

Commands work the same as any other chatbot. A viewer types !commandName in chat and a script is ran. This script is divided into "actions". Actions are instructions for the command. Commands are created on the commands page or from chat using the syntax -

- !command add !NAME RESPONSE
- !command new !NAME RESPONSE
- !cmd add !NAME RESPONSE
- !cmd new !NAME RESPONSE
- !cmd remove !NAME * Not yet Public, delete from the GUI. *
- !cmd del !NAME * Not yet public, delete from the GUI *

*Adding commands from chat adds the ChatMessage action.*

## Actions

### ChatMessage

Chatmessages are the default action. If you add a command from chat the response you give is converted to a ChatMessage. The ChatMessage has a max limit of 255 characters. Be aware that some variables may go over the limit which would result in the response not being sent to chat. The variables are listed below.

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


### API Request (GET)

This is an advanced action. You should understand what an API is and what info the API returns. Currently limited to GET requests.
Enter the URL of the API. You can include query paramters by adding `?data=value1&data2=value2` to the URL. Next you select the response type. If you choose a text type the entire response will be retrieved. Enter the name of the variable that you will store this data to (ex. $response). This variable can be used in a ChatMessage later. If you choose JSON you need to enter the keys that the bot looks for. You can search for multiple keys. Every key must have a corresponding variable that its value will be linked to.

You can also add headers with the key-value syntax.

All variables are removed when the command is complete.

### Audio

The Audio action plays a selected audio media element in the overlay. This could be a sound effect, song, or any audio file. You must add the audio element from the media page before creating this action. Once added it will appear in the dropdown menu.

### Image/GIF

The Image/GIF action shows a selected media element in the overlay. This could be a image file, animated GIF, or other image file. You must add the Image/GIF element from the media page before creating this action. Once added it will appear in the dropdown menu.

### Video

The Video action shows a selected media element in the overlay. Most video formats are supported. You must add the Video element from the media page before creating this action. Once added it will appear in the dropdown menu.

### Wait

The Wait action pauses the script for a specified duration. The duration is in seconds (s).

## Settings

### Uses

This is the amount of times the command has been used. You can set this to any value or leave it at 0. Every time the command is used the command counter will increase by one. This can be seen in the $cmdcount variable.

### Rank

You can limit points by bot ranks. This can be used to make mod only commands or limit certain commands to long time supporters. Note that this restricts the command to the specified rank, not that rank or above. This means that if you have a command with the mod rank only mods can use it, not streamers. This will likely be changed in a future release.

## Repeat

If the command has repeat enabled it will be added to the repeat list. This list will repeat one of the commands on a set timer. The timer and other settings related to repeating commands can be found on the settings page.