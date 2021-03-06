import api from '../../api';
import {
	FETCH_ALL_DEPARTMENTS_SUCCESS,
	FETCH_ALL_DEPARTMENTS_FAILURE
} from '../../constants/department/actionTypes';
import createAuthHeader from '../../assets/js/createAuthHeader';

// Fetch all departments actions
export function fetchDepartmentsSuccess(data) {
	return {
		type: FETCH_ALL_DEPARTMENTS_SUCCESS,
		payload: { departments: [...data] }
	}
}

export function fetchDepartmentFailure(errors) {
	return {
		type: FETCH_ALL_DEPARTMENTS_FAILURE,
		payload: { errors }
	};
}

export function fetchDepartments(token) {
	return (dispatch) => {
		const headers = createAuthHeader(token);

		return api().get('/api/department/', { headers })
			.then(res => res.data)
			.then(data => dispatch(fetchDepartmentsSuccess(data)))
			.catch(errors => dispatch(fetchDepartmentFailure(errors)));
	};
}
