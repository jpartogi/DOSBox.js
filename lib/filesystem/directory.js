var FileSystemItem = require('./file_system_item');

function Directory(name, parent){
	FileSystemItem.call(this, name, parent);
}

module.exports = Directory;