---
title: "OBS Websocket"
description: "Doc explaining OBS Websocket"
lead: "Let your commands interact with OBS"
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "Integrations"
weight: 150
toc: true
---

## OBS Websocket

Glimboi can use [OBS Websocket](https://github.com/obsproject/obs-websocket/) to talk to OBS with your commands. This requires OBS websocket to be installed. Simply download the [executable file](https://github.com/obsproject/obs-websocket/releases/tag/4.9.1) and run it.

> Make sure you do not exceed version 5.0. It is untested with Glimboi.

### Setup

Once installed you need to connect Glimboi to OBS. This is done on the integrations page. Make sure OBS Websocket is enabled. If you set a password you should add it to the bottom input. You must enter the correct ws URL.

`ws://` is the protocol. This will be in every URL.

`127.0.0.1` is the IP of the device running OBS.

`:4444` is the port on which OBS Websocket is running.

If Glimboi runs on the same PC that OBS is running on it is the default URL `ws://127.0.0.1:4444` . If not you need to change the IP to match your stream PC. You may need to allow OBS websocket and Glimboi in your firewall settings.

### OBS Websocket Actions

The below actions are used in commands. They allow Glimboi to talk to OBS.

#### Change Scene

Glimboi can switch to any scene in OBS. [Variables](/docs/commands/variables) are supported.

#### Change Visibility

Glimboi can hide or show any specific source. [Variables](/docs/commands/variables) are supported.

#### Mute

Glimboi can mute or unmute any specific source. [Variables](/docs/commands/variables) are supported.

#### Replay Buffer (clips)

Glimboi can trigger the replay buffer to start, stop, and save clips. Saving a clip requires a hotkey set for "Save Replay Buffer". The buffer must also be active.

> Note that attempting to clip when the hotkey isn't set or when the replay buffer isn't active can crash OBS. This is a bug with OBS websocket / OBS and has nothing to do with Glimboi. We suggest you leave the buffer on when you want to record something.

#### Start/Stop Stream/Recording

Glimboi can start and stop a stream or recording. You should limit any command that uses this action with the rank system to prevent someone from stopping your stream!

#### Screenshot

Glimboi can take a screenshot of the active scene in OBS. Saved to %appdata% => Glimboi => Screenshots