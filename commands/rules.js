const Discord = require('discord.js');
const { red } = require('../colours.json');

module.exports = {
   name: 'rules',
   description: 'Rules are here',
   usage: '!rules',
   accessableby: 'Everyone',
   
   run(bot, msg, args) {
   	   let embed = new Discord.RichEmbed()
   	   	.setTitle("__Rulebook__")
		     .setColor(red)
     		.addField("1.Respect everyone, especially admins!", "\u200b")
     		.addField("2. Swear words are actually allowed cause we liked it xD", "\u200b")
     		.addField("3. No aggresive sexual jokes", "\u200b")
     		.addField("4. If any member caught cheating or hacking, you will not be tolerated and will be kicked out from the clan", "\u200b")
     		.addField("5. If were found severly disobeying the rules, you will not be tolerated and will be banned more than 2 weeks, or kicked out!", "\u200b")
     		.addField("6. Agree to the rules and obey them, stay cool!", "\u200b")
     		.addField("7. Pls welcome new members, let it be our tradition to increase our clan reputation", "\u200b")
     		.addField("8. Pls be mature, or at least act like so.", "\u200b")
     		.addField("9. You must be online often. If you can't, type !afk <reason>", "\u200b")
     		.attachFile("clan.jpg")
     		.setTimestamp()
     		.setFooter("© Team NeX Standoff 2", "attachment://clan.jpg")
     		msg.channel.send(embed)
   }
}
