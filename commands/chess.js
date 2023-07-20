const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  cooldown: 0,
  data: new SlashCommandBuilder()
    .setName('chess')
    .setDescription('play chess with me!'),
  async execute(interaction) {
    await interaction.reply('So you want to play chess with me? Alright! To start our game, type "!Startchessgame".');
  },
};