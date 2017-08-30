var http = require('http');
var fs = require('fs');

http.createServer(function(req,res) {
    // Returning a text message
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.end('Welcome to NodeJS! \n\nEnjoy your stay here. :)');

    // Returning a text file
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var txt = fs.readFileSync(__dirname + '/samples/sampleA.txt');
    res.end(txt);
}).listen(8085, '127.0.0.1');