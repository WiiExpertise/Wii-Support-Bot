# import discord.py package
import discord

# client (bot)
client = discord.Client()

# reports some stuff on the console
print('I am online')

# Help 
@client.event
async def on_message(message):
    if message.content == '/help':
       await message.channel.send('**Commands List**\n\n**__All Wii__**\n**/guide** - Displays the currently recommended guide\n**/priiloader** - Installing Priiloader\n**/wiimmfi** - Installing Wiimmfi\n**/forwarders** - Installing forwarders for games\n**/syscheck** - Performing a SysCheck\n**/more** - Displays more tutorials\n**/pins** - Informs the user about the useful info contained in the pinned messages\n**/sega** - Installing Nintendont\n**/root** - Shows the user where the root of a storage device is\n**/mbr** - Displays a way to convert a drive to the MBR partition table\n**/wbm** - Shows a guide for organising your digital Wii game library\n**/usblgx** - Installing USBLoaderGX\n**/ytdeath** - Displays a meme and some reasons you should not use YouTube guides\n**/wl24** - Installing WiiLink24\n\n**__Normal Wii__**\n**/bootmii** - Installing BootMii\n**/cios** - Installing cIOS\n**/rc24** - Installing RiiConnect24\n**/ios** - Displays a link with downloads to various useful Wii IOS files\n**/sysmenu** - Displays a link with downloads to 4.3 Wii System Menu files from all regions\n**/troubleshoot** - Displays 6 possible reasons your loader is not working right away\n\n**__Wii mini__**\n**/ciosmini** - Installing cIOS\n**/sysmenumini** - Displays a link with downloads to the Wii mini System Menu files from all regions\n**/iosmini** - Displays a link with downloads to various useful Wii mini IOS files\n**/troubleshootmini** - Displays 5 possible reasons your loader is not working right away\n\n**__Extras__**\n**/credits** - Displays credits for the bot\n**/ping** - Displays the ping of the bot\n**/vwii** - Displays the currently recommended vWii guide')

# Guide
@client.event
async def on_message(message):
    if message.content == '/guide':
       await message.channel.send('https://wii.guide/\nUse Bluebomb for the Wii mini and Letterbomb for the regular Wii')

# BootMii
@client.event
async def on_message(message):
    if message.content == '/bootmii':
       await message.channel.send('https://wii.guide/hbc')

# Priiloader
@client.event
async def on_message(message):
    if message.content == '/priiloader':
       await message.channel.send('https://wii.guide/priiloader')

# cIOS 
@client.event
async def on_message(message):
    if message.content == '/cios':
       await message.channel.send('https://wii.guide/cios')

# cIOS mini
@client.event
async def on_message(message):
    if message.content == '/priiloader':
       await message.channel.send('https://wii.guide/cios-mini')

# USBLoaderGX
@client.event
async def on_message(message):
    if message.content == '/usblgx':
       await message.channel.send('https://wii.guide/usbloadergx')

# RiiConnect24
@client.event
async def on_message(message):
    if message.content == '/rc24':
       await message.channel.send('https://wii.guide/riiconnect24')

# WiiLink24
@client.event
async def on_message(message):
    if message.content == '/wl24':
       await message.channel.send('https://wii.guide/wiilink24')

# Wiimmfi
@client.event
async def on_message(message):
    if message.content == '/wiimmfi':
       await message.channel.send('https://wii.guide/wiimmfi')

# SysCheck
@client.event
async def on_message(message):
    if message.content == '/syscheck':
       await message.channel.send('https://wii.guide/syscheck')

# More
@client.event
async def on_message(message):
    if message.content == '/more':
       await message.channel.send('https://wii.guide/site-navigation https://bloodythorn.github.io/wiihacks-wiki/')

# Pins
@client.event
async def on_message(message):
    if message.content == '/pins':
       await message.channel.send('Please check the pinned messages for more guides')

# Nintendont
@client.event
async def on_message(message):
    if message.content == '/sega':
       await message.channel.send('https://bloodythorn.github.io/wiihacks-wiki/tutorials/nintendont.html')

# Credits
@client.event
async def on_message(message):
    if message.content == '/credits':
       await message.channel.send('Bot creator:\nakisblack#2545\n\nKudos:\nshrek#7532 aka DerpMaster2\nWiiMaster#7071 aka WiiExpertise\nMethodOrMadness#9199 aka Method\nDevnol#9366 aka CommandBlock6417\noscie#1093 aka nothing\nand many others')

# vWii
@client.event
async def on_message(message):
    if message.content == '/vwii':
       await message.channel.send('https://wiiu.hacks.guide/#/vwii-modding')

# Forwarders
@client.event
async def on_message(message):
    if message.content == '/forwarders':
       await message.channel.send('https://wii.guide/wiigsc')

# Root
@client.event
async def on_message(message):
    if message.content == '/root':
       await message.channel.send('https://imgur.com/a/HDCWvt0')

# TO DO PING COMMAND

# IOS
@client.event
async def on_message(message):
    if message.content == '/ios':
       await message.channel.send('https://e.pcloud.link/publink/show?code=kZkXl7ZPmXnkI7kgm4FuArYqMAdAjE3V3wX')

# System Menu
@client.event
async def on_message(message):
    if message.content == '/sysmenu':
       await message.channel.send('https://e.pcloud.link/publink/show?code=kZXXl7ZHiyDdjOKmJ0dVWTJNr6JuzYILkTy')

# IOS mini
@client.event
async def on_message(message):
    if message.content == '/iosmini':
       await message.channel.send('https://e.pcloud.link/publink/show?code=kZ5zl7ZTmcoN1NyqqBkhVft5lC9kmDFkRiy')

# System Menu mini
@client.event
async def on_message(message):
    if message.content == '/sysmenumini':
       await message.channel.send('https://e.pcloud.link/publink/show?code=kZVzl7ZkUOu6Nzqu24zTH00cUCPq5vncQFk')

# Youtube Tutorials
@client.event
async def on_message(message):
    if message.content == '/ytdeath':
       await message.channel.send('https://imgur.com/a/rw6amzX\n**__Why you should NOT use video guides.__**\n\n**Reasons to not use video guides:**\n- Most uploaders do not edit their guides after uploading, even if there are mistakes\n- When methods become outdated, the information is not updated\n- Difficult to give assistance with\n- Most videos also refer to a pre-packaged download, which are often outdated and poorly organised')

# Loader Troubleshooting
@client.event
async def on_message(message):
    if message.content == '/troubleshoot':
       await message.channel.send('1: Wrong USB port. The only USB port that can run game backups is the one on the edge of the Wii, unless you are using d2x beta53-alt cIOS, which is not recommended as it is not as compatible.\n\n2: cIOS is not set up correctly (follow https://wii.guide/cios). We can only confirm it is done right with a syscheck (follow https://wii.guide/syscheck). Keep in mind that some games that use accessories will require a different IOS to run.\n\n3: Image is bad/corrupted. Testable in Dolphin Emulator. Make sure it is wbfs or iso (not nkit) if you are trying to play a Wii game.\n\n4: Use the latest version of your loader, use default settings and name the games as such for Wii games> USB:/wbfs/GameName [GameID]/GameID.wbfs\n\n5: USB is not compatible. That is most likely to happen with flash drives. HDDs are always the best way to store games on the Wii.\n\n6: Do not use a forwarder. Launch the app directly from the Homebrew Channel.')

# MBR
@client.event
async def on_message(message):
    if message.content == '/mbr':
       await message.channel.send('To change a drive to MBR on Windows, open disk management. If you are on Windows 8 or higher, do Windows key + X and click on disk management.\n\nOnce you are there, find the drive you need to convert to MBR and right click on the area where it says "Disk" and then the number of the disc. If it is not already MBR, you will see an available option to convert to MBR disk. Use that option.')

# Loader Troubleshooting mini
@client.event
async def on_message(message):
    if message.content == '/troubleshootmini':
       await message.channel.send('1: cIOS is not set up correctly (follow https://wii.guide/cios-mini). We can only confirm it is done right with a syscheck (follow https://wii.guide/syscheck).\n\n2: Image is bad/corrupted. Testable in Dolphin Emulator. Make sure it iss wbfs or iso (not nkit) if you are trying to play a Wii game.\n\n3: Use the latest version of your loader, use default settings and name the games as such for Wii games> USB:/wbfs/GameName [GameID]/GameID.wbfs\n\n4: USB is not compatible. That is most likely to happen with flash drives. HDDs are always the best way to store games on the Wii.\n\n5: Do not use a forwarder. Launch the app directly from the Homebrew Channel.')

# Organising Games
@client.event
async def on_message(message):
    if message.content == '/wbm':
       await message.channel.send('The best way to fix Wii Backup Manager not working is by deleting Wii Backup Manager and never looking back.\n\nThere is a far quicker and more reliable method of adding games - and that is manually, by making folders and dropping your games in their correct folders.\n\nSome people say it is hard, but it is nowhere near as hard as they make it out to be. Took me about 25 minutes to add roughly 30 games, Wii and GameCube. Though the amount of time it takes is largely dependent on what USB interface you are using (1.0, 1.1, 2.0, 3.0, 3.1) what kind of device you sre using (hard drive, SD card, flash drive, SSD), and how large the files are.\n\nThe first step is making a "wbfs" folder on the root of your USB device if there is not already one. If there already is one, then you are already one step ahead.\n\nInside the "wbfs" folder will be game folders, once you have made them. For example, inside that "wbfs" folder, Wii Sports would look like this:\n\n/USB drive/wbfs/Wii Sports [RSPE01]/RSPE01.wbfs\n\nIf you are using .iso files instead of .wbfs files, make sure to change them using this tool here. It is a far superior way of storing games on external storage.\n\nhttps://isotowbfs.com/\n\nThat 6 digit code after the name of the game is called the game ID. You can find them here by searching the game`s name and copying that code.\n\nhttps://gametdb.com/\n\nAfter you have the game folder, which is inside the "wbfs" folder, plop your file inside. It must be named like the example above.\n\nAnd congratulations, you just added a Wii game to your USB device manually. You will get faster the more you do it.')

# run client on discord server
client.run('your-token-here')
