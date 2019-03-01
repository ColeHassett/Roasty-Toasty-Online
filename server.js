var express = require('express');
var body_parser = require('body-parser');
var request = require('request');
var app = express();
var mongoose = require('mongoose');

var Days = require('./api/models/dayModel');
var Sessions = require('./api/models/sessionModel');
var Toasters = require('./api/models/toasterModel');

var config = require('./config.js');
var calendar = require('./calendar.js');

var path = __dirname + '/views/';

mongoose.Promise = global.Promise;
mongoose.connect(config.mongo_string);

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
getSessions();

app.get('/', function(req, res){
	var sesh = '';
	getSessions();
	for (var i in sessions) {
		var toasters = [];
		for (var j in sessions[i].toasters) {
			toasters.push(sessions[i].toasters[j].username);
		}
		sesh += ('When?: '+ sessions[i].time+ ' | Who?: '+ toasters.join(', '));
	}
	setTimeout(function() {
		res.render(path + "index.pug", {data:sesh});
	}, 10000);

});

function getSessions() {
	request.get({
		url: api_url+'sessions',
		headers: api_key_header
	}, function(err, res, body) {
		sessions = JSON.parse(body);
	});
}

var port = process.env.PORT || '8080';

app.listen(port);
console.log('Live');
