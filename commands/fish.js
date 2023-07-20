const { SlashCommandBuilder } = require('discord.js');
const { updateUserBalance } = require('../userData');
module.exports = {
  cooldown: 10,
  data: new SlashCommandBuilder()
    .setName('fish')
    .setDescription('Catch a fish'),
  async execute(interaction) {
    const fishData = [
      { name: 'Salmon', value: 5, probability: 0.1 },
      { name: 'Trout', value: 3, probability: 0.15 },
      { name: 'Catfish', value: 4, probability: 0.12 },
      { name: 'Bass', value: 6, probability: 0.09 },
      { name: 'Sardine', value: 2, probability: 0.15 },
      { name: 'Tuna', value: 7, probability: 0.07 },
      { name: 'Snapper', value: 4, probability: 0.12 },
      { name: 'Mackarel', value: 3, probability: 0.15 },
      { name: 'Swordfish', value: 10, probability: 0.03 },
      { name: 'Marlin', value: 12, probability: 0.02}
    ];
    const probabilitySum = fishData.reduce((sum, fish) => sum + fish.probability, 0);
    const randomNum = Math.random() * probabilitySum;
    let cumulativeProbability = 0;
    let caughtFish;
    for (const fish of fishData) {
      cumulativeProbability += fish.probability;
      if (randomNum <= cumulativeProbability) {
        caughtFish = fish;
        break;
      }
    }
    updateUserBalance(interaction.user.id, caughtFish.value);
    const message = caughtFish
      ? `You caught a ${caughtFish.name} worth ${caughtFish.value}!`
      : `You didn't catch anything this time.`;
    await interaction.reply(message);
  },
};