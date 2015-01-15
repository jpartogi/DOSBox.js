var BaseCommand = require("../base_command");

function CmdMkDir(name, drive){
	this.PARAMETER_CONTAINS_BACKLASH = "At least one parameter denotes a path rather than a directory name.";

	BaseCommand.call(this, name, drive); // call parent object

	this.execute = function(outputter){
	}

	this.checkNumberOfParameters = function(numberOfParameters){
		return numberOfParameters >= 1 ? true : false;
	}

	this.checkParameterValues = function(outputter){
		for(var i=0 ; i < this.params.length; i++) {
            if (this.parameterContainsBacklashes(this.getParameterAt(i), outputter))
               return false;
        }

        return true;
	}

	this.parameterContainsBacklashes = function(param, outputter){
		if (param.search(/(\\|\/)/ig) > 0) {
            outputter.println(this.PARAMETER_CONTAINS_BACKLASH);
            return true;
        }
        return false;
	}
}

module.exports = CmdMkDir;