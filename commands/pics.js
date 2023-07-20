const { SlashCommandBuilder } = require('discord.js');
const responses = [
    'https://upload.wikimedia.org/wikipedia/commons/5/56/White_shark.jpg',
    'https://media.wired.com/photos/5c6750d23e8add2cdb91724f/master/w_2560%2Cc_limit/shark-551025353.jpg',
    'https://a-z-animals.com/media/2022/06/Great-White-shark-breaching-1024x614.jpg',
    'https://a-z-animals.com/media/2022/08/iStock-1143440674.jpg',
    'https://media.istockphoto.com/id/482711591/photo/great-white-shark.jpg?s=612x612&w=0&k=20&c=UzZZAGVL3Z5D3_v1X9qAPn2HZniLoKthOZrATngzvgc=',
    'https://i.natgeofe.com/n/b0d8b82c-4367-4e09-a21c-a08124b764cf/great-white-shark_thumb_4x3.jpg',
    'https://i.insider.com/648780f95dd056001963914b?width=700',
    'https://d.newsweek.com/en/full/2243925/great-white-shark.jpg',
    'https://images.foxtv.com/static.fox2detroit.com/www.fox2detroit.com/content/uploads/2023/03/1280/720/GETTY_great-white-sharks_111019.jpg?ve=1&tl=1',
    'https://s.hdnux.com/photos/01/00/57/20/16970768/10/rawImage.jpg',
    'https://rnz-ressh.cloudinary.com/image/upload/s--ER9S46Cj--/c_scale,f_auto,q_auto,w_1050/v1643780686/4MFIFWV_image_crop_117202',
    'https://scx2.b-cdn.net/gfx/news/2022/scientists-get-inventi.jpg',
  ];
module.exports = {
  cooldown: 0,
  data: new SlashCommandBuilder()
    .setName('pics')
    .setDescription('see pics of me!'),
  async execute(interaction) {
    const randomIndex = Math.floor(Math.random() * responses.length);
    const randomResponse = responses[randomIndex];
    await interaction.reply({ content: randomResponse});
  },
};