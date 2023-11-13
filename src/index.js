const { Client } = require('discord.js');
const { CommandKit } = require('commandkit');
require('dotenv/config');

const client = new Client({
    intents: ['Guilds', 'GuildMembers', 'GuildMessages', 'MessageContent'],
});

new CommandKit({
    client,
    commandsPath: `${__dirname}/commands`,
    eventsPath: `${__dirname}/events`,
    bulkRegister: true,
});

client.login(process.env.TOKEN);
