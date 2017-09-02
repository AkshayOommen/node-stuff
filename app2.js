var express = require('express');
var path = require('path');
var app = express();

var port = process.env.port || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use('/', function(req, res, next) {
    console.log(req.url);   
    next();
});

app.get('/', function(req,res) {
    res.send('<html><head></head><body><h1>Welcome to Express!</h1><p>Enjoy your stay here.</p></body></html>')
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

    res.render('person', {emp: employees[req.params.id]});
})

app.listen(port);