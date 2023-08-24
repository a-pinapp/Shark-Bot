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
            // hehe 9 + 10
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
                await interaction.reply('0 ÷ 0 = Undefined \nHere\'s why: Dividing is basically how many times you can fit the divisor into the dividend. When both of them are 0, you\'re asking how many times you can fit 0 into 0. It doesn\'t make sense, right! That\'s why it\'s undefined!');
                // 0 divided by 0
            }

            if (num2 === 0) {
                await interaction.reply(`${num1} ÷ 0 = Undefined \nHere\'s why: Dividing by zero is undefined because it leads to infinity. In the graph shown below, y = 1/x is shown. You can see that as x approaches 0, on the negative side it goes to negative infinity, and on the positive side it goes to positive infinity. That technically means that 1/0 is both positive and negative infinity at the same time, which obviously doesn't work. That's why it's undefined.`);
                await interaction.channel.send('https://cdn.discordapp.com/attachments/1126959887717502976/1141224402361528380/image.png');
                // number divided by 0
            }

            await interaction.reply(`${num1} ÷ ${num2} = ${quotient}`);
        }
    }
};