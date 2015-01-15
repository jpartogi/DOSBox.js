module.exports = CommandInvoker;

function CommandInvoker(){
	this.setCommands = function(commands){
		this.commands = commands;	
	}

	this.executeCommand = function(command, outputter){
		var cmdName = this.parseCommandName(command);
		var params = this.parseCommandParameters(command);

		this.commands.forEach(function(command){
			if(command.name === cmdName){
				command.setParameters(params);
				
				if(command.checkParameters(outputter) == false) {
					outputter.println("Wrong parameter entered.");
					return;
				}

				command.execute(outputter);
				return;
			}	
		});
	}

	this.parseCommandName = function(command){
		var cmd = command.toLowerCase();
		var cmdName = null;

		cmd = cmd.trim();
		cmd = cmd.replace(',', ' ');
		cmd = cmd.replace(';', ' ');

		cmdName = cmd;
		for(var i=0 ; i<cmd.length; i++) {
			if(cmd.charAt(i) == ' ') {
				cmdName = cmd.substring(0, i);
				break;
			}
		}
		
		return cmdName;
	}

	this.parseCommandParameters = function(command){
		var params = [];
		
		var cmd = command;
		cmd = cmd.trim();
		cmd = cmd.replace(',', ' ');
		cmd = cmd.replace(';', ' ');
		
		var lastSpace = 0;
		for(var i=0 ; i<cmd.length; i++) {
			if(cmd.charAt(i) == ' ' || i+1==cmd.length) {
				params.push(cmd.substring(lastSpace, i+1).trim());
				lastSpace = i;
			}
		}
		
		if(params.length > 0) {
			
			// Remove command name
			params.splice(0, 1);
			var tmp_params = [];

			params.forEach(function(param){
				if(param){
					tmp_params.push(param);
				}
			});

			params = tmp_params;
		}
		
		return params;
	}
}