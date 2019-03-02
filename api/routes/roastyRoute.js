module.exports = function(app) {
    var toasters = require('../controllers/toasterController.js');
    var sessions = require('../controllers/sessionController.js');
	var days = require('../controllers/dayController.js');

    // Toasters
    app.route('/toasters')
        .get(toasters.getAllToasters)
        .post(toasters.addToaster);

    app.route('/toasters/:toaster_id')
        .get(toasters.getToaster)
        .put(toasters.updateToaster)
        .delete(toasters.deleteToaster);

    // Sessions
    app.route('/sessions')
        .get(sessions.getAllSessions)
        .post(sessions.addSession);

    app.route('/sessions/:session_id')
        .get(sessions.getSession)
        .put(sessions.updateSession)
        .delete(sessions.deleteSession);

	// Days
    app.route('/days')
        .get(days.getAllDays)
        .post(days.addDay);

    app.route('/days/:day_id')
        .get(days.getDay)
        .put(days.updateDay)
        .delete(days.deleteDay);

	// Days
	app.route('/suggestions')
		.get(suggestions.getAllDays)
		.post(suggestions.addDay);

	app.route('/suggestions/:suggestion_id')
		.get(suggestions.getDay)
		.put(suggestions.updateDay)
		.delete(suggestions.deleteDay);
}
