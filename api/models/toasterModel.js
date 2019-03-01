var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ToasterSchema = new Schema({
	"id" : {
		type: String,
		default : ""
	},
	"username" : {
		type: String,
		default : ""
	}
});

module.exports = mongoose.model('Toasters', ToasterSchema);
