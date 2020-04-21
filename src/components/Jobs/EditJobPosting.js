import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { message } from 'antd';

import { fetchJob, updateJob } from '../../actions/jobs/jobsActions';
import JobListingForm from './JobListingForm';

export function ConnectedEditJobListing({ job, success, updated, fetchJob, updateJob }) {
  useEffect(() => {
    const id = window.location.pathname.replace('/jobs/edit/', '');
    const token = localStorage.getItem('token');

    fetchJob(token, id);
  }, [fetchJob]);

  const editJob = async (editedJob) => {
    const updatedJob = Object.assign({}, job, editedJob)

    try {
      await updateJob(localStorage.getItem('token'), updatedJob);
    } catch (err) {
      console.error(err);
      message.error('Cannot update job listing. Sorry for the inconvenience. Please try again.', 60);
    }
  };

  if (updated)
    return <Redirect to="/jobs" />;

  if (success && Object.keys(job).length > 0)
    return (
      <div>
        <header>
          <h1>Edit Job Listing</h1>
        </header>
        <JobListingForm job={job} submitJob={editJob} />
      </div>
    );

  return <p>Loading page...</p>;
}

ConnectedEditJobListing.propTypes = {
  job: PropTypes.object,
  success: PropTypes.bool,
  updated: PropTypes.bool,
  updateJob: PropTypes.func,
  fetchJob: PropTypes.func
};
ConnectedEditJobListing.defaultProps = {
  job: {},
  success: false,
  updated: false,
  updateJob: f => f,
  fetchJob: f => f
};

const mapStateToProps = ({ jobsReducer }) => ({
  job: jobsReducer.job,
  success: jobsReducer.success,
  updated: jobsReducer.updated
});
const EditJobListing = connect(mapStateToProps, { fetchJob, updateJob })(ConnectedEditJobListing);

export default EditJobListing;
