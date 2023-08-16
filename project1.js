var http = require('http');

http.createServer(function (req, res){
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain

    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the respose body as "Hello World"
    res.end('Hello World!\n');
}).listen(1337);

// Console will print the message
console.log('Server running at http://127.0.0.1:1337/');