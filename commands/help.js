const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('see my commands :D'),
  async execute(interaction) {
    const helpMessage = `me commands:
    /swim
    /schedule
    /info
    /money
    /pics
    /times
    /motivation
    /chess
    you can also just type "/" and see all the commands and their descriptions`
    await interaction.reply(helpMessage);
  },
};