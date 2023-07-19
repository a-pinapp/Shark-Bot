const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('info')
    .setDescription('about me!'),
  async execute(interaction) {
    await interaction.reply('im a bot made by the one and only pineapple :D');
  },
};