import {
	FETCH_ALL_TUTORS_SUCCESS,
	FETCH_ALL_TUTORS_FAILURE
} from '../../constants/tutor/actionTypes';
import api from '../../api';
import createAuthHeader from '../../assets/js/createAuthHeader';

// Fetch all tutors actions
export function fetchTutorsSuccess(data) {
	return {
		type: FETCH_ALL_TUTORS_SUCCESS,
		payload: { tutors: data }
	};
}

export function fetchTutorsFailure(errors) {
	return {
		type: FETCH_ALL_TUTORS_FAILURE,
		payload: { errors }
	};
}

export function fetchTutors(token) {
	return (dispatch) => {
		const headers = createAuthHeader(token);

		return api().get('/api/tutor/', { headers })
			.then(res => res.data)
			.then(data => dispatch(fetchTutorsSuccess(data)))
			.catch(errors => dispatch(fetchTutorsFailure(errors)));
	};
}
