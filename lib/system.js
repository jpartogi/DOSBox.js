var Console = require('./console/console'),
	CommandInvoker = require('./command/invoker'),
	CommandFactory = require('./command/factory'),
	Drive = require('./filesystem/drive');
	ConsoleOutputter = require('./console/console_outputter');

module.exports = System;

function System() {
	this.configurate = function(){
		var drive = new Drive("C");
		drive.restore();

		var commandFactory = new CommandFactory(drive);

		var commandInvoker = new CommandInvoker();
		commandInvoker.setCommands(commandFactory.getCommands());

		var outputter = new ConsoleOutputter();
		var systemConsole = new Console(commandInvoker, drive, outputter);
		systemConsole.processInput();
	}
} 