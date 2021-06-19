// Cargamos la libreria
const { CommandoClient } = require("discord.js-commando");
const path = require('path');

// Instanciamos nuestro cliente
const client = new CommandoClient({
  commandPrefix: ".",
});

// Registramos nuestros grupos de comandos
client.registry
  .registerDefaultTypes()
  .registerGroups([
    [
      'mis_comandos',
      'Estos comandos son especiales'
    ]
  ])
  .registerDefaultGroups()
	.registerDefaultCommands()
  .registerCommandsIn(path.join(__dirname, 'commands'));

// Acciones a ejecutar cuando el bot encienda
client.once('ready', () => {
	console.log(`Sesion iniciada como ${client.user.tag}(${client.user.id})`);
	client.user.setActivity('Estoy en linea!');
});

// Autentificando a nuestro bot
client.login(BOT-TOKEN-AQUI);