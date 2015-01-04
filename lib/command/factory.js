var CmdCd = require('./library/cmd_cd'),
	CmdDir = require('./library/cmd_dir'),
	CmdMkDir = require('./library/cmd_mk_dir'),
	CmdMkFile = require('./library/cmd_mk_file');

module.exports = CommandFactory;

function CommandFactory(drive){
	this.commands = [
		new CmdCd("cd", drive),
		new CmdDir("dir", drive),
		new CmdMkDir("mkdir", drive),
		new CmdMkFile("mkfile", drive)
	]

	this.getCommands = function() {
		return this.commands;
	}
}