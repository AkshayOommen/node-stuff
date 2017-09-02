var express = require('express');
var app = express();

var port = process.env.port || 3000;

app.get('/', function(req,res) {
    res.send('<html><head><h1>Welcome to Express!</h1></head><body>Enjoy your stay here.</body></html>')
});

app.get('/sample', function(req,res) {
    res.json({firstName: 'Akshay', lastName: 'Oommen'});
})

app.listen(port);