const { Client, IntentsBitField } = require('discord.js');
const { CommandKit } = require('commandkit');
require('dotenv/config');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

new CommandKit({
  client,
  commandsPath: `${__dirname}/commands`,
  eventsPath: `${__dirname}/events`,
});

client.login(process.env.TOKEN);
