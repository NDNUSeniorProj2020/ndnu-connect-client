import {
	FETCH_ALL_BOARDS_SUCCESS,
	FETCH_ALL_BOARDS_FAILURE
} from "../../constants/board/actionTypes";

const initialState = { board: {}, boards: [], success: false };

export default function boardReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_ALL_BOARDS_SUCCESS: {
			return Object.assign({}, state, {
				boards: [ ...action.payload.boards ],
				success: true
			});
		}
		case FETCH_ALL_BOARDS_FAILURE: {
			return Object.assign({}, state, {
				errors: { ...action.payload.errors }
			});
		}
		default:
			return state;
	}
}
