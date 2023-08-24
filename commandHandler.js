const fs = require('fs');
const { Client, Collection, GatewayIntentBits } = require('discord.js');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

client.commands = new Collection();
client.cooldowns = new Collection();

const commandFiles = fs
  .readdirSync('./commands')
  .filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
}

let repeatEnabled = false;
let repeatUserID = '';
let accumulationStarted = false;
let messageContent = '';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  client.application.commands.set(client.commands.map((cmd) => cmd.data));
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;
  const command = client.commands.get(interaction.commandName);

  if (!command) return;
  const { cooldowns } = client;

  if (!cooldowns.has(command.data.name)) {
    cooldowns.set(command.data.name, new Collection());
  }

  const now = Date.now();
  const timestamps = cooldowns.get(command.data.name);
  const defaultCooldownDuration = 3;
  const cooldownAmount = (command.cooldown ?? defaultCooldownDuration) * 1000;

  if (timestamps.has(interaction.user.id)) {
    const expirationTime = timestamps.get(interaction.user.id) + cooldownAmount;
    if (now < expirationTime) {
      const expiredTimestamp = Math.round(expirationTime / 1000);
      return interaction.reply({ content: `Please wait, you are on a cooldown for \`/${command.data.name}\`. You can use it again <t:${expiredTimestamp}:R>.`, ephemeral: true});
    }
  }

  timestamps.set(interaction.user.id, now);
  setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount);

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: 'An error occurred while executing this command. Sucks to suck lmao',
      ephemeral: true,
    });
  }

});
client.on('messageCreate', (message) => {
    const { content, author } = message;

    if (content === '!Startchessgame' && !repeatEnabled) {
      repeatEnabled = true;
      repeatUserID = author.id;
      accumulationStarted = false;
      message.channel.send('Lets play chess! **Ignore the text on the bottom right of the image.** To play, simply type your moves by saying where the piece you want to move is, and where you want to move it. For example, at the start of the game, you might move your knight piece, in b1, to c3, by typing b1c3. And, you can stop the game whenever you want, by typing "gg". It might be a little buggy, though. Anyways, lets get started! Type your first move.');
      message.channel.send('https://txnor.com/vieag/chess');

    } else if (content === 'gg' && repeatEnabled && repeatUserID === author.id) {
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

client.login('bot token');