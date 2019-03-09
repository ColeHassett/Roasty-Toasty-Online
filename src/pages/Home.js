import React from 'react';

import HomeStore from '../stores/HomeStore';
import * as HomeActions from '../actions/HomeActions';

export default class Home extends React.Component {

    constructor() {
        super();
        this.getAllSessions.bind(this);
        this.state = {
			sessions: HomeStore.getAllSessions(),
		}
        this.getAllSessions();
        setInterval(() => {
            this.getAllSessions();
        }, 60000);
    }

    componentWillMount() {
        HomeStore.on("change", this.getAllSessions);
    }

    componentWillUnmount() {
        HomeStore.removeListener("change", this.getAllSessions);
    }

    getAllSessions() {
        HomeActions.getAllSessions();
        this.state.sessions = HomeStore.getAllSessions();
    }

    render() {
        console.log("STATE: ", this.state);
        return (
            <div id="home_container">
				<h1>Scheduled Sessions</h1>
				<ul>
					{this.state.sessions.map((session) => (
						<li>
							<h3>Starts At: {session.time}</h3>
							{session.toasters.map((toaster) => (
								<h4>{toaster.username}</h4>
							))}
						</li>
					))}
				</ul>
            </div>
        );
    }
}
