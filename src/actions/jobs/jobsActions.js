import api from "../../api";
import {
	FETCH_ALL_SUCCESS,
	FETCH_ALL_FAILURE
} from "../../constants/actionTypes";

// Fetch all jobs actions
export function fetchJobsSuccess(data) {
	return {
		type: FETCH_ALL_SUCCESS,
		payload: { jobs: [...data] }
	};
}

export function fetchJobsFailure(errors) {
	return {
		type: FETCH_ALL_FAILURE,
		payload: { errors }
	};
}

export function fetchJobs(token) {
	const headers = { Authorization: `Token ${token}`};

	return (dispatch) => {
		return api().get('/api/job/', { headers })
			.then(res => res.data)
			.then(data => dispatch(fetchJobsSuccess(data)))
			.catch(errors => dispatch(fetchJobsFailure(errors)));
	};
}