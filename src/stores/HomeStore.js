import {EventEmitter} from 'events';

import dispatcher from '../dispatcher.js';

class HomeStore extends EventEmitter {

    constructor() {
        super();
        this.sessions = [];
    }

    getAllSessions() {
		return this.sessions;
	}

	handleActions(action) {
		switch(action.type) {
            case "RECEIVE_SESSIONS":
                console.log('hi');
                this.sessions = action.sessions;
                this.emit("change");
                break;
			default:
				break;
		}
	}
}

const homeStore = new HomeStore();
dispatcher.register(homeStore.handleActions.bind(homeStore));

export default homeStore;
