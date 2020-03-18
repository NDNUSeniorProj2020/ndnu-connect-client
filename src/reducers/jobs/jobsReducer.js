import {
	FETCH_JOBS_SUCCESS,
	FETCH_JOBS_FAILURE
} from "../../constants/jobs/actionTypes";

const initialState = { jobs: [], success: false };

export default function jobsReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_JOBS_SUCCESS: {
			return Object.assign({}, state, {
				jobs: [ ...action.payload.jobs ],
				success: true
			});
		}
		case FETCH_JOBS_FAILURE: {
			return Object.assign({}, state, {
				errors: action.payload.errors,
				success: false
			});
		}
		default:
			return state;
	}
}