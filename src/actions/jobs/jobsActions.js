import api from '../../api';
import {
	FETCH_ALL_JOBS_SUCCESS,
	FETCH_ALL_JOBS_FAILURE
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
			.catch(errors => dispatch(fetchJobsFailure(errors)));
	};
}
