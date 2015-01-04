var readline = require('readline'),
	ConsoleOutputter = require('./console_outputter');
	
module.exports = Console;

function Console(invoker, drive){
	this.invoker = invoker;
	this.drive = drive;
	this.outputter = new ConsoleOutputter();

	this.processInput = function() {
		var rl = readline.createInterface(process.stdin, process.stdout);

		rl.setPrompt(this.drive.getPrompt());
		
		rl.prompt();
		
		rl.on('line', function(line) {
		    if (line === "exit") rl.close();
		    rl.prompt();
		}).on('close',function(){
		    process.exit(0);
		});
	}
} 