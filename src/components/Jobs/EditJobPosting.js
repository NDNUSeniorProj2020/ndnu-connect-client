import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import api from '../../api';
import createAuthHeader from '../../assets/js/createAuthHeader';
import JobListingForm from './JobListingForm';

export function ConnectedEditJobListing({ history, success, updateJob }) {
  const editJob = async (job) => {
    const headers = createAuthHeader(localStorage.getItem('token'));

    try {
      const res = await api().get('/accounts/current_user/', { headers });
      const { id } = res.data;
      updateJob(localStorage.getItem('token'), job, id);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <header>
        <h1>Edit Job Listing</h1>
      </header>
      <JobListingForm submitJob={editJob} />
    </div>
  );
}

