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

Glimboi can notify your Discord, Guilded, Matrix, and Twitter servers when you go live. You must have the permissions to create a webhook in the server. You can notify both a Discord and Guilded server at the same time however only one of each type is supported.

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

### Matrix

Matrix integration requires an access token and a room ID. These can be accessed from the element UI. **Keep your access token private**

Your access token can be accessed by going to the *help and about* section. Scroll to the bottom and click to view your token.
<img src="/docs/integrations/matrixToken.png" class="border-0 figure-img img-fluid blur-up lazyautosizes lazyloaded">

The room ID must be accessed from the room settings. Open the settings for the room and view the advanced section. Copy your room ID.
<img src="/docs/integrations/matrixRoom.png" class="border-0 figure-img img-fluid blur-up lazyautosizes lazyloaded">

## Twitter

**Twitter is no longer supported**

- - -
Twitter has decided to make their API a paid service. As a result, I can no longer provide API access for Glimboi. All features relating to twitter have been disabled. I may look into letting the user add their own keys. For now, all we can do is wait and see if the decision will be reversed.
- - -