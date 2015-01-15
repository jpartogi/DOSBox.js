var BaseCommand = require("../base_command");

function CmdCd(name, drive){
	BaseCommand.call(this, name, drive);

	this.execute = function(outputter){
	}

	this.checkNumberOfParameters = function(numberOfParameters){
		return true;
	}

	this.checkParameterValues = function(outputter){
		
	}
}

module.exports = CmdCd;