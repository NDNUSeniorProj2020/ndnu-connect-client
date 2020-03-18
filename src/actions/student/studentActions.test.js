import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import configureMockStore from "redux-mock-store";

import {
	FETCH_STUDENTS_REQUEST,
	FETCH_STUDENTS_SUCCESS,
	FETCH_STUDENTS_FAILURE
} from "../../constants/student/actionTypes";
import {
	fetchStudentsRequest,
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
	const url = process.env.REACT_APP_API || 'http://localhost:8000';

	let store;
	let httpMock;

	const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

	beforeEach(() => {
		httpMock = new MockAdapter(axios);
		const mockStore = configureMockStore();
		store = mockStore({});
	});

	describe('tests for fetching all students actions', () => {
			it('calls fetchStudentsRequest and returns an object with type FETCH_STUDENTS_REQUEST', () => {
				expect(fetchStudentsRequest()).toEqual({ type: FETCH_STUDENTS_REQUEST });
			});

			it('calls fetchStudentsSuccess and returns an object with students and type FETCH_STUDENTS_SUCCESS', () => {
				const data = students;
				expect(fetchStudentsSuccess(data)).toEqual({ type: FETCH_STUDENTS_SUCCESS, payload: { students: [...data] } });
			});

			it('calls fetchStudentsFailure and returns an object with errors and type FETCH_STUDENTS_FAILURE', () => {
				expect(fetchStudentsFailure(errors)).toEqual({ type: FETCH_STUDENTS_FAILURE, payload: { errors } });
			});

			it('fetches all students', async () => {
				httpMock.onGet(`${url}/api/student/`).reply(200, students);

				fetchStudents('someRandomToken')(store.dispatch);
				await flushAllPromises();

				expect(store.getActions()).toEqual([
					{ type: FETCH_STUDENTS_REQUEST },
					{ type: FETCH_STUDENTS_SUCCESS, payload: { students: [...students] } }
				]);
			});
	});
});