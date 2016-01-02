var net = require('net');
var repl = require('repl');
var connections = 0;

repl.start({
  prompt: 'jen>',
  input: process.stdin,
  output: process.stdout
});

net.createServer(function (socket) {
    connections += 1;
      repl.start({
            prompt: 'Node.js via TCP socket> ',
            input: socket,
            output: socket
          }).on('exit', function() {
            socket.end();
              });
}).listen(5001);
