import {
	FETCH_DEPARTMENTS_SUCCESS
} from '../../constants/department/actionTypes';
import departmentReducers from './departmentReducers';

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

describe('tests for departmentReducers', () => {
	const beforeState = { department: [], success: false };

	it('should return initial state', () => (
		expect(departmentReducers(undefined, {})).toEqual({ department: [], success: false })
	));

	describe('test fetch all departments reducers', () => {
		it('sets up departments', () => {
			const action = { type: FETCH_DEPARTMENTS_SUCCESS, payload: { department } };
			const afterState = departmentReducers(beforeState, action);

			expect(afterState).toEqual({ department, success: true });
		});
	});
});