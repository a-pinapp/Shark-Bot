const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  cooldown: 0,
  data: new SlashCommandBuilder()
    .setName('apologize')
    .setDescription('make me apologize')

    .addStringOption(option =>
        option.setName('reason')
            .setDescription('why i should apologize')
            .setRequired(true)),

  async execute(interaction) {
    const reason = interaction.options.getString('reason');
    
    await interaction.reply(`${interaction.user.username} wants me to apologize for: "${reason}" \nok pls forgive me im sorry for everything ok?? so sorry :pleading_face:`)
  },
};