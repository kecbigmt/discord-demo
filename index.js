const Discord = require('discord.js');
const client = new Discord.Client();
channelId = process.env.DISCORD_CHANNEL_ID;
botToken = process.env.DISCORD_BOT_TOKEN;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.channels.get(channelId).send('test');
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login(botToken);
