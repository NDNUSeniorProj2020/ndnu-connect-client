import {
	FETCH_STUDENTS_REQUEST,
	FETCH_STUDENTS_SUCCESS,
	FETCH_STUDENTS_FAILURE
} from "../../constants/student/actionTypes";
import api from "../../api";

export function fetchStudentsRequest() {
	return { type: FETCH_STUDENTS_REQUEST }
}

export function fetchStudentsSuccess(data) {
	return {
		type: FETCH_STUDENTS_SUCCESS,
		payload: { students: [...data] }
	};
}

export function fetchStudentsFailure(errors) {
	return {
		type: FETCH_STUDENTS_FAILURE,
		payload: { errors }
	};
}

export function fetchStudents(token) {
	const headers = { Authorization: `Token ${token}` };

	return (dispatch) => {
		dispatch(fetchStudentsRequest());
		return api().get('/api/student/', { headers })
			.then(res => res.data)
			.then(data => dispatch(fetchStudentsSuccess(data)))
			.catch(errors => dispatch(fetchStudentsFailure(errors)));
	};
}
