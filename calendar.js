var calendar_data;

function loadData(data) {
	calendar_data = data
}

function loadCalendar() {
	console.log('made it');
}

module.exports.main = function(data) {
	loadData(data);
}
