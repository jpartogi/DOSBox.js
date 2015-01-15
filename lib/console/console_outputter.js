module.exports = ConsoleOutputter;

function ConsoleOutputter(){
	this.numberOfPrintedCharacters = 0;

	this.resetStatistics = function(){
		numberOfPrintedCharacters = 0;
	}

	this.println = function(line){
		process.stdout.write(line + '\n');	
		this.analyzePrintedCharacters(line);	
	}

	this.print = function(line){
		process.stdout.write(line + "");
		this.analyzePrintedCharacters(line);	
	}

	this.hasCharactersPrinted = function(){
		return this.numberOfPrintedCharacters > 0;
	}

	this.analyzePrintedCharacters = function(printedString){
        this.numberOfPrintedCharacters = printedString.trim().length;
    }
}