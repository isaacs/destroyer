var destroyer = require('../');
var net = require('net');

var server = net.createServer();
var destroy = destroyer(server);
server.listen(5000);

setTimeout(destroy, 4000);
