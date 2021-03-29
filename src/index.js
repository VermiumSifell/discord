const Discord = require('discord.js');

const client = new Discord.Client();
const {
  token, status, activity, prefix,
} = require('./config/discord.json');

client.on('ready', () => {
  client.user.setStatus(status);
  const { message, url, type } = activity;
  client.user.setActivity(message, {
    url,
    type,
  });
  console.log('Launching on prefix', prefix);
});

client.login(token);
