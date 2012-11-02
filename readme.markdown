# destroyer

destroy network servers for when `.close()` is not enough

[![build status](https://secure.travis-ci.org/substack/destroyer.png)](http://travis-ci.org/substack/destroyer)

# example

``` js
var destroyer = require('destroyer');
var net = require('net');

var server = net.createServer();
var destroy = destroyer(server);
server.listen(5000);

setTimeout(destroy, 4000);
```

# methods

``` js
var destroyer = require('destroyer')
```

## var destroy = destroyer(server)

Return a new function `destroy()` that will close the `server` and destroy all
its active connections.

http.createServer() and net.createServer() servers both work.

# install

With [npm](https://npmjs.org) do:

```
npm install destroyer
```

# license

MIT
