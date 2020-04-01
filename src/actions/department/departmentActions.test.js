import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";

import {
	FETCH_ALL_SUCCESS,
	FETCH_ALL_FAILURE
} from "../../constants/actionTypes";
import {
	fetchDepartmentFailure,
	fetchDepartments,
	fetchDepartmentsSuccess
} from "./departmentActions";

const departments = [
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
const errors = {
	errors: {
		error: ['Failed to fetch all departments.']
	}
};

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
		it('should call fetchDepartmentsSuccess and return all departments', () => {
			const data = departments;
			expect(fetchDepartmentsSuccess(data)).toEqual({
				type: FETCH_ALL_SUCCESS,
				payload: { departments: [...data] }
			});
		});

		it('should call fetchDepartmentsFailure and return errors', () => {
			expect(fetchDepartmentFailure(errors)).toEqual({ type: FETCH_ALL_FAILURE, payload: { errors } });
		});

		it('fetches all departments', async () => {
			httpMock.onGet(`${url}/api/department/`).reply(200, departments);

			fetchDepartments('someRandomToken')(store.dispatch);
			await flushAllPromises();

			expect(store.getActions()).toEqual([
				{ type: FETCH_ALL_SUCCESS, payload: { departments: [...departments] } }
			]);
		});
	});
});