var JsonDB = require('node-json-db');
var db = new JsonDB("roastyDB", true, true);

exports.getAllSessions = function(req, res) {
    try {
        var sessionss = db.getData('/sessions');
        res.send(sessionss);
    } catch(e) {
        res.send({
            'error': e
        });
    }
};

exports.addSession = function(req, res) {
    try {
        for (var i in req.body) {
            db.push('/sessions[]', req.body[i]);
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

exports.getSession = function(req, res) {
    try {
        var sessions = db.getData('/sessions['+req.params.sessions_id+']')
        res.send(sessions);
    } catch(e) {
        res.send({
            'error': e
        });
    }
};

exports.updateSession = function(req, res) {
    try {
        var sessions = db.push('/sessions['+req.params.sessions_id+']', req.body[0]);
        res.send({
            'result': 'success'
        });
    } catch(e) {
        res.send({
            'error': e
        });
    }
};

exports.deleteSession = function(req, res) {
    try {
        db.delete('/sessions['+req.params.sessions_id+']');
        res.send({
            'result': 'success'
        });
    } catch(e) {
        res.send({
            'error': e
        });
    }

};
