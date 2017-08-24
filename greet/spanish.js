var greetings = require('./greetings.json');

var greet = function() {
    console.log(greetings.es);
}


// This will not work
exports = {
    languageName: 'Spanish',
    greet: greet
}