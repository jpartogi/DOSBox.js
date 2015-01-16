require("blanket");
var assert = require("assert")
var Drive = require('../../lib/filesystem/drive');

describe('Drive', function(){
	var drive = new Drive("C");
	
	describe('prompt', function(){
		it('should return drive current prompt', function(){
			assert.equal(drive.getPrompt(), "C:\\> ");
		});
	});
});