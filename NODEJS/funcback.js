var fs = require('fs');

//异步
var data = fs.readFile('input.txt', function(err, data){
    if (err) return console.log(err);
    console.log(data.toString())
});

//同步
//var data = fs.readFileSync('input.txt');
//console.log(data.toString());
console.log('end');
