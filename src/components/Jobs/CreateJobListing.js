import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { message } from 'antd';

import { createJob } from '../../actions/jobs/jobsActions';
import { hasToken } from '../../actions/auth/authenticationActions';
import JobListingForm from './JobListingForm';

export function ConnectedCreateJobListing({ user, success, createJob, hasToken }) {
  useEffect(() => {
    const token = localStorage.getItem('token');
    hasToken(token);
  }, [hasToken]);

  const addJob = async (job) => {
    try {
      await createJob(localStorage.getItem('token'), job, user.id);
    } catch (err) {
      console.error(err);
      message.error('Cannot create job listing. Sorry for the inconvenience. Please try again.', 60);
    }
  };

  if (success)
    return <Redirect to={'/jobs'} />;

	return (
		<div>
      <header>
        <h1>Create Job Listing</h1>
      </header>
			<JobListingForm submitJob={addJob} />
		</div>
	);
}

ConnectedCreateJobListing.propTypes = {
  success: PropTypes.bool,
  createJob: PropTypes.func,
  hasToken: PropTypes.func,
  user: PropTypes.object,
};
ConnectedCreateJobListing.defaultProps = {
  success: false,
  createJob: f => f,
  hasToken: f => f,
  user: {}
};

const mapStateToProps = ({ jobsReducer, authReducer }) => ({
  user: authReducer.user,
  success: jobsReducer.success
});
const CreateJobListing = connect(mapStateToProps, { createJob, hasToken })(ConnectedCreateJobListing);

export default withRouter(CreateJobListing);
