import {
	FETCH_STUDENTS_SUCCESS,
	FETCH_STUDENTS_FAILURE
} from "../../constants/student/actionTypes";

const initialState = { student: [], success: false };

export default function studentReducers(state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}