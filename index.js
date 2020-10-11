const { Client } = require("discord.js");
const client = new Client();

client.config = require("./config.js");

client.on('message', message => {
    message.channel.send("pong")
})

client.login(client.config.token);

console.log("yeah")