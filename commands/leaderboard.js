const { SlashCommandBuilder } = require('discord.js');
const { getAllUserBalances } = require('../userData');
module.exports = {
  cooldown: 0,
  data: new SlashCommandBuilder()
    .setName('leaderboard')
    .setDescription('Display the leaderboard'),
  async execute(interaction) {
    const userBalances = getAllUserBalances();
    const sortedBalances = userBalances.sort((a, b) => b.balance - a.balance);
    let leaderboard = 'Leaderboard:\n';
    sortedBalances.forEach((user, index) => {
      leaderboard += `${index + 1}. ${user.username} - ${user.balance} moneys\n`;
    });
    await interaction.reply(leaderboard);
  },
};