const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  cooldown: 0,
  data: new SlashCommandBuilder()
    .setName('anon')
    .setDescription('Send a message anonymously, to make a confession, or anything!')
    .addStringOption(option =>
        option.setName('message')
            .setDescription('The message to send anonymously!')
            .setRequired(true))

    .addAttachmentOption(option =>
      option.setName('image')
        .setDescription('An image you can send anonymously'))

    .addAttachmentOption(option =>
      option.setName('file')
        .setDescription('A file you can send anonymously')),

  async execute(interaction) {
    const message = interaction.options.getString('message');
    const image = interaction.options.getAttachment('image');
    const file = interaction.options.getAttachment('file')

    if (!image && !file) {
      const messageEmbed = new EmbedBuilder()
        .setTitle('Anonymous Message')
        .setDescription(`"${message}"`);
      await interaction.channel.send({ embeds: [messageEmbed] });
      console.log(`${interaction.user.username} anonymously posted: "${message}"`);

    } else if (image && !file) {
      const messageEmbed = new EmbedBuilder()
        .setTitle('Anonymous Message and Image')
        .setDescription(`"${message}"`)
        .setImage(image.url);
      await interaction.channel.send({ embeds: [messageEmbed] });
      console.log(`${interaction.user.username} anonymously posted: "${message}" and an image:\n${image.url}`);

    } else if (!image && file) {
      const messageEmbed = new EmbedBuilder()
        .setTitle('Anonymous Message and File')
        .setDescription(`"${message}"`);
      await interaction.channel.send({ embeds: [messageEmbed] });
      await interaction.channel.send({ content: 'File:', files: [file.url] });
      console.log(`${interaction.user.username} anonymously posted: "${message}" and a file:\n${file.url}`);

    } else if (image && file) {
      const messageEmbed = new EmbedBuilder()
        .setTitle('Anonymous Message, Image, and File')
        .setDescription(`"${message}"`)
        .setImage(image.url);
      await interaction.channel.send({ embeds: [messageEmbed] });
      await interaction.channel.send({ content: 'File:', files: [file.url] });
      console.log(`${interaction.user.username} anonymously posted: "${message}", an image:\n${image.url}\nand a file:\n${file.url}`);
    }

    await interaction.reply({ content: 'Your anonymous post has been sent!', ephemeral: true });
  },
};

// What's funny is that they don't know that I'm logging who posts the anonymous messages.