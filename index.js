const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

var date = new Date();
var hour = date.getHours();
var twelvehour = date.getHours();
var minute = date.getMinutes(); // timing stuff for command logging

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    console.log(`${bot.user.username} Version: ${botconfig.version}`);
    bot.user.setActivity(`${botconfig.prefix}help`, { type: 'LISTENING' }); // set activity and log some stuff
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") {
    return message.channel.send(`This is a DM, I am dumb and only work in servers. bing bong :)`)
    }; // return if someone dms our bot
    
    let prefix = botconfig.prefix; // simplify prefix
    let version = botconfig.version; // simplify version
    let messageArray = message.content.split(" "); //split
    let cmdOld = messageArray[0]; // define command
    let args = messageArray[1]; // define command arguments
    let cmd = cmdOld.toLowerCase(); // redefine cmd to simplify most pf the code

    // Help
    if(cmd === `${prefix}help`) {
    return message.channel.send(`**__Commands list__**
**/guide** - Displays the currently recommended guide
**/bootmii** - Installing BootMii
**/priiloader** - Installing Priiloader
**/cios** - Installing cIOS **FOR REGULAR WII**
**/ciosmini** - Installing cIOS **FOR WII MINI**
**/usblgx** - Installing USBLoaderGX
**/rc24** - Installing RiiConnect24
**/wl24** - Installing WiiLink24
**/wiimmfi** - Installing Wiimmfi
**/syscheck** - Performing a SysCheck
**/more** - Displays more tutorials
**/pins** - Informs the user about the useful info contained in the pinned messages
**/sega** - Installing Nintendont 
**/credits** - Displays credits for the bot
**/ping** - Displays the ping of the bot
**/root** - Shows the user where the root of a storage device is
**/vwii** - Displays the currently recommended vWii guide`);
   }



    // Guide
    if(cmd === `${prefix}guide`) {
    return message.channel.send(`https://wii.guide/
Use Bluebomb for the Wii mini and Letterbomb for the regular Wii`);
    }

    // BootMii
    if(cmd === `${prefix}bootmii`) {
    return message.channel.send(`https://wii.guide/hbc`);
    }
   
    // Priiloader
    if(cmd === `${prefix}priiloader`) {
    return message.channel.send(`https://wii.guide/priiloader`);
    }

    // cIOS
    if(cmd === `${prefix}cios`) {
    return message.channel.send(`https://wii.guide/cios`);
    }
            
    // cIOS Wii mini
    if(cmd === `${prefix}ciosmini`) {
    return message.channel.send(`https://wii.guide/cios-mini`);
    }

    // USB Loader GX
    if(cmd === `${prefix}usblgx`) {
    return message.channel.send(`https://wii.guide/usbloadergx`);
    }

    // RiiConnect24
    if(cmd === `${prefix}rc24`) {
    return message.channel.send(`https://wii.guide/riiconnect24`);
    }

    // WiiLink24
    if(cmd === `${prefix}wl24`) {
    return message.channel.send(`https://wii.guide/wiilink24`);
    }

    // Wiimmfi
    if(cmd === `${prefix}wiimmfi`) {
    return message.channel.send(`https://wii.guide/wiimmfi`);
    }

    // SysCheck
    if(cmd === `${prefix}syscheck`) {
    return message.channel.send(`https://wii.guide/syscheck`);
    }

    // More
    if(cmd === `${prefix}more`) {
    return message.channel.send(`https://wii.guide/site-navigation https://bloodythorn.github.io/wiihacks-wiki/`);
    }

    // Pins
    if(cmd === `${prefix}pins`) {
    return message.channel.send(`Please check the pinned messages for more guides`);
    }

    // Nintendont
    if(cmd === `${prefix}sega`) {
    return message.channel.send(`https://bloodythorn.github.io/wiihacks-wiki/tutorials/nintendont.html`);
    }

    // Credits
    if(cmd === `${prefix}credits`) {
    return message.channel.send(`Bot creator: akisblack#2545`);
    }

    // vWii
    if(cmd === `${prefix}vwii`) {
    return message.channel.send(`https://wiiu.hacks.guide/#/vwii-modding`);
    }
    
    // Root
    if(cmd === `${prefix}root`) {
    return message.channel.send(`https://imgur.com/a/HDCWvt0`);
    }

    // Ping
    if (cmd === `${prefix}ping`) {
    var ping = Date.now() - message.createdTimestamp + " ms";
    return message.channel.send("Pong! Your ping is " + `${ping}`);
    }

});


bot.login(botconfig.token);