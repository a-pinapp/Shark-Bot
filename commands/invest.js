const { SlashCommandBuilder } = require('discord.js');
const { getUserBalance, setUserBalance } = require('../userData');
module.exports = {
  cooldown: 600,
  data: new SlashCommandBuilder()
    .setName('invest')
    .setDescription('The user invests a percentage of their money.')
    .addIntegerOption(option =>
      option.setName('percentage')
        .setDescription('The percentage of your balance to invest')
        .setRequired(true)
        .setMinValue(0)
        .setMaxValue(100)),
  async execute(interaction) {
    if (!interaction.guild) {
      return interaction.reply(`Sucks to suck ${interaction.user.username} xD No DM commands for u LMAO`);
    }
    const userId = interaction.user.id;
    const percentage = interaction.options.getInteger('percentage');
    const userBalance = getUserBalance(userId);
    if (userBalance <= 0) {
      await interaction.reply(`You do not have any moneys to invest.`);
    }
    const investmentAmount = Math.floor((percentage / 100) * userBalance);
    const newBalance = userBalance - investmentAmount;
    const randomReturns = [
      0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ];
    const randomReturn = randomReturns[Math.floor(Math.random() * randomReturns.length)];
    const returns = Math.floor(investmentAmount * randomReturn);
    const totalReturns = newBalance + returns;
    setUserBalance(userId, totalReturns);
    await interaction.reply(`You invested $${investmentAmount} moneys (${percentage}% of your balance).\nYour investment returned $${returns} moneys (${randomReturn}x return).\nYour total balance is now $${totalReturns} moneys.`);
  },
};