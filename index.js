module.exports = function (server) {
    var cons = {};
    server.on('connection', function (c) {
        var key = c.remoteAddress + ':' + c.remotePort;
        cons[key] = c;
        c.on('close', function () {
            delete cons[key];
        });
    });
    
    return server.destroy = function (cb) {
        server.close(cb);
        for (var key in cons)
            cons[key].destroy();
    };
};
