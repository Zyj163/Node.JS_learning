//var http = require('http');
//http.createServer(function(request, response){
//	response.writeHead(200, {'Content-Type' : 'text/plain'});
//
//	response.end('hello world!');
//}).listen(8888);
//
//console.log("running");

var http = require('http');
var url  = require('url');

var querystring = require('querystring');

function start(route){
	function onRequest(request, response){
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");

		route(pathname);

		response.writeHead(200, {'Content-Type' : 'text/plain'});
		response.write('hello world');
		response.end();
	}

	http.createServer(onRequest).listen(3000);
	console.log('server has started');
}

//server.js通过exports对象把start作为模块的访问接口
exports.start = start;


//get\post
//http://www.runoob.com/nodejs/node-js-get-post.html