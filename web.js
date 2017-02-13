var express = require('express');

var routes = require('./routes')
var server =express();

server.use(express.urlencoded());

server.set('views', __dirname);

server.get('/', function (req, res){
    res.sendfile('index.html');
});
server.get('/blog', function (req, res){
    res.render('blog.ejs');
});
server.post('/sayHello', routes.sayhello);

server.listen(8080);