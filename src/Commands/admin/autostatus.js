const Command = require('../../Structures/Command.js');
const util = require('minecraft-server-util');
const Discord = require("discord.js");

module.exports = new Command({
    name: "autostatus",
    description: "Check the status of ICSMP",

    async run(message, args, client){
        if(message.author != "573248130389114880"){return;}
        const result = null;

        const options = {
            timeout: 1000 * 5,
            enableSRV: true
        };
        
        util.status("104.50.5.63", 25590, options).then((response) => {
            const embed = new Discord.MessageEmbed()
                .setColor("#29ff21")
                .setTitle('Server Status: Online :green_circle:')
                .addField('Server Version:', response.version.name + " ")
                .addField('Player Count', `${response.players.online} / ${response.players.max}`)
                .setTimestamp()
                .setThumbnail("https://cdn.discordapp.com/attachments/754152681689579612/922277477706002503/icsmp.png")

            message.channel.send({embeds: [embed]});
        }).catch(err => {
            message.channel.send("<@573248130389114880>")
            const errorEmbed = new Discord.MessageEmbed()
                .setTitle("Server Status: Offline :red_circle:")
                .setColor("#fc0f13")
                .setDescription("Either the server is down, or the bot broke. Either way... Maxb0tbeep needs to fix it :( \n\n(He's already pinged you don't need to ping him more)")
                .setThumbnail("https://cdn.discordapp.com/attachments/754152681689579612/922277477706002503/icsmp.png")
                .setTimestamp()

            message.channel.send({embeds: [errorEmbed]})   
        })

        function RefreshServerStatus() {
            setTimeout(function() {
                if (true) {
                    RefreshServerStatus();

                    message.channel.bulkDelete(99, true);

                    util.status("104.50.5.63", 25590, options).then((response) => {
                        const embed = new Discord.MessageEmbed()
                            .setColor("#29ff21")
                            .setTitle('Server Status: Online :green_circle:')
                            .addField('Server Version:', response.version.name + " ")
                            .addField('Player Count', `${response.players.online} / ${response.players.max}`)
                            .setTimestamp()
                            .setThumbnail("https://cdn.discordapp.com/attachments/754152681689579612/922277477706002503/icsmp.png")
            
                        message.channel.send({embeds: [embed]});
                    }).catch(err => {
                        message.channel.send("<@573248130389114880>")
                        const errorEmbed = new Discord.MessageEmbed()
                            .setTitle("Server Status: Offline :red_circle:")
                            .setColor("#fc0f13")
                            .setDescription("Either the server is down, or the bot broke. Either way... Maxb0tbeep needs to fix it :( \n\n(He's already pinged you don't need to ping him more)")
                            .setThumbnail("https://cdn.discordapp.com/attachments/754152681689579612/922277477706002503/icsmp.png")
                            .setTimestamp()
            
                        message.channel.send({embeds: [errorEmbed]})
                    })
                }
            }, 30000)
        }
        RefreshServerStatus();
    }
});