var mongoose = require('mongoose'),
Sessions = mongoose.model('Sessions');

var utils = require('./controllerUtils.js');
var config = require('../../config.js');

exports.getAllSessions = function(req, res) {
    try {
		if (!utils.checkAPIKey(req)) {
            throw "Invalid API Key";
        }
		Sessions.find({}, function(err, sessions) {
			console.log("ERROR: ", err);
			res.send(sessions);
		})
    } catch(e) {
        res.send({
            'error': e
        });
    }
};

exports.addSession = function(req, res) {
    try {
		if (!utils.checkAPIKey(req)) {
            throw "Invalid API Key";
        }
		var new_session = new Sessions(req.body);
		new_session.save(function(err, session) {
			res.send({
	            'result': 'success'
	        });
		});
    } catch(e) {
        res.send({
            'error': e
        });
    }
};

exports.getSession = function(req, res) {
    try {
        if (!utils.checkAPIKey(req)) {
            throw "Invalid API Key";
        }
		Sessions.findById(req.params.session_id, function(err, session) {
			res.send(sessions);
		});
    } catch(e) {
        res.send({
            'error': e
        });
    }
};

exports.updateSession = function(req, res) {
    try {
        if (!utils.checkAPIKey(req)) {
            throw "Invalid API Key";
        }
		console.log(req.body);
		console.log(req.params);
		Sessions.findOneAndUpdate({_id: req.params.session_id},
			{
				"time": req.body.time,
				"time_unf": req.body.time_unf,
				"toasters": req.body.toasters
			},
			{new: true},
			function(err, session) {
				res.send({
		            'result': 'success'
		        });
			}
		);
    } catch(e) {
        res.send({
            'error': e
        });
    }
};

exports.deleteSession = function(req, res) {
    try {
        if (!utils.checkAPIKey(req)) {
            throw "Invalid API Key";
        }
		Sessions.remove({_id: req.params.session_id},
			function(err, session) {
				res.send({
		            'result': 'success'
		        });
			}
		);
    } catch(e) {
        res.send({
            'error': e
        });
    }

};
