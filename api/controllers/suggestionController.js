var mongoose = require('mongoose'),
Suggestions = mongoose.model('Suggestions');

var utils = require('./controllerUtils.js');
var config = require('../../config.js');

exports.getAllSuggestions = function(req, res) {
    try {
		if (!utils.checkAPIKey(req)) {
            throw "Invalid API Key";
        }
		Suggestions.find({}, function(err, suggestion) {
			res.send(suggestion);
		})
    } catch(e) {
        res.send({
            'error': e
        });
    }
};

exports.addSuggestion = function(req, res) {
    try {
		if (!utils.checkAPIKey(req)) {
            throw "Invalid API Key";
        }
		var new_suggestion = new Suggestions(req.body);
		new_suggestion.save(function(err, suggestion) {
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

exports.getSuggestion = function(req, res) {
    try {
        if (!utils.checkAPIKey(req)) {
            throw "Invalid API Key";
        }
		Suggestions.findById(req.params.suggestion_id, function(err, suggestion) {
			res.send(suggestion);
		});
    } catch(e) {
        res.send({
            'error': e
        });
    }
};

exports.updateSuggestion = function(req, res) {
    try {
        if (!utils.checkAPIKey(req)) {
            throw "Invalid API Key";
        }
		Suggestions.findOneAndUpdate({_id: req.params.suggestion_id},
			{
				"suggestion": req.body.suggestion,
				"who": req.body.who,
				"id": req.body.id
			},
			{new: true},
			function(err, suggestion) {
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

exports.deleteSuggestion = function(req, res) {
    try {
        if (!utils.checkAPIKey(req)) {
            throw "Invalid API Key";
        }
		Suggestions.remove({_id: req.params.suggestion_id},
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
