module.exports = function(app) {
    var toasters = require('../controllers/toasterController.js');
    var sessions = require('../controllers/sessionController.js');

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
}
