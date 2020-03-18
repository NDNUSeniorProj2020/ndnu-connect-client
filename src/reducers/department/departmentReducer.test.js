import {
	FETCH_DEPARTMENTS_FAILURE,
	FETCH_DEPARTMENTS_SUCCESS
} from '../../constants/department/actionTypes';
import departmentReducer from './departmentReducer';

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

describe('tests for departmentReducers', () => {
	const beforeState = { departments: [], success: false };

	it('should return initial state', () => (
		expect(departmentReducer(undefined, {})).toEqual({ departments: [], success: false })
	));

	describe('test fetch all departments reducers', () => {
		it('sets up departments', () => {
			const action = { type: FETCH_DEPARTMENTS_SUCCESS, payload: { departments } };
			const afterState = departmentReducer(beforeState, action);

			expect(afterState).toEqual({ departments, success: true });
		});

		it('should return errors if action type is FETCH_DEPARTMENTS_FAILURE', () => {
			const errors = {
				errors: {
					error: ['Failed to fetch departments']
				}
			};
			const action = { type: FETCH_DEPARTMENTS_FAILURE, payload: { errors } };
			const afterState = departmentReducer(beforeState, action);

			expect(afterState).toEqual({ departments: [], errors, success: false });
		});
	});
});