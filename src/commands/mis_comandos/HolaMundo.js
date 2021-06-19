const { Command } = require('discord.js-commando');

module.exports = class HolaMundo extends Command {
  	constructor(client) {
		super(client, {
			name: 'hola-mundo',
			aliases: ['hm'],
			group: 'mis_comandos',
			memberName: 'hola-mundo',
			description: 'Este comando es mi primer hola mundo',
		});
	}

  run(message) {
		return message.reply(' hola mundo!');
  }
}
