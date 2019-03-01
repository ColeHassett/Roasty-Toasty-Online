var mongo_user = encodeURIComponent("admin");
var mongo_pass = encodeURIComponent("pass1234");
var mongo_db_name = "roasty";
var connection_string = "mongodb+srv://"+mongo_user+":"+mongo_pass+"@the-game-x2kdw.gcp.mongodb.net/"+mongo_db_name+"?retryWrites=true";

module.exports = {
    'api_key': process.env.api_key || 'dBv0XmdZQ3cCB4S1LMKe',
	'mongo_string': connection_string
}
