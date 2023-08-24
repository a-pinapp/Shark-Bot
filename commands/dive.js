const { SlashCommandBuilder } = require('discord.js');
const { updateUserBalance } = require('../userData');

module.exports = {
  cooldown: 60,
  data: new SlashCommandBuilder()
    .setName('dive')
    .setDescription('Go dumpster diving for moneys'),

  async execute(interaction) {
    if (!interaction.guild) {
      return interaction.reply(`Sucks to suck ${interaction.user.username} No DM commands for u LMAO.`);
    }

    const randomNumber = Math.random();

    if (randomNumber < 0.1) {
      const largeSum = 200;
      updateUserBalance(interaction.user.id, largeSum);
      await interaction.reply(`Congratulations! You found 200 moneys!`);
      
    } else {
      await interaction.reply(`You did not find any moneys while dumpster diving.`);
    }
  },
};