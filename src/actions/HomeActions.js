import dispatcher from '../dispatcher.js';
import axios from 'axios';

import config from '../web_config.js';

axios.defaults.headers.common['x-api-key'] = config.api_key;

export function getAllSessions() {
    console.log('hi');
	axios("https://roasty-toasty-online.herokuapp.com/sessions").then( (body) => {
        console.log("BODY: ", body);
		//dispatcher.dispatch("RECEIVE_SESSIONS". sessions: JSON.parse(body));
	});
}
