import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import TutorsPage from './Tutors/TutorsPage';
import { JobsPage } from './Jobs/index';

export default function Main() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/tutors" component={TutorsPage} />
				<Route exact path="/jobs" component={JobsPage} />
			</Switch>
		</div>
	);
}
