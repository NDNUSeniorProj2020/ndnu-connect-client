import {
	FETCH_ALL_SUCCESS,
	FETCH_ALL_FAILURE
} from "../../constants/actionTypes";
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

const initialState = { departments: [], success: false };

const errors = {
	errors: {
		error: ['Failed to fetch departments']
	}
};

describe('tests for departmentReducers', () => {
	it('should return initial state', () => (
		expect(departmentReducer(undefined, {})).toEqual({ ...initialState })
	));

	describe('test fetch all departments reducers', () => {
		it('sets up departments', () => {
			const action = { type: FETCH_ALL_SUCCESS, payload: { departments } };
			expect(departmentReducer(initialState, action)).toEqual({ ...initialState, departments, success: true });
		});

		it('should return errors if action type is FETCH_DEPARTMENTS_FAILURE', () => {
			const action = { type: FETCH_ALL_FAILURE, payload: { errors } };
			expect(departmentReducer(initialState, action)).toEqual({ ...initialState, errors });
		});
	});
});