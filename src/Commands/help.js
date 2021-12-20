const Discord = require('discord.js');
const Command = require('../Structures/Command.js');
const fs = require("fs");

module.exports = new Command({
    name: "help",
    description: "Get help with the bot.",

    async run(message, args, client){
        const helpEmbed = new Discord.MessageEmbed()
            .setTitle("Help")
            .setDescription("Learn how to use Vanilla Ice Cream! Prefix is ic!")
            .setColor("#4e06dd")
            .setThumbnail("https://cdn.discordapp.com/attachments/754152681689579612/922277477706002503/icsmp.png")
            .setTimestamp()

            fs.readdirSync("./src/Commands")
			    .filter(file => file.endsWith(".js"))
			    .forEach(file => {
                    /**
                     * @type {Command}
                     */
                    const command = require(`../Commands/${file}`);
                    helpEmbed.addField(command.name, command.description, true);
		    });

        
        message.reply({embeds: [helpEmbed]});
    }

    
})