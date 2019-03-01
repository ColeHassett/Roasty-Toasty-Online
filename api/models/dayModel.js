var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DaySchema = new Schema({
	"day" : {
		type: String,
		default : ""
	},
	"who" : {
		type: String,
		default : ""
	},
	"id" : {
		type: String,
		default : ""
	}
});

module.exports = mongoose.model('Days', DaySchema);
