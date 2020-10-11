const { Client } = require("discord.js");
const client = new Client();

client.config = require("./config.js");

client.login(client.config.token);