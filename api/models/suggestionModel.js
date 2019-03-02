var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SuggestionSchema = new Schema({
	"suggestion" : {
		type: String,
		default : ""
	}
});

module.exports = mongoose.model('Suggestions', SuggestionSchema);
