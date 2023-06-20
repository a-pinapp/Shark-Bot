const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});
const TOKEN = 'tokenhere'; // Replace with your bot token
let repeatEnabled = false;
let repeatUserID = '';
let accumulationStarted = false;
let messageContent = '';

// Array of multiple responses
const responses = [
  'https://upload.wikimedia.org/wikipedia/commons/5/56/White_shark.jpg',
  'https://media.wired.com/photos/5c6750d23e8add2cdb91724f/master/w_2560%2Cc_limit/shark-551025353.jpg',
  'https://a-z-animals.com/media/2022/06/Great-White-shark-breaching-1024x614.jpg',
  'https://a-z-animals.com/media/2022/08/iStock-1143440674.jpg',
  'https://media.istockphoto.com/id/482711591/photo/great-white-shark.jpg?s=612x612&w=0&k=20&c=UzZZAGVL3Z5D3_v1X9qAPn2HZniLoKthOZrATngzvgc=',
  // Add more responses as needed
];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', (message) => { // many ! commands
  if (message.content === '!swim') { // !swim command
    const swimMessage = `me shark so i swim
    *swims swims swims swims*
    ooh fish
    *bites* omnomnomnomnom
    that was so good thanks for letting me swim :D`;

    message.channel.send(swimMessage);
  } else if (message.content === '!schedule') { // !schedule command
    const scheduleMessage = `schedule should be:
    Bronze: 5:30 - 6:30?? I don't know actually lol I just know its 1 hour
    Silver: 5:30 - 7:00
    Gold: 5:30 - 7:15
    HS Prep: idk, probably the same as either gold or platinum
    Platinum: 5:30 - 7:30
    Dryland: 5:00 to 5:30 (only for silver, gold, & platinum)
    Swim is at Diamond Bar High School from now till next swim season i think (around august to september)`;

    message.channel.send(scheduleMessage);
  } else if (message.content === '!info') { // !info command
    message.channel.send('im a bot made by the one and only pineapple :D');
  } else if (message.content === '!money') { // !money command
    message.channel.send('im sorry, i dont have any money for you, im just a bot D: maybe you can borrow from your friends?');
  } else if (message.content === '!commands') { // !commands command
    const commandsMessage = `me commands:
    **!swim** - this command makes me swim!
    **!schedule** - in case you forget the schedule
    **!info** - about me!
    **!money** - if i have any money i can give you some
    **!pics** - see pics of me!
    **!times** - check time standards
    **!motivation** - get motivation for your swimming events from me! :muscle:
    **!chess** - play chess with me!
    **!stop** - end a game of chess with me!`;

    message.channel.send(commandsMessage); // !times command
  } else if (message.content === '!times') {
    message.channel.send('Find all time standards here: https://www.socalswim.org/time-standards/ Good luck on making your cuts! :D');
  } else if (message.content === '!motivation') { // !motivation command
    message.channel.send('You can DO THIS! All those hours you put in are leading up to this. Go ALL OUT on this swim. Be strong and good luck and you WILL make your cuts! :muscle: :muscle: :person_swimming:');
  }
});

client.on('messageCreate', (message) => { // !pics command
  if (message.content === '!pics') {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * responses.length);
    // Select a random response
    const randomResponse = responses[randomIndex];

    message.channel.send({ content: randomResponse });
  }
});

client.on('messageCreate', (message) => { // chess feature
  const { content, author } = message;

  if (content === '!chess' && !repeatEnabled) {
    repeatEnabled = true;
    repeatUserID = author.id;
    accumulationStarted = false;
    message.channel.send('Lets play chess! **Ignore the text on the bottom right of the image.** To play, simply type your moves by saying where the piece you want to move is, and where you want to move it. For example, at the start of the game, you might move your knight piece, in b1, to c3, by typing b1c3. And, you can stop the game whenever you want, by typing !stop. It might be a little buggy, though. Anyways, lets get started! Type your first move.');
    message.channel.send('https://txnor.com/vieag/chess');
  } else if (content === '!stop' && repeatEnabled && repeatUserID === author.id) {
    repeatEnabled = false;
    repeatUserID = '';
    message.channel.send('Good game! Thanks for playing with me. Hopefully we can play another time! :grin:');
    messageContent = '';
    accumulationStarted = false;
  } else if (repeatEnabled && repeatUserID === author.id) {
    if (!accumulationStarted) {
      accumulationStarted = true;
      messageContent = content;
    } else {
      messageContent = content + messageContent;
    }
    const response = `https://txnor.com/vieag${messageContent}/chess`;
    message.channel.send(response);
  }
});

client.login(TOKEN);
