const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  cooldown: 0,
  data: new SlashCommandBuilder()
    .setName('rateme')
    .setDescription('I can rate you out of 10'),

  async execute(interaction) {
    let result = Math.floor(Math.random() * 6);

    if (interaction.user.id === '692550309414699018') {
      result = 5;
    }

    if (interaction.user.id === '808445593344933898') {
      result = 0;
    }
    
    switch (result) {
      case 5:
        await interaction.reply('You\'re a **10/10**! \nEverywhere you go, people stop to look at you, you\'re just that gorgeous. You get all the girls/boys chasing after you. You\'re the most perfect person in existence.');
        break;
      case 4:
        await interaction.reply('You\'re an **8/10**! \nYou look amazing, well above average. With those kinds of looks, you will have no problem getting a partner (if you don\'t have one already).');
        break;
      case 3:
        await interaction.reply('You\'re a **6/10**! \nYou look alright. Not amazing, not bad. Just average. I would recommend trying some things online to try and get a glow up. Good luck!');
        break;
      case 2:
        await interaction.reply('You\'re a **4/10**! \nHonestly, you\'re kind of ugly. Maybe to the point where people would start disrespecting you because of that. Work on that, alright?');
        break;
      case 1:
        await interaction.reply('You\'re a **2/10**! \nBro, wtf??? You\'re a pain to look at. I won\'t even try insulting you, I know other people have done that enough already.');
        break;
      case 0:
        await interaction.reply('You\'re a **0/10**! \nWhat... the actual horrendous fuck am I looking at. A slimy blob? An abomination of God\'s creation? Holy shit... this can\'t be real. No way anyone is actually this goddamn **ugly**!!!');
        break;
    }
  },
};