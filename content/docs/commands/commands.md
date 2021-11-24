---
title: "Basics"
description: "Doc explaining commands"
lead: "Command Basics"
date: 2021-10-13T15:21:01+02:00
lastmod: 2021-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "Commands"
weight: 110
toc: true
---

### Basic Info

Commands work the same as any other chatbot. A viewer types !commandName in chat and a script is ran. This script is divided into "actions". Actions are instructions for the command. Commands are created on the commands page or from chat using the syntax -

- !command add !NAME RESPONSE
- !command new !NAME RESPONSE
- !cmd add !NAME RESPONSE
- !cmd new !NAME RESPONSE
- !cmd remove !NAME
- !cmd del !NAME

*Adding commands from chat adds the ChatMessage action.*

### Actions

Actions are the instructions that your command follows. Commands can do a lot more than send a message! You can play sound effects, record clips, make API requests, and much more.

A full list of actions can be found [here](/docs/commands/actions)

### Settings

Settings are properties for your commands. You can restrict thier usage by points or rank. You can also add cooldowns and set a command to run on a set interval.

#### Points

This is how many points it takes to activate the command. The user must have the set amount or more to run the command.

#### Uses

This is the amount of times the command has been used. You can set this to any value or leave it at 0. Every time the command is used the command counter will increase by one. This can be seen in the $cmdcount variable.

#### Cooldown

This is how long the command must wait to run after being used. If someone attempts to use it while on cooldown the cooldown message will be sent to chat. This can be customized on the command settings page. Setting it to 0 removes the cooldown.

> Values are in minutes

#### Rank

You can limit points by bot ranks. This can be used to make mod only commands or limit certain commands to long time supporters. Note that this restricts the command to the **specified rank and above**, not just the rank itself. You will want to adjust the rank tiers on the rank page.

#### Repeat

If the command has repeat enabled it will be added to the repeat list. This list will run one of the commands on a set timer. The timer and other settings related to repeating commands can be found on the command settings page.

#### Remove Trigger

This setting allows you to delete the trigger that actived the command (!cmdname). The bot must have delete message mod setting on Glimesh. The trigger will be deleted when all of the actions have finished running.