var BaseCommand = require("../base_command");

function CmdDir(name, drive){
	BaseCommand.call(this, name, drive);

	this.execute = function(outputter){
	}

	this.checkNumberOfParameters = function(numberOfParameters){
		return false;
	}

	this.checkParameterValues = function(outputter){
		
	}
}

module.exports = CmdDir;