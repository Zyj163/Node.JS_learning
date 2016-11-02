

//http://www.runoob.com/nodejs/nodejs-stream.html
var fs = require('fs')
var zlib = require('zlib')

//压缩
//fs.createReadStream('input.txt')
//    .pipe(zlib.createGzip())
//    .pipe(fs.createWriteStream('input.zip'))

//解压
fs.createReadStream('input.zip')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input.txt'))