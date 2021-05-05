---
title: "Overlay"
description: "Doc explaining glimboi overlays"
lead: "Add sound effects, videos, images, and GIFs to your stream!"
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu: 
  docs:
    parent: "intro"
weight: 130
toc: true
---

## Overlay Overview

The Glimboi overlay will react to certain events in the bot. You need to add the overlay as a browser source in OBS. Once added the media will show up on your stream. The overlay file is located on the modal prompt "Launch Overlay".

## Adding Media

Before you can add sound effects and displayable media you need to add the media to the database. Go to the overlay page and add a few items. You should give them simple names that are self explanatory. 

## Position

The position determines which part of the overlay the element will show up in. The overlay is separated into a 3x3 grid. Choose the position that works best for you. You should have the overlay be full size of your stream for the best results.

## Testing Media

Once you have added media you can test them. Below the overlay launch button are options to test your media. The overlay must be active before you can test the media. You can open OBS and view the browser source or open the overlay file in the browser. Click on the page after it opens. You are now ready for testing!

## Adding SFX and Displayable media to Commands

To add effects to commands simply edit the command and choose the item in the dropdown menu. When the command is activated the effect will activate.

## Overlay Info

The overlay recieves info from websockets. Glimboi hosts a wss server on `localhost:8080`. The client connects to it and recieves instructions. The path is sent and the client displays it.