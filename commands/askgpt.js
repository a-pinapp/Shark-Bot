const { SlashCommandBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('askgpt')
        .setDescription('Ask ChatGPT a question!')
        .addStringOption(option =>
            option.setName('prompt')
                .setDescription('The prompt to send to ChatGPT!')
                .setRequired(true)),

    async execute(interaction) {
        await interaction.reply('no');
    }
};