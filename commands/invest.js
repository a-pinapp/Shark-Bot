const { SlashCommandBuilder } = require('discord.js');
const { getUserBalance, updateUserBalance } = require('../userData');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('invest')
    .setDescription('Invest half of your moneys'),
  async execute(interaction) {
    const userBalance = getUserBalance(interaction.user.id);
    if (userBalance <= 0) {
      await interaction.reply(`You do not have any moneys to invest.`);
    }
    const investedAmount = Math.floor(userBalance / 2);
    const randomNumber = Math.random();
    let investmentResult;
    if (randomNumber < 0.5) {
      investmentResult = investedAmount * 2;
      updateUserBalance(interaction.user.id, investmentResult);
    } else {
      investmentResult = Math.floor(investedAmount / 2);
      updateUserBalance(interaction.user.id, -investmentResult);
    }
    await interaction.reply(`Your investment returned ${investmentResult} moneys!`);
  },
};