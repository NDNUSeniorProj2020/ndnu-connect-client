import {
	FETCH_TUTORS_REQUEST,
	FETCH_TUTORS_SUCCESS,
	FETCH_TUTORS_FAILURE
} from "../../constants/tutor/actionTypes";
import api from "../../api";

// Fetch all tutors actions
export function fetchTutorsRequest() {
	return { type: FETCH_TUTORS_REQUEST };
}

export function fetchTutorsSuccess(data) {
	return {
		type: FETCH_TUTORS_SUCCESS,
		payload: { tutors: [...data.tutors] }
	};
}

export function fetchTutorsFailure(errors) {
	return {
		type: FETCH_TUTORS_FAILURE,
		payload: { errors }
	};
}

export function fetchTutors(token) {
	const headers = { Authorization: `Token ${token}` };
	return (dispatch) => {
		dispatch(fetchTutorsRequest());
		return api().get('/api/tutor/', { headers })
			.then(res => res.data)
			.then(data => dispatch(fetchTutorsSuccess(data)))
			.catch(errors => dispatch(fetchTutorsFailure(errors)));
	};
}