import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import TutorsPage from './Tutors/TutorsPage';

export default function Main() {
	return (
		<div>
			<Router>
				<Switch>
					<Route path="/">
						<TutorsPage />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}