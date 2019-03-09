var express = require('express');
var body_parser = require('body-parser');
var request = require('request');
var app = express();
var mongoose = require('mongoose');
const path = require('path');

var Days = require('./api/models/dayModel');
var Sessions = require('./api/models/sessionModel');
var Toasters = require('./api/models/toasterModel');
var Suggestions = require('./api/models/suggestionModel');

var config = require('./config.js');
var calendar = require('./calendar.js');

mongoose.Promise = global.Promise;
mongoose.connect(config.mongo_string);

app.use(body_parser.urlencoded({extended: true}));
app.use(body_parser.json());
app.use(express.static(path.join(__dirname, 'build')));

var routes = require('./api/routes/roastyRoute.js');
routes(app);

var api_url = 'https://roasty-toasty-online.herokuapp.com/';
var api_key_header = {
	'x-api-key': config.api_key,
	"content-type": "application/json"
};

app.get('/app', function(req, res){
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

var port = process.env.PORT || '8080';

app.listen(port);
console.log('Live');
