var mongoose = require('mongoose'),
Toasters = mongoose.model('Toasters');

var utils = require('./controllerUtils.js');
var config = require('./config.js');

exports.getAllToasters = function(req, res) {
    try {
		if (!utils.checkAPIKey(req)) {
            throw "Invalid API Key";
        }
		Toasters.find({}, function(err, toaster) {
			res.send(toaster);
		})
    } catch(e) {
        res.send({
            'error': e
        });
    }
};

exports.addToaster = function(req, res) {
    try {
		if (!utils.checkAPIKey(req)) {
            throw "Invalid API Key";
        }
		var new_toaster = new Toasters(req.body);
		new_toaster.save(function(err, toaster) {
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

exports.getToaster = function(req, res) {
    try {
        if (!utils.checkAPIKey(req)) {
            throw "Invalid API Key";
        }
		Toasters.findById(req.params.toaster_id, function(err, toaster) {
			res.send(toasters);
		});
    } catch(e) {
        res.send({
            'error': e
        });
    }
};

exports.updateToaster = function(req, res) {
    try {
        if (!utils.checkAPIKey(req)) {
            throw "Invalid API Key";
        }
		Toasters.findOneAndUpdate({id: req.params.toaster_id},
			req.body,
			{new: true},
			function(err, toaster) {
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

exports.deleteToaster = function(req, res) {
    try {
        if (!utils.checkAPIKey(req)) {
            throw "Invalid API Key";
        }
		Toasters.remove({id: req.params.toaster_id},
			function(err, toaster) {
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
