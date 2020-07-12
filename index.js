const Discord = require('discord.js'); 
const bot = new Discord.Client();
const { prefix, token } = require('./botconfig.json');
const fs = require('fs');
const { green } = require('./colours.json');
const Money = require('./models/money.js');
const mongoose = require('mongoose');
try {
 mongoose.connect('mongodb+srv://NiXx:jason114500@storage-74rix.gcp.mongodb.net/test?retryWrites=true&w=majority', {
     useUnifiedTopology: true,
     useNewUrlParser: true
 })  
} catch(error) {
	   console.log(error)
	   
	   
};

bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {     const command = require(`./commands/${file}`);     
// set a new item in the Collection     
//// with the key as the command name and the value as the exported module 
 bot.commands.set(command.name, command); 
}

bot.once('ready', () => { 
        console.log("I'm ready! Let' go! I love TNeX xD");
        bot.user.setActivity("Standoff 2", {type: "PLAYING"});        
        
}); 

bot.on('message', async msg => {	
   if(msg.author.bot) return;
   
   var aChannel = msg.guild.channels.find(channel => channel.name === 'general');
   const args = msg.content.slice(prefix.length).trim().split(/ +/);
   const cmdName = args.shift().toLowerCase(); 

 
   
   
   	if (!bot.commands.has(cmdName)) return;
   const cmd = bot.commands.get(cmdName);

  
   if(msg.content.startsWith(prefix)) {
      cmd.run(bot, msg, args)
   	   
   }
 
  if (msg.content === "Hi!") {
  	msg.channel.send("Sup")
  }
});

bot.on("guildMemberAdd", member => {
	   let embed = new Discord.RichEmbed()
	   .setTitle(" \u200b", "\u200b")
	   .setColor(green)
	   .addField(`Welcome, ${guildMemberAdd}! Please type !help to view commands, and !rules to view rules!`, "\u200b")
	   .setTimestamp()
    .attachFile('clan.jpg')
    .setFooter("© Team NeX Standoff 2", 'attachment://clan.jpg')

	   msg.channel.send(embed)
	   .then(msg => {
	   	   msg.delete(60000);
	   });
})

bot.login(token);
