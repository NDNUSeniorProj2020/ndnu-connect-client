import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import configureMockStore from "redux-mock-store";

import {
	FETCH_ALL_STUDENTS_SUCCESS,
	FETCH_ALL_STUDENTS_FAILURE
} from "../../constants/student/actionTypes";
import {
	fetchStudentsSuccess,
	fetchStudentsFailure,
	fetchStudents
} from "./studentActions";

const students = [
	{
		"major": 1,
		"pay": 1.2,
		"standing": 1,
		"method": 1,
		"location": 1,
		"description": "Need help in BUS 101",
		"schedule": 2,
		"person": 3
	}
];
const errors = {
	errors: {
		error: ['Failed to fetch students.']
	}
};

describe('tests for student actions', () => {
	// Test steup
	const url = process.env.REACT_APP_API || 'http://ec2-54-241-187-187.us-west-1.compute.amazonaws.com:81';

	let store;
	let httpMock;

	const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

	beforeEach(() => {
		httpMock = new MockAdapter(axios);
		const mockStore = configureMockStore();
		store = mockStore({});
	});

	describe('tests for fetching all students actions', () => {
			it('calls fetchStudentsSuccess and returns all students', () => {
				const data = students;
				expect(fetchStudentsSuccess(data)).toEqual({ type: FETCH_ALL_STUDENTS_SUCCESS, payload: { students: [...data] } });
			});

			it('calls fetchStudentsFailure and returns errors', () => {
				expect(fetchStudentsFailure(errors)).toEqual({ type: FETCH_ALL_STUDENTS_FAILURE, payload: { errors } });
			});

			it('fetches all students', async () => {
				httpMock.onGet(`${url}/api/student/`).reply(200, students);

				fetchStudents('someRandomToken')(store.dispatch);
				await flushAllPromises();

				expect(store.getActions()).toEqual([
					{ type: FETCH_ALL_STUDENTS_SUCCESS, payload: { students: [...students] } }
				]);
			});
	});
});
