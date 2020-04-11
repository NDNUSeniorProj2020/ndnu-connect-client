import {
	FETCH_ALL_JOBS_SUCCESS,
	FETCH_ALL_JOBS_FAILURE,
	FILTER_JOBS_BY_TYPE
} from "../../constants/jobs/actionTypes";

const initialState = { jobs: [], success: false };

export default function jobsReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_ALL_JOBS_SUCCESS: {
			return Object.assign({}, state, {
				jobs: [ ...action.payload.jobs ],
				success: true
			});
		}
		case FETCH_ALL_JOBS_FAILURE: {
			return Object.assign({}, state, {
				errors: action.payload.errors,
				success: false
			});
		}
		case FILTER_JOBS_BY_TYPE: {
			return Object.assign({}, state, {
				jobs: [ ...action.payload.jobs ],
				success: true
			});
		}
		default:
			return state;
	}
}
