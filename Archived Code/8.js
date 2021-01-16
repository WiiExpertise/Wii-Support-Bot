const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    console.log(`${bot.user.username} Version: ${botconfig.version}`);
    //bot.user.setActivity(`${botconfig.prefix}help`, { type: 'PLAYING' }); // set activity and log some stuff
    //pres.setActivity('idle');
    bot.user.setPresence( { activity: { name: `${botconfig.prefix}help` }, type: 'PLAYING' });
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") {
        return sendMsg(`Sorry ${message.author.username} This is a private DM. to use me properly, navigate to the server we share and run the command in the proper channel`)
    }; // return if someone dms our bot
    
    let prefix = botconfig.prefix; // simplify prefix
    let version = botconfig.version; // simplify version
    let messageArray = message.content.split(" "); //split
    let cmdOld = messageArray[0]; // define command
    let cmd = cmdOld.toLowerCase(); // redefine cmd to simplify most pf the code
    let pingRX = /<@!\d+>/; // regex to detect if a mention is used
    function sendMsg(content) { message.channel.send(content) } // message send

    // no command
    if(cmd === `${prefix}`) { return sendMsg(`Oops! you forgot the command!`); }

    // Credits
    if(cmd === `${prefix}credits`) { return sendMsg(`Credits: MethodMusic, Oscie, Devnol`); }

    // Help commands
    if(cmd === `${prefix}help`) {
        console.log(`Command: ${messageArray[0]}, executed by: ${message.author.username}, in guild: ${message.guild.name} at ${twelvehour}:${minute}(12 hour)`);
        return sendMsg(`__**Bot Information**__\n*Version - "${version}"*\n*Prefix - "${prefix}"*\n__**Commands**__\n*Type \`.wii help\` for a list of wii help commands*\n*Type \`.3ds help\` for a list of 3ds help commands*\n*Type \`.wiiu help\` for a list of wiiu help commands*`);
    }

    // piracy
    if(cmd === `${prefix}piracy`) return sendMsg("As per rule #1, we can not, and will not endorse or allow piracy, you will recieve a warning, next time will be a kick");

    // Vguides
    if(cmd === `${prefix}vguide`) { return sendMsg(`**__Why you should *NOT* use video guides.__**\n*__Reasons to not use video guides:__*\n- *Most uploaders do not edit their guides after uploading, even if there are mistakes*\n- *When methods become outdated, the information is not updated*\n- *Difficult to give assistance with*\n- *Most videos also refer to a pre-packaged download, which are often outdated and poorly organised*\n*__What to use instead__*\n*Use our own commands to get the right guides!*\n*- \`.wii start\`*\n*- \`.3ds start\`*\n*- \`.wiiu start\`*\n`); }

    // wii block
    if(cmd === `${prefix}wii`) {
        switch(args0) {
            case 'help': // help command
                return sendMsg(`__**Wii Help Commands**__\n*\`.wii start\` - Basic Guide for Softmodding the Wii*\n*\`.wii hbc\` - Homebrew Channel and BootMii Installation*\n*\`.wii nand\` -  Creating a NAND Backup*\n*\`.wii prii\` - Installing Priiloader*\n*\`.wii minicios\` - Installing cIOS on a **Wii MINI***\n*\`.wii cios\` - Installing cIOS on a **NORMAL Wii***\n*\`.wii ulgx\` - Installing USB Loader GX*\n*\`.wii wbm\` - Properly moves games to a USB Flash drive for loading*\n*\`.wii rc24\` - Installing RiiConnect24*\n*\`.wii sc\` - Generates a file for support*\n*\`.wii wiimmfi\` - Installing Wiimmfi*\n*\`.wii theme\` - Installing installing themes*\n*\`.wii itw\` - Convert iso to wbfs*\n`);
            case 'start': // entry point for modding
                sendMsg(`https://wii.guide/get-started`);
                return sendMsg(`For a normal wii, we recommend using LetterBomb, for a wii mini checkout BlueBomb, as its the only exploit to work on it at this point`);
            case 'hbc': // hbc setup
                return sendMsg(`https://wii.guide/hbc`);
            case 'nand': // creating a nand backup
                return sendMsg(`https://wii.guide/bootmii`);
            case 'prii': // installing priiloader
                return sendMsg(`https://wii.guide/priiloader`);
            case 'minicios': // installing cios on a wii mini
                return sendMsg(`https://wii.guide/cios-mini`);
            case 'cios': // installing cios on a wii
                return sendMsg(`https://wii.guide/cios`);
            case 'ulgx': // installing usbloadergx
                return sendMsg(`https://wii.guide/usbloadergx`);
            case 'wbm': // using wii backup manager
                return sendMsg(`https://wii.guide/wiibackupmanager`);
            case 'rc24': // setting up rc24
                return sendMsg(`https://wii.guide/riiconnect24`);
            case 'sc': // running syscheck
                return sendMsg(`https://wii.guide/syscheck`);
            case 'wiimmfi': // setting up wiimmfi
                return sendMsg(`https://wii.guide/wiimmfi`);
            case 'theme': // installing themes
                return sendMsg(`https://wii.guide/themes`);
            case 'itw': // iso to wbfs tool
                return sendMsg("http://isotowbfs.com");
        }
    }

    // 3DS Block
    if(cmd === `${prefix}3ds`) {
        switch(args0) {
            case 'help': // help command
                return sendMsg(`__**3DS Family Help Commands**__\n*\`.3ds start\` - Gives the 2 basic guides*\n*\`.3ds b9s\` - Guide to installing boot9strap with Un-safe Mode*\n*\`.3ds final\` - Finalizing Setup (good to get files you may have missed)*\n*\`.3ds pm\` - Guide to updating luma incase you accidentally updated the 3ds first*\n*\`.3ds twl\` - Gives a QR code to install TwiLight Menu++*\n*\`.3ds id0\` - Displays image explaining id0*\n*\`.3ds root\` - Displays image explaining root*\n*\`.3ds cart\` - Displays image explaining carts*\n`);
            case 'start': // entry point for modding
                return sendMsg(`For most cases, use <https://3ds.hacks.guide/seedminer> instead, only use <https://3ds.hacks.guide/get-started> if you need an older version`);
            case 'b9s': // b9s install
                return sendMsg(`https://3ds.hacks.guide/installing-boot9strap-(usm)`);
            case 'final': // final install steps
                return sendMsg(`https://3ds.hacks.guide/finalizing-setup`);
            case 'pm': // pm errors
                return sendMsg(`Manually Updating Luma3DS\nA guide for manually updating Luma3ds. This is necessary if you receive the "Failed to apply 1 Firm patch(es)" or "pm" errors.\nhttps://gist.github.com/lilyuwuu/3a7ba3dcd2476e6b5f4b6f66fa173bd6`);
            case 'twl': // twl menu install
                sendMsg(`https://camo.githubusercontent.com/7897c243e8abbe756e8638bbbe6e3216a476f154200081c3704b25f6108bb773/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3532353339373732303433333831393635392f3533353730323932313035373237313831392f54574c4d656e755f4e65775f4c61756e636865725f51525f322e312e362e706e67`);
                return sendMsg(`Scan this QR Code with FBI (\`FBI > Remote Install\`) to install Twilight Menu(run DS(i) app dumps on your 3ds`);
            case 'id0': // what id0 means
                return sendMsg(`https://media.discordapp.net/attachments/196635695958196224/677996125034250280/unknown-76.png`);
            case 'root': // what root means
                sendMsg(`https://i.imgur.com/QXHIvOz.jpg`);
                return sendMsg(`root: its the topmost directory of a SD / Flash drive, so if you plug it into your computer and open the drive, that is the 'root' of the drive`);
            case 'cart': // what carts to use
                return sendMsg(`https://i.imgur.com/nvnObqz.png`);
        }
    }

    // WiiU Block
    if(cmd === `${prefix}wiiu`) {
        switch(args0) {
            case 'help':
                return sendMsg(`No wiiU help at this time, this will be added in the future`);
        }
    }

    // mod commands

    // warn
    if(cmd === `${prefix}warn` && pingRX.test(args0)) {
        if(isTrialMod == true) {
            let reason = message.content.replace(`${prefix}warn ${args0}`, '');
            bot.channels.cache.get('798732270785527820').send(`user ${userMention} was warned by ${message.author.username} for\`${reason}\`!`);
            return sendMsg(`${args0} you have been warned for reason:\`${reason}\`! Please stop that!`);
        } else {
            return sendMsg("You do not have permission to run this command!");
        }
    }

    // kick
    if(cmd === `${prefix}kick` && pingRX.test(args0)) {
        if(isMod == true) {
            let reason = message.content.replace(`${prefix}kick ${args0}`, '');
            bot.channels.cache.get('798732270785527820').send(`user ${userMention} was kicked by ${message.author.username} for\`${reason}\`!`);
            userMention.kick();
            return sendMsg(`User kicked!`);
        } else if(isMod == true) {
            return sendMsg(`User not kicked!`);
        } else {
            return sendMsg("You do not have permission to run this command!");
        }
    }

    // ban
    if(cmd === `${prefix}ban` && pingRX.test(args0)) {
        if(isMod == true) {
            let reason = message.content.replace(`${prefix}ban ${args0}`, '');
            bot.channels.cache.get('798732270785527820').send(`user ${userMention} was banned by ${message.author.username} for\`${reason}\`!`);
            userMention.ban();
            return sendMsg(`User Banned!`);
        } else if(isMod == true) {
            return sendMsg(`User not Banned!`);
        } else {
            return sendMsg("You do not have permission to run this command!");
        }
    }

    // LMGTFY
    if(cmd === `${prefix}lmgtfy`) {
        let query = message.content.replace(`${prefix}lmgtfy`, '');
        query = encodeURIComponent(query.trim());
        return sendMsg(`https://lmgtfy.app/#gsc.tab=0&gsc.q=${query}`);
    }
    
    // status
    if(cmd === `${prefix}admin` && args0 === `status`) {
        if(message.author.id === `217076918049177601`) {
            switch(args1) {
                case 'online':
                    bot.user.setPresence({status: 'online'});
                    console.log("Set to online!");
                    break;
                case 'idle':
                    bot.user.setPresence({status: 'idle'});
                    console.log("Set to idle!");
                    break;
                case 'dnd':
                    bot.user.setPresence({status: 'dnd'});
                    console.log("Set to dnd!");
                    break;
                case 'invisible':
                    bot.user.setPresence({status: 'invisible'});
                    console.log("set to offline!");
                    break;
                default:
                    return sendMsg("No argument!");
            }
        } else if(message.author.id !== `217076918049177601`) {
            sendMsg("Error: You do not have permission to run this command");
        }
    }
});

bot.login(botconfig.token);

/* Help from
https://twitch/tv/0scie
https://twitch.tv/justgessio x2
https://twitch.tv/commandblock6417 aka devnol
*/