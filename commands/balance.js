const { SlashCommandBuilder } = require('discord.js');
const { getUserBalance } = require('../userData');
module.exports = {
  cooldown: 0,
  data: new SlashCommandBuilder()
    .setName('balance')
    .setDescription('Check how much moneys you have'),
  async execute(interaction) {
    const userBalance = getUserBalance(interaction.user.id);
    await interaction.reply(`You have ${userBalance} moneys.`);
  },
};