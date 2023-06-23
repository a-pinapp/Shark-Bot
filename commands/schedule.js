const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('schedule')
    .setDescription('in case you forget the schedule'),
  async execute(interaction) {
    const scheduleMessage = `Schedule for this week 6/19 - 6/23:
    **Tuesday-Thursday**
    Bronze & bronze elite: 5:30 - 6:30
    Silver: 5:30 - 7:00
    Gold: 5:30 - 7:15
    HS prep: 5:30 - 7:30
    Platinum: 5:30 - 7:30
    Dryland: 5:00 to 5:30 (only for silver, gold, & platinum)
    **Friday**
    All groups: 5:00 to 6:00
    **Saturday-Sunday**
    Home meet! Good luck everyone!
    Swim is at Diamond Bar High School till next swim season i think (around august to september)`;
    await interaction.reply(scheduleMessage);
  },
};