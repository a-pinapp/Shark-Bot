const { SlashCommandBuilder } = require('discord.js');
const responses = [
    'im sorry i don\'t have any money for you right now, maybe ask later?',
    'oh sure i can give you money! here, have a dollar :dollar:',
];

module.exports = {
  data: new SlashCommandBuilder()
    .setName('money')
    .setDescription('if i have any money i can give you some'),
  async execute(interaction) {
    const randomIndex = Math.floor(Math.random() * responses.length);
    const randomResponse = responses[randomIndex]
    await interaction.reply({ content: randomResponse });
  },
};