const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

// Set activity and log to console
bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    console.log(`${bot.user.username} Version: ${botconfig.version}`);
    bot.user.setPresence( { activity: { name: `${botconfig.prefix}help` }, type: 'LISTENING' });
});

// Tell people to fuck off when DMing
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") {
        return sendMsg(`Sorry ${message.author.username} This is a DM. I only work in servers.`)
    }; 
    
    let prefix = botconfig.prefix; // simplify prefix
    let version = botconfig.version; // simplify version
    let messageArray = message.content.split(" "); //split
    let cmdOld = messageArray[0]; // define command
    let cmd = cmdOld.toLowerCase(); // redefine cmd to simplify most pf the code
    let pingRX = /<@!\d+>/; // regex to detect if a mention is used
    function sendMsg(content) { message.channel.send(content) } // message send

    // Commands
    if(cmd === `${prefix}cmds`) return sendMsg(`**Commands**\n\n**__All Wii__**\n**/guide** - Displays the currently recommended guide\n**/priiloader** - Installing Priiloader\n**/wiimmfi** - Installing Wiimmfi\n**/forwarders** - Installing forwarders for games\n**/syscheck** - Performing a SysCheck\n**/more** - Displays more tutorials\n**/pins** - Informs the user about the useful info contained in the pinned messages\n**/sega** - Installing Nintendont\n**/root** - Shows the user where the root of a storage device is\n**/mbr** - Displays a way to convert a drive to the MBR partition table\n**/wbm** - Shows a guide for organising your digital Wii game library\n**/usblgx** - Installing USBLoaderGX\n**/ytdeath** - Displays a meme and some reasons you should not use YouTube guides\n**/wl24** - Installing WiiLink24\n**/themes** - Installing themes to the Wii Menu\n\n**__Normal Wii__**\n**/letterbomb** - Running the Letterbomb exploit\n**/bootmii** - Installing BootMii\n**/cios** - Installing cIOS\n**/rc24** - Installing RiiConnect24\n**/ios** - Displays a link with downloads to various useful Wii IOS files - **Currently not working**\n**/sysmenu** - Displays a link with downloads to 4.3 Wii System Menu files from all regions - **Currently not working**\n**/troubleshoot** - Displays 6 possible reasons your loader isn't working right away\n\n**__Wii mini__**\n**/bluebomb** - Running the Bluebomb exploit\n**/ciosmini** - Installing cIOS\n\n**/sysmenumini** - Displays a link with downloads to the Wii mini System Menu files from all regions - **Currently not working**\n**/iosmini** - Displays a link with downloads to various useful Wii mini IOS files - **Currently not working**\n**/troubleshootmini** - Displays 5 possible reasons your loader isn't working right away\n\n**__Extras__**\n**/credits** - Displays credits for the bot\n**/ping** - Displays the ping of the bot\n**/g** - Search with the Google API\n**/vwii** - Displays the currently recommended vWii guide`); 
    
    if(cmd === `${prefix}guide`) return sendMsg(`https://wii.guide/get-started\nUse Bluebomb for the Wii mini and Letterbomb for the regular Wii`);

    if(cmd === `${prefix}letterbomb`) return sendMsg(`https://wii.guide/letterbomb`);
      
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
    
    if(cmd === `${prefix}more`) return sendMsg(`https://wii.guide/site-navigation\nhttps://bloodythorn.github.io/wiihacks-wiki/`);
    
    if(cmd === `${prefix}pins`) return sendMsg(`Please check the pinned messages for more guides`);
    
    if(cmd === `${prefix}sega`) return sendMsg(`https://bloodythorn.github.io/wiihacks-wiki/tutorials/nintendont.html`);
    
    if(cmd === `${prefix}credits`) return sendMsg(`Bot creator:\nakisblack#2545\n\nKudos:\nshrek#7532 aka DerpMaster2\nWiiMaster#7071 aka WiiExpertise\nMethodOrMadness#9199 aka Method\nDevnol#9366 aka CommandBlock6417\noscie#1093 aka nothing\nand many others`);
    
    if(cmd === `${prefix}vwii`) return sendMsg(`https://wiiu.hacks.guide/#/vwii-modding`);
    
    if(cmd === `${prefix}forwarders`) return sendMsg(`https://wii.guide/wiigsc`);
    
    if(cmd === `${prefix}root`) return sendMsg(`https://imgur.com/a/HDCWvt0`);
    
    if(cmd === `${prefix}ios`) return sendMsg(`I am on life support, leave me alone`);
    
    if(cmd === `${prefix}sysmenu`) return sendMsg(`I am on life support, leave me alone`);
    
    if(cmd === `${prefix}iosmini`) return sendMsg(`I am on life support, leave me alone`);
    
    if(cmd === `${prefix}sysmenumini`) return sendMsg(`I am on life support, leave me alone`);
    
    if(cmd === `${prefix}ytdeath`) return sendMsg(`https://imgur.com/a/rw6amzX\n**__Why you should NOT use video guides.__**\n**Reasons to not use video guides:**\n- Most uploaders do not edit their guides after uploading, even if there are mistakes\n- When methods become outdated, the information is not updated\n- Difficult to give assistance with\n- Most videos also refer to a pre-packaged download, which are often outdated and poorly organised`);
    
    if(cmd === `${prefix}troubleshoot`) return sendMsg(`1: Wrong USB port. The only USB port that can run game backups is the one on the edge of the Wii, unless you are using d2x beta53-alt cIOS, which is not recommended as it is not as compatible.\n\n2: cIOS is not set up correctly (follow https://wii.guide/cios). We can only confirm it is done right with a syscheck (follow https://wii.guide/syscheck). Keep in mind that some games that use accessories will require a different IOS to run.\n\n3: Image is bad/corrupted. Testable in Dolphin Emulator. Make sure it's wbfs or iso (not nkit) if you're trying to play a Wii game.\n\n4: Use the latest version of your loader, use default settings and name the games as such for Wii games> USB:/wbfs/GameName [GameID]/GameID.wbfs\n\n5: USB isn't compatible. That is most likely to happen with flash drives. HDDs are always the best way to store games on the Wii.\n\n6: Don't use a forwarder. Launch the app directly from the Homebrew Channel.`);
    
    if(cmd === `${prefix}mbr`) return sendMsg(`To change a drive to MBR on Windows, open disk management. If you're on Windows 8 or higher, do Windows key + X and click on disk management.\n\nOnce you're there, find the drive you need to convert to MBR and right click on the area where it says "Disk" and then the number of the disc. If it's not already MBR, you'll see an available option to convert to MBR disk. Use that option.`);
    
    if(cmd === `${prefix}wbm`) return sendMsg(`The best way to fix Wii Backup Manager not working is by deleting Wii Backup Manager and never looking back.\n\nThere's a far quicker and more reliable method of adding games - and that's manually, by making folders and dropping your games in their correct folders.\n\nSome people say it's hard, but it's nowhere near as hard as they make it out to be. Took me about 25 minutes to add roughly 30 games, Wii and GameCube. Though the amount of time it takes is largely dependent on what USB interface you're using (1.0, 1.1, 2.0, 3.0, 3.1) what kind of device you're using (hard drive, SD card, flash drive, SSD), and how large the files are.\n\nThe first step is making a "wbfs" folder on the root of your USB device if there isn't already one. If there already is one, then you're already one step ahead.\n\nInside the "wbfs" folder will be game folders, once you've made them. For example, inside that "wbfs" folder, Wii Sports would look like this:\n\n/USB drive/wbfs/Wii Sports [RSPE01]/RSPE01.wbfs\n\nIf you're using .iso files instead of .wbfs files, make sure to change them using this tool here. It's a far superior way of storing games on external storage.\n\nhttps://isotowbfs.com/\n\nThat 6 digit code after the name of the game is called the game ID. You can find them here by searching the game's name and copying that code.\n\nhttps://gametdb.com/\n\nAfter you have the game folder, which is inside the "wbfs" folder, plop your file inside. It must be named like the example above.\n\nAnd congratulations, you just added a Wii game to your USB device manually. You'll get faster the more you do it.`);
    
    if(cmd === `${prefix}troubleshootmini`) return sendMsg(`1: cIOS is not set up correctly (follow https://wii.guide/cios-mini). We can only confirm it is done right with a syscheck (follow https://wii.guide/syscheck).\n\n2: Image is bad/corrupted. Testable in Dolphin Emulator. Make sure it's wbfs or iso (not nkit) if you're trying to play a Wii game.\n\n3: Use the latest version of your loader, use default settings and name the games as such for Wii games> USB:/wbfs/GameName [GameID]/GameID.wbfs\n\n4: USB isn't compatible. That is most likely to happen with flash drives. HDDs are always the best way to store games on the Wii.\n\n5: Don't use a forwarder. Launch the app directly from the Homebrew Channel.`);
    
    if(cmd === `${prefix}g`) {
        let query = message.content.replace(`${prefix}g`, '');
        query = encodeURIComponent(query.trim());
        return sendMsg(`https://lmgtfy.app/#gsc.tab=0&gsc.q=${query}`);
    }

});

bot.login(botconfig.token);