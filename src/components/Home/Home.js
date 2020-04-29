import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Home.css';
import TwitterFeed from './TwitterFeed';
import TutorsWidget from '../Tutors/TutorsWidget';
import JobsWidget from '../Jobs/JobsWidget';
import { fetchJobs } from '../../actions/jobs/jobsActions';
import { fetchTutors } from '../../actions/tutor/tutorActions';
import { Row, Col, Card } from 'antd';

export function ConnectedHome({ jobs, tutors, success, fetchTutors, fetchJobs }) {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const token = localStorage.getItem('token');

		fetchTutors(token);
		fetchJobs(token);
		setIsLoading(false);
	}, [isLoading, fetchTutors, fetchJobs]);

	if (success && !isLoading)
		return (
			<div>
				<Row gutter={16}>
					<Col span={16}>
						<JobsWidget jobs={jobs} />
					</Col>
					<Col span={8}>
						<Row gutter={16}>
							<TwitterFeed />
						</Row>
						<Row gutter={16}>
							<TutorsWidget />
						</Row>
					</Col>
				</Row>
			</div>
		);

	return <h1>Dashboard</h1>;
}

ConnectedHome.propTypes = {
	boards: PropTypes.array,
	jobs: PropTypes.array,
	tutors: PropTypes.array,
	fetchTutors: PropTypes.func,
	fetchJobs: PropTypes.func,
};

ConnectedHome.defaultProps = {
	jobs: [],
	tutors: [],
	fetchTutors: f => f,
	fetchJobs: f => f,
};

const mapStateToProps = ({ jobsReducer, tutorReducer }) => ({
	jobs: jobsReducer.jobs,
	tutors: tutorReducer.tutors,
	success: jobsReducer.success && tutorReducer.success
});
const Home = connect(mapStateToProps, { fetchTutors, fetchJobs })(ConnectedHome);

export default Home;
