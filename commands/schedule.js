const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  cooldown: 0,
  data: new SlashCommandBuilder()
    .setName('schedule')
    .setDescription('in case you forget the schedule'),

  async execute(interaction) {
    await interaction.reply('schedule');
  },
};