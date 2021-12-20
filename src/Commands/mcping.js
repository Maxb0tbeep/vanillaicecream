const Command = require('../Structures/Command.js');
const Discord = require("discord.js");
const pinger = require('minecraft-ping-js');

module.exports = new Command({
    name: "mcping",
    description: "Get the latency of ICSMP",

    async run(message, args, client){
        pinger.ping('104.50.5.63', 25590, (error, result) => {
            if (error) {
                console.error(error);
            } else {
                console.log(result);
                message.reply("The ping of ICSMP is " + result.ping + "ms (US West)");
            }
        });
    }
});