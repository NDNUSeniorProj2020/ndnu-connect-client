import api from "../../api";
import {
	FETCH_DEPARTMENTS_REQUEST,
	FETCH_DEPARTMENTS_SUCCESS,
	FETCH_DEPARTMENTS_FAILURE
} from "../../constants/department/actionTypes";

// Fetch all departments actions
export function fetchDepartmentsRequest() {
	return { type: FETCH_DEPARTMENTS_REQUEST };
}

export function fetchDepartmentsSuccess(data) {
	return {
		type: FETCH_DEPARTMENTS_SUCCESS,
		payload: { departments: [...data] }
	}
}

export function fetchDepartmentFailure(errors) {
	return {
		type: FETCH_DEPARTMENTS_FAILURE,
		payload: { errors }
	};
}

export function fetchDepartments(token) {
	const headers = { Authorization: `Token ${token}`};

	return (dispatch) => {
		dispatch(fetchDepartmentsRequest());
		return api().get('/api/department/', { headers })
			.then(res => res.data)
			.then(data => dispatch(fetchDepartmentsSuccess(data)))
			.catch(errors => dispatch(fetchDepartmentFailure(errors)));
	};
}