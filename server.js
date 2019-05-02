var express = require('express');
var body_parser = require('body-parser');
var request = require('request');
var app = express();
var mongoose = require('mongoose');
var fetch = require('node-fetch');
var btoa = require('btoa');
const path = require('path');

var Days = require('./api/models/dayModel');
var Sessions = require('./api/models/sessionModel');
var Toasters = require('./api/models/toasterModel');
var Suggestions = require('./api/models/suggestionModel');

var config = require('./config.js');
var calendar = require('./calendar.js');

var user_info;

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

app.get('/', async function(req, res){

	if (req.query.code) {
		let code = req.query.code;
		let creds = btoa(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`);
	    let redirect = 'https://roasty-toasty-online.herokuapp.com/';
		let response = await fetch(`https://discordapp.com/api/oauth2/token?grant_type=authorization_code&code=${code}&redirect_uri=${redirect}`,
			{
				method: 'POST',
				headers: {
					Authorization: `Basic ${creds}`,
				},
			});
		let json = await response.json();
		user_info = await fetch('https://discordapp.com/api/users/@me',
			{
				method: 'GET',
				headers: {
					Authorization: `Bearer ${json.access_token}`,
				},
			});
		console.log(`USER: ${user_info}`);
	}

	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

var port = process.env.PORT || '8080';

app.listen(port);
console.log('Live');
