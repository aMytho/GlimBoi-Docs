---
title: "Playing Music"
description: "Music go brrrrrrrrrrr"
lead: "Chat controls, music overlays, chat attribtuion => 🎶🎶🎶!"
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "Music_Player"
weight: 130
toc: true
---

<img src="/docs/music/music.png" class="border-0 figure-img img-fluid blur-up lazyautosizes lazyloaded">


## Music Player

Glimboi can play local music files on your system. Simply head to the music player and choose the folder or song to be played. It will start playing on that tab.

> For folder playback it searches downward recursively which means it scans other folders within the top folder.

### Music Commands

You can use the player from chat! This feature is controlled by the rank system. We suggest you modify it accordingly.

All commands here must start with !song or !sr and end with the modification/query.

> Ex. !sr next, !song next. Next would be the query.

current or now => Returns what is playing.

next or n => Returns the next song.

last or l => Returns the last song.

skip => Skips to the next song.

previous => Skips to the last song.

repeat or loop => Toggles the loop setting.

shuffle random toggle=> Toggles the shuffle setting.

### Viewing Music

The current song will be shown in the player. It can also be viewed from the music overlay and the music file. We have documentation for these features [here](/docs/music/music-overlay). The commands above can also show the current song.

### Chat Attribution

Glimboi can send the current song to chat when it starts to play. It will send the name and the artist if included in the metadata. This feature can be enabled in music settings.

<img src="/docs/music/message.png" class="border-0 figure-img img-fluid blur-up lazyautosizes lazyloaded">