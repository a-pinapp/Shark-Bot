const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  cooldown: 0,
  data: new SlashCommandBuilder()
    .setName('flip')
    .setDescription('Flip a coin!'),

  async execute(interaction) {
    const result = Math.floor(Math.random() * 2);
    
    if (result) {
        await interaction.reply(`${interaction.user.username} flipped a coin: the result is **heads**!`);
    } else {
        await interaction.reply(`${interaction.user.username} flipped a coin: the result is **tails**!`);
    }
  },
};