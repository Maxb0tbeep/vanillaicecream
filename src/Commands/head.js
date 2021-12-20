const Command = require('../Structures/Command.js');
const Discord = require("discord.js");
const { avatar } = require('minecraft-information');

module.exports = new Command({
    name: "head",
    description: "Get a player's head",

    async run(message, args, client){
        avatar(args[1]).then(async(res) => {
            message.reply(res)
        })
    }
});