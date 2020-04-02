import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import { JobsPage } from './Jobs/index';

export default function Main() {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path="/" component={() => <Home />} />
					<Route exact path="/jobs" component={() => <JobsPage />} />
				</Switch>
			</Router>
		</div>
	);
}
