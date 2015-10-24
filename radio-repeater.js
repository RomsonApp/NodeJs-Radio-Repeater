var http = require('http'),
	fs = require('fs'),
	radioServer = 'http://195.95.206.20/HitFM',
	port = '8080';

http.createServer(handler).listen(port);

console.log('Server is created');

function handler(req, res) {
	res.writeHead(200, {
		'Content-Type':'audio/mpeg',
		'Access-Control-Allow-Origin': '*'
	});
	
	http.get(radioServer, function(response){
		console.log(response.clients);
		response.on('data', function (data) {
			res.write(data);
		});
	});
}