/**
 * Created by ddn on 16/9/28.
 */

var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('hello world')
});

var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('应用实例,访问地址为http://%s:%s',host,port)
});

//http://www.runoob.com/nodejs/nodejs-express-framework.html