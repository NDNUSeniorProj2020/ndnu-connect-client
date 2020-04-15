import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import TutorsPage from './Tutors/TutorsPage';

export default function Main() {
	return (
		<div>
			<Switch>
				<Route path="/tutors">
					<TutorsPage />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</div>
	);
}