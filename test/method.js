console.log('TAP Version 13');
console.log('0..1');

var net = require('net');
var assert = require('assert');
var enableDestroy = require('../index.js');

var server = net.createServer();

server.listen(1337);
enableDestroy(server);

var connected = 0;
for (var i = 0; i < 10; i++) {
    var client = net.connect(1337);
    client.on('connect', function() {
        connected++;
        if (connected === 10) setTimeout(destroy);
    });
    
    // just ignore the resets
    client.on('error', function() {});
}

function destroy() {
    var timer = setTimeout(function() {
        throw new Error('taking too long');
    }, 500);
    
    server.destroy(function() {
        clearTimeout(timer);
        console.log('ok 1');
    });
}
