/** @type {import('commandkit').CommandData} */
const data = {
    name: 'ping',
    description: 'Pong!',
};

/** @param {import('commandkit').SlashCommandProps} param0 */
function run({ interaction, client }) {
    interaction.reply(`:ping_pong: Pong! ${client.ws.ping}ms`);
}

/** @type {import('commandkit').CommandOptions} */
const options = {
    devOnly: true,
};

module.exports = { data, run, options };
