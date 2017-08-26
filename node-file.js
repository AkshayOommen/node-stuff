var fs = require('fs');

function fetchReadme() {
    var file = fs.readFileSync('./node-stuff/README.md', 'utf8');
    console.log(file);
}

function fetchReadmeAsync() {
    var file = fs.readFile('./node-stuff/README.md', 'utf8', function (err, data) {
        console.log(data);
    })
}

module.exports = { fetchReadme, fetchReadmeAsync };