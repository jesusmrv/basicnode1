var http = require('http')
var port = process.env.PORT || 1113;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello  Node \n');
}).listen(port);