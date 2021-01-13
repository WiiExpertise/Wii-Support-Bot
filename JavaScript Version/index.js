const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

// Add times to logging on console
var date = new Date();
var hour = date.getHours();
var twelvehour = date.getHours();
var minute = date.getMinutes();

// Set activity and log to console
bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    console.log(`${bot.user.username} Version: ${botconfig.version}`);
    bot.user.setActivity(`${botconfig.prefix}cmds`, { type: 'LISTENING' });
});

// Tell people to fuck off when DMing
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") {
    return message.channel.send(`This is a DM, I only work in servers`)
    };     
    
    // Simplify or define stuff
    let prefix = botconfig.prefix; // simplify prefix
    let version = botconfig.version; // simplify version
    let messageArray = message.content.split(" "); //split
    let cmdOld = messageArray[0]; // define command
    let args = messageArray[1]; // define command arguments
    let cmd = cmdOld.toLowerCase(); // redefine cmd to simplify most pf the code

    // Commands
    if(cmd === `${prefix}cmds`) {
    return message.channel.send(`**Commands**
    
**__All Wii__**
**/guide** - Displays the currently recommended guide
**/priiloader** - Installing Priiloader
**/wiimmfi** - Installing Wiimmfi
**/forwarders** - Installing forwarders for games
**/syscheck** - Performing a SysCheck
**/more** - Displays more tutorials
**/pins** - Informs the user about the useful info contained in the pinned messages
**/sega** - Installing Nintendont 
**/root** - Shows the user where the root of a storage device is
**/mbr** - Displays a way to convert a drive to the MBR partition table 
**/wbm** - Shows a guide for organising your digital Wii game library
**/usblgx** - Installing USBLoaderGX
**/ytdeath** - Displays a meme and some reasons you should not use YouTube guides
**/wl24** - Installing WiiLink24   
**/bootmii** - Installing themes to the Wii Menu

**__Normal Wii__**
**/letterbomb** - Running the Letterbomb exploit
**/bootmii** - Installing BootMii
**/cios** - Installing cIOS
**/rc24** - Installing RiiConnect24
**/ios** - Displays a link with downloads to various useful Wii IOS files - **Currently not working**
**/sysmenu** - Displays a link with downloads to 4.3 Wii System Menu files from all regions - **Currently not working**
**/troubleshoot** - Displays 6 possible reasons your loader isn't working right away
 
**__Wii mini__**
**/bluebomb** - Running the Bluebomb exploit
**/ciosmini** - Installing cIOS
**/sysmenumini** - Displays a link with downloads to the Wii mini System Menu files from all regions - **Currently not working** 
**/iosmini** - Displays a link with downloads to various useful Wii mini IOS files - **Currently not working**
**/troubleshootmini** - Displays 5 possible reasons your loader isn't working right away

**__Extras__**
**/credits** - Displays credits for the bot
**/ping** - Displays the ping of the bot
**/vwii** - Displays the currently recommended vWii guide`); 
    }  

    if(cmd === `${prefix}guide`) {
    return message.channel.send(`https://wii.guide/get-started
Use Bluebomb for the Wii mini and Letterbomb for the regular Wii`);
    }

    if(cmd === `${prefix}letterbomb`) {
    return message.channel.send(`https://wii.guide/letterbomb`);
    }    

    if(cmd === `${prefix}bluebomb`) {
    return message.channel.send(`https://wii.guide/bluebomb`);
    }   

    if(cmd === `${prefix}themes`) {
    return message.channel.send(`https://wii.guide/themes`);
    }    

    if(cmd === `${prefix}bootmii`) {
    return message.channel.send(`https://wii.guide/hbc`);
    }
   
    if(cmd === `${prefix}priiloader`) {
    return message.channel.send(`https://wii.guide/priiloader`);
    }

    if(cmd === `${prefix}cios`) {
    return message.channel.send(`https://wii.guide/cios`);
    }
            
    if(cmd === `${prefix}ciosmini`) {
    return message.channel.send(`https://wii.guide/cios-mini`);
    }

    if(cmd === `${prefix}usblgx`) {
    return message.channel.send(`https://wii.guide/usbloadergx`);
    }

    if(cmd === `${prefix}rc24`) {
    return message.channel.send(`https://wii.guide/riiconnect24`);
    }

    if(cmd === `${prefix}wl24`) {
    return message.channel.send(`https://wii.guide/wiilink24`);
    }

    if(cmd === `${prefix}wiimmfi`) {
    return message.channel.send(`https://wii.guide/wiimmfi`);
    }

    if(cmd === `${prefix}syscheck`) {
    return message.channel.send(`https://wii.guide/syscheck`);
    }

    if(cmd === `${prefix}more`) {
    return message.channel.send(`https://wii.guide/site-navigation https://bloodythorn.github.io/wiihacks-wiki/`);
    }

    if(cmd === `${prefix}pins`) {
    return message.channel.send(`Please check the pinned messages for more guides`);
    }

    if(cmd === `${prefix}sega`) {
    return message.channel.send(`https://bloodythorn.github.io/wiihacks-wiki/tutorials/nintendont.html`);
    }

    if(cmd === `${prefix}credits`) {
    return message.channel.send(`Bot creator: 
akisblack#2545

Kudos: 
shrek#7532 aka DerpMaster2 
WiiMaster#7071 aka WiiExpertise 
MethodOrMadness#9199 aka Method 
Devnol#9366 aka CommandBlock6417
oscie#1093 aka nothing
and many others`);
    }

    if(cmd === `${prefix}vwii`) {
    return message.channel.send(`https://wiiu.hacks.guide/#/vwii-modding`);
    }
    
    if(cmd === `${prefix}forwarders`) {
    return message.channel.send(`https://wii.guide/wiigsc`);
    }

    if(cmd === `${prefix}root`) {
    return message.channel.send(`https://imgur.com/a/HDCWvt0`);
    }

    if (cmd === `${prefix}ping`) {
    var ping = Date.now() - message.createdTimestamp + " ms";
    return message.channel.send("Pong! The bot's ping is " + `${ping}`);
    }

    if(cmd === `${prefix}ios`) {
    return message.channel.send(`I am on life support, leave me alone`);
    }

    if(cmd === `${prefix}sysmenu`) {
    return message.channel.send(`I am on life support, leave me alone`);
    } 
    
    if(cmd === `${prefix}iosmini`) {
    return message.channel.send(`I am on life support, leave me alone`);
    } 

    if(cmd === `${prefix}sysmenumini`) {
    return message.channel.send(`I am on life support, leave me alone`);
    } 

    if(cmd === `${prefix}ytdeath`) {
    return message.channel.send(`https://imgur.com/a/rw6amzX
**__Why you should NOT use video guides.__**
**Reasons to not use video guides:**
- Most uploaders do not edit their guides after uploading, even if there are mistakes
- When methods become outdated, the information is not updated
- Difficult to give assistance with
- Most videos also refer to a pre-packaged download, which are often outdated and poorly organised`);
    } 

    if(cmd === `${prefix}troubleshoot`) {
    return message.channel.send(`1: Wrong USB port. The only USB port that can run game backups is the one on the edge of the Wii, unless you are using d2x beta53-alt cIOS, which is not recommended as it is not as compatible.

2: cIOS is not set up correctly (follow https://wii.guide/cios). We can only confirm it is done right with a syscheck (follow https://wii.guide/syscheck). Keep in mind that some games that use accessories will require a different IOS to run.
    
3: Image is bad/corrupted. Testable in Dolphin Emulator. Make sure it's wbfs or iso (not nkit) if you're trying to play a Wii game.
    
4: Use the latest version of your loader, use default settings and name the games as such for Wii games> USB:/wbfs/GameName [GameID]/GameID.wbfs
    
5: USB isn't compatible. That is most likely to happen with flash drives. HDDs are always the best way to store games on the Wii.
    
6: Don't use a forwarder. Launch the app directly from the Homebrew Channel.`);
    } 
    
    if(cmd === `${prefix}mbr`) {
    return message.channel.send(`To change a drive to MBR on Windows, open disk management. If you're on Windows 8 or higher, do Windows key + X and click on disk management.

Once you're there, find the drive you need to convert to MBR and right click on the area where it says "Disk" and then the number of the disc. If it's not already MBR, you'll see an available option to convert to MBR disk. Use that option.`);
    } 

    if(cmd === `${prefix}wbm`) {
    return message.channel.send(`The best way to fix Wii Backup Manager not working is by deleting Wii Backup Manager and never looking back.

There's a far quicker and more reliable method of adding games - and that's manually, by making folders and dropping your games in their correct folders.
        
Some people say it's hard, but it's nowhere near as hard as they make it out to be. Took me about 25 minutes to add roughly 30 games, Wii and GameCube. Though the amount of time it takes is largely dependent on what USB interface you're using (1.0, 1.1, 2.0, 3.0, 3.1) what kind of device you're using (hard drive, SD card, flash drive, SSD), and how large the files are.
        
The first step is making a "wbfs" folder on the root of your USB device if there isn't already one. If there already is one, then you're already one step ahead.
        
Inside the "wbfs" folder will be game folders, once you've made them. For example, inside that "wbfs" folder, Wii Sports would look like this:
        
/USB drive/wbfs/Wii Sports [RSPE01]/RSPE01.wbfs
        
If you're using .iso files instead of .wbfs files, make sure to change them using this tool here. It's a far superior way of storing games on external storage.
        
https://isotowbfs.com/
        
That 6 digit code after the name of the game is called the game ID. You can find them here by searching the game's name and copying that code.
        
https://gametdb.com/
        
After you have the game folder, which is inside the "wbfs" folder, plop your file inside. It must be named like the example above.
        
And congratulations, you just added a Wii game to your USB device manually. You'll get faster the more you do it.`);
    } 

    if(cmd === `${prefix}troubleshootmini`) {
    return message.channel.send(`1: cIOS is not set up correctly (follow https://wii.guide/cios-mini). We can only confirm it is done right with a syscheck (follow https://wii.guide/syscheck).

2: Image is bad/corrupted. Testable in Dolphin Emulator. Make sure it's wbfs or iso (not nkit) if you're trying to play a Wii game.
        
3: Use the latest version of your loader, use default settings and name the games as such for Wii games> USB:/wbfs/GameName [GameID]/GameID.wbfs
        
4: USB isn't compatible. That is most likely to happen with flash drives. HDDs are always the best way to store games on the Wii.
        
5: Don't use a forwarder. Launch the app directly from the Homebrew Channel.`);
    }

});

bot.login(botconfig.token);