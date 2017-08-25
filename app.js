var greet = require('./greet');
var Emitter = require('./emitter');
var Person = require('./Person');
var Util = require('util');
var Events = require('events');


// var emtr = new Emitter();

// This extends the prototype of Person constructor with the Events Prototype

Util.inherits(Person, Events)

var emtr = new Person('John', 'Doe', 'Mr');

emtr.on('log', function (data) {
    console.log(`A log has been displayed on the console for ${data.displayName()}`);
});

console.log(greet.english.props.languageName);
emtr.emit('log', emtr);
console.log(greet.spanish.languageName);