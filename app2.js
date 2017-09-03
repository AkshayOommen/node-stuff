var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

var urlEncodedParser = bodyParser.urlencoded({excluded: false});
var jsonParser = bodyParser.json();

var port = process.env.port || 3000;

app.use('/assets', express.static(__dirname + '/public'));
app.use('/lib', express.static(__dirname + '/bower_components'));

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
});

app.get('/person/:id', function(req,res) {
    var employees = {
        1: {name: 'Akshay Oommen', designation: 'Senior Software Developer'},
        2: {name: 'Vaibhav Singh', designation: 'Software Developer'},
        3: {name: 'Piyush Das', designation: 'Senior Software Developer'},
    }

    res.render('person', {emp: employees[req.params.id]});
});

// Parsing the query parameters using the 'query' object
app.get('/animal', function(req,res) {
    res.send('Returning a query string');
    console.log(req.query.firstName);
    console.log(req.query.lastName);
});

// Parsing the query parameters using the urlEncodedParser
app.post('/animal-url-encoded', urlEncodedParser, function(req,res) {
    res.send('Returning a query string using urlEncodedParser');
    console.log(req.body.firstName);
    console.log(req.body.lastName);
});

// Parsing the query parameters using the jsonParser
app.post('/animal-json', jsonParser, function(req,res) {
    res.send('Returning a query string using jsonParser');
    console.log(req.body.firstName);
    console.log(req.body.lastName);
});

app.listen(port);