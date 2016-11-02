/**
 * Created by ddn on 16/9/28.
 */

var server = require('./server');
var router = require('./router');

server.start(router.route);