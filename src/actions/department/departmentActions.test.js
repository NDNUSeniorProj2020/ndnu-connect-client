import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";

import {
	FETCH_DEPARTMENTS_REQUEST,
	FETCH_DEPARTMENTS_SUCCESS
} from "../../constants/department/actionTypes";
import { fetchDepartments } from "./departmentActions";

const department = [
	{
		"name": "BUS"
	},
	{
		"name": "MTH"
	},
	{
		"name": "ENG"
	}
];

describe('testing department actions', () => {
	const url = process.env.REACT_APP_API || 'http://localhost:8000';

	let store;
	let httpMock;

	const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

	beforeEach(() => {
		httpMock = new MockAdapter(axios);
		const mockStore = configureMockStore();
		store = mockStore({});
	});

	describe('testing fetching all departments actions', () => {
		it('fetches all departments', async () => {
			httpMock.onGet(`${url}/api/department/`).reply(200, { department });

			fetchDepartments('someRandomToken')(store.dispatch);
			await flushAllPromises();

			expect(store.getActions()).toEqual([
				{ type: FETCH_DEPARTMENTS_REQUEST },
				{ type: FETCH_DEPARTMENTS_SUCCESS, payload: { department } }
			]);
		});
	});
});