import {
	FETCH_BOARDS_SUCCESS,
	FETCH_BOARDS_FAILURE,
} from "../../constants/board/actionTypes";
import boardReducer from "./boardReducer";

const beforeState = { board: {}, boards: [], success: false };

describe('tests for boardReducer', () => {
	it('should return initial state', () => expect(boardReducer(undefined, {})).toEqual({ ...beforeState }));

	describe('tests for fetching all boards', () => {
		it('should return all boards if action type is FETCH_BOARDS_SUCCESS', () => {
			const boards = [
				{
					"id": 1,
					"name": "Announcements",
					"description": "Announce upcoming events at NDNU"
				},
				{
					"id": 2,
					"name": "Homework",
					"description": "Get help for homework."
				},
				{
					"id": 3,
					"name": "Random",
					"description": "Random board"
				}
			];
			const action = { type: FETCH_BOARDS_SUCCESS, payload: { boards } };
			expect(boardReducer(beforeState, action)).toEqual({ ...beforeState, boards, success: true });
		});

		it('should return errors if action type is FETCH_BOARDS_FAILURE', () => {
			const errors = { err: ['Failed to fetch boards.'] };
			const action = { type: FETCH_BOARDS_FAILURE, payload: { errors } };
			expect(boardReducer(beforeState, action)).toEqual({ ...beforeState, errors });
		});
	});
});