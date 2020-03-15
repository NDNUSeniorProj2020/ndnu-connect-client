import {
	FETCH_STUDENTS_SUCCESS,
	FETCH_STUDENTS_FAILURE
} from "../../constants/student/actionTypes";

const initialState = { students: [], success: false };

export default function studentReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_STUDENTS_SUCCESS: {
			return Object.assign({}, state, {
				students: action.payload.students,
				success: true
			});
		}
		case FETCH_STUDENTS_FAILURE: {
			return Object.assign({}, state, {
				errors: action.payload.errors,
				success: false
			});
		}
		default:
			return state;
	}
}