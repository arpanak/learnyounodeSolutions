var http = require('http');
var url = process.argv[2];

var printResult = function(result)
{
	console.log(result);
}
var processResponse = function(response){
	response.setEncoding('utf8');
	response.on('data',printResult);
	response.on('error', function(err){console.log(err.message)});
	response.on('end', function(){console.log('')});
}

http.get(url,processResponse);
