const { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
    .setName('imagine')
    .setDescription('Generate an image using AI')
    .addStringOption(option => option
        .setName('prompt')
        .setDescription('The prompt for generating your image')
        .setRequired(true)),
    async execute (interaction) {
        await interaction.reply('Discontinued command until I figure out how to do it lol');
    }
}