const { SlashCommandBuilder } = require('discord.js');
const { getUserBalance, updateUserBalance } = require('../userData');
module.exports = {
    cooldown: 3600,
    data: new SlashCommandBuilder()
        .setName('rob')
        .setDescription('Rob another user of their moneys')
        .addUserOption(option =>
            option
                .setName('victim')
                .setDescription('The user you want to rob')
                .setRequired(true)),
    async execute(interaction) {
        const targetUser = interaction.options.getUser('victim');
        const targetBalance = getUserBalance(targetUser.id);
        if (targetBalance <= 0) {
            await interaction.reply(`The target user does not have any moneys to steal.`)
        }
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
            const stolenAmount = Math.floor(targetBalance / 2);
            updateUserBalance(interaction.user.id, stolenAmount);
            updateUserBalance(targetUser.id, -stolenAmount);
            await interaction.reply(`You successfully stole ${stolenAmount} moneys from ${targetUser.username}!`);
        } else {
            const lostAmount = getUserBalance(interaction.user.id);
            updateUserBalance(interaction.user.id, -lostAmount);
            await interaction.reply(`Your attempt to rob another user failed, and you lost all your moneys.`);
        }
    },
}