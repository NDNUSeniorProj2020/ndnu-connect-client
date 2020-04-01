import { FETCH_ALL_SUBJECTS_SUCCESS, FETCH_ALL_SUBJECTS_FAILURE } from "../../constants/subject/actionTypes";

const initialState = { subject: {}, subjects: [], success: false };

export default function subjectReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_ALL_SUBJECTS_SUCCESS: {
			return Object.assign({}, state, {
				subjects: [ ...action.payload.subjects ],
				success: true
			});
		}
		case FETCH_ALL_SUBJECTS_FAILURE: {
			return Object.assign({}, state, {
				errors: { ...action.payload.errors }
			});
		}
		default:
			return state;
	}
}
