const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once('ready', () => {
  console.log(`Bot connecté en tant que ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.content === '!ping') {
    message.reply('Pong !');
  }
});

require('dotenv').config();
client.login(process.env.MTQ4MzE0MzYxODM1NjE4MzE2Mw.G89n8v.IUVEc_DJC5mUlAqiQxxV1kbytD2MEqC0_ZeJyA);