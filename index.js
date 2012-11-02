module.exports = function (server) {
    var cons = [];
    server.on('connection', function (c) {
        cons.push(c);
        c.on('close', function () {
            var ix = cons.indexOf(c);
            if (ix >= 0) cons.splice(ix, 1);
        });
    });
    
    return function () {
        server.close();
        cons.forEach(function (c) { c.destroy() });
    };
};
