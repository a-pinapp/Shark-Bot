const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  cooldown: 0,
  data: new SlashCommandBuilder()
    .setName('ball')
    .setDescription('Ask an 8-ball a question!')

    .addStringOption(option =>
        option.setName('question')
            .setDescription('The question to ask the 8-ball!')
            .setRequired(true)),
            
  async execute(interaction) {
    const result = Math.floor(Math.random() * 8);
    const question = interaction.options.getString('question');
    switch (result) {
        case 7:
            await interaction.reply(`${interaction.user.username} asked: "${question}" \nThe magic 8-ball says: \n> "**It is certain**"`);
            break;
        case 6:
            await interaction.reply(`${interaction.user.username} asked: "${question}" \nThe magic 8-ball says: \n> "**It is decidedly so**"`);
            break;
        case 5:
            await interaction.reply(`${interaction.user.username} asked: "${question}" \nThe magic 8-ball says: \n> "**Reply hazy try again**"`);
            break;
        case 4:
            await interaction.reply(`${interaction.user.username} asked: "${question}" \nThe magic 8-ball says: \n> "**Cannot predict now**"`);
            break;
        case 3:
            await interaction.reply(`${interaction.user.username} asked: "${question}" \nThe magic 8-ball says: \n> "**Do not count on it**"`);
            break;
        case 2:
            await interaction.reply(`${interaction.user.username} asked: "${question}" \nThe magic 8-ball says: \n> "**My sources say no**"`);
            break;
        case 1:
            await interaction.reply(`${interaction.user.username} asked: "${question}" \nThe magic 8-ball says: \n> "**Outlook not so good**"`);
            break;
        case 0:
            await interaction.reply(`${interaction.user.username} asked: "${question}" \nThe magic 8-ball says: \n> "**Signs point to yes**"`);
            break;
    }
  },
};