import api from "../../api";
import {
	FETCH_ALL_SUCCESS,
	FETCH_ALL_FAILURE
} from "../../constants/actionTypes";

// Fetch all departments actions
export function fetchDepartmentsSuccess(data) {
	return {
		type: FETCH_ALL_SUCCESS,
		payload: { departments: [...data] }
	}
}

export function fetchDepartmentFailure(errors) {
	return {
		type: FETCH_ALL_FAILURE,
		payload: { errors }
	};
}

export function fetchDepartments(token) {
	const headers = { Authorization: `Token ${token}`};

	return (dispatch) => {
		return api().get('/api/department/', { headers })
			.then(res => res.data)
			.then(data => dispatch(fetchDepartmentsSuccess(data)))
			.catch(errors => dispatch(fetchDepartmentFailure(errors)));
	};
}