---
title: "Adding Media"
description: "Doc explaining glimboi media"
lead: "Add sound effects, videos, images, and GIFs to your stream!"
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "Media"
weight: 120
toc: true
---


## Adding Media

Before you can add sound effects and displayable media you need to add the media to the database. Go to the media page and add a few items. Glimboi **does not** copy any of the files. It stores the filepath of them and sends that to the overlay. The media files are then displayed in OBS. This means that if you move a media file you need to update its new location in Glimboi.

### Required Settings

#### Name

The name of the media. You should give them simple names that are self explanatory.

#### File

This is the file that will be sent to the overlay. Most audio, image, and video formats are supported. If you don't see your files try changing the filter from `custom` to `all files`.

#### Position

The position determines which part of the overlay the element will show up in. You enter the x and y values for its position. It will align the items to the top left of the media element. Audio media do not require any input. Choose the position that works best for you. You should have the overlay be full size of your stream for the best results.

> If you used the old media system you will need to update the media position. By default all files are at 0,0.

### Optional Settings

#### Duration

This decides how long the media is in the overlay. Values in seconds. This works on all media types.

#### Volume

The volume of the media. Only works on audio and video.

#### Height

The height of the media in pixels. Only works on images and videos.

#### Width

The width of the media in pixels. Only works on images and videos.

#### Speed

How fast the media plays. There is a max limit depending on the media type. Only works on audio and video. Must be greater than 0. Values greater than 0 but less than 1 slow the media down. (think youtube playback speed)

<img src="/docs/media/media.png" class="border-0 figure-img img-fluid blur-up lazyautosizes lazyloaded">

### Testing Media

Once you have added media you can test them. Below the overlay launch button are options to test your media. The overlay must be active before you can test the media. You can open OBS and view the browser source or open the overlay file in the browser. Click on the page after it opens if opened in a browser. You are now ready for testing!

### Adding SFX and Displayable media to Commands

To add media to commands simply add the corresponding [command action](/docs/commands/actions#audio-sound-effect). When the command is activated the media will play.