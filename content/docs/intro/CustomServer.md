---
title: "CustomServer"
description: "Connect to a custom or self-hosted instance of Glimesh"
lead: "Connect to a Custom Glimesh Instance"
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "intro"
weight: 160
toc: true
---

## Custom Instance

As of July 1st, Glimesh has closed. However, all code is open source. This means that you can run your own version of Glimesh, or connect to someone elses! Glimboi will work with all current versions of Glimesh, but future changes may break this compatibility.

> If you are reading this before the shutdown, Glimboi will still use the default Glimesh.tv URL.

## Data Export

You must export your bot data before connecting to a custom instance! The easiest way to do this is to use the export tool on the Integrations page. You can export all the .db files. If you also want to archive your cache/settings, copy the cache.json (see next step) in the Glimboi data folder.

> Feel free to look through these files. Most of them are human-readable!

Next, delete your current bot data. You can delete the data by deleting the Glimboi data folder. Click on the Edit Database button on the Integrations page. Accept the warning, and delete everything from this folder. There is no going back, so make sure you have a backup! (Here is where you can copy any extra files that were not included in the backup. Cache.json is the primary target, but you may have older files from early Glimboi versions you wish to save)

You must not re-import data from a different instance. Each instance must have its own, unique data. Mixing databases will have very strange effects and will likely crash the bot.

### Connecting to a Custom Instance

Connecting to an instance is very easy. Head to the Integrations page and scroll to the bottom. Locate the "Edit Server" button. Once clicked, you will be prompted for a server URL, HTTP/S selection, and a client ID.

#### Server URL
This is the base URL to connect to. Previously, this was `glimesh.tv`. Now, this will be the location of your instance. You should **only** include the base URL. Do not include the protocol (http://) or add an ending slash (/). Valid examples are shown below:

- myGlimesh.tv
- localhost:4000
- glimeshButAlive.now

#### HTTP/S
This setting lets you toggle HTTPS. This will apply to the HTTP API and the websocket connection. Most self-hosted instances will not require HTTPs. Most custom instances that are available over the internet will require it.

#### Client ID
Each instance requires a client ID. You can obtain a client ID from the server admin (custom instance), or make one yourself. The process for this can be seen on the [releases page](https://github.com/aMytho/GlimBoi/releases/tag/v2.7.6) for the final Glimboi version.

## Re-Authenticating

Once the values are entered, you should restart the bot. Once that is completed, go through the authorization process. Finally, connect to chat.

### Help

Need some assistance? You can receive support at -
- [Twitter DM](https://twitter.com/MythoGM)
- Discord DM Mytho#1108
- [Glimesh.tv/Mytho](https://glimesh.tv/Mytho)
