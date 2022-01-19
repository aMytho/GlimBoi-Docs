---
title: "Going Live Notifications"
description: "Doc explaining Discord and Guilded Notifications"
lead: "Notify your servers when you go live!"
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "Integrations"
weight: 140
toc: true
---

## Going-Live Announcements

Glimboi can notify your Discord, Guilded, and Twitter servers when you go live. You must have the permissions to create a webhook in the server. You can notify both a Discord and Guilded server at the same time however only one of each type is supported.

### Discord

Go to the server where you want to add a webhook. Select a channel to create a webhook for. Create a new webhook with the desired bot name and image. Copy the URL. **Keep this private!**

Open glimboi integrations tab. Head to webhooks. Paste the URL into the proper input. Enable discord webhooks at the top of the page.

(optional). Modify the default message if desired. Use $streamer to be replaced with the streamer name. The title and image (if live) will be automatically added to the media sent.
The bottom option asks for confirmation before sending the webhook. We highly suggest this stays active. This prevents accidental notifications and allows you to modify the message for that specific stream if desired.

Save your settings when finished.

<img src="/docs/integrations/discord.png" class="border-0 figure-img img-fluid blur-up lazyautosizes lazyloaded">


### Guilded

Go to the guilds where you want to add a webhook. Select a channel to create a webhook for. Create a new webhook with the desired bot name and image. Copy the URL. **Keep this private!**

Open glimboi settings tab. Head to webhooks. Paste the URL into the proper input. Enable guilded webhooks at the top of the page.

(optional). Modify the default message if desired. Use $streamer to be replaced with the streamer name. The title and image (if live) will be automatically added to the media sent.
The bottom option asks for confirmation before sending the webhook. We highly suggest this stays active. This prevents accidental notifications and allows you to modify the message for that specific stream if desired.

Save your settings when finished.

<img src="/docs/integrations/guilded.png" class="border-0 figure-img img-fluid blur-up lazyautosizes lazyloaded">

## Twitter

Navigate to the Integrations page. Click on the pink generate link. A link will open in your default browser. You need to approve the permissions. Once approved you can begin using the Twitter features.

Note that you are solely responsible for anything sent from your Twitter account. If a viewer uses the Tweet command action and sends a message you are responsible for whatever was sent. Use caution when adding Tweet Command Actions.