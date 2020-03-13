import authReducer from "./authReducers";
import { LOGIN_USER_SUCCESS, USER_REGISTRATION_SUCCESS } from "../../constants/auth/actionTypes";

const testUser1 = {
	email: 'user@user.com',
	token: 'someRandomToken'
};

const testUser2 = {
	email: 'user@user.com',
	first_name: 'User',
	last_name: 'Name',
	phone_number: '555-555-5555'
};

describe('Authentication reducers tests', () => {
	it('returns initial state', () => expect(authReducer(undefined, {})).toEqual({ user: {} }));

	describe('test login action', () => {
		it('sets up logged in user', () => {
			const beforeState = { user: {} };
			const action = { type: LOGIN_USER_SUCCESS, payload: { user: { ...testUser1 } } };
			const afterState = authReducer(beforeState, action);

			expect(afterState).toEqual({ user: { ...testUser1 }, success: true });
		});
	});

	describe('test register action', () => {
		it('sets up newly registered user', () => {
			const beforeState = { user: {} };
			const action = { type: USER_REGISTRATION_SUCCESS, payload: { user: { ...testUser2 } } };
			const afterState = authReducer(beforeState, action);

			expect(afterState).toEqual({ user: { ...testUser2 }, success: true });
		});
	});
});