import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createJob } from '../../actions/jobs/jobsActions';
import api from '../../api';
import createAuthHeader from '../../assets/js/createAuthHeader';
import JobListingForm from './JobListingForm';

export function ConnectedCreateJobListing({ history, success, createJob }) {
  const addJob = async (job) => {
    const headers = createAuthHeader(localStorage.getItem('token'));

    try {
      const res = await api().get('/accounts/current_user/', { headers });
      console.log(res);
    } catch (err) {
      console.error(err);
    }
    //createJob(localStorage.getItem('token'), job, );
  };

	return (
		<div>
      <header>
        <h1>Create Job Listing</h1>
      </header>
			<JobListingForm submitJob={addJob} />
		</div>
	);
}

ConnectedCreateJobListing.propTypes = { success: PropTypes.bool, createJob: PropTypes.func };
ConnectedCreateJobListing.defaultProps = { success: false, createJob: f => f };

const mapStateToProps = ({ jobsReducer }) => ({ success: jobsReducer.success });
const CreateJobListing = connect(mapStateToProps, { createJob })(ConnectedCreateJobListing);

export default withRouter(CreateJobListing);
