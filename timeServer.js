var net = require('net');
   var strftime = require('strftime');
var portNumber = process.argv[2];

var callback = function(socket){
	socket.end(strftime('%F %H:%M')+'\n');
}

var server = net.createServer(callback);
server.listen(portNumber);
