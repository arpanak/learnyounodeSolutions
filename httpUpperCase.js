var http = require('http');
var portNum = process.argv[2];

var toUpperCase = function(text)
{
	return text.toUpperCase();
}


var callback = function(request, response){
	if(request.method =='POST'){
		request.on('data', function(chunk){ 
		response.write(chunk.toString().toUpperCase())
		});
	}
	
}

var server = http.createServer(callback);
server.listen(portNum);