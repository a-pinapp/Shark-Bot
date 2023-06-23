const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('swim')
    .setDescription('makes me swim!'),
  async execute(interaction) {
    const swimMessage = `me shark so i swim
    *swims swims swims swims*
    ooh fish
    *bites* omnomnomnomnom
    that was so good thanks for letting me swim :D`;
    await interaction.reply(swimMessage);
  },
};