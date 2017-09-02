var express = require('express');
var app = express();

var port = process.env.port || 3000;

app.get('/', function(req,res) {
    res.send('<html><head><h1>Welcome to Express!</h1></head><body>Enjoy your stay here.</body></html>')
});

app.get('/sample', function(req,res) {
    res.json({firstName: 'Akshay', lastName: 'Oommen'});
})

app.get('/person/:id', function(req,res) {
    var employees = {
        1: {name: 'Akshay Oommen', designation: 'Senior Software Developer'},
        2: {name: 'Vaibhav Singh', designation: 'Software Developer'},
        3: {name: 'Piyush Das', designation: 'Senior Software Developer'},
    }

    res.send('<html><head><h1>Welcome to Express!</h1></head><body>' 
    + employees[req.params.id].name + ' - ' + employees[req.params.id].designation + '</body></html>')
})

app.listen(port);