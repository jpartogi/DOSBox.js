module.exports = BaseCommand;

function BaseCommand(name, drive){
	this.name = name;
	this.drive = drive;
	this.params = [];
	this.INCORRECT_SYNTAX = "The syntax of the command is incorrect.";
	this.DEFAULT_ERROR_MESSAGE_WRONG_PARAMETER = "Wrong parameter entered.";

	this.setParameters = function(newParams){
		this.params = newParams;
	}

	this.checkParameters = function(outputter){

		if(!this.checkNumberOfParameters(this.params.length)) {
			outputter.println(this.INCORRECT_SYNTAX);
			return false;
		}

		if(!this.checkParameterValues(outputter)) {
			if (!outputter.hasCharactersPrinted())
				outputter.println(this.DEFAULT_ERROR_MESSAGE_WRONG_PARAMETER);
			return false;
		}
		
		return true;
	}

    this.getParameterAt = function(parameterIndex) {
    	if(parameterIndex < 0 || parameterIndex >= this.params.length) 
    		throw "Index out of range";

        return this.params[parameterIndex];
    }
}