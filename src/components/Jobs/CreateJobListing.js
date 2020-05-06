import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { message } from 'antd';

import { createJob } from '../../actions/jobs/jobsActions';
import { hasToken } from '../../actions/auth/authenticationActions';
import JobListingForm from './JobListingForm';

export function ConnectedCreateJobListing({ user, errors, saved, createJob, hasToken }) {
  useEffect(() => {
    hasToken();
  }, [hasToken]);

  const addJob = job => createJob(job, user.id);

  if (saved)
    return <Redirect to={'/jobs'} />;

	return (
		<div>
      { Object.keys(errors).length > 0 && errors.msg.length > 0 ? message.error(errors.msg, 10) : null }
      <header>
        <h1>Create Job Listing</h1>
      </header>
			<JobListingForm submitJob={addJob} />
		</div>
	);
}

ConnectedCreateJobListing.propTypes = {
  saved: PropTypes.bool,
  createJob: PropTypes.func,
  hasToken: PropTypes.func,
  user: PropTypes.object,
  errors: PropTypes.object
};
ConnectedCreateJobListing.defaultProps = {
  saved: false,
  createJob: f => f,
  hasToken: f => f,
  user: {},
  errors: {}
};

const mapStateToProps = ({ jobsReducer, authReducer }) => ({
  user: authReducer.user,
  saved: jobsReducer.saved,
  errors: jobsReducer.errors
});
const CreateJobListing = connect(mapStateToProps, { createJob, hasToken })(ConnectedCreateJobListing);

export default withRouter(CreateJobListing);
