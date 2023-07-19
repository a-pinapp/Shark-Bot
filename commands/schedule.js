const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('schedule')
    .setDescription('in case you forget the schedule'),
  async execute(interaction) {
    const scheduleMessage = `swim schedule here`;
    await interaction.reply(scheduleMessage);
  },
};