import {
	FETCH_ALL_STUDENTS_SUCCESS,
	FETCH_ALL_STUDENTS_FAILURE
} from '../../constants/student/actionTypes';
import api from '../../api';
import createAuthHeader from '../../assets/js/createAuthHeader';

// Fetch all students actions
export function fetchStudentsSuccess(data) {
	return {
		type: FETCH_ALL_STUDENTS_SUCCESS,
		payload: { students: [...data] }
	};
}

export function fetchStudentsFailure(errors) {
	return {
		type: FETCH_ALL_STUDENTS_FAILURE,
		payload: { errors }
	};
}

export function fetchStudents(token) {
	return (dispatch) => {
		const headers = createAuthHeader(token);

		return api().get('/api/student/', { headers })
			.then(res => res.data)
			.then(data => dispatch(fetchStudentsSuccess(data)))
			.catch(errors => dispatch(fetchStudentsFailure(errors)));
	};
}
