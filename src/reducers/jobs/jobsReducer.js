import {
	FETCH_ALL_JOBS_SUCCESS,
  FETCH_ALL_JOBS_FAILURE,
  FETCH_SINGLE_JOB_SUCCESS,
  FETCH_SINGLE_JOB_FAILURE,
	SAVE_JOB_SUCCESS,
  SAVE_JOB_FAILURE,
  UPDATE_JOB_SUCCESS,
  UPDATE_JOB_FAILURE
} from '../../constants/jobs/actionTypes';

const initialState = { job: {}, jobs: [], success: false, updated: false, saved: false };

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
				errors: { ...action.payload.errors }
			});
    }
    case FETCH_SINGLE_JOB_SUCCESS: {
      return Object.assign({}, state, {
        job: { ...action.payload.job },
        success: true
      });
    }
    case FETCH_SINGLE_JOB_FAILURE: {
      return Object.assign({}, state, {
				errors: { ...action.payload.errors }
      });
    }
		case SAVE_JOB_SUCCESS: {
			return Object.assign({}, state, {
				saved: true
			});
		}
		case SAVE_JOB_FAILURE: {
			return Object.assign({}, state, {
				errors: { ...action.payload.errors }
			});
    }
    case UPDATE_JOB_SUCCESS: {
      return Object.assign({}, state, {
        updated: true
      });
    }
    case UPDATE_JOB_FAILURE: {
      return Object.assign({}, state, {
        errors: { ...action.payload.errors }
      });
    }
		default:
			return state;
	}
}
