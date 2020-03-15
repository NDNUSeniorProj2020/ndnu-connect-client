import {
	FETCH_DEPARTMENTS_SUCCESS,
	FETCH_DEPARTMENTS_FAILURE
} from '../../constants/department/actionTypes';

const initialState = { department: [], success: false };

export default function departmentReducer(state = initialState, action) {
	switch(action.type) {
		case FETCH_DEPARTMENTS_SUCCESS: {
			return Object.assign({}, state, {
				department: action.payload.department,
				success: true
			});
		}
		case FETCH_DEPARTMENTS_FAILURE: {
			return Object.assign({}, state, {
				err: action.payload.err,
				success: false
			});
		}
		default:
			return state;
	}
}