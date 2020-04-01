import { FETCH_ALL_SUCCESS, FETCH_ALL_FAILURE } from "../../constants/actionTypes";
import studentReducer from './studentReducer';

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

const initialState = { students: [], success: false };

const errors = {
	errors: {
		error: ['Failed to fetch students.']
	}
};

describe('tests for studentRecuders', () => {
	it('should return initial state', () => expect(studentReducer(undefined, {})).toEqual({ ...initialState }));

	describe('tests for fetching all students reducers', () => {
		it('sets up all students', () => {
			const action = { type: FETCH_ALL_SUCCESS, payload: { students } };
			expect(studentReducer(initialState, action)).toEqual({ ...initialState, students, success: true });
		});

		it('should return an object with errors if action type is FETCH_STUDENTS_FAILURE', () => {
			const action = { type: FETCH_ALL_FAILURE, payload: { errors } };
			expect(studentReducer(initialState, action)).toEqual({ ...initialState, errors });
		});
	});
});