---
title: "Set Up"
description: "Set up info for GlimBoi"
lead: "Install GlimBoi on Windows and Linux"
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "intro"
weight: 100
toc: true
---

## Beta Notice


GlimBoi is in beta. There will be bugs and other issues. I will issue patches for any issues found as quickly as possible. 

Please be patient :)

## Download

[Releases Page](https://github.com/aMytho/GlimBoi/releases/latest)

Start by downloading the installation file for your plaltform (.exe for windows and .deb for linux). Windows users can run the .exe file and choose where the bot will be installed. Linux users will need a package manager that can extract .deb files. GDebi will work for this.


### Authentication

GlimBoi requires authentication to talk as a bot/streamer account. You need to create a dev application. If you are in GlimBoi select "create bot" on the homepage. Otherwise, go [here](https://glimesh.tv/users/settings/applications). **The account that creates the dev app will be the account the bot uses to talk to chat.** This means that if you want a custom bot name you need a glimesh account with that name. Create the application (top-right of the page). The values can be whatever you want **except** for the redirect URIs which must have a value of `http://localhost:3000/success`  

This allows the bot to retrieve a token properly. When you save the app it will give you a client ID and a secret ID. Paste them in their corresponding places on the GlimBoi homepage. Select "Save Auth" to save the keys. Then press "Request Token". This will give you a token that the bot uses to connect to chat. 

Congratulations - You have completed the auth process!
You can now use GlimBoi to its full potential. This process may be changed after the official release.

> Note that the token received will last for 6 hours. Glimboi will automatically refresh the token when the bot launches. To manually refresh it, simply press "Request Token"


## Help

Need some assistance? You can recieve support at -
- [Twitter DM](https://twitter.com/MythoGM)
- Discord DM Mytho#1108
- [Glimesh.tv/Mytho](https://glimesh.tv/Mytho)
