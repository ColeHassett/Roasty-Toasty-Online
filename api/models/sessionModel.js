var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SessionSchema = new Schema({
	"time" : {
		type: String,
		default : ""
	},
	"time_unf" : {
		type: String,
		default : ""
	},
	"toasters" : [{
		id: String,
		username: String
	}]
});

module.exports = mongoose.model('Sessions', SessionSchema);
