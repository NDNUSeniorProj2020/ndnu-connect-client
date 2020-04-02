import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Jobs.css';
import { fetchJobs } from '../../actions/jobs/jobsActions';

export class ConnectedJobsPage extends Component {
  static propTypes = { jobs: PropTypes.array, fetchJobs: PropTypes.func }
  static defaultProps = { jobs: [], fetchJobs: f => f };

  componentDidMount() {
    const token = localStorage.getItem('token');
    this.props.fetchJobs(token);
  }

  componentWillUnmount() {}

  render() {
    console.log(this.props.jobs)
    if (this.props.success)
      return (
        <div>
          <p>We have jobs.</p>
        </div>
      )

    return <p>This is a test.</p>
  }
}

const mapStateToProps = ({ jobsReducer }) => ({ jobs: jobsReducer.jobs, success: jobsReducer.success });
const JobsPage = connect(mapStateToProps, { fetchJobs })(ConnectedJobsPage);

export default JobsPage;
