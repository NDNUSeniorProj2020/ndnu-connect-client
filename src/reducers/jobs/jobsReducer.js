import {
	FETCH_ALL_SUCCESS,
	FETCH_ALL_FAILURE
} from "../../constants/actionTypes";

const initialState = { jobs: [], success: false };

export default function jobsReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_ALL_SUCCESS: {
			return Object.assign({}, state, {
				jobs: [ ...action.payload.jobs ],
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