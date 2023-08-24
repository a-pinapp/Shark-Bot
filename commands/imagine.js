const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('imagine')
    .setDescription('Generate an image using AI')

    .addStringOption(option => option
        .setName('prompt')
        .setDescription('The prompt for generating your image')
        .setRequired(true)),

    async execute (interaction) {
        await interaction.reply('Discontinued command until I figure out how to do it lol\nFor now have the code for this command lol\n```javascript\nconst { SlashCommandBuilder } = require(\'discord.js\');\n\nmodule.exports = {\n  data: new SlashCommandBuilder()\n  .setName(\'imagine\')\n  .setDescription(\'Generate an image using AI\')\n\n  .addStringOption(option => option\n    .setName(\'prompt\')\n    .setDescription(\'The prompt for generating your image\')\n    .setRequired(true)),\n\n  async execute (interaction) {\n    await interaction.reply(\'Discontinued command until I figure out how to do it\');\n  }\n}\n```');
    }
}