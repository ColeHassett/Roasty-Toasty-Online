var JsonDB = require('node-json-db');
var db = new JsonDB("roastyDB", true, true);

var utils = require('./controllerUtils.js');

exports.getAllDays = function(req, res) {
    try {
        if (!utils.checkAPIKey(req)) {
            throw "Invalid API Key";
        }
        var days = db.getData('/days');
        res.send(days);
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
        for (var i in req.body) {
            db.push('/days[]', req.body[i]);
        }
        res.send({
            'result': 'success'
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
        var day = db.getData('/days['+req.params.day_id+']')
        res.send(day);
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
        var day = db.push('/days['+req.params.day_id+']', req.body[0]);
        res.send({
            'result': 'success'
        });
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
        db.delete('/days['+req.params.day_id+']');
        res.send({
            'result': 'success'
        });
    } catch(e) {
        res.send({
            'error': e
        });
    }

};
