import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Jobs.css';
import FilterJobsContainer from './FilterJobsContainer';
import { fetchJobs } from '../../actions/jobs/jobsActions';
import { hasToken } from '../../actions/auth/authenticationActions';

export function ConnectedJobsPage({ user, jobs, success, fetchJobs }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    hasToken();
    fetchJobs();
    setIsLoading(false);
  }, [isLoading, fetchJobs]);

  if (success && !isLoading)
    return <FilterJobsContainer jobs={jobs} />;
  if (!success && !isLoading)
    return <p style={{ color: 'red' }}>Cannot load jobs.</p>;

  return <p>Loading page...</p>;
}

ConnectedJobsPage.propTypes = {
  jobs: PropTypes.array,
  success: PropTypes.bool,
  fetchJobs: PropTypes.func,
  user: PropTypes.object
};
ConnectedJobsPage.defaultProps = { jobs: [], success: false, fetchJobs: f => f, user: {} };

const mapStateToProps = ({ jobsReducer, authReducer }) => ({
  jobs: jobsReducer.jobs,
  success: jobsReducer.success,
  user: authReducer.user
});
const JobsPage = connect(mapStateToProps, { fetchJobs, hasToken })(ConnectedJobsPage);

export default JobsPage;
