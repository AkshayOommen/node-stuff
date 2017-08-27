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

var readable = fs.createReadStream(__dirname + '/samples/sampleA.txt', {encoding: 'utf8', highWaterMark: 3 * 1000});

var writable = fs.createWriteStream(__dirname + '/samples/sampleB.txt', {encoding: 'utf8'});

readable.on('data', function(chunk) {
    writable.write(chunk);
})

module.exports = { fetchReadme, fetchReadmeAsync };