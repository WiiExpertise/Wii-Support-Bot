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


# run client on discord server
client.run('your-token-here')




