var http = require('http');
var fs = require('fs');

http.createServer(function(req,res) {
    // Returning a text message
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.end('Welcome to NodeJS! \n\nEnjoy your stay here. :)');

    // Returning a text file
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // var txt = fs.readFileSync(__dirname + '/samples/sampleA.txt', 'utf8');
    // txt = txt.replace('{Title}', 'Lorem Ipsum');
    // res.end(txt);

    // Returning a text file using streams
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // fs.createReadStream(__dirname + '/samples/sampleA.txt').pipe(res);
    
    // Returning a JSON
    res.writeHead(200, {'Content-Type': 'application/json'});

    var list = {
        employees: [{
            id: 1,
            name: 'Akshay Oommen'
        }, {
            id: 2,
            name: 'Tina Thomas'
        }, {
            id: 3,
            name: 'Archie Andrews'
        }]
    };

    res.end(JSON.stringify(list));
}).listen(8085, '127.0.0.1');