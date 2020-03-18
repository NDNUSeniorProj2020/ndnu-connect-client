import {
	FETCH_BOARDS_REQUEST,
	FETCH_BOARDS_SUCCESS,
	FETCH_BOARDS_FAILURE
} from "../../constants/board/actionTypes";
import {
	fetchBoardsRequest,
	fetchBoardsSuccess,
	fetchBoardsFailure,
	fetchBoards
} from "./boardActions";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import configureMockStore from "redux-mock-store";

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
const errors = { err: ['Failed to fetch.'] };

describe('tests for board actions', () => {
	const url = process.env.REACT_APP_API || 'http://localhost:8000';

	let store;
	let httpMock;

	const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

	beforeEach(() => {
		httpMock = new MockAdapter(axios);
		const mockStore = configureMockStore();
		store = mockStore({});
	});

	describe('test actions for fetching all boards', () => {
		it('calls fetchBoardsRequest and returns object with type FETCH_BOARDS_REQUEST', () => (
			expect(fetchBoardsRequest()).toEqual({ type: FETCH_BOARDS_REQUEST })
		));

		it('calls fetchBoardsSuccess and returns all boards', () => {
			const data = { boards };
			expect(fetchBoardsSuccess(data)).toEqual({ type: FETCH_BOARDS_SUCCESS, payload: { boards } });
		});

		it('calls fetchBoardsFailure and returns errors', () => {
			expect(fetchBoardsFailure(errors)).toEqual({ type: FETCH_BOARDS_FAILURE, payload: { errors } });
		});

		it('fetches all boards', async () => {
			httpMock.onGet(`${url}/api/board/`).reply(200, { boards });

			fetchBoards('someToken')(store.dispatch);
			await flushAllPromises();

			expect(store.getActions()).toEqual([
				{ type: FETCH_BOARDS_REQUEST },
				{ type: FETCH_BOARDS_SUCCESS, payload: { boards } }
			]);
		})
	});
});