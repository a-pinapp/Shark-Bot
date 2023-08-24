const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  cooldown: 0,
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('see my commands :D'),
    
  async execute(interaction) {
    const helpMessage = `me commands:
    General commands
    /swim (make me swim)
    /schedule (check the schedule for the week)
    /info (info about me)
    /pics (see pics of sharks)
    /times (check socal swimming time standards)
    /motivation (get motivation from me)
    /chess (play chess with me)
    /calculate (calculate a math problem)
    /records (see server swimming records)
    /flip (flip a coin, heads or tails)
    /rateme (rate you out of 10)
    /apologize (make me apologize)
    /anon (anonymously send a message)

    Economy commands
    /balance (check how much moneys you have)
    /dive (dumpster dive)
    /fish (catch fish)
    /invest (invest ur moneys)
    /leaderboard (see the leaderboard)
    /mine (be a miner and mine for resources)
    /money (i can personally give you some money)
    /rob (rob another user)
    you can also just type "/" and see all the commands and their descriptions`
    await interaction.reply(helpMessage);
  },
};