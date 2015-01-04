var Console = require('./console/console'),
	CommandInvoker = require('./command/invoker'),
	CommandFactory = require('./command/factory'),
	Drive = require('./filesystem/drive');

module.exports = System;

function System() {
	this.configurate = function(){
		var drive = new Drive("C");
		drive.restore();

		var commandFactory = new CommandFactory(drive);

		var commandInvoker = new CommandInvoker();
		commandInvoker.setCommands(commandFactory.getCommands());

		var systemConsole = new Console(commandInvoker, drive);
		systemConsole.processInput();
	}
} 