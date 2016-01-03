var http=require('http');
http.createServer(function(req, response){
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hey\n');
}).listen(8000);

console.log("I started");
