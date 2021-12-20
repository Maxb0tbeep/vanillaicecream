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
            .setThumbnail("https://cdn.discordapp.com/app-icons/914321685509971989/47e31d19eff886c831157578639ed713.png?size=256")
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