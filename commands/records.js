const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 0,
    data: new SlashCommandBuilder()
        .setName('records')
        .setDescription('Find the records of each event for people in this server')

        .addStringOption(option =>
            option.setName('course')
                .setDescription('The pool type')
                .setRequired(true)
                .addChoices(
                    { name: 'SCY', value: 'scy_records' },
                    { name: 'LCM', value: 'lcm_records' }
                )),

    async execute(interaction) {
        const course = interaction.options.getString('course');
        const scyrecords = `this`;
        const lcmrecords = `this`;
        
        if (course === 'scy_records') {
            await interaction.reply(scyrecords);
        } else if (course === 'lcm_records') {
            await interaction.reply(lcmrecords);
        }
    }
};