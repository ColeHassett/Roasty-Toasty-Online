var mongoose = require('mongoose'),
Days = mongoose.model('Days');

var utils = require('./controllerUtils.js');
var config = require('../../config.js');

exports.getAllDays = function(req, res) {
    try {
		if (!utils.checkAPIKey(req)) {
            throw "Invalid API Key";
        }
		Days.find({}, function(err, day) {
			res.send(day);
		})
    } catch(e) {
        res.send({
            'error': e
        });
    }
};

exports.addDay = function(req, res) {
    try {
		if (!utils.checkAPIKey(req)) {
            throw "Invalid API Key";
        }
		var new_day = new Days(req.body);
		new_day.save(function(err, day) {
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

exports.getDay = function(req, res) {
    try {
        if (!utils.checkAPIKey(req)) {
            throw "Invalid API Key";
        }
		Days.findById(req.params.day_id, function(err, day) {
			res.send(days);
		});
    } catch(e) {
        res.send({
            'error': e
        });
    }
};

exports.updateDay = function(req, res) {
    try {
        if (!utils.checkAPIKey(req)) {
            throw "Invalid API Key";
        }
		Days.findOneAndUpdate({id: req.params.day_id},
			req.body,
			{new: true},
			function(err, day) {
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

exports.deleteDay = function(req, res) {
    try {
        if (!utils.checkAPIKey(req)) {
            throw "Invalid API Key";
        }
		Days.collection.dropIndex(req.params.day_id,
			function(err, day) {
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
