const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const token = ("YOUR-TOKEN-HERE");

// Set activity and log to console
bot.on("ready", async () => { console.log(`I am online`); bot.user.setPresence( { activity: { name: `/help` }, type: 'LISTENING' });
});

// Tell people to fuck off when DMing
bot.on("message", async message => { if(message.author.bot) return; if(message.channel.type === "dm") return sendMsg(`This is a DM. I only work in servers.`)
    
    // Simplify or define stuff
    let prefix = "/"; // simplify prefix
    let messageArray = message.content.split(" "); // split
    let cmdOld = messageArray[0]; // define command
    let cmd = cmdOld.toLowerCase(); // redefine cmd to simplify most pf the code
    function sendMsg(content) { message.channel.send(content) } // message send

    // Commands
    if(cmd === `${prefix}help`) return sendMsg(`**__All Wii__**\n**/guide** - Displays the currently recommended guide\n**/priiloader** - Installing Priiloader\n**/bluebomb** - Running the Bluebomb exploit\n**/wiimmfi** - Installing Wiimmfi\n**/forwarders** - Installing forwarders for games\n**/syscheck** - Performing a SysCheck\n**/cleanrip** - Ripping games from disc\n**/more** - Displays more tutorials\n**/pins** - Informs the user about the useful info contained in the pinned messages\n**/sega** - Installing Nintendont\n**/root** - Shows the user where the root of a storage device is\n**/mbr** - Displays a way to convert a drive to the MBR partition table\n**/wbm** - Shows a guide for organising your digital Wii game library\n**/usblgx** - Installing USBLoaderGX\n**/ytdeath** - Displays a meme and some reasons you should not use YouTube guides\n**/wl24** - Installing WiiLink24\n**/themes** - Installing themes to the Wii Menu\n\n**__Normal Wii__**\n**/letterbomb** - Running the Letterbomb exploit\n**/bootmii** - Installing BootMii\n**/cios** - Installing cIOS\n**/rc24** - Installing RiiConnect24\n**/troubleshoot** - Displays 6 possible reasons your loader isn't working right away\n\n**__Wii mini__**\n**/ciosmini** - Installing cIOS\n**/troubleshootmini** - Displays 5 possible reasons your loader isn't working right away\n\n**__Extras__**\n**/credits** - Displays credits for the bot\n**/ping** - Displays the ping of the bot\n**/g** - Search with the Google API\n**/vwii** - Displays the currently recommended vWii guide`); 
    
    if(cmd === `${prefix}guide`) return sendMsg(`https://wii.guide\nUse Bluebomb for the Wii mini and Letterbomb for the regular Wii`);

    if(cmd === `${prefix}letterbomb`) return sendMsg(`https://wii.guide/letterbomb`);
    
    if(cmd === `${prefix}cleanrip`) return sendMsg(`https://wii.guide/cleanrip`);    

    if(cmd === `${prefix}bluebomb`) return sendMsg(`https://wii.guide/bluebomb`);
       
    if(cmd === `${prefix}themes`) return sendMsg(`https://wii.guide/themes`);  

    if(cmd === `${prefix}bootmii`) return sendMsg(`https://wii.guide/hbc`);
    
    if(cmd === `${prefix}priiloader`) return sendMsg(`https://wii.guide/priiloader`);
    
    if(cmd === `${prefix}cios`) return sendMsg(`https://wii.guide/cios`);
    
    if(cmd === `${prefix}ciosmini`) return sendMsg(`https://wii.guide/cios-mini`);
    
    if(cmd === `${prefix}usblgx`) return sendMsg(`https://wii.guide/usbloadergx`);
    
    if(cmd === `${prefix}rc24`) return sendMsg(`https://wii.guide/riiconnect24`);
    
    if(cmd === `${prefix}wl24`) return sendMsg(`https://wii.guide/wiilink24`);
    
    if(cmd === `${prefix}wiimmfi`) return sendMsg(`https://wii.guide/wiimmfi`);
    
    if(cmd === `${prefix}syscheck`) return sendMsg(`https://wii.guide/syscheck`);
    
    if(cmd === `${prefix}more`) return sendMsg(`https://wii.guide/site-navigation`);
    
    if(cmd === `${prefix}pins`) return sendMsg(`Please check the pinned messages for guides`);
    
    if(cmd === `${prefix}sega`) return sendMsg(`https://akisblack.github.io/wii%20stuff/nintendont`);
    
    if(cmd === `${prefix}credits`) return sendMsg(`Bot creator:\nakisblack#2545\n\nKudos:\nshrek#7532\nWiiMaster#7071\nMethodOrMadness#9199\nDevnol#9366\noscie#1093`);
    
    if(cmd === `${prefix}vwii`) return sendMsg(`https://wiiu.hacks.guide/#/vwii-modding`);
    
    if(cmd === `${prefix}forwarders`) return sendMsg(`https://wii.guide/wiigsc`);
    
    if(cmd === `${prefix}root`) return sendMsg(`https://akisblack.github.io/wii%20stuff/root.png`);
    
    if(cmd === `${prefix}ytdeath`) return sendMsg(`https://akisblack.github.io/wii%20stuff/ytdeath.png\n**__Why you should NOT use video guides.__**\n- Most uploaders do not edit their guides after uploading, even if there are mistakes\n- When methods become outdated, the information is not updated\n- Difficult to give assistance with\n- Most videos also refer to a pre-packaged download, which are often outdated and poorly organised`);
    
    if(cmd === `${prefix}troubleshoot`) return sendMsg(`**__Loader Troubleshooting__**\n**1.** Wrong USB port. The only USB port that can run game backups is the one on the edge of the Wii, unless you are using d2x beta53-alt cIOS, which is not recommended as it is not as compatible.\n\n**2.** cIOS is not set up correctly (follow https://wii.guide/cios). We can only confirm it is done right with a syscheck (follow https://wii.guide/syscheck).\n\n**3.** Image is bad/corrupted. Testable in Dolphin Emulator. Make sure it's wbfs or iso (not nkit, gcz or rvz) if you're trying to play a Wii game.\n\n**4.** Use the latest version of your loader, use default settings and name the games as such for Wii games> USB:/wbfs/GameName [GameID]/GameID.wbfs\n\n**5.** USB isn't compatible. That is most likely to happen with flash drives. HDDs are always the best way to store games on the Wii.\n\n**6.** Don't use a forwarder. Launch the app directly from The Homebrew Channel.`);
    
    if(cmd === `${prefix}mbr`) return sendMsg(`To change a drive to MBR on Windows, open disk management. If you're on Windows 8 or higher, do Windows key + X and click on disk management.\n\nOnce you're there, find the drive you need to convert to MBR and right click on the area where it says "Disk" and then the number of the disc. If it's not already MBR, you'll see an available option to convert to MBR disk. Use that option.`);
    
    if(cmd === `${prefix}wbm`) return sendMsg(`The best way to fix Wii Backup Manager not working is by deleting Wii Backup Manager and never looking back.\n\nThere's a far quicker and more reliable method of adding games - and that's manually, by making folders and dropping your games in their correct folders.\n\nSome people say it's hard, but it's nowhere near as hard as they make it out to be. Took me about 25 minutes to add roughly 30 games, Wii and GameCube. Though the amount of time it takes is largely dependent on what USB interface you're using (1.0, 1.1, 2.0, 3.0, 3.1) what kind of device you're using (hard drive, SD card, flash drive, SSD), and how large the files are.\n\nThe first step is making a "wbfs" folder on the root of your USB device if there isn't already one. If there already is one, then you're already one step ahead.\n\nInside the "wbfs" folder will be game folders, once you've made them. For example, inside that "wbfs" folder, Wii Sports would look like this:\n\n/USB drive/wbfs/Wii Sports [RSPE01]/RSPE01.wbfs\n\nIf you're using .iso files instead of .wbfs files, make sure to change them using this tool here. It's a far superior way of storing games on external storage.\n\nhttps://isotowbfs.com/\n\nThat 6 digit code after the name of the game is called the game ID. You can find them here by searching the game's name and copying that code.\n\nhttps://gametdb.com/\n\nAfter you have the game folder, which is inside the "wbfs" folder, plop your file inside. It must be named like the example above.\n\nAnd congratulations, you just added a Wii game to your USB device manually. You'll get faster the more you do it.`);
    
    if(cmd === `${prefix}troubleshootmini`) return sendMsg(`**__Loader Troubleshooting__**\n**1.** cIOS is not set up correctly (follow https://wii.guide/cios-mini). We can only confirm it is done right with a syscheck (follow https://wii.guide/syscheck).\n\n**2.** Image is bad/corrupted. Testable in Dolphin Emulator. Make sure it's wbfs or iso (not nkit, gcz or rvz) if you're trying to play a Wii game.\n\n**3.** Use the latest version of your loader, use default settings and name the games as such for Wii games> USB:/wbfs/GameName [GameID]/GameID.wbfs\n\n**4.** USB isn't compatible. That is most likely to happen with flash drives. HDDs are always the best way to store games on the Wii.\n\n**5.** Don't use a forwarder. Launch the app directly from the Homebrew Channel.`);
    
    if(cmd === `${prefix}g`) {
        let query = message.content.replace(`${prefix}g`, '');
        query = encodeURIComponent(query.trim());
        return sendMsg(`https://lmgtfy.app/#gsc.tab=0&gsc.q=${query}`);
    }
    
    if (cmd === `${prefix}ping`) {
        var ping = Date.now() - message.createdTimestamp + " ms";
        return message.channel.send("Pong! The bot's ping is " + `${ping}`);
    }

});

bot.login(token);

