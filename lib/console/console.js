var readline = require('readline'),
	ConsoleOutputter = require('./console_outputter');
	
module.exports = Console;

function Console(invoker, drive, outputter){
	this.invoker = invoker;
	this.drive = drive;
	this.outputter = outputter;

	this.processInput = function() {
		var rl = readline.createInterface(process.stdin, process.stdout);

		rl.setPrompt(this.drive.getPrompt());
		
		rl.prompt();
		
		rl.on('line', function(line) {
		    if (line === "exit") { 
		    	rl.close();
		    }

		    outputter.resetStatistics();
		    invoker.executeCommand(line, outputter);

		    rl.prompt();
		}).on('close',function(){
		    process.exit(0);
		});
	}
} 