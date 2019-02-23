var config = require('../../config.js');

exports.checkAPIKey = function(req) {
    var header = req.header('x-api-key')
    if (header == config.api_key) {
        return true;
    }
    return false;
}
