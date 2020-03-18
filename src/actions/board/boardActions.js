import {
	FETCH_BOARDS_REQUEST,
	FETCH_BOARDS_SUCCESS,
	FETCH_BOARDS_FAILURE
} from "../../constants/board/actionTypes";
import api from "../../api";

// Fetch all boards actions
export function fetchBoardsRequest() {
	return { type: FETCH_BOARDS_REQUEST };
}

export function fetchBoardsSuccess(data) {
	return { type: FETCH_BOARDS_SUCCESS, payload: { boards: [ ...data.boards] } };
}

export function fetchBoardsFailure(errors) {
	return { type: FETCH_BOARDS_FAILURE, payload: { errors } };
}

export function fetchBoards(token) {
	const headers = { Authorization: `Token ${token}` };
	return (dispatch) => {
		dispatch(fetchBoardsRequest());
		return api().get('/api/board/', { headers })
			.then(res => res.data)
			.then(data => dispatch(fetchBoardsSuccess(data)))
			.catch(errors => dispatch(fetchBoardsFailure(errors)));
	}
}