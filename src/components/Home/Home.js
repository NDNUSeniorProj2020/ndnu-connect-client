import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Home.css';
import TwitterFeed from './TwitterFeed';
import Tutors from './Tutors';
import { fetchBoards } from '../../actions/board/boardActions';
import { fetchJobs } from '../../actions/jobs/jobsActions';
import { fetchTutors } from '../../actions/tutor/tutorActions';

export class ConnectedHome extends Component {
	static propTypes = {
		boards: PropTypes.array,
		jobs: PropTypes.array,
		tutors: PropTypes.array,
		fetchTutors: PropTypes.func,
		fetchJobs: PropTypes.func,
		fetchBoards: PropTypes.func
	};
	
	static defaultProps = {
		boards: [],
		jobs: [],
		tutors: [],
		fetchTutors: f => f,
		fetchJobs: f => f,
		fetchBoards: f => f
	};
	
	componentDidMount() {
		const token = localStorage.getItem('token');

		if (token) {
			this.props.fetchBoards(token);
			this.props.fetchTutors(token);
			this.props.fetchJobs(token);
		}
	}

	componentWillUnmount() {}

	render() {
		console.log(this.props)
		return (
			<div>
				<TwitterFeed />
				<Tutors />
			</div>
		);
	}
}

const mapStateToProps = ({ boardReducer, jobsReducer, tutorReducer }) => ({
	boards: boardReducer.boards,
	jobs: jobsReducer.jobs,
	tutors: tutorReducer.tutors,
	success: boardReducer.success && jobsReducer.success && tutorReducer.success
});
const Home = connect(mapStateToProps, { fetchBoards, fetchTutors, fetchJobs })(ConnectedHome);

export default Home;
