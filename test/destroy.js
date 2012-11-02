var test = require('tap').test;
var destroyer = require('../');
var net = require('net');

var server = net.createServer();
var destroy = destroyer(server);

test('destroyer of servers', function (t) {
    t.plan(1);
    
    server.listen(0, function () {
        var t0 = Date.now();
        
        var c = net.connect(server.address().port);
        c.on('close', function () {
            t.ok(Date.now() - t0 < 1050);
        });
        
        setTimeout(destroy, 1000);
    });
});
