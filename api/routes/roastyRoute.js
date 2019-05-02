module.exports = function(app) {
    var toasters = require('../controllers/toasterController.js');
    var sessions = require('../controllers/sessionController.js');
	var days = require('../controllers/dayController.js');
	var suggestions = require('../controllers/suggestionController.js');

    const path = require('path');

    console.log(app.header);

    app.route('/login').get((req, res) => {
        const redirect = 'https://roasty-toasty-online.herokuapp.com/';
        res.redirect(`https://discordapp.com/oauth2/authorize?client_id=${process.env.CLIENT_ID}&scope=identify&response_type=code&redirect_uri=${redirect}`);
    });

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

	// Suggestions
	app.route('/suggestions')
		.get(suggestions.getAllSuggestions)
		.post(suggestions.addSuggestion);

	app.route('/suggestions/:suggestion_id')
		.get(suggestions.getSuggestion)
		.put(suggestions.updateSuggestion)
		.delete(suggestions.deleteSuggestion);
}
