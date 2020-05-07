import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { message } from 'antd';

import './Jobs.css';
import FilterJobsContainer from './FilterJobsContainer';
import { fetchJobs } from '../../actions/jobs/jobsActions';
import { hasToken } from '../../actions/auth/authenticationActions';

export function ConnectedJobsPage({ user, errors, jobs, success, fetchJobs }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    hasToken();
    fetchJobs();
    setIsLoading(false);
  }, [isLoading, fetchJobs]);

  if (success && !isLoading)
    return (
      <div>
        { Object.keys(errors).length > 0 && errors.msg.length > 0 ? message.error(errors.msg, 10) : null }
        <FilterJobsContainer jobs={jobs} />
      </div>
    );
  if (!success && !isLoading)
    return <p style={{ color: 'red' }}>Cannot load jobs.</p>;

  return <p>Loading page...</p>;
}

ConnectedJobsPage.propTypes = {
  jobs: PropTypes.array,
  success: PropTypes.bool,
  fetchJobs: PropTypes.func,
  user: PropTypes.object,
  errors: PropTypes.object
};
ConnectedJobsPage.defaultProps = { jobs: [], success: false, fetchJobs: f => f, user: {}, errors: {} };

const mapStateToProps = ({ jobsReducer, authReducer }) => ({
  jobs: jobsReducer.jobs,
  success: jobsReducer.success,
  errors: jobsReducer.errors,
  user: authReducer.user
});
const JobsPage = connect(mapStateToProps, { fetchJobs, hasToken })(ConnectedJobsPage);

export default JobsPage;
