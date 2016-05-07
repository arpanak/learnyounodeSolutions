var http = require('http');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var response1 = '';
var response2 = '';
var response3 = '';
var countOfEnd = 0;

var appendResponseFor1 = function(result)
{
	response1 = response1.concat(result);
}

var appendResponseFor2 = function(result)
{
	response2 = response2.concat(result);
}

var appendResponseFor3 = function(result)
{
	response3 = response3.concat(result);
}
var printResult = function()
{
	countOfEnd++;
	if(countOfEnd == 3)
	{
		console.log(response1);
		console.log(response2);
		console.log(response3);
	}
}

var processResponseFor1 = function(response)
{
	response.on('data' ,appendResponseFor1);
	response.on('error', console.error);
	response.on('end', printResult);
}

var processResponseFor2 = function(response)
{
	response.on('data' ,appendResponseFor2);
	response.on('error', console.error);
	response.on('end', printResult);
}

var processResponseFor3 = function(response)
{
	response.on('data' ,appendResponseFor3);
	response.on('error', console.error);
	response.on('end', printResult);
}

http.get(url1,processResponseFor1);
http.get(url2,processResponseFor2);
http.get(url3,processResponseFor3);