# import discord.py package
import discord

# client (bot)
client = discord.Client()

# reports some stuff on the console
print('I am online')

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

@client.command(name='cmds')
async def cmds(context):
    await context.message.channel.send('**Commands List**\n\n**__All Wii__**\n**/guide** - Displays the currently recommended guide\n**/priiloader** - Installing Priiloader\n**/wiimmfi** - Installing Wiimmfi\n**/forwarders** - Installing forwarders for games\n**/syscheck** - Performing a SysCheck\n**/more** - Displays more tutorials\n**/pins** - Informs the user about the useful info contained in the pinned messages\n**/sega** - Installing Nintendont\n**/root** - Shows the user where the root of a storage device is\n**/mbr** - Displays a way to convert a drive to the MBR partition table\n**/wbm** - Shows a guide for organising your digital Wii game library\n**/usblgx** - Installing USBLoaderGX\n**/ytdeath** - Displays a meme and some reasons you should not use YouTube guides\n**/wl24** - Installing WiiLink24\n\n**__Normal Wii__**\n**/bootmii** - Installing BootMii\n**/cios** - Installing cIOS\n**/rc24** - Installing RiiConnect24\n**/ios** - Displays a link with downloads to various useful Wii IOS files\n**/sysmenu** - Displays a link with downloads to 4.3 Wii System Menu files from all regions\n**/troubleshoot** - Displays 6 possible reasons your loader is not working right away\n\n**__Wii mini__**\n**/ciosmini** - Installing cIOS\n**/sysmenumini** - Displays a link with downloads to the Wii mini System Menu files from all regions\n**/iosmini** - Displays a link with downloads to various useful Wii mini IOS files\n**/troubleshootmini** - Displays 5 possible reasons your loader is not working right away\n\n**__Extras__**\n**/credits** - Displays credits for the bot\n**/ping** - Displays the ping of the bot\n**/vwii** - Displays the currently recommended vWii guide')

# run client on discord server
client.run('your-token-here')




