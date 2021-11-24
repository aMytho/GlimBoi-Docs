---
title: "File and Overlay"
description: ""
lead: "Show the current song in an overlay and output it to a text file."
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "Music_Player"
weight: 140
toc: true
---

## Music Overlay

Glimboi has a built in overlay to show the current song. It will activate when the song starts to play and show itself for 7 seconds. After that it disappears.

The overlay must be added as a browser overlay into OBS. The overlay file can be found by pressing the overlay button on the music player page. Copy the filepath into a browsersource URL.

*Example in OBS*
<img src="/docs/music/overlay.png" class="border-0 figure-img img-fluid blur-up lazyautosizes lazyloaded">


## Music File Output

Glimboi can post the current song into a text file. **It must be enabled in music settings.** This file can be used for anything. It is commonly inserted into OBS with custom styling if you don't like the default overlay. The file location can be found by pressing the now-playing button on the music player.