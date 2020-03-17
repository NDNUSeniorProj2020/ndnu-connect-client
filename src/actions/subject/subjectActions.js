import {
	FETCH_SUBJECTS_REQUEST,
	FETCH_SUBJECTS_SUCCESS,
	FETCH_SUBJECTS_FAILURE
} from "../../constants/subject/actionTypes";
import api from "../../api";

// Fetch all subjects actions
export function fetchSubjectsRequest() {
	return { type: FETCH_SUBJECTS_REQUEST };
}

export function fetchSubjectsSuccess(data) {
	return { type: FETCH_SUBJECTS_SUCCESS, payload: { subjects: [ ...data.subjects ] } };
}

export function fetchSubjectsFailure(errors) {
	return { type: FETCH_SUBJECTS_FAILURE, payload: { errors: { ...errors } } };
}

export function fetchSubjects(token) {
	const headers = { Authorization: `Token ${token}` };
	return (dispatch) => {
		dispatch(fetchSubjectsRequest());
		return api().get('/api/subject/', { headers })
			.then(res => res.data)
			.then(data => dispatch(fetchSubjectsSuccess(data)))
			.catch(errors => dispatch(fetchSubjectsFailure(errors)));
	};
}