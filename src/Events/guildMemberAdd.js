/** @format */

const Event = require("../Structures/Event.js");
const { TextChannel } = require('discord.js');

module.exports = new Event("guildMemberAdd", (client, member) => {
	
	const messageChannel = client.channels.cache.get("773636739872587848");

	if(member.user.id === "502699845577080852"){
		member.kick("tecc moment");
		
		messageChannel.send("@everyone tecc tried to come back and was blocked lmaoooooo nerd");
	}

	
});
