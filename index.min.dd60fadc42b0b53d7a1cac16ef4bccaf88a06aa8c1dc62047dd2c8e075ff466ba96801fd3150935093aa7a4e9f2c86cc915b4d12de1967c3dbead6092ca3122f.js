var suggestions=document.getElementById("suggestions"),userinput=document.getElementById("userinput");document.addEventListener("keydown",inputFocus);function inputFocus(e){e.keyCode===191&&(e.preventDefault(),userinput.focus()),e.keyCode===27&&(userinput.blur(),suggestions.classList.add("d-none"))}document.addEventListener("click",function(e){var t=suggestions.contains(e.target);t||suggestions.classList.add("d-none")}),document.addEventListener("keydown",suggestionFocus);function suggestionFocus(e){const s=suggestions.querySelectorAll("a"),o=[...s],t=o.indexOf(document.activeElement);let n=0;e.keyCode===38?(e.preventDefault(),n=t>0?t-1:0,s[n].focus()):e.keyCode===40&&(e.preventDefault(),n=t+1<o.length?t+1:t,s[n].focus())}(function(){var e=new FlexSearch({preset:"score",cache:!0,doc:{id:"id",field:["title","description","content"],store:["href","title","description"]}}),n=[{id:0,href:"https://glimboi.com/docs/help/",title:"Help",description:"Help Doks.",content:""},{id:1,href:"https://glimboi.com/docs/users/users/",title:"User Controls",description:"Doc explaining how users work in GlimBoi.",content:`<h2 id="users">Users</h2>
<p>GlimBoi must add a viewer as a user to store data on them. You can do this manually or let the bot automatically detect new users every 15 minutes. Users can be added and removed at any time.</p>
<h3 id="adding-users">Adding Users</h3>
<p>You can add users from the users page. You can also add them by typing the following in chat (permissions dependent) -</p>
<ul>
<li>!user new NAME</li>
<li>!user add NAME</li>
</ul>
<h3 id="removing-users">Removing Users</h3>
<p>You can remove users from the users page. You can also remove them by typing the following in chat (permissions dependent) -</p>
<ul>
<li>!user del NAME</li>
<li>!user remove NAME</li>
</ul>
<h3 id="editing-users">Editing Users</h3>
<p>You can edit some user properties from the users page. Currently you can only edit ranks, points, and watchtime. There is no method to edit users in chat.</p>
<h2 id="user-properties">User Properties</h2>
<p>A new user has various properties. Some of these are added when the user is created. Others are added over time.</p>
<h3 id="name">Name</h3>
<p>The username of the user.</p>
<h3 id="points">Points</h3>
<p>An amount of currency. A user will earn a set amount when created. They earn more currency every 15 minutes if they are active in chat. See <a href="/docs/users/points">Currency System</a></p>
<h3 id="quotes">Quotes</h3>
<p>Quotes are saved chat messages the user has sent. Anyone can add a quote to any user. See <a href="/docs/users/quotes">quotes</a></p>
<h3 id="watch-time">Watch Time</h3>
<p>The amount of time in minutes a user has been active in chat. Being active requires 1 message every 15 minutes. Note that watch time is added in blocks of 15 minutes. This means you can have 15, 30, 45, 60, etc. minutes of watch time.</p>
<h3 id="team">Team</h3>
<p>The team the user belongs to. This feature is not yet implemented.</p>
<h3 id="rank">Rank</h3>
<p>A specific rank to group users. Default ranks are users, mods, and Streamers. You can also create custom ranks and change permissions. See <a href="/docs/users/ranks">Ranks</a></p>
<h3 id="link">Link</h3>
<p>The link to the users channel on Glimesh.</p>
<img src="/docs/users/userlist.png" class="border-0 figure-img img-fluid blur-up lazyautosizes lazyloaded">
`},{id:2,href:"https://glimboi.com/docs/intro/introduction/",title:"Set Up",description:"Set up info for GlimBoi",content:`<h2 id="download">Download</h2>
<p><a href="https://github.com/aMytho/GlimBoi/releases/latest">Releases Page</a></p>
<p>Start by downloading the installation file for your platform (.exe for windows and .deb for linux). Windows users can run the .exe file and choose where the bot will be installed. Linux users will need a package manager that can run .deb files. GDebi will work for this.</p>
<blockquote>
<p>Windows users will likely see a warning since Glimboi is not registered with the Windows system.</p>
</blockquote>
<h3 id="authorization">Authorization</h3>
<p>GlimBoi requires authentication to talk as a bot/streamer account. Press authorize on the bot homepage. It will ask you to log in with a glimesh account. The account that authorizes the bot will be the one that the bot uses to speak. If you want the bot to talk as the streamer account log in with that account. If you want a custom bot name you need a Glimesh account with that name.</p>
<p>Once logged in you can go back to the bot. You can head to the chat page and start using Glimboi!</p>
<p>When you authorized the bot you got an access token. This token lasts for 1 hour. When it expires the bot should automatically refresh it. If you cannot get something to work you likely need to press the refresh token button or authorize again on the homepage.</p>
<p>Congratulations - You have completed the auth process!
You can now use GlimBoi to its full potential.</p>
<h3 id="help">Help</h3>
<p>Need some assistance? You can receive support at -</p>
<ul>
<li><a href="https://twitter.com/MythoGM">Twitter DM</a></li>
<li>Discord DM Mytho#1108</li>
<li><a href="https://glimesh.tv/Mytho">Glimesh.tv/Mytho</a></li>
</ul>
`},{id:3,href:"https://glimboi.com/docs/commands/commands/",title:"Basics",description:"Doc explaining commands",content:`<h3 id="basic-info">Basic Info</h3>
<p>Commands work the same as any other chatbot. When a command is activated its actions will run. Actions are instructions for the command. Commands are created on the commands page or from chat using the syntax -</p>
<ul>
<li>!command add !NAME RESPONSE</li>
<li>!command new !NAME RESPONSE</li>
<li>!cmd add !NAME RESPONSE</li>
<li>!cmd new !NAME RESPONSE</li>
<li>!cmd remove !NAME</li>
<li>!cmd del !NAME</li>
</ul>
<p><em>Adding commands from chat adds the ChatMessage action.</em></p>
<h3 id="triggers">Triggers</h3>
<p>Triggers are what will activate your command. A command can have any amount of triggers. The following triggers exist:</p>
<ul>
<li>ChatMessage: Runs when a specified message in sent in the format of !TRIGGER_NAME</li>
<li>Follower: Runs when a user follows the stream.</li>
<li>Welcome: Runs when a user speaks in chat for the first time that stream.</li>
<li>
<ul>
<li>Constraint: Only welcome a specific user or every user.</li>
</ul>
</li>
</ul>
<h3 id="actions">Actions</h3>
<p>Actions are the instructions that your command follows. Commands can do a lot more than send a message! You can play sound effects, record clips, make API requests, and much more.</p>
<p>A full list of actions can be found <a href="/docs/commands/actions">here</a></p>
<h3 id="settings">Settings</h3>
<p>Settings are properties for your commands. You can restrict their usage by points or rank. You can also add cooldowns and set a command to run on a set interval.</p>
<h4 id="points">Points</h4>
<p>This is how many points it takes to activate the command. The user must have the set amount or more to run the command.</p>
<h4 id="uses">Uses</h4>
<p>This is the amount of times the command has been used. You can set this to any value or leave it at 0. Every time the command is used the command counter will increase by one. This can be seen in the $cmdcount variable.</p>
<h4 id="cooldown">Cooldown</h4>
<p>This is how long the command must wait to run after being used. If someone attempts to use it while on cooldown the cooldown message will be sent to chat. This can be customized on the command settings page. Setting it to 0 removes the cooldown.</p>
<blockquote>
<p>Values are in minutes</p>
</blockquote>
<h4 id="rank">Rank</h4>
<p>You can limit points by bot ranks. This can be used to make mod only commands or limit certain commands to long time supporters. Note that this restricts the command to the <strong>specified rank and above</strong>, not just the rank itself. You will want to adjust the rank tiers on the rank page.</p>
<h4 id="repeat">Repeat</h4>
<p>If the command has repeat enabled it will be added to the repeat list. This list will run one of the commands on a set timer. The timer and other settings related to repeating commands can be found on the command settings page.</p>
<h4 id="remove-trigger">Remove Trigger</h4>
<p>This setting allows you to delete the trigger that actived the command (!cmdname). The bot must have delete message mod setting on Glimesh. The trigger will be deleted when all of the actions have finished running. This only affects chatmessage triggers.</p>
<h3 id="status">Status</h3>
<p>Determines if the command is allowed to run.</p>
`},{id:4,href:"https://glimboi.com/docs/media/overlay/",title:"Overlay Setup",description:"Doc explaining glimboi overlays",content:`<p><video controls src="/docs/media/edallical.mp4" class="border-0 figure-img img-fluid blur-up lazyautosizes lazyloaded"></video>
<em>Clip by <a href="https://glimesh.tv/edallical">Edallical</a></em></p>
<h2 id="overlay-overview">Overlay Overview</h2>
<p>The Glimboi overlay will react to certain events in the bot. It can play sound effects, display img/GIFs, and play videos. You need to add the overlay as a browser source in OBS. Once added the media will show up on your stream. The overlay file is located in the modal prompt &ldquo;Launch Overlay&rdquo; on the media page.</p>
<h3 id="adding-the-overlay">Adding the Overlay</h3>
<p>Head to the media page. Click on the &ldquo;Launch Overlay&rdquo; button. It will show you the filepath to the overlay file. Copy this path into a browser source URL. Note that you may need to just copy the folder, then select the index.html file.</p>
<p>It can help to select browse file, paste the URL into the filepath input at the top of the file explorer window, remove <code>index.html</code> from the file URL, and then press enter. This will open the folder containing the overlay files. Select <code>index.html</code>. If the <code>.html</code> is not showing simply select <code>index</code>. They are the same.</p>
<blockquote>
<p>Make sure that you select the right file. The music overlay is also located in this folder.</p>
</blockquote>
<h3 id="overlay-settings">Overlay Settings</h3>
<p>The overlay receives info from websockets. Glimboi hosts a websocket server on <code>localhost:3000</code>. The overlay connects to it and receives messages from the server. The message usually contains a filepath to the media that needs to be activated as well as the various media settings associated with it. We can customize some details of the media server. You should only do this if you have to. This is common requirement for multi PC setups.</p>
<p>Press the &ldquo;Overlay Settings&rdquo; button. This allows you to change the host and port of the server.</p>
<p>The host is the IP address of the PC running Glimboi. If OBS and Glimboi are on the same device leave this as the default value of <code>localhost</code> or <code>127.0.0.1</code>. If you need other devices on your network to access the server you can change it to your local IP address. <code>192.168.xxx.xxx</code>. You can find your local IP address <a href="https://support.microsoft.com/en-us/windows/find-your-ip-address-in-windows-f21a9bbc-c582-55cd-35e0-73431160a1b9">here</a>.</p>
<p>The port can also be changed. We suggest you leave it as the default value unless you need to change it. Many ports are restricted by anti-virus software. You may need to change it or allow Glimboi and OBS in your firewall settings.</p>
<p>Whenever you make a change and save it you <strong>must</strong> reload the overlay in OBS. This allows the overlay client to use the new address.</p>
<h3 id="help">Help</h3>
<p>Need some assistance? You can receive support at -</p>
<ul>
<li><a href="https://twitter.com/MythoGM">Twitter DM</a></li>
<li>Discord DM Mytho#1108</li>
<li><a href="https://glimesh.tv/Mytho">Glimesh.tv/Mytho</a></li>
</ul>
`},{id:5,href:"https://glimboi.com/docs/intro/joiningchat/",title:"Joining Chat",description:"Join a chat with Glimboi",content:`<h2 id="glimesh-channels">Glimesh Channels</h2>
<p>Glimboi can join <em>any</em> channel on Glimesh. You can join your own or a friend. You can test your commands on the Glimboi channel.</p>
<img src="/docs/intro/chat.png" class="border-0 figure-img img-fluid blur-up lazyautosizes lazyloaded">
<h3 id="step-1">Step 1</h3>
<p>You must have an account authorized to join a chat. The instructions for doing so can be found <a href="/docs/intro/introduction">here</a>. Glimboi will speak as the account authorized.</p>
<h3 id="step-2">Step 2</h3>
<p>Click on the chat page. Click &ldquo;add new&rdquo;</p>
<h3 id="step-3">Step 3</h3>
<p>Enter the name of the channel that you want to join. Note that if you have a bot account you still need to join the streamer chat, <strong>not</strong> the bot chat. This is the #1 cause of issues in Glimboi. Join the right channel!</p>
<h3 id="moving-on">Moving on&hellip;</h3>
<p>Glimboi will save every channel you join. You can save an unlimited amount of channels. One channel can be set to auto-join when you load the chat page. Channels can also be removed.</p>
<p>Although you can join any channel, you are still responsible for what your bot does. The bot is still a Glimesh account. You can be banned just like any other user.</p>
<h3 id="help">Help</h3>
<p>Need some assistance? You can receive support at -</p>
<ul>
<li><a href="https://twitter.com/MythoGM">Twitter DM</a></li>
<li>Discord DM Mytho#1108</li>
<li><a href="https://glimesh.tv/Mytho">Glimesh.tv/Mytho</a></li>
</ul>
`},{id:6,href:"https://glimboi.com/docs/media/media/",title:"Adding Media",description:"Doc explaining glimboi media",content:`<h2 id="adding-media">Adding Media</h2>
<p>Before you can add sound effects and displayable media you need to add the media to the database. Go to the media page and add a few items. Glimboi <strong>does not</strong> copy any of the files. It stores the filepath of them and sends that to the overlay. The media files are then displayed in OBS. This means that if you move a media file you need to update its new location in Glimboi.</p>
<h3 id="required-settings">Required Settings</h3>
<h4 id="name">Name</h4>
<p>The name of the media. You should give them simple names that are self explanatory.</p>
<h4 id="file">File</h4>
<p>This is the file that will be sent to the overlay. Most audio, image, and video formats are supported. If you don&rsquo;t see your files try changing the filter from <code>custom</code> to <code>all files</code>.</p>
<h4 id="position">Position</h4>
<p>The position determines which part of the overlay the element will show up in. You enter the x and y values for its position. It will align the items to the top left of the media element. Audio media do not require any input. Choose the position that works best for you. You should have the overlay be full size of your stream for the best results.</p>
<blockquote>
<p>If you used the old media system you will need to update the media position. By default all files are at 0,0.</p>
</blockquote>
<h3 id="optional-settings">Optional Settings</h3>
<h4 id="duration">Duration</h4>
<p>This decides how long the media is in the overlay. Values in seconds. This works on all media types.</p>
<h4 id="volume">Volume</h4>
<p>The volume of the media. Only works on audio and video.</p>
<h4 id="height">Height</h4>
<p>The height of the media in pixels. Only works on images and videos.</p>
<h4 id="width">Width</h4>
<p>The width of the media in pixels. Only works on images and videos.</p>
<h4 id="speed">Speed</h4>
<p>How fast the media plays. There is a max limit depending on the media type. Only works on audio and video. Must be greater than 0. Values greater than 0 but less than 1 slow the media down. (think youtube playback speed)</p>
<img src="/docs/media/media.png" class="border-0 figure-img img-fluid blur-up lazyautosizes lazyloaded">
<h3 id="testing-media">Testing Media</h3>
<p>Once you have added media you can test them. Below the overlay launch button are options to test your media. The overlay must be active before you can test the media. You can open OBS and view the browser source or open the overlay file in the browser. Click on the page after it opens if opened in a browser. You are now ready for testing!</p>
<h3 id="adding-sfx-and-displayable-media-to-commands">Adding SFX and Displayable media to Commands</h3>
<p>To add media to commands simply add the corresponding <a href="/docs/commands/actions#audio-sound-effect">command action</a>. When the command is activated the media will play.</p>
`},{id:7,href:"https://glimboi.com/docs/miscellaneous/events/",title:"Events",description:"Doc explaining events",content:`<h2 id="events-overview">Events Overview</h2>
<p>Glimboi can start various events. Events can be joined by viewers in chat. Multiple events can run at the same time. All events have settings on the event page to modify for your stream. Enjoy!</p>
<h2 id="raffle">Raffle</h2>
<p>Glimboi can start a raffle. The bot will pick one winner. A raffle can be started on the events page or by typing !raffle in chat. Viewers can enter the raffle with !enter . You can view the list of participants on the events page. It will live update. After a minute has passed Glimboi will announce the winner to chat. The winner can also be viewed on the events page if it is currently open.
<em>Note that if you leave the events page the winner will be removed!</em></p>
<h2 id="poll">Poll</h2>
<p>Glimboi can poll the chat to get viewer feedback. A poll can be started from the GUI. Enter the question and any options. Polls can also be started from chat.</p>
<p>!poll QUESTION? option 1 | option 2 | option 3 .</p>
<p>Ensure that you end the question with a ? and separate the choices with | .</p>
<p>You can view the results live on the events page. The results will be sent to chat at the end of the poll.</p>
<h2 id="glimrealm">GlimRealm</h2>
<p>Glimrealm is a spin inspired chat game with a glimdrop twist. Start by typing:</p>
<p>!glimrealm</p>
<p>Once the game has started:</p>
<p>!portal</p>
<p>Every viewer that enters will have one random event. You will lose or gain points based on the event. There are a lot of possible outcomes.</p>
<h2 id="bankheist">Bankheist</h2>
<p>Bankheist works nearly the same as other bankheist games. Start with:</p>
<p>!bankheist</p>
<p>Others can join with !bankheist</p>
<p>You need at least 2 members to begin. Once started random events will occur. Some will be more risky than others. At the end of the heist all members who escaped will be rewarded with channel currency.</p>
<h2 id="giveaway">Giveaway</h2>
<p>Works the same as raffle but no reward is given and there is no cost to enter.</p>
<p>!giveaway</p>
<p>Others can join with !enter</p>
<p>One user is picked to win the giveaway. Good luck!</p>
<h2 id="glimroyale">Glimroyale</h2>
<p>A fight between all the users in your chat! !glimroyale WAGER .</p>
<p>Users enter with !join</p>
<p>Each user fights 1 other user. This continues until only 1 is left. The results are announced depending on the duration. There are a variety of possible outcomes, but it is all internal. This may change in a future release.</p>
<h2 id="duel">Duel</h2>
<p>Fight one other user and wager points! !duel USER WAGER .They must accept the duel in chat.</p>
<p>The winner gains all the points.</p>
<h2 id="8ball">8Ball</h2>
<p>Ask the magic 8 ball any question. It always has an answer.</p>
<p>!8ball QUESTION?</p>
<h2 id="gamble">Gamble</h2>
<p>!gamble WAGER</p>
<p>Win or lose points based on the outcome.</p>
<h2 id="queue">Queue</h2>
<p>This is a generic queue system. The most common use is to allow viewers to join your game in an organized manner. You can limit users by points and rank. You can sent a rank to control the queue from chat.</p>
<p>!queue : Starts the queue.</p>
<p>!queue stop : Stops the queue.</p>
<p>!queue reset : Resets the queue.</p>
<p>!queue add USER : Adds a user to the queue.</p>
<p>!queue remove USER : Removes a user from the queue.</p>
<p>!queue progress : Progresses the queue.</p>
<p>!queue next : Returns the next user in the queue.</p>
<p>!queue length : Returns the length of the queue.</p>
`},{id:8,href:"https://glimboi.com/docs/music/music-player/",title:"Playing Music",description:"Music go brrrrrrrrrrr",content:`<img src="/docs/music/music.png" class="border-0 figure-img img-fluid blur-up lazyautosizes lazyloaded">
<h2 id="music-player">Music Player</h2>
<p>Glimboi can play local music files on your system. Simply head to the music player and choose the folder or song to be played. It will start playing on that tab.</p>
<blockquote>
<p>For folder playback it searches downward recursively which means it scans other folders within the top folder.</p>
</blockquote>
<h3 id="music-commands">Music Commands</h3>
<p>You can use the player from chat! This feature is controlled by the rank system. We suggest you modify it accordingly.</p>
<p>All commands here must start with !song or !sr and end with the modification/query.</p>
<blockquote>
<p>Ex. !sr next, !song next. Next would be the query.</p>
</blockquote>
<p>current or now =&gt; Returns what is playing.</p>
<p>next or n =&gt; Returns the next song.</p>
<p>last or l =&gt; Returns the last song.</p>
<p>skip =&gt; Skips to the next song.</p>
<p>previous =&gt; Skips to the last song.</p>
<p>repeat or loop =&gt; Toggles the loop setting.</p>
<p>shuffle random toggle=&gt; Toggles the shuffle setting.</p>
<h3 id="viewing-music">Viewing Music</h3>
<p>The current song will be shown in the player. It can also be viewed from the music overlay and the music file. We have documentation for these features <a href="/docs/music/music-overlay">here</a>. The commands above can also show the current song.</p>
<h3 id="chat-attribution">Chat Attribution</h3>
<p>Glimboi can send the current song to chat when it starts to play. It will send the name and the artist if included in the metadata. This feature can be enabled in music settings.</p>
<img src="/docs/music/message.png" class="border-0 figure-img img-fluid blur-up lazyautosizes lazyloaded">`},{id:9,href:"https://glimboi.com/docs/users/points/",title:"Currency System",description:"Doc explaining points",content:`<img src="/docs/users/pointsleaderboard.png" class="border-0 figure-img img-fluid blur-up lazyautosizes lazyloaded">
<h2 id="currency-overview">Currency Overview</h2>
<p>Viewers can become users in GlimBoi. Once they are added as a user they can start to earn currency. Every 15 minutes the bot will check if the user has spoken in chat. If the user has been active Glimboi will give the user a set amount of points. These points can be used for features within the bot.</p>
<p>Chat Commands (Info):</p>
<ul>
<li>!points : Returns how many points the user has.</li>
<li>!points top : Returns the user with the most amount of points.</li>
<li>!points NUMBER : Returns the user with the specified position on the point leaderboard.</li>
<li>!points get USER : Returns the specified users points.</li>
<li>!points help : Returns the above info.</li>
</ul>
<h2 id="currency-settings">Currency Settings</h2>
<p>You can change the amount of points that a user starts with. You can also change how many points are earned if the user is active in chat. The name of your currency can also be adjusted.</p>
<h2 id="givetake-currency">Give/Take Currency</h2>
<p>You can edit a users points on the users page. Select &ldquo;Edit User&rdquo;. Enter the name of the user. Now you can edit the points of the user. You can also adjust users points from chat. The user who is changing the points must have the linked permission for doing so.</p>
<p>Chat Commands (Modify):</p>
<ul>
<li>!points (set or =) USER AMOUNT : Seta a users points to a specified value.</li>
<li>!points (add or inc or +) USER AMOUNT : Adds points to a user.</li>
<li>!points (sub or dec or -) USER AMOUNT : Removes points from a user.</li>
</ul>
`},{id:10,href:"https://glimboi.com/docs/music/music-overlay/",title:"File and Overlay",description:"",content:`<h2 id="music-overlay">Music Overlay</h2>
<p>Glimboi has a built in overlay to show the current song. It will activate when the song starts to play and show itself for 7 seconds. After that it disappears.</p>
<p>The overlay must be added as a browser overlay into OBS. The overlay file can be found by pressing the overlay button on the music player page. Copy the filepath into a browsersource URL.</p>
<p><em>Example in OBS</em>
<img src="/docs/music/overlay.png" class="border-0 figure-img img-fluid blur-up lazyautosizes lazyloaded"></p>
<h2 id="music-file-output">Music File Output</h2>
<p>Glimboi can post the current song into a text file. <strong>It must be enabled in music settings.</strong> This file can be used for anything. It is commonly inserted into OBS with custom styling if you don&rsquo;t like the default overlay. The file location can be found by pressing the now-playing button on the music player.</p>
`},{id:11,href:"https://glimboi.com/docs/integrations/goinglive/",title:"Going Live Notifications",description:"Doc explaining Discord and Guilded Notifications",content:`<h2 id="going-live-announcements">Going-Live Announcements</h2>
<p>Glimboi can notify your Discord, Guilded, Matrix, and Twitter servers when you go live. You must have the permissions to create a webhook in the server. You can notify both a Discord and Guilded server at the same time however only one of each type is supported.</p>
<h3 id="discord">Discord</h3>
<p>Go to the server where you want to add a webhook. Select a channel to create a webhook for. Create a new webhook with the desired bot name and image. Copy the URL. <strong>Keep this private!</strong></p>
<p>Open glimboi integrations tab. Head to webhooks. Paste the URL into the proper input. Enable discord webhooks at the top of the page.</p>
<p>(optional). Modify the default message if desired. Use $streamer to be replaced with the streamer name. The title and image (if live) will be automatically added to the media sent.
The bottom option asks for confirmation before sending the webhook. We highly suggest this stays active. This prevents accidental notifications and allows you to modify the message for that specific stream if desired.</p>
<p>Save your settings when finished.</p>
<img src="/docs/integrations/discord.png" class="border-0 figure-img img-fluid blur-up lazyautosizes lazyloaded">
<h3 id="guilded">Guilded</h3>
<p>Go to the guilds where you want to add a webhook. Select a channel to create a webhook for. Create a new webhook with the desired bot name and image. Copy the URL. <strong>Keep this private!</strong></p>
<p>Open Glimboi settings tab. Head to webhooks. Paste the URL into the proper input. Enable Guilded webhooks at the top of the page.</p>
<p>(optional). Modify the default message if desired. Use $streamer to be replaced with the streamer name. The title and image (if live) will be automatically added to the media sent.
The bottom option asks for confirmation before sending the webhook. We highly suggest this stays active. This prevents accidental notifications and allows you to modify the message for that specific stream if desired.</p>
<p>Save your settings when finished.</p>
<img src="/docs/integrations/guilded.png" class="border-0 figure-img img-fluid blur-up lazyautosizes lazyloaded">
<h3 id="matrix">Matrix</h3>
<p>Matrix integration requires an access token and a room ID. These can be accessed from the element UI. <strong>Keep your access token private</strong></p>
<p>Your access token can be accessed by going to the <em>help and about</em> section. Scroll to the bottom and click to view your token.
<img src="/docs/integrations/matrixToken.png" class="border-0 figure-img img-fluid blur-up lazyautosizes lazyloaded"></p>
<p>The room ID must be accessed from the room settings. Open the settings for the room and view the advanced section. Copy your room ID.
<img src="/docs/integrations/matrixRoom.png" class="border-0 figure-img img-fluid blur-up lazyautosizes lazyloaded"></p>
<h2 id="twitter">Twitter</h2>
<p><strong>Twitter is no longer supported</strong></p>
<hr>
<p>Twitter has decided to make their API a paid service. As a result, I can no longer provide API access for Glimboi. All features relating to twitter have been disabled. I may look into letting the user add their own keys. For now, all we can do is wait and see if the decision will be reversed.</p>
<hr>
`},{id:12,href:"https://glimboi.com/docs/users/ranks/",title:"Ranks & Roles",description:"Doc explaining the rank system",content:`<h2 id="ranks-overview">Ranks Overview</h2>
<p>A rank is a way to group users. You can use the default ranks or create custom ones. Below lists the default ranks. Capitalization does matter.</p>
<ul>
<li>Streamer: The top rank by default.</li>
<li>Mod: Second rank by default.</li>
<li>user: Default rank automatically assigned to all new users.</li>
</ul>
<blockquote>
<p>Note that the Glimesh API doesn&rsquo;t support roles. You have to manually add the Streamer and Mod ranks in Glimboi. Users are added automatically.</p>
</blockquote>
<p>Ranks are designed to protect your bot data from unwanted actions. New ranks have low permissions. Normal users cannot delete data unless you modify the rank to do so. You should adjust the rank system to fit your needs.</p>
<h2 id="rank-permissions">Rank Permissions</h2>
<p>The below permissions are self explanatory and refer to chat commands only.</p>
<ul>
<li>Add Commands (chatMessage only)</li>
<li>Edit Commands (not yet supported)</li>
<li>Remove Commands</li>
<li>Add quotes</li>
<li>Edit Quotes (not yet supported)</li>
<li>Remove Quotes (not yet supported)</li>
<li>Add Points</li>
<li>Edit Points</li>
<li>Remove Points</li>
</ul>
<p>The below permissions are a little more complicated and require an explanation.</p>
<ul>
<li>Control Music Player: Allows the user to play, pause, skip, and go to the previous song.</li>
<li>Mod Immunity: Protects them from the bad word filter <strong>only</strong>. If you delete/timeout/ban them from Glimesh mod immunity cannot protect them.</li>
<li>Start Events/Games: Allows the user to start various events such as bankheist, glimroyale, etc.</li>
<li>Rank Tier: This is a tier for <em>command</em> ranks. If the rank selected on a command has a minimum tier of 3 then only ranks 3 and above can run the command. Useful for mod only commands.</li>
</ul>
<img src="/docs/users/permissions.png" class="border-0 figure-img img-fluid blur-up lazyautosizes lazyloaded">
`},{id:13,href:"https://glimboi.com/docs/commands/actions/",title:"Actions",description:"Doc explaining command actions",content:`<h2 id="actions">Actions</h2>
<p>Actions are the instructions that your command follows. You can create a script of instructions for your command to run.</p>
<img src="/docs/commands/actions.png" class="border-0 figure-img img-fluid blur-up lazyautosizes lazyloaded">
<h4 id="chatmessage">ChatMessage</h4>
<p>The most common action. Sends a message to chat. Each message has a max limit of 255 characters. <a href="/docs/commands/variables">Variables</a> are supported.</p>
<h4 id="api-request-advanced">API Request *Advanced</h4>
<p>Sends a request to a third party API. You can make a HTTP GET request with header values. You then store the response in <a href="/docs/commands/variables">variables</a>. JSON and text based API&rsquo;s are supported.</p>
<h4 id="audio-sound-effect">Audio (Sound Effect)</h4>
<p>Play a sound effect in the media overlay. You must add the sound effect on the media page before Glimboi can play it. The media overlay must be setup and running in OBS.</p>
<h4 id="ban-user">Ban User</h4>
<p>Ban a user from Glimesh chat. The bot account <strong>must</strong> have the permission to ban in the chat that you join. Use with caution! <a href="/docs/commands/variables">Variables</a> are supported.</p>
<h4 id="imagegif">Image/GIF</h4>
<p>Play a image/GIF in the media overlay. You must add the image/GIF on the media page before Glimboi can play it. The media overlay must be setup and running in OBS.</p>
<h3 id="matrix">Matrix</h3>
<p>Send a message to the Matrix (discord alternative). You must have the Matrix account information listed in the Integrations Page.</p>
<h4 id="obswebsocket">OBSWebSocket</h4>
<p>This action can interface with OBS and do various things. This requires <a href="https://github.com/obsproject/obs-websocket/releases/tag/4.9.1">OBS Websocket</a> installed. View our page on this <a href="/docs/integrations/obswebsocket">here</a>.</p>
<h4 id="points">Points</h4>
<p>Adds or removes points from a user. <a href="/docs/commands/variables">Variables</a> are supported.</p>
<h4 id="read-file">Read File</h4>
<p>Reads a file on your PC and stores the output to a variable.</p>
<h4 id="timeout-user">Timeout User</h4>
<p>Time out a user on Glimesh. You can choose a short (5 min) or long (15 min) duration. <a href="/docs/commands/variables">Variables</a> are supported. Use with caution.</p>
<h4 id="tweet">Tweet</h4>
<p>This action has been disabled since the Twitter API is now a paid service. Sorry!</p>
<h4 id="update-stream-info">Update Stream Info</h4>
<p>This action allows you to modify your stream title from a command. You must have authorized the bot with the new permission for this to work. Max length is 255 characters.</p>
<h4 id="video">Video</h4>
<p>Play a video in the media overlay. You must add the video on the media page before Glimboi can play it. The media overlay must be setup and running in OBS.</p>
<h4 id="wait">Wait</h4>
<p>Pauses the script for a set amount of seconds. The command will not run the next action until the wait duration is over. Decimals are supported to get a value less than 1 second.</p>
<h4 id="write-file">Write File</h4>
<p>Writes data to a file. <a href="/docs/commands/variables">Variables</a> are supported.</p>
`},{id:14,href:"https://glimboi.com/docs/integrations/obswebsocket/",title:"OBS Websocket",description:"Doc explaining OBS Websocket",content:`<h2 id="obs-websocket">OBS Websocket</h2>
<p>Glimboi can use <a href="https://github.com/obsproject/obs-websocket/">OBS Websocket</a> to talk to OBS with your commands. This requires OBS websocket to be installed. Simply download the <a href="https://github.com/obsproject/obs-websocket/releases/tag/4.9.1">executable file</a> and run it.</p>
<blockquote>
<p>Make sure you do not exceed version 5.0. It is untested with Glimboi.</p>
</blockquote>
<h3 id="setup">Setup</h3>
<p>Once installed you need to connect Glimboi to OBS. This is done on the integrations page. Make sure OBS Websocket is enabled. If you set a password you should add it to the bottom input. You must enter the correct ws URL.</p>
<p><code>ws://</code> is the protocol. This will be in every URL.</p>
<p><code>127.0.0.1</code> is the IP of the device running OBS.</p>
<p><code>:4444</code> is the port on which OBS Websocket is running.</p>
<p>If Glimboi runs on the same PC that OBS is running on it is the default URL <code>ws://127.0.0.1:4444</code> . If not you need to change the IP to match your stream PC. You may need to allow OBS websocket and Glimboi in your firewall settings.</p>
<h3 id="obs-websocket-actions">OBS Websocket Actions</h3>
<p>The below actions are used in commands. They allow Glimboi to talk to OBS.</p>
<h4 id="change-scene">Change Scene</h4>
<p>Glimboi can switch to any scene in OBS. <a href="/docs/commands/variables">Variables</a> are supported.</p>
<h4 id="change-visibility">Change Visibility</h4>
<p>Glimboi can hide or show any specific source. <a href="/docs/commands/variables">Variables</a> are supported.</p>
<h4 id="mute">Mute</h4>
<p>Glimboi can mute or unmute any specific source. <a href="/docs/commands/variables">Variables</a> are supported.</p>
<h4 id="replay-buffer-clips">Replay Buffer (clips)</h4>
<p>Glimboi can trigger the replay buffer to start, stop, and save clips. Saving a clip requires a hotkey set for &ldquo;Save Replay Buffer&rdquo;. The buffer must also be active.</p>
<blockquote>
<p>Note that attempting to clip when the hotkey isn&rsquo;t set or when the replay buffer isn&rsquo;t active can crash OBS. This is a bug with OBS websocket / OBS and has nothing to do with Glimboi. We suggest you leave the buffer on when you want to record something.</p>
</blockquote>
<h4 id="startstop-streamrecording">Start/Stop Stream/Recording</h4>
<p>Glimboi can start and stop a stream or recording. You should limit any command that uses this action with the rank system to prevent someone from stopping your stream!</p>
<h4 id="screenshot">Screenshot</h4>
<p>Glimboi can take a screenshot of the active scene in OBS. Saved to %appdata% =&gt; Glimboi =&gt; Screenshots</p>
`},{id:15,href:"https://glimboi.com/docs/miscellaneous/settings/",title:"Settings",description:"Doc explaining settings",content:`<h2 id="settings-overview">Settings Overview</h2>
<p>Glimboi has a few settings to help you customize the bot for your stream.</p>
<h2 id="chat">Chat</h2>
<h3 id="health-reminder">Health Reminder</h3>
<p>If enabled Glimboi will remind you to stretch, drink water, and take a break if necessary. You can set the interval or turn it off completely.</p>
<h3 id="log-messages">Log Messages</h3>
<p>If enabled Glimboi will log every chat message to a text file. When you join a chat Glimboi will ask you which file you want to save the log to.</p>
<h2 id="commands">Commands</h2>
<h2 id="repeat-delay">Repeat Delay</h2>
<p>Every command can be repeatable. One random repeatable command is sent to chat on a set interval. This interval can be adjusted here. This setting is directly dependent on the repeat protection setting.</p>
<h2 id="repeat-protection">Repeat Protection</h2>
<p>This setting helps to prevent the bot from spamming the chat with timed messages. If your chat is having a slow day your repeating messages can take over. Viewers usually don&rsquo;t want to see a chat full of the same few repeated messages and no real chatters. This setting will prevent the next repeating message from going to chat if a minimum amount of non bot messages has not been met. You can adjust this setting up to 60 messages.</p>
<h2 id="music">Music</h2>
<h3 id="chat-attribution">Chat Attribution</h3>
<p>If enabled Glimboi will send the name and artist of the song to chat when the song starts to play. This info must be included in the metadata for Glimboi to pick it up.</p>
<h3 id="write-to-file">Write To File</h3>
<p>If enabled Glimboi will send the name and artist of the song to a text file. This file can be displayed in OBS or other software. This info must be included in the metadata for Glimboi to pick it up.</p>
`},{id:16,href:"https://glimboi.com/docs/commands/variables/",title:"Variables",description:"Doc explaining command variables",content:`<h2 id="command-variables">Command Variables</h2>
<p>Variables are a string of text that represent data. They are used when a value of something may change. Variables start with a $ followed by the name of the variable. Some actions let you create temporary variables.</p>
<p>Let&rsquo;s say you wanted a command to welcome the name of a user when they join your chat. You <em>could</em> make a individual welcome command for each user but there is an easier way. You can use the $target variable which takes the first word after the command trigger.</p>
<h3 id="example">Example</h3>
<p>CMD name: !welcome</p>
<p>CMD chatMessage data: Welcome to the chat $target</p>
<p>Use in chat: !welcome Mytho</p>
<p>CMD output: Welcome to the chat Mytho.</p>
<p>All variables are inserted into data fields the same way. Not all actions support variables. A list of all variables can be found below.</p>
<h4 id="target">$target</h4>
<p>The first word after the command.</p>
<p>Go follow $target at Glimesh.tv/$target</p>
<p>!so Mytho | Go follow Mytho at Glimesh.tv/Mytho</p>
<h4 id="message">$message</h4>
<p>Everything after the command.</p>
<p>You just said: $message</p>
<p>!parrot Hello there | You just said: Hello there</p>
<h4 id="user">$user</h4>
<p>The user who used the command</p>
<p>$user looked in the mirror and saw $user</p>
<p>!mirror | Mytho looked in the mirror and saw Mytho</p>
<h4 id="watchtime">$watchtime</h4>
<p>The amount of time the user has watched the stream (15 min blocks)</p>
<p>You have watched the stream for $watchtime minutes</p>
<p>!hours | You have watched the stream for 60 minutes</p>
<h4 id="cmdcount">$cmdcount</h4>
<p>The amount of times the command has been used</p>
<p>This command has been used $cmdcount times</p>
<p>!count | This command has been used 5 times</p>
<h4 id="advice">$advice</h4>
<p>Random piece of advice. May go over 255 characters</p>
<p>Have some advice - $advice</p>
<p>!advice | Have some advice: Drink some water</p>
<h4 id="catfact">$catfact</h4>
<p>Returns a random cat fact. May go over 255 characters.</p>
<p>Random fact about cats: $catfact</p>
<p>!catfact | Random fact about cats: Cats have 230 bones.</p>
<h4 id="dogfact">$dogfact</h4>
<p>Returns a random dog fact. May go over 255 characters.</p>
<p>Random fact about dogs: $dogfact</p>
<p>!dogfact | Random fact about dogs: Your dog can be left or right-pawed.</p>
<h4 id="discord">$discord</h4>
<p>Returns the channels discord invite URL. Must be in the Glimesh API.</p>
<p>Join our discord at $discord</p>
<p>!discord | Join our discord at https://discord.com/invite/NZeqEjhHKf</p>
<h4 id="guilded">$guilded</h4>
<p>Returns the channels guilded invite URL. Must be in the Glimesh API.</p>
<p>Join our guild at $guilded</p>
<p>!guilded | Join our guild at https://guided.gg/test</p>
<h4 id="instagram">$instagram</h4>
<p>Returns the channels instagram URL. Must be in the Glimesh API.</p>
<p>Follow me on instagram at $instagram</p>
<p>!instagram | Follow me on instagram at https://instagram.con/test</p>
<h4 id="youtube">$youtube</h4>
<p>Returns the channels youtube URL. Must be in the Glimesh API.</p>
<p>Join our Youtube channel at $youtube</p>
<p>!yt | Join our youtube channel at https://youtube.com/test</p>
<h4 id="twitter">$twitter</h4>
<p>Returns the channels twitter URL. Must be in the Glimesh API.</p>
<p>Follow me on twitter at $twitter</p>
<p>!twitter | Follow me on twitter at https://twitter.com/Glimboi</p>
<h4 id="uptime">$uptime</h4>
<p>Returns how long the streamer has been live in minutes.</p>
<p>You have been streaming for 100 minutes!</p>
<p>!uptime | You have been streaming for 100 minutes!</p>
`},{id:17,href:"https://glimboi.com/docs/intro/customserver/",title:"Custom Server",description:"Connect to a custom or self-hosted instance of Glimesh",content:`<h2 id="custom-instance">Custom Instance</h2>
<p>As of July 1st, Glimesh has closed. However, all code is open source. This means that you can run your own version of Glimesh, or connect to someone elses! Glimboi will work with all current versions of Glimesh, but future changes may break this compatibility.</p>
<blockquote>
<p>If you are reading this before the shutdown, Glimboi will still use the default Glimesh.tv URL.</p>
</blockquote>
<h2 id="data-export">Data Export</h2>
<p>You must export your bot data before connecting to a custom instance! The easiest way to do this is to use the export tool on the Integrations page. You can export all the .db files. If you also want to archive your cache/settings, copy the cache.json (see next step) in the Glimboi data folder.</p>
<blockquote>
<p>Feel free to look through these files. Most of them are human-readable!</p>
</blockquote>
<p>Next, delete your current bot data. You can delete the data by deleting the Glimboi data folder. Click on the Edit Database button on the Integrations page. Accept the warning, and delete everything from this folder. There is no going back, so make sure you have a backup! (Here is where you can copy any extra files that were not included in the backup. Cache.json is the primary target, but you may have older files from early Glimboi versions you wish to save)</p>
<p>You must not re-import data from a different instance. Each instance must have its own, unique data. Mixing databases will have very strange effects and will likely crash the bot.</p>
<h3 id="connecting-to-a-custom-instance">Connecting to a Custom Instance</h3>
<p>Connecting to an instance is very easy. Head to the Integrations page and scroll to the bottom. Locate the &ldquo;Edit Server&rdquo; button. Once clicked, you will be prompted for a server URL, HTTP/S selection, and a client ID.</p>
<h4 id="server-url">Server URL</h4>
<p>This is the base URL to connect to. Previously, this was <code>glimesh.tv</code>. Now, this will be the location of your instance. You should <strong>only</strong> include the base URL. Do not include the protocol (http://) or add an ending slash (/). Valid examples are shown below:</p>
<ul>
<li>myGlimesh.tv</li>
<li>localhost:4000</li>
<li>glimeshButAlive.now</li>
</ul>
<h4 id="https">HTTP/S</h4>
<p>This setting lets you toggle HTTPS. This will apply to the HTTP API and the websocket connection. Most self-hosted instances will not require HTTPs. Most custom instances that are available over the internet will require it.</p>
<h4 id="client-id">Client ID</h4>
<p>Each instance requires a client ID. You can obtain a client ID from the server admin (custom instance), or make one yourself. The process for this can be seen on the <a href="https://github.com/aMytho/GlimBoi/releases/tag/v2.7.6">releases page</a> for the final Glimboi version.</p>
<h2 id="re-authenticating">Re-Authenticating</h2>
<p>Once the values are entered, you should restart the bot. Once that is completed, go through the authorization process. Finally, connect to chat.</p>
<h3 id="help">Help</h3>
<p>Need some assistance? You can receive support at -</p>
<ul>
<li><a href="https://twitter.com/MythoGM">Twitter DM</a></li>
<li>Discord DM Mytho#1108</li>
<li><a href="https://glimesh.tv/Mytho">Glimesh.tv/Mytho</a></li>
</ul>
`},{id:18,href:"https://glimboi.com/docs/integrations/follow-alerts/",title:"Follow Messages",description:"Doc explaining follow alerts",content:`<h2 id="follow-alerts">Follow Alerts</h2>
<p>Glimboi can send a custom thank-you message when a user follows. This message can be changed from the Follow Scripts in the Integrations page.</p>
<p>This feature must be enabled and a message must be set to work properly. You can add the $follower variable to get the followers username. The message must not be more than 255 characters.</p>
<p>Save your settings when finished.</p>
<blockquote>
<p>As spam protection the Glimesh API limits a follower message to once per 6 hours. This prevents a user from following and re-following to spam the chat with follow messages.</p>
</blockquote>
`},{id:19,href:"https://glimboi.com/docs/users/quotes/",title:"Quotes",description:"Doc explaining quotes",content:`<h2 id="quotes-overview">Quotes Overview</h2>
<blockquote>
<p>This feature needs many improvements. Send us any suggestions you may have!</p>
</blockquote>
<p>Quotes are stored messages from a user. The quotes can be accessed at a later time through chat commands or on the user page.</p>
<h3 id="quote-commands">Quote Commands</h3>
<p>!quote: Returns a random quote</p>
<p>!quote add USER QUOTE: Adds a quote to a specific user.</p>
<p>!quote new USER QUOTE: Adds a quote to a specific user.</p>
<p>!quote del USER QUOTEID: Removed a quote.</p>
<p>!quote delete USER QUOTEID: Removed a quote.</p>
<p>!quote remove USER QUOTEID: Removed a quote.</p>
<h3 id="viewing-quotes">Viewing Quotes</h3>
<p>Quotes are stored on the user page. You can view all the quotes at once or per user. This feature will undergo many changes as the bot progresses.</p>
`},{id:20,href:"https://glimboi.com/docs/integrations/streamlabs/",title:"Streamlabs Alerts",description:"Doc explaining streamlabs integration",content:`<h2 id="streamlabs-alerts">Streamlabs Alerts</h2>
<p>Glimboi can play your Streamlabs alerts when a user follows your channel. You need an existing Streamlabs account.</p>
<p><a href="https://streamlabs.com/dashboard#/settings/api-settings">Create a dev app.</a></p>
<p>Click on the above link and create a new app. Enter the requested info. <strong>You must whitelist your own account that is linked to streamlabs</strong>. It should be in the same casing as your username, not your display name. The redirect URL must be <code>http://localhost:3000</code></p>
<p>Save the app. Copy your client ID and client secret into the Streamlabs Integrations section in Glimboi. Save your info. Click on the token generation link. It will send you to your authorization page. Approve the permissions and return to Glimboi.</p>
<p>You can now play Streamlabs Alerts!</p>
`},{id:21,href:"https://glimboi.com/docs/help/troubleshooting/",title:"Troubleshooting",description:"Solutions to common problems.",content:`<h1 id="restart">Restart</h1>
<p>Usually a simple restart fixes the problem. Reloading the bot (CTRL+R) may prove helpful.</p>
<h2 id="why-are-commands-not-working">Why are commands not working?</h2>
<p>Ensure the cooldown is turned off or at a low rate. Check that you have the required rank to run the command. You may also need points to run the command. Most of these conditions will alert you in chat if they are not met. You can also check the state of the command (disabled or enabled) as well as the relevant triggers.</p>
<h2 id="why-are-my-stream-stats-viewcount-followers-and-new-subs-not-updating">Why are my stream stats (viewcount, followers, and new subs) not updating?</h2>
<p>The stats update on a 15 minute cycle. I have done this to help the Glimesh API. When they add an improved method of getting this information it will update immediately.</p>
<h2 id="why-did-the-bot-randomly-crash">Why did the bot randomly crash?</h2>
<p>Good question! Although most errors simply log an error to the console (shift+ctrl+i) some errors crash glimboi. I have tried to catch most of these bugs but some will get through. If your bot crashes please contact me with info about what you were doing. You can also send me a log of the main process. It is located in %appdata%/Roaming/GlimBoi/logs/main.txt. If you have used the bot for an extended amount of time you may have multiple log files. You only need to send the most recent one.</p>
<h2 id="how-do-i-uninstall-glimboi">How do I uninstall GlimBoi?</h2>
<p><em>Sad GlimBoi</em></p>
<p>Find the .exe file you use to start the bot. Right click, open file location. Run Uninstall.exe . If you wish to delete the bot data you must do so manually. The bot data can be found in the below folder. Deleting this data will completely remove all of your commands, users, ranks, etc. Everything will be lost <strong>including</strong> the backups!</p>
<p>%appdata%/Roaming/GlimBoi</p>
<h2 id="reinstall">Reinstall</h2>
<p>Export a copy of your data from the Integrations page. Make sure to export it somewhere where the bot files cannot access it. Your desktop or documents would work. The app data directory would not. Once the reinstall is complete you can import your data from the Integrations page.</p>
<h2 id="get-support">Get support</h2>
<ul>
<li><a href="https://twitter.com/MythoGM">Twitter DM</a></li>
<li>Discord DM Mytho#1108</li>
<li><a href="https://glimesh.tv/Mytho">Glimesh.tv/Mytho</a></li>
</ul>
`},{id:22,href:"https://glimboi.com/docs/help/faq/",title:"FAQ",description:"Answers to frequently asked questions.",content:`<h2 id="since-glimesh-is-closing-what-will-happen-to-the-bot-and-my-data">Since Glimesh is closing, what will happen to the bot and my data?</h2>
<p>In short, nothing! Glimboi will not be receiving any more updates. Your data will stay on your PC unless you delete it. If you plan on using a custom instance of Glimesh (or a self-hosted one), the bot will support that. However, updates to the custom instances may break compatibility with the bot.</p>
<p>If you will not be using a custom instance, feel free to export your data(optional) and uninstall the bot. The data won&rsquo;t work with any other service. You may get some enjoyment from reading it though! While there are some symbols/code, most of it is human readable. Windows Notepad can read all of the files.</p>
<h2 id="how-much-does-glimboi-cost">How much does GlimBoi cost?</h2>
<p>GlimBoi is free and open source.</p>
<h2 id="can-i-run-glimboi">Can I run GlimBoi?</h2>
<p>GlimBoi can run on windows and linux devices. On average it uses about 100mb of RAM. The CPU usage will be very low. Glimboi can run on Mac but you have to build it yourself.</p>
<h2 id="why-is-my-viewer-not-earning-points-for-watchtime">Why is my viewer not earning points for watchtime?</h2>
<p>To save resources Glimboi distributes points/watchtime every 15 minutes. This means that if you check your watchtime at 5 mintues it will be the same at 10 minutes. At 15 minutes all stats are added.</p>
<h2 id="how-do-i-resize-the-bot">How do I resize the bot?</h2>
<p>Click and drag the blue navigation bar on the top of the screen. Move the window down. Then click on the edges of the window and resize normally.</p>
`},{id:23,href:"https://glimboi.com/docs/intro/",title:"Getting Started",description:"Set up instructions.",content:""},{id:24,href:"https://glimboi.com/docs/music/",title:"Music Player",description:"Share your playlist with your stream!",content:""},{id:25,href:"https://glimboi.com/docs/",title:"Docs",description:"Docs Doks.",content:""}];e.add(n),userinput.addEventListener("input",s,!0),suggestions.addEventListener("click",o,!0);function s(){var n,i=this.value,s=e.search(i,5),o=suggestions.childNodes,r=0,c=s.length;for(suggestions.classList.remove("d-none"),s.forEach(function(e){n=document.createElement("div"),n.innerHTML="<a href><span></span><span></span></a>",a=n.querySelector("a"),t=n.querySelector("span:first-child"),d=n.querySelector("span:nth-child(2)"),a.href=e.href,t.textContent=e.title,d.textContent=e.description,suggestions.appendChild(n)});o.length>c;)suggestions.removeChild(o[r])}function o(){for(;suggestions.lastChild;)suggestions.removeChild(suggestions.lastChild);return!1}})()