import React from 'react';

import HomeStore from '../stores/HomeStore';
import * as HomeActions from '../actions/HomeActions';

export default class Home extends React.Component {

    constructor() {
        super();
        this.updateSessions = this.updateSessions.bind(this);
        this.state = {
			sessions: HomeStore.getAllSessions(),
		}
        this.getAllSessions();
        setInterval(() => {
            this.getAllSessions();
        }, 15000);
    }

    componentWillMount() {
        HomeStore.on("change", this.updateSessions);
    }

    componentWillUnmount() {
        HomeStore.removeListener("change", this.updateSessions);
    }

    getAllSessions() {
        HomeActions.getAllSessions();
    }

    updateSessions() {
        this.setState(
            {
                sessions: HomeStore.getAllSessions()
            }
        );
    }

    render() {
        return (
            <div id="home_container">
				<h1>Scheduled Sessions</h1>
				<ul id="sessions_list">
					{this.state.sessions.map((session) => (
						<li>
                            <h3>Starts At: {session.time}</h3>
                            <ul id="toaster_list">
							{session.toasters.map((toaster) => (
								<li>{toaster.username}</li>
							))}
                            </ul>
						</li>
					))}
				</ul>
            </div>
        );
    }
}
