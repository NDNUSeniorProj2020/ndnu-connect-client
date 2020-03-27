import { FETCH_ALL_SUCCESS, FETCH_ALL_FAILURE } from "../../constants/actionTypes";

const initialState = { students: [], success: false };

export default function studentReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_ALL_SUCCESS: {
			return Object.assign({}, state, {
				students: [...action.payload.students],
				success: true
			});
		}
		case FETCH_ALL_FAILURE: {
			return Object.assign({}, state, {
				errors: action.payload.errors,
				success: false
			});
		}
		default:
			return state;
	}
}