const Event = require("../Structures/Event.js");
const Client = require("../Structures/Client.js");
const util = require('minecraft-server-util');
const Discord = require("discord.js");
const client = new Client();

module.exports = new Event("ready", (client) => {
  client.user.setActivity(`Ice Cream SMP`, { type: "WATCHING" });
  console.log(`${client.user.tag} is online!`)

  const options = {
    timeout: 1000 * 9,
    enableSRV: true
  };

  var channel = client.channels.cache.get("922280900677484544")
  
  util.status("104.50.5.63", 25590, options).then((response) => {
    const embed = new Discord.MessageEmbed()
      .setColor("#29ff21")
      .setTitle('Server Status: Online :green_circle:')
      .addField('Server Version:', response.version.name + " ")
      .addField('Player Count', `${response.players.online} / ${response.players.max}`)
      .setTimestamp()
      .setThumbnail("https://api.mcsrvstat.us/icon/104.50.5.63:25590")

    channel.send({ embeds: [embed] });
  }).catch(err => {
    channel.send("<@573248130389114880>")
    const errorEmbed = new Discord.MessageEmbed()
      .setTitle("Server Status: Offline :red_circle:")
      .setColor("#fc0f13")
      .setDescription("Either the server is down, or the bot broke. Either way... Max needs to fix it :( \n\n(He's already pinged you don't need to ping him more)")
      .setTimestamp()

    channel.send({ embeds: [errorEmbed] })
  })

  function RefreshServerStatus() {
    setTimeout(function() {
      if (true) {
        RefreshServerStatus();

        channel.bulkDelete(99, true);

        util.status("104.50.5.63", 25590, options).then((response) => {
          const embed = new Discord.MessageEmbed()
            .setColor("#29ff21")
            .setTitle('Server Status: Online :green_circle:')
            .addField('Server Version:', response.version.name + " ")
            .addField('Player Count', `${response.players.online} / ${response.players.max}`)
            .setTimestamp()
            .setThumbnail("https://api.mcsrvstat.us/icon/104.50.5.63:25590")

          channel.send({ embeds: [embed] });
        }).catch(err => {
          channel.send("<@573248130389114880>")
          const errorEmbed = new Discord.MessageEmbed()
            .setTitle("Server Status: Offline :red_circle:")
            .setColor("#fc0f13")
            .setDescription("Either the server is down, or the bot broke. Either way... Max needs to fix it :( \n\n(He's already pinged you don't need to ping him more)")
            .setTimestamp()

          channel.send({ embeds: [errorEmbed] })
        })
      }
    }, 45000)
  }
  RefreshServerStatus();
});