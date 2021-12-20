const Command = require('../Structures/Command.js');
const Discord = require("discord.js");
const { skin } = require('minecraft-information');

module.exports = new Command({
    name: "skin",
    description: "Get a player's skin",

    async run(message, args, client){
        skin(args[1]).then(async(res) => {
            message.reply(res)
        })
    }
});