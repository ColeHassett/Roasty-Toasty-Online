import dispatcher from '../dispatcher.js';
import axios from 'axios';

import config from '../web_config.js';

export function getAllSessions() {
    console.log(process.env);
	axios("https ://roasty-toasty-online.herokuapp.com/sessions",
        {
            headers: {
                'x-api-key': config.api_key,
                'content-type': 'application/json'
            }
        }
    ).then( (body) => {
        console.log("BODY: ", body);
		dispatcher.dispatch({type: "RECEIVE_SESSIONS", sessions: JSON.parse(body)});
	});
}
