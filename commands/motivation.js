const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  cooldown: 0,
  data: new SlashCommandBuilder()
    .setName('motivation')
    .setDescription('get motivation for your swimming events from me!'),
  async execute(interaction) {
    await interaction.reply('Good luck! All those hours of work you put in, led up to this. Make sure you go all out on this swim, and make sure you have that technique perfected. I\'m sure you will make your cuts. Have an amazing swim!');
  },
};