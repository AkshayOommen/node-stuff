var greetings = require('./greetings.json');

var greet = function() {
    console.log(greetings.en);
}

// This will work
exports.props = {
    languageName: 'English',
    greet: greet
}