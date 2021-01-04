# import discord package
import discord
from discord.ext import commands

# client and prefix
client = commands.Bot(command_prefix='/')

# sends message to console that the client is online
print('I am online')

# sets activity
@client.event
async def on_ready():
 await client.change_presence(activity=discord.Activity(type=discord.ActivityType.listening, name="/help"))

# TODO: MESSAGE USER BACK WHEN DMING

#Commands
@client.event
async def on_message(message):
    if message.content == '/help':
       await message.channel.send('**Commands List**\n\n**__All Wii__**\n**/guide** - Displays the currently recommended guide\n**/priiloader** - Installing Priiloader\n**/wiimmfi** - Installing Wiimmfi\n**/forwarders** - Installing forwarders for games\n**/syscheck** - Performing a SysCheck\n**/more** - Displays more tutorials\n**/pins** - Informs the user about the useful info contained in the pinned messages\n**/sega** - Installing Nintendont\n**/root** - Shows the user where the root of a storage device is\n**/mbr** - Displays a way to convert a drive to the MBR partition table\n**/wbm** - Shows a guide for organising your digital Wii game library\n**/usblgx** - Installing USBLoaderGX\n**/ytdeath** - Displays a meme and some reasons you should not use YouTube guides\n**/wl24** - Installing WiiLink24\n\n**__Normal Wii__**\n**/bootmii** - Installing BootMii\n**/cios** - Installing cIOS\n**/rc24** - Installing RiiConnect24\n**/ios** - Displays a link with downloads to various useful Wii IOS files\n**/sysmenu** - Displays a link with downloads to 4.3 Wii System Menu files from all regions\n**/troubleshoot** - Displays 6 possible reasons your loader is not working right away\n\n**__Wii mini__**\n**/ciosmini** - Installing cIOS\n**/sysmenumini** - Displays a link with downloads to the Wii mini System Menu files from all regions\n**/iosmini** - Displays a link with downloads to various useful Wii mini IOS files\n**/troubleshootmini** - Displays 5 possible reasons your loader is not working right away\n\n**__Extras__**\n**/credits** - Displays credits for the bot\n**/ping** - Displays the ping of the bot\n**/vwii** - Displays the currently recommended vWii guide')

@client.command(name='guide')
async def guide(context):
    await context.message.channel.send('https://wii.guide/\nUse Bluebomb for the Wii mini and Letterbomb for the regular Wii')

@client.command(name='bootmii')
async def bootmii(context):
    await context.message.channel.send('https://wii.guide/hbc')

@client.command(name='priiloader')
async def priiloader(context):
    await context.message.channel.send('https://wii.guide/priiloader')

@client.command(name='cios')
async def cios(context):
    await context.message.channel.send('https://wii.guide/cios')

@client.command(name='ciosmini')
async def ciosmini(context):
    await context.message.channel.send('https://wii.guide/cios-mini')

@client.command(name='usblgx')
async def usblgx(context):
    await context.message.channel.send('https://wii.guide/usbloadergx')

@client.command(name='rc24')
async def rc24(context):
    await context.message.channel.send('https://wii.guide/riiconnect24')

@client.command(name='wl24')
async def wl24(context):
    await context.message.channel.send('https://wii.guide/wiilink24')

@client.command(name='wiimmfi')
async def wiimmfi(context):
    await context.message.channel.send('https://wii.guide/wiimmfi')

@client.command(name='syscheck')
async def syscheck(context):
    await context.message.channel.send('https://wii.guide/syscheck')

@client.command(name='more')
async def more(context):
    await context.message.channel.send('https://wii.guide/site-navigation https://bloodythorn.github.io/wiihacks-wiki/')

@client.command(name='pins')
async def pins(context):
    await context.message.channel.send('Please check the pinned messages for more guides')

@client.command(name='sega')
async def sega(context):
    await context.message.channel.send('https://bloodythorn.github.io/wiihacks-wiki/tutorials/nintendont.html')

@client.command(name='credits')
async def credits(context):
    await context.message.channel.send('Bot creator:\nakisblack#2545\n\nKudos:\nshrek#7532 aka DerpMaster2\nWiiMaster#7071 aka WiiExpertise\nMethodOrMadness#9199 aka Method\nDevnol#9366 aka CommandBlock6417\noscie#1093 aka nothing\nand many others')

@client.command(name='vwii')
async def vwii(context):
    await context.message.channel.send('https://wiiu.hacks.guide/#/vwii-modding')

@client.command(name='forwarders')
async def forwarders(context):
    await context.message.channel.send('https://wii.guide/wiigsc')

@client.command(name='root')
async def root(context):
    await context.message.channel.send('https://imgur.com/a/HDCWvt0')

# TODO: PING COMMAND    

@client.command(name='ios')
async def ios(context):
    await context.message.channel.send('https://e.pcloud.link/publink/show?code=kZkXl7ZPmXnkI7kgm4FuArYqMAdAjE3V3wX')

@client.command(name='sysmenu')
async def sysmenu(context):
    await context.message.channel.send('https://e.pcloud.link/publink/show?code=kZXXl7ZHiyDdjOKmJ0dVWTJNr6JuzYILkTy')

@client.command(name='iosmini')
async def iosmini(context):
    await context.message.channel.send('https://e.pcloud.link/publink/show?code=kZ5zl7ZTmcoN1NyqqBkhVft5lC9kmDFkRiy')

@client.command(name='sysmenumini')
async def sysmenumini(context):
    await context.message.channel.send('https://e.pcloud.link/publink/show?code=kZVzl7ZkUOu6Nzqu24zTH00cUCPq5vncQFk')

@client.command(name='ytdeath')
async def ytdeath(context):
    await context.message.channel.send('https://imgur.com/a/rw6amzX\n**__Why you should NOT use video guides.__**\n\n**Reasons to not use video guides:**\n- Most uploaders do not edit their guides after uploading, even if there are mistakes\n- When methods become outdated, the information is not updated\n- Difficult to give assistance with\n- Most videos also refer to a pre-packaged download, which are often outdated and poorly organised')

@client.command(name='troubleshoot')
async def troubleshoot(context):
    await context.message.channel.send('1: Wrong USB port. The only USB port that can run game backups is the one on the edge of the Wii, unless you are using d2x beta53-alt cIOS, which is not recommended as it is not as compatible.\n\n2: cIOS is not set up correctly (follow https://wii.guide/cios). We can only confirm it is done right with a syscheck (follow https://wii.guide/syscheck). Keep in mind that some games that use accessories will require a different IOS to run.\n\n3: Image is bad/corrupted. Testable in Dolphin Emulator. Make sure it is wbfs or iso (not nkit) if you are trying to play a Wii game.\n\n4: Use the latest version of your loader, use default settings and name the games as such for Wii games> USB:/wbfs/GameName [GameID]/GameID.wbfs\n\n5: USB is not compatible. That is most likely to happen with flash drives. HDDs are always the best way to store games on the Wii.\n\n6: Do not use a forwarder. Launch the app directly from the Homebrew Channel.')

@client.command(name='mbr')
async def mbr(context):
    await context.message.channel.send('To change a drive to MBR on Windows, open disk management. If you are on Windows 8 or higher, do Windows key + X and click on disk management.\n\nOnce you are there, find the drive you need to convert to MBR and right click on the area where it says "Disk" and then the number of the disc. If it is not already MBR, you will see an available option to convert to MBR disk. Use that option.')

@client.command(name='troubleshootmini')
async def troubleshootmini(context):
    await context.message.channel.send('1: cIOS is not set up correctly (follow https://wii.guide/cios-mini). We can only confirm it is done right with a syscheck (follow https://wii.guide/syscheck).\n\n2: Image is bad/corrupted. Testable in Dolphin Emulator. Make sure it iss wbfs or iso (not nkit) if you are trying to play a Wii game.\n\n3: Use the latest version of your loader, use default settings and name the games as such for Wii games> USB:/wbfs/GameName [GameID]/GameID.wbfs\n\n4: USB is not compatible. That is most likely to happen with flash drives. HDDs are always the best way to store games on the Wii.\n\n5: Do not use a forwarder. Launch the app directly from the Homebrew Channel.')

@client.command(name='wbm')
async def wbm(context):
    await context.message.channel.send('The best way to fix Wii Backup Manager not working is by deleting Wii Backup Manager and never looking back.\n\nThere is a far quicker and more reliable method of adding games - and that is manually, by making folders and dropping your games in their correct folders.\n\nSome people say it is hard, but it is nowhere near as hard as they make it out to be. Took me about 25 minutes to add roughly 30 games, Wii and GameCube. Though the amount of time it takes is largely dependent on what USB interface you are using (1.0, 1.1, 2.0, 3.0, 3.1) what kind of device you sre using (hard drive, SD card, flash drive, SSD), and how large the files are.\n\nThe first step is making a "wbfs" folder on the root of your USB device if there is not already one. If there already is one, then you are already one step ahead.\n\nInside the "wbfs" folder will be game folders, once you have made them. For example, inside that "wbfs" folder, Wii Sports would look like this:\n\n/USB drive/wbfs/Wii Sports [RSPE01]/RSPE01.wbfs\n\nIf you are using .iso files instead of .wbfs files, make sure to change them using this tool here. It is a far superior way of storing games on external storage.\n\nhttps://isotowbfs.com/\n\nThat 6 digit code after the name of the game is called the game ID. You can find them here by searching the game`s name and copying that code.\n\nhttps://gametdb.com/\n\nAfter you have the game folder, which is inside the "wbfs" folder, plop your file inside. It must be named like the example above.\n\nAnd congratulations, you just added a Wii game to your USB device manually. You will get faster the more you do it.')

# run client and token
client.run('your-token-here')