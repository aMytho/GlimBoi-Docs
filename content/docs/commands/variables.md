---
title: "Variables"
description: "Doc explaining command variables"
lead: "Command Variables"
date: 2021-10-13T15:21:01+02:00
lastmod: 2021-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "Commands"
weight: 160
toc: true
---

## Command Variables

Variables are a string of text that represent data. They are used when a value of something may change. Variables start with a $ followed by the name of the variable. Some actions let you create temporary variables.

Let's say you wanted a command to welcome the name of a user when they join your chat. You *could* make a individual welcome command for each user but there is an easier way. You can use the $target variable which takes the first word after the command trigger.

### Example

CMD name: !welcome

CMD chatMessage data: Welcome to the chat $target

Use in chat: !welcome Mytho

CMD output: Welcome to the chat Mytho.

All variables are inserted into data fields the same way. Not all actions support variables. A list of all variables can be found below.


#### $target

The first word after the command.

Go follow $target at Glimesh.tv/$target

!so Mytho | Go follow Mytho at Glimesh.tv/Mytho

#### $message

Everything after the command.

You just said: $message

!parrot Hello there | You just said: Hello there

#### $user

The user who used the command

$user looked in the mirror and saw $user

!mirror | Mytho looked in the mirror and saw Mytho

#### $watchtime

The amount of time the user has watched the stream (15 min blocks)

You have watched the stream for $watchtime minutes

!hours | You have watched the stream for 60 minutes

#### $cmdcount

The amount of times the command has been used

This command has been used $cmdcount times

!count | This command has been used 5 times

#### $advice

Random piece of advice. May go over 255 characters

Have some advice - $advice

!advice | Have some advice: Drink some water

#### $catfact

Returns a random cat fact. May go over 255 characters.

Random fact about cats: $catfact

!catfact | Random fact about cats: Cats have 230 bones.

#### $dogfact

Returns a random dog fact. May go over 255 characters.

Random fact about dogs: $dogfact

!dogfact | Random fact about dogs: Your dog can be left or right-pawed.

#### $discord

Returns the channels discord invite URL. Must be in the Glimesh API.

Join our discord at $discord

!discord | Join our discord at https://discord.com/invite/NZeqEjhHKf

#### $guilded

Returns the channels guilded invite URL. Must be in the Glimesh API.

Join our guild at $guilded

!guilded | Join our guild at https://guided.gg/test

#### $instagram

Returns the channels instagram URL. Must be in the Glimesh API.

Follow me on instagram at $instagram

!instagram | Follow me on instagram at https://instagram.con/test

#### $youtube

Returns the channels youtube URL. Must be in the Glimesh API.

Join our Youtube channel at $youtube

!yt | Join our youtube channel at https://youtube.com/test

#### $twitter

Returns the channels twitter URL. Must be in the Glimesh API.

Follow me on twitter at $twitter

!twitter | Follow me on twitter at https://twitter.com/Glimboi

#### $uptime

Returns how long the streamer has been live in minutes.

You have been streaming for 100 minutes!

!uptime | You have been streaming for 100 minutes!