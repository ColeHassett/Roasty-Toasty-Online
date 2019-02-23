var express = require('express');
var body_parser = require('body-parser');
var request = require('request');
var app = express();

var config = require('./config.js');
var calendar = require('./calendar.js');

var path = __dirname + '/views/';

app.use(body_parser.urlencoded({extended: true}));
app.use(body_parser.json());
//app.use(express.static(__dirname + "/views"));

var routes = require('./api/routes/roastyRoute.js');
routes(app);

var api_url = 'https://roasty-toasty-online.herokuapp.com/';
var api_key_header = {
	'x-api-key': config.api_key,
	"content-type": "application/json"
};
var sessions;
request.get({
	url: api_url+'sessions',
	headers: api_key_header
}, function(err, res, body) {
	sessions = JSON.parse(body);
});

app.get('/', function(req, res){
	var sesh;
	for (var i in sessions) {
		var toasters;
		for (var j in sessions[i].toasters) {
			console.log(sessions[i].toasters[j].username);
		}
		console.log(sessions[i].toasters);
		sesh += ('When?: '+ sessions[i].time+ '\nWho?: '+ sessions[i].toasters.join(', ')+ '\n');
	}
	res.render(path + "index.pug", {data:sesh});
});

var port = process.env.PORT || '8080';

app.listen(port);
console.log('Live');
