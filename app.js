var greet = require('./greet');
var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('log', function () {
    console.log('A log has been displayed on the console.');
});

emtr.on('log', function () {
    console.log('A log has been displayed on the console!!');
});

console.log(greet.english.props.languageName);
emtr.emit('log');
console.log(greet.spanish.languageName);
emtr.emit('log');