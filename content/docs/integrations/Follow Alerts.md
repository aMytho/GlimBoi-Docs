---
title: "Follow Messages"
description: "Doc explaining follow alerts"
lead: "Thanks for the follow!"
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "Integrations"
weight: 170
toc: true
---

## Follow Alerts

Glimboi can send a custom thank-you message when a user follows. This message can be changed from the Follow Scripts in the Integrations page.

This feature must be enabled and a message must be set to work properly. You can add the $follower variable to get the followers username. The message must not be more than 255 characters.

Save your settings when finished.

> As spam protection the Glimesh API limits a follower message to once per 6 hours. This prevents a user from following and re-following to spam the chat with follow messages.