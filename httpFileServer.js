var http = require('http');
var fs = require('fs');
var portNum = process.argv[2];
var filePath = process.argv[3];

var callback = function(request, response){
	fs.createReadStream(filePath).pipe(response);
}
var server = http.createServer(callback);
server.listen(portNum);