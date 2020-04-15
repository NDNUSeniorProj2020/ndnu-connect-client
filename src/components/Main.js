import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import TutorsPage from './Tutors/TutorsPage';

export default function Main() {
	return (
		<div>
			<Switch>
				<Route exact path="/tutors" component={<TutorsPage />} />
				<Route exact path="/" component={<Home />} />
			</Switch>
		</div>
	);
}