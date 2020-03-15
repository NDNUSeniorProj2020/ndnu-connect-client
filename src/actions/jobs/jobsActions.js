import api from "../../api";
import {
	FETCH_JOBS_REQUEST,
	FETCH_JOBS_SUCCESS,
	FETCH_JOBS_FAILURE
} from "../../constants/jobs/actionTypes";

// Fetch all jobs actions
export function fetchJobsRequest() {
	return { type: FETCH_JOBS_REQUEST };
}

export function fetchJobsSuccess(data) {
	return {
		type: FETCH_JOBS_SUCCESS,
		payload: { jobs: data.jobs }
	};
}

export function fetchJobsFailure(errors) {
	return {
		type: FETCH_JOBS_FAILURE,
		errors
	};
}

export function fetchJobs(token) {
	const headers = { Authorization: `Token ${token}`};

	return (dispatch) => {
		dispatch(fetchJobsRequest());
		return api().get('/api/jobs/', { headers })
			.then(res => res.data)
			.then(data => dispatch(fetchJobsSuccess(data)))
			.catch(errors => dispatch(fetchJobsFailure(errors)));
	};
}