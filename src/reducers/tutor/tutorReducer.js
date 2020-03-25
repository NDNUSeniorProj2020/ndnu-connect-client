import { FETCH_ALL_SUCCESS, FETCH_ALL_FAILURE } from "../../constants/actionTypes";

const initialState = { tutor: {}, tutors: [], success: false };

export default function tutorReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_ALL_SUCCESS: {
			return Object.assign({}, state, {
				tutors: [ ...action.payload.tutors ],
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