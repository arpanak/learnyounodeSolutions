var fs = require('fs');
var path = require('path');
var pathName = process.argv[2];
var extension = process.argv[3];


var readFileName = function(err,data){
	if(err) throw err;
	
	for(i=0;i<data.length;i++)
	{
		var extType = path.extname(data[i]);
		if(extType.indexOf(extension) > -1)
		{
			console.log(data[i]);
		}
	}
}

function printFileNames()
{
	fs.readdir(pathName, readFileName);
}

printFileNames();