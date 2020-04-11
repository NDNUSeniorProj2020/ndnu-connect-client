import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Jobs.css';
import FilterJobsContainer from './FilterJobsContainer';
import { fetchJobs } from '../../actions/jobs/jobsActions';

export function ConnectedJobsPage({ jobs, success, fetchJobs }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    fetchJobs(token);
    setIsLoading(false);
  }, [isLoading, fetchJobs]);

  if (success && !isLoading)
    return <FilterJobsContainer jobs={jobs} />;
  if (!success && !isLoading)
    return <p style={{ color: 'red' }}>Cannot load jobs.</p>;

  return <p>Loading page...</p>;
}

ConnectedJobsPage.propTypes = { jobs: PropTypes.array, success: PropTypes.bool, fetchJobs: PropTypes.func };
ConnectedJobsPage.defaultProps = { jobs: [], success: false, fetchJobs: f => f };

const mapStateToProps = ({ jobsReducer }) => ({ jobs: jobsReducer.jobs, success: jobsReducer.success });
const JobsPage = connect(mapStateToProps, { fetchJobs })(ConnectedJobsPage);

export default JobsPage;
