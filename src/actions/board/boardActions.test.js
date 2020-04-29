import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';

import {
	FETCH_ALL_BOARDS_SUCCESS,
	FETCH_ALL_BOARDS_FAILURE
} from '../../constants/board/actionTypes';
import {
	fetchBoardsSuccess,
	fetchBoardsFailure,
	fetchBoards
} from './boardActions';
import { url } from '../../api';

const boards = [
	{
		'id': 1,
		'name': 'Announcements',
		'description': 'Announce upcoming events at NDNU'
	},
	{
		'id': 2,
		'name': 'Homework',
		'description': 'Get help for homework.'
	},
	{
		'id': 3,
		'name': 'Random',
		'description': 'Random board'
	}
];
const errors = { err: ['Failed to fetch.'] };

describe('tests for board actions', () => {
	let store;
	let httpMock;

	const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

	beforeEach(() => {
		httpMock = new MockAdapter(axios);
		const mockStore = configureMockStore();
		store = mockStore({});
	});

	describe('test actions for fetching all boards', () => {
		it('calls fetchBoardsSuccess and returns all boards', () => {
			const data = boards;
			expect(fetchBoardsSuccess(data)).toEqual({ type: FETCH_ALL_BOARDS_SUCCESS, payload: { boards: data } });
		});

		it('calls fetchBoardsFailure and returns errors', () => {
			expect(fetchBoardsFailure(errors)).toEqual({ type: FETCH_ALL_BOARDS_FAILURE, payload: { errors } });
		});

		it('fetches all boards', async () => {
			httpMock.onGet(`${url}/api/board/`).reply(200, boards);

			fetchBoards('someToken')(store.dispatch);
			await flushAllPromises();

			expect(store.getActions()).toEqual([
				{ type: FETCH_ALL_BOARDS_SUCCESS, payload: { boards: [...boards] } }
			]);
		})
	});
});
