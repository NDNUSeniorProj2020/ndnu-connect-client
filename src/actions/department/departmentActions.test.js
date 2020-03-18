import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";

import {
	FETCH_DEPARTMENTS_FAILURE,
	FETCH_DEPARTMENTS_REQUEST,
	FETCH_DEPARTMENTS_SUCCESS
} from "../../constants/department/actionTypes";
import {
	fetchDepartmentFailure,
	fetchDepartments,
	fetchDepartmentsRequest,
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
		it('should call fetchDepartmentsRequest and return an object with type FETCH_DEPARTMENTS_REQUEST', () => {
			expect(fetchDepartmentsRequest()).toEqual({ type: FETCH_DEPARTMENTS_REQUEST });
		});

		it('should call fetchDepartmentsSuccess and return all departments with type FETCH_DEPARTMENTS_SUCCESS', () => {
			const data = departments;
			expect(fetchDepartmentsSuccess(data)).toEqual({
				type: FETCH_DEPARTMENTS_SUCCESS,
				payload: { departments: [...data] }
			});
		});

		it('should call fetchDepartmentsFailure and return errors with type FETCH_DEPARTMENTS_FAILURE', () => {
			const errors = {
				errors: {
					error: ['Failed to fetch all departments.']
				}
			};
			expect(fetchDepartmentFailure(errors)).toEqual({ type: FETCH_DEPARTMENTS_FAILURE, payload: { errors } });
		});

		it('fetches all departments', async () => {
			httpMock.onGet(`${url}/api/department/`).reply(200, departments);

			fetchDepartments('someRandomToken')(store.dispatch);
			await flushAllPromises();

			expect(store.getActions()).toEqual([
				{ type: FETCH_DEPARTMENTS_REQUEST },
				{ type: FETCH_DEPARTMENTS_SUCCESS, payload: { departments: [...departments] } }
			]);
		});
	});
});