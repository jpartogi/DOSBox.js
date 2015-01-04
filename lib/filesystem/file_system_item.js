module.exports = FileSystemItem;

function FileSystemItem(name, parent){
	this.name = name;
	this.parent = parent;	

	this.getPath = function(){
		var path = "";

		if(this.parent != null) {
			path = this.parent.getPath() + "\\" + this.name;
		} else {
			path = this.name;
		}

		return path;
	}
}