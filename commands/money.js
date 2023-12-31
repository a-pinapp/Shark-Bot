const { SlashCommandBuilder } = require('discord.js');
const { updateUserBalance } = require('../userData');

module.exports = {
  cooldown: 0,
  data: new SlashCommandBuilder()
    .setName('money')
    .setDescription('I can give you a money if I have it'),

  async execute(interaction) {
    if (!interaction.guild) {
      return interaction.reply(`Sucks to suck ${interaction.user.username} No DM commands for u LMAO.`);
    }

    const randomNumber = Math.random();

    if (randomNumber < 0.5) {
      updateUserBalance(interaction.user.id, 1);
      await interaction.reply(`Sure, have 1 money!`);
      
    } else {
      await interaction.reply(`I'm sorry, I don't have any moneys this time.`);
    }
  },
};