const { SlashCommandBuilder } = require('discord.js');
const { updateUserBalance } = require('../userData');
module.exports = {
  cooldown: 30,
  data: new SlashCommandBuilder()
    .setName('mine')
    .setDescription('Mine for resources'),
  async execute(interaction) {
    if (!interaction.guild) {
      return interaction.reply(`Sucks to suck ${interaction.user.username} No DM commands for u LMAO.`);
    }
    const mineData = [
      { name: 'Stone', value: 2, probability: 0.3 },
      { name: 'Iron Ore', value: 8, probability: 0.25 },
      { name: 'Copper Ore', value: 6, probability: 0.2 },
      { name: 'Gold Ore', value: 15, probability: 0.15 },
      { name: 'Silver Ore', value: 12, probability: 0.07 },
      { name: 'Platinum Ore', value: 20, probability: 0.02 },
      { name: 'Diamond Ore', value: 50, probability: 0.01 }
    ];
    const probabilitySum = mineData.reduce((sum, mine) => sum + mine.probability, 0);
    const randomNum = Math.random() * probabilitySum;
    let cumulativeProbability = 0;
    let caughtMine;
    for (const mine of mineData) {
      cumulativeProbability += mine.probability;
      if (randomNum <= cumulativeProbability) {
        caughtMine = mine;
        break;
      }
    }
    updateUserBalance(interaction.user.id, caughtMine.value)
    const message = caughtMine
      ? `You found ${caughtMine.name} worth ${caughtMine.value} moneys!`
      : `You didn't find anything this time.`;
    await interaction.reply(message);
  },
};