var express = require('express');
var body_parser = require('body-parser');
var app = express();

var path = __dirname + '/views/';

app.use(body_parser.urlencoded({extended: true}));
app.use(body_parser.json());

var routes = require('./api/routes/roastyRoute.js');
routes(app);

app.get('/', function(req, res){
	res.render(path + "index.html");
});

var port = process.env.PORT || '8080';

app.listen(port);
