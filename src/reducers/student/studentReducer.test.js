import {
	FETCH_STUDENTS_SUCCESS,
	FETCH_STUDENTS_FAILURE
} from '../../constants/student/actionTypes';
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

describe('tests for studentRecuders', () => {
	const beforeState = { students: [], success: false };

	it('should return initial state', () => (
		expect(studentReducer(undefined, {})).toEqual({ students: [], success: false })
	));

	describe('tests for fetching all students reducers', () => {
		it('should return an object with students if action type is FETCH_STUDENTS_SUCCESS', () => {
			const action = { type: FETCH_STUDENTS_SUCCESS, payload: { students } };
			const afterState = studentReducer(beforeState, action);

			expect(afterState).toEqual({ students, success: true });
		});

		it('should return an object with errors if action type is FETCH_STUDENTS_FAILURE', () => {
			const errors = {
				errors: {
					error: ['Failed to fetch students.']
				}
			};
			const action = { type: FETCH_STUDENTS_FAILURE, payload: { errors } };
			const afterState = studentReducer(beforeState, action);

			expect(afterState).toEqual({ students: [], success: false, errors });
		});
	});
});