---
title: "Streamlabs Alerts"
description: "Doc explaining streamlabs integration"
lead: "Thanks for the follow!"
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "Integrations"
weight: 200
toc: true
---

## Streamlabs Alerts

Glimboi can play your Streamlabs alerts when a user follows your channel. You need an existing Streamlabs account.

[Create a dev app.](https://streamlabs.com/dashboard#/settings/api-settings)

Click on the above link and create a new app. Enter the requested info. **You must whitelist your own account that is linked to streamlabs**. It should be in the same casing as your username, not your display name. The redirect URL must be `http://localhost:3000`

Save the app. Copy your client ID and client secret into the Streamlabs Integrations section in Glimboi. Save your info. Click on the token generation link. It will send you to your authorization page. Approve the permissions and return to Glimboi.

You can now play Streamlabs Alerts!