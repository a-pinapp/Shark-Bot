const { SlashCommandBuilder } = require('discord.js');
module.exports = {
    cooldown: 0,
    data: new SlashCommandBuilder()
        .setName('calculate')
        .setDescription('Calculate a simple math problem')
        .addNumberOption(option =>
            option.setName('firstnumber')
                .setDescription('The first number in the math problem')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('operation')
                .setDescription('The operation to apply to the numbers')
                .setRequired(true)
                .addChoices(
                    { name: '+', value: 'add' },
                    { name: '-', value: 'subtract' },
                    { name: '×', value: 'multiply' },
                    { name: '÷', value: 'divide'}
                ))
        .addNumberOption(option =>
            option.setName('secondnumber')
                .setDescription('The second number in the math problem')
                .setRequired(true)),
    async execute(interaction) {
        const num1 = interaction.options.getNumber('firstnumber');
        const operation = interaction.options.getString('operation');
        const num2 = interaction.options.getNumber('secondnumber');
        if (operation === 'add' && num1 === 9 && num2 === 10) {
            return interaction.reply('9 + 10 = 21 [hehe](https://youtu.be/7hhQLozezak)');
        } else if (operation === 'add') {
            const sum = num1 + num2;
            await interaction.reply(`${num1} + ${num2} = ${sum}.`);
        } else if (operation === 'subtract') {
            const difference = num1 - num2;
            await interaction.reply(`${num1} - ${num2} = ${difference}`);
        } else if (operation === 'multiply') {
            const product = num1 * num2;
            await interaction.reply(`${num1} × ${num2} = ${product}`);
        } else if (operation === 'divide') {
            const quotient = num1 / num2;
            if (num1 === 0 && num2 === 0) {
                return interaction.reply('Answer kindly provided by ChatGPT: \nOh, that\'s an interesting one! So, when you divide any number by zero, it\'s kind of like asking, "How many times can you fit nothing into something?" The answer isn\'t really a number we can work with in regular math. It\'s considered undefined because it doesn\'t follow the rules we use for division. It\'s like a mathematical mystery! :thinking:');
            }
            if (num2 === 0) {
                return interaction.reply('Answer kindly provided by ChatGPT: \nDividing by 0 is a big no-no in mathematics! It\'s undefined because you can\'t split something into zero parts. It\'s like trying to share zero cookies among friends – you can\'t really do that. It messes up the rules of arithmetic and can lead to all sorts of weird results.');
            }
            await interaction.reply(`${num1} ÷ ${num2} = ${quotient}`);
        } else if (operation === 'add' && num1 === 9 && num2 === 10) {
            await interaction.reply('9 + 10 = 21 [hehe](https://youtu.be/7hhQLozezak)');
        }
    }
};