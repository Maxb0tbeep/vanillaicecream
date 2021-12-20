const Command = require('../../Structures/Command.js');
const util = require('minecraft-server-util');
const Discord = require("discord.js");

module.exports = new Command({
    name: "getinfo",
    description: "Check your servers status.",

    async run(message, args, client){
        if(message.author != "573248130389114880"){return;}
        const result = null;

        const options = {
            timeout: 1000 * 5,
            enableSRV: true
        };
        
        util.status("104.50.5.63", 25590, options).then((response) => {
            message.channel.send("check the console");
            console.log(response)
        })
    }
});