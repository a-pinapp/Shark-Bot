const { SlashCommandBuilder } = require('discord.js');
const { updateUserBalance } = require('../userData');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('dive')
    .setDescription('Go dumpster diving for moneys'),
  async execute(interaction) {
    const randomNumber = Math.random();
    if (randomNumber < 0.1) {
      const largeSum = 100;
      updateUserBalance(interaction.user.id, largeSum);
      await interaction.reply(`Congratulations! You found 100 moneys!`);
    } else {
      await interaction.reply(`You did not find any moneys while dumpster diving.`);
    }
  },
};