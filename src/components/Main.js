import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import TutorsPage from './Tutors/TutorsPage';
import { JobsPage, CreateJobListing, EditJobListing } from './Jobs/index';
import Alumni from './Alumni/Alumni'

export default function Main() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/tutors" component={TutorsPage} />
				<Route exact path="/jobs" component={JobsPage} />
        <Route exact path="/jobs/create-posting" component={CreateJobListing} />
        <Route exact path="/jobs/edit/:id" component={EditJobListing} />
        <Route exact path="/alumni" component={Alumni} />
			</Switch>
		</div>
	);
}
