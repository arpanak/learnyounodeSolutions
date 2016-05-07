var filter = require('./findFileNameByExtType');

var pathName = process.argv[2];
var extension = process.argv[3];

var printResult = function(err, data)
{
	if(err) throw err
	for(i=0;i < data.length; i++)
	{
		console.log(data[i]);
	}
}

filter.findFileNameByExtType(pathName, extension, printResult);