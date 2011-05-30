var http = require('http'),
    io = require('socket.io'),

server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end();
});

server.listen(8080);
 
var socket = io.listen(server);
socket.on('connection', function(client){
	client.on('message', function(message) {
		client.broadcast(message);
		console.log(message);
	});

	client.on('disconnect', function(){
     		console.log('Conncection closed.');
	});
});
