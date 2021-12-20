const Event = require("../Structures/Event.js");
const Client = require("../Structures/Client.js");
const client = new Client();

module.exports = new Event("ready", (client) =>{
    client.user.setActivity(`Ice Cream SMP`, {type : "WATCHING"});
    console.log(`${client.user.tag} is online!`)
});