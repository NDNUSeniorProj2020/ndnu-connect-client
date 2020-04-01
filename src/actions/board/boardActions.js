import {
	FETCH_ALL_BOARDS_SUCCESS,
	FETCH_ALL_BOARDS_FAILURE
} from "../../constants/board/actionTypes";
import api from "../../api";

// Fetch all boards actions
export function fetchBoardsSuccess(data) {
	return { type: FETCH_ALL_BOARDS_SUCCESS, payload: { boards: data } };
}

export function fetchBoardsFailure(errors) {
	return { type: FETCH_ALL_BOARDS_FAILURE, payload: { errors } };
}

export function fetchBoards(token) {
	const headers = { Authorization: `Token ${token}` };
	return (dispatch) => {
		return api().get('/api/board/', { headers })
			.then(res => res.data)
			.then(data => dispatch(fetchBoardsSuccess(data)))
			.catch(errors => dispatch(fetchBoardsFailure(errors)));
	}
}
