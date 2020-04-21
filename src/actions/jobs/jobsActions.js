import api from '../../api';
import {
	FETCH_ALL_JOBS_SUCCESS,
  FETCH_ALL_JOBS_FAILURE,
  FETCH_SINGLE_JOB_SUCCESS,
  FETCH_SINGLE_JOB_FAILURE,
  SAVE_JOB_SUCCESS,
  SAVE_JOB_FAILURE,
  UPDATE_JOB_SUCCESS,
  UPDATE_JOB_FAILURE
} from '../../constants/jobs/actionTypes';
import createAuthHeader from '../../assets/js/createAuthHeader';

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

// Fetch single job actions
export function fetchJobSuccess(data) {
  return {
    type: FETCH_SINGLE_JOB_SUCCESS,
    payload: { job: { ...data } }
  };
}

export function fetchJobFailure(errors) {
  return {
    type: FETCH_SINGLE_JOB_FAILURE,
    payload: { errors }
  };
}

export function fetchJob(token, jobId) {
  return (dispatch) => {
    const headers = createAuthHeader(token);

    return api().get(`/api/job/${jobId}/retrieve/`, { headers })
      .then(res => res.data)
      .then(data => dispatch(fetchJobSuccess(data)))
      .catch(errors => dispatch(fetchJobFailure(errors.response.data)));
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

    return api().post('/api/job/', { ...job, user: userId }, { headers })
      .then(() => dispatch(createJobSuccess()))
      .catch(errors => dispatch(createJobFailure(errors.response.data)));
  };
}

// Update job listing actions
export function updateJobSuccess() {
  return { type: UPDATE_JOB_SUCCESS };
}

export function updateJobFailure(errors) {
  console.error(errors);
  return {
    type: UPDATE_JOB_FAILURE,
    payload: { errors }
  };
}

export function updateJob(token, job) {
  console.log(job)
  return (dispatch) => {
    const headers = createAuthHeader(token);

    return api().put(`/api/job/${job.id}/update/`, { ...job }, { headers })
      .then(() => dispatch(updateJobSuccess()))
      .catch(errors => dispatch(updateJobFailure(errors.response.data)));
  };
}
