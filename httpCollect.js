var http = require('http');
var url = process.argv[2];
var completeResponse = '';

var appendResponse = function(result)
{
	completeResponse = completeResponse.concat(result);
}

var printResult = function()
{
	console.log(completeResponse.length);
	console.log(completeResponse);
}
var processResponse = function(response){
	response.setEncoding('utf8');
	response.on('data',appendResponse);
	response.on('error', console.error);
	response.on('end', printResult);
}

http.get(url,processResponse);