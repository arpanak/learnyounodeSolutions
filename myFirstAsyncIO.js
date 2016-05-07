var fs = require('fs');
var filePath = process.argv[2];

var countLines = function(err, data){
	if(err)
	{
		throw err
	}
	
	console.log(data.toString().split('\n').length - 1);
}


fs.readFile(filePath, countLines);


