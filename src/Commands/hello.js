const Command = require('../Structures/Command.js');

module.exports = new Command({
    name: "hello",
    description: "Say hello to Vanilla!",

    async run(message, args, client){
        message.reply(`Hello ${message.author.username}!`)
    }
})