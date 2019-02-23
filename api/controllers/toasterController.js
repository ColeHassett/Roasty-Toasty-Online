var JsonDB = require('node-json-db');
var db = new JsonDB("roastyDB", true, true);

exports.getAllToasters = function(req, res) {
    try {
        checkKey(req.header);
        var toasters = db.getData('/toasters');
        res.send(toasters);
    } catch(e) {
        res.send({
            'error': e
        });
    }
};

exports.addToaster = function(req, res) {
    try {
        for (var i in req.body) {
            db.push('/toasters[]', req.body[i]);
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

exports.getToaster = function(req, res) {
    try {
        var toaster = db.getData('/toasters['+req.params.toaster_id+']')
        res.send(toaster);
    } catch(e) {
        res.send({
            'error': e
        });
    }
};

exports.updateToaster = function(req, res) {
    try {
        var toaster = db.push('/toasters['+req.params.toaster_id+']', req.body[0]);
        res.send({
            'result': 'success'
        });
    } catch(e) {
        res.send({
            'error': e
        });
    }
};

exports.deleteToaster = function(req, res) {
    try {
        db.delete('/toasters['+req.params.toaster_id+']');
        res.send({
            'result': 'success'
        });
    } catch(e) {
        res.send({
            'error': e
        });
    }

};

function checkKey(header) {
    console.log(header);
}
