const { SlashCommandBuilder } = require('discord.js');
const { updateUserBalance } = require('../userData');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('mine')
    .setDescription('Mine for resources'),
  async execute(interaction) {
    const oreList = [
      { name: 'Iron Ore', value: 5},
      { name: 'Gold Ore', value: 10},
      { name: 'Diamond', value: 50}
    ];
    const randomIndex = Math.floor(Math.random() * oreList.length);
    const minedOre = oreList[randomIndex];
    updateUserBalance(interaction.user.id, minedOre.value);
    await interaction.reply(`You mined ${minedOre.name} worth ${minedOre.value} moneys!`);
  },
};