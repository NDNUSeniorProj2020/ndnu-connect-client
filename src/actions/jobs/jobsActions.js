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
import createError from '../../assets/js/createError';

// Fetch all jobs actions
export function fetchJobsSuccess(data) {
	return {
		type: FETCH_ALL_JOBS_SUCCESS,
		payload: { jobs: [...data] }
	};
}

export function fetchJobsFailure(errs) {
  console.error(errs);
  const defaultErr = ['Sorry, could not fetch jobs. Sorry for the inconvenience.'];
  const errors = errs.response ? errs.response.data.errors : { err: [...defaultErr] };
  let msg = createError(errors);

	return {
		type: FETCH_ALL_JOBS_FAILURE,
		payload: { errors: { msg } }
	};
}

export function fetchJobs() {
	return (dispatch) => {
    const token = localStorage.getItem('token');
		const headers = createAuthHeader(token);

		return api().get('/api/job/', { headers })
			.then(res => res.data)
			.then(data => dispatch(fetchJobsSuccess(data)))
			.catch(errors => dispatch(fetchJobsFailure(errors)));
	};
}

// Fetch single job actions
export function fetchJobSuccess(data) {
  return {
    type: FETCH_SINGLE_JOB_SUCCESS,
    payload: { job: { ...data } }
  };
}

export function fetchJobFailure(errs) {
  console.error(errs);
  const defaultErr = ['Sorry, could not fetch jobs. Sorry for the inconvenience.'];
  const errors = errs.response ? errs.response.data.errors : { err: [...defaultErr] };
  let msg = createError(errors);

  return {
    type: FETCH_SINGLE_JOB_FAILURE,
    payload: { errors: { msg } }
  };
}

export function fetchJob(jobId) {
  return (dispatch) => {
    const headers = createAuthHeader(localStorage.getItem('token'));

    return api().get(`/api/job/${jobId}/retrieve/`, { headers })
      .then(res => res.data)
      .then(data => dispatch(fetchJobSuccess(data)))
      .catch(errors => dispatch(fetchJobFailure(errors)));
  };
}

// Create job listing actions
export function createJobSuccess() {
  return { type: SAVE_JOB_SUCCESS };
}

export function createJobFailure(errs) {
  console.error(errs);
  const defaultErr = ['Sorry, could not create job listing. Sorry for the inconvenience.'];
  const errors = errs.response ? errs.response.data.errors : { err: [...defaultErr] };
  let msg = createError(errors);

  return {
    type: SAVE_JOB_FAILURE,
    payload: { errors: { msg } }
  };
}

export function createJob(job, userId) {
  return (dispatch) => {
    const headers = createAuthHeader(localStorage.getItem('token'));

    return api().post('/api/job/', { ...job, user: userId }, { headers })
      .then(() => dispatch(createJobSuccess()))
      .catch(errors => dispatch(createJobFailure(errors)));
  };
}

// Update job listing actions
export function updateJobSuccess() {
  return { type: UPDATE_JOB_SUCCESS };
}

export function updateJobFailure(errs ) {
  console.error(errs);
  const defaultErr = ['Sorry, could not update job listing. Sorry for the inconvenience.'];
  const errors = errs.response ? errs.response.data.errors : { err: [...defaultErr] };
  let msg = createError(errors);

  return {
    type: UPDATE_JOB_FAILURE,
    payload: { errors: { msg } }
  };
}

export function updateJob(job) {
  return (dispatch) => {
    const headers = createAuthHeader(localStorage.getItem('token'));

    return api().put(`/api/job/${job.id}/update/`, { ...job }, { headers })
      .then(() => dispatch(updateJobSuccess()))
      .catch(errors => dispatch(updateJobFailure(errors)));
  };
}
