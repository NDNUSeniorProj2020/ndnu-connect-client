import {
	FETCH_ALL_BOARDS_SUCCESS,
	FETCH_ALL_BOARDS_FAILURE
} from "../../constants/board/actionTypes";
import boardReducer from "./boardReducer";

const initialState = { board: {}, boards: [], success: false };

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

const errors = { err: ['Failed to fetch boards.'] };

describe('tests for boardReducer', () => {
	it('should return initial state', () => expect(boardReducer(undefined, {})).toEqual({ ...initialState }));

	describe('tests for fetching all boards', () => {
		it('sets up all boards', () => {
			const action = { type: FETCH_ALL_BOARDS_SUCCESS, payload: { boards } };
			expect(boardReducer(initialState, action)).toEqual({ ...initialState, boards, success: true });
		});

		it('sets up errors if fetching all boards fails', () => {
			const action = { type: FETCH_ALL_BOARDS_FAILURE, payload: { errors } };
			expect(boardReducer(initialState, action)).toEqual({ ...initialState, errors });
		});
	});
});
