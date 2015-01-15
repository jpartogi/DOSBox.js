var FileSystemItem = require('./file_system_item');

function File(name, parent){
	FileSystemItem.call(this, name, parent);
}

module.exports = File;