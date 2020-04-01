import {
	FETCH_ALL_SUCCESS,
	FETCH_ALL_FAILURE
} from "../../constants/actionTypes";

const initialState = { departments: [], success: false };

export default function departmentReducer(state = initialState, action) {
	switch(action.type) {
		case FETCH_ALL_SUCCESS: {
			return Object.assign({}, state, {
				departments: [...action.payload.departments],
				success: true
			});
		}
		case FETCH_ALL_FAILURE: {
			return Object.assign({}, state, {
				errors: { ...action.payload.errors },
				success: false
			});
		}
		default:
			return state;
	}
}