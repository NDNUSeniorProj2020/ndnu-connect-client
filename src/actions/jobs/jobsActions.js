import api from '../../api';
import {
	FETCH_ALL_JOBS_SUCCESS,
  FETCH_ALL_JOBS_FAILURE,
  SAVE_JOB_SUCCESS,
  SAVE_JOB_FAILURE
} from '../../constants/jobs/actionTypes';
import createAuthHeader from '../../assets/js/createAuthHeader';
import axios from 'axios';

// Fetch all jobs actions
export function fetchJobsSuccess(data) {
	return {
		type: FETCH_ALL_JOBS_SUCCESS,
		payload: { jobs: [...data] }
	};
}

export function fetchJobsFailure(errors) {
	return {
		type: FETCH_ALL_JOBS_FAILURE,
		payload: { errors }
	};
}

export function fetchJobs(token) {
	return (dispatch) => {
		const headers = createAuthHeader(token);

		return api().get('/api/job/', { headers })
			.then(res => res.data)
			.then(data => dispatch(fetchJobsSuccess(data)))
			.catch(errors => dispatch(fetchJobsFailure(errors.response.data)));
	};
}

// Create job listing actions
export function createJobSuccess() {
  return { type: SAVE_JOB_SUCCESS };
}

export function createJobFailure(errors) {
  return {
    type: SAVE_JOB_FAILURE,
    payload: { errors }
  };
}

export function createJob(token, job, userId) {
  return (dispatch) => {
    const headers = createAuthHeader(token);

    return axios.post('http://localhost:8000/api/job/', { headers, ...job, user: userId })
      .then(() => dispatch(createJobSuccess()))
      .catch(errors => dispatch(createJobFailure(errors.response.data)));
  };
}
