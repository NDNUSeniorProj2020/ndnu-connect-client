import { FETCH_ALL_TUTORS_SUCCESS, FETCH_ALL_TUTORS_FAILURE } from "../../constants/tutor/actionTypes";

const initialState = { tutor: {}, tutors: [], success: false };

export default function tutorReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_ALL_TUTORS_SUCCESS: {
			return Object.assign({}, state, {
				tutors: [ ...action.payload.tutors ],
				success: true
			});
		}
		case FETCH_ALL_TUTORS_FAILURE: {
			return Object.assign({}, state, {
				errors: { ...action.payload.errors }
			});
		}
		default:
			return state;
	}
}
