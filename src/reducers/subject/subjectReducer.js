import { FETCH_ALL_SUCCESS, FETCH_ALL_FAILURE } from "../../constants/actionTypes";

const initialState = { subject: {}, subjects: [], success: false };

export default function subjectReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_ALL_SUCCESS: {
			return Object.assign({}, state, {
				subjects: [ ...action.payload.subjects ],
				success: true
			});
		}
		case FETCH_ALL_FAILURE: {
			return Object.assign({}, state, {
				errors: { ...action.payload.errors }
			});
		}
		default:
			return state;
	}
}