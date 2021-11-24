---
title: "Overlay Setup"
description: "Doc explaining glimboi overlays"
lead: "Add sound effects, videos, images, and GIFs to your stream!"
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "Media"
weight: 110
toc: true
---

<video controls src="/docs/media/edallical.mp4" class="border-0 figure-img img-fluid blur-up lazyautosizes lazyloaded"></video>
*Clip by [Edallical](https://glimesh.tv/edallical)*


## Overlay Overview

The Glimboi overlay will react to certain events in the bot. It can play sound effects, display img/GIFs, and play videos. You need to add the overlay as a browser source in OBS. Once added the media will show up on your stream. The overlay file is located in the modal prompt "Launch Overlay" on the media page.

### Adding the Overlay

Head to the media page. Click on the "Launch Overlay" button. It will show you the filepath to the overlay file. Copy this path into a browser source URL. Note that you may need to just copy the folder, then select the index.html file.

It can help to select browse file, paste the URL into the filepath input at the top of the file explorer window, remove `index.html` from the file URL, and then press enter. This will open the folder containing the overlay files. Select `index.html`. If the `.html` is not showing simply select `index`. They are the same.

> Make sure that you select the right file. The music overlay is also located in this folder.


### Overlay Settings

The overlay recieves info from websockets. Glimboi hosts a websocket server on `localhost:3000`. The overlay connects to it and recieves messages from the server. The message usually contains a filepath to the media that needs to be activated as well as the various media settings associated with it. We can customize some details of the media server. You should only do this if you have to. This is common requirement for multi PC setups.

Press the "Overlay Settings" button. This allows you to change the host and port of the server.

The host is the IP address of the PC running Glimboi. If OBS and Glimboi are on the same device leave this as the default value of `localhost` or `127.0.0.1`. If you need other devices on your network to access the server you can change it to your local IP address. `192.168.xxx.xxx`. You can find your local IP address [here](https://support.microsoft.com/en-us/windows/find-your-ip-address-in-windows-f21a9bbc-c582-55cd-35e0-73431160a1b9).

The port can also be changed. We suggest you leave it as the default value unless you need to change it. Many ports are restricted by anti-virus software. You may need to change it or allow Glimboi and OBS in your firewall settings.

Whenever you make a change and save it you **must** reload the overlay in OBS. This allows the overlay client to use the new address.

### Help

Need some assistance? You can recieve support at -
- [Twitter DM](https://twitter.com/MythoGM)
- Discord DM Mytho#1108
- [Glimesh.tv/Mytho](https://glimesh.tv/Mytho)
