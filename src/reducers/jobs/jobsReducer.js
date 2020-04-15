import {
	FETCH_ALL_JOBS_SUCCESS,
	FETCH_ALL_JOBS_FAILURE,
	SAVE_JOB_SUCCESS,
	SAVE_JOB_FAILURE,
} from '../../constants/jobs/actionTypes';

const initialState = { job: {}, jobs: [], success: false };

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
				errors: { ...action.payload.errors },
				success: false
			});
		}
		case SAVE_JOB_SUCCESS: {
			return Object.assign({}, state, {
				job: { ...action.payload.job },
				success: true
			});
		}
		case SAVE_JOB_FAILURE: {
			return Object.assign({}, state, {
				errors: { ...action.payload.errors }
			});
		}
		default:
			return state;
	}
}
