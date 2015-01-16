var Directory = require('./directory');

module.exports = Drive;

function Drive(driveLetter){
	this.driveLetter = driveLetter.substring(0,1).toUpperCase();
	this.rootDir = new Directory(this.driveLetter + ":");
	this.currentDir = this.rootDir;

	this.restore = function() {}

	this.getPrompt = function(){
		return this.currentDir.getPath() + "\\> ";
	}
}