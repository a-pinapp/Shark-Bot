const { SlashCommandBuilder } = require('discord.js');
const { updateUserBalance } = require('../userData');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('fish')
    .setDescription('Catch a fish'),
  async execute(interaction) {
    const fishList = [
      { name: 'Salmon', value: 10},
      { name: 'Tuna', value: 5},
      { name: 'Bass', value: 3}
    ];
    const randomIndex = Math.floor(Math.random() * fishList.length);
    const caughtFish = fishList[randomIndex];
    updateUserBalance(interaction.user.id, caughtFish.value);
    await interaction.reply(`You caught a ${caughtFish.name} worth ${caughtFish.value} moneys!`);
  },
};