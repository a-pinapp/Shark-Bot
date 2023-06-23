const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('times')
    .setDescription('check time standards'),
  async execute(interaction) {
    await interaction.reply('Find all time standards here: https://www.socalswim.org/time-standards/ Good luck on making your cuts! :D');
  },
};