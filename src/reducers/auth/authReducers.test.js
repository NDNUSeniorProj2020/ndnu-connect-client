import authReducer from "./authReducer";
import {
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	REGISTRATION_SUCCESS,
	REGISTRATION_FAILURE,
	LOGOUT_SUCCESS,
	LOGOUT_FAILURE,
	HAS_TOKEN_SUCCESS, HAS_TOKEN_FAILURE
} from "../../constants/actionTypes";

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

const errors = {
	err: { msg: 'Cannot complete. Sorry for the inconvenience.' }
};

const initialState = { user: {}, loggedIn: false, errors: {} };

describe('Authentication reducers tests', () => {
	it('returns initial state', () => expect(authReducer(undefined, {})).toEqual({ ...initialState }));

	describe('test login action', () => {
		it('sets up logged in user', () => {
			const action = { type: LOGIN_SUCCESS, payload: { user: { ...testUser1 } } };
			expect(authReducer(initialState, action)).toEqual({ ...initialState, user: { ...testUser1 }, loggedIn: true });
		});

		it('sets up error if login fails', () => {
			const action = { type: LOGIN_FAILURE, payload: { errors } };
			expect(authReducer(initialState, action)).toEqual({ ...initialState, errors });
		});
	});

	describe('test register action', () => {
		it('sets up newly registered user', () => {
			const action = { type: REGISTRATION_SUCCESS, payload: { user: { ...testUser2 } } };
			const afterState = authReducer(initialState, action);

			expect(afterState).toEqual({ ...initialState, user: { ...testUser2 }, loggedIn: true });
		});

		it('sets up errors if user registration fails', () => {
			const action = { type: REGISTRATION_FAILURE, payload: { errors } };
			expect(authReducer(initialState, action)).toEqual({ ...initialState, errors });
		});
	});

	describe('test logout action', () => {
		it('should have an empty user object when user logs out', () => {
			const action = { type: LOGOUT_SUCCESS, payload: { user: {} } };
			expect(authReducer(initialState, action)).toEqual({ ...initialState });
		});

		it('should thrown an error if user cannot logout', () => {
			const action = { type: LOGOUT_FAILURE, payload: { errors } };
			expect(authReducer(initialState, action)).toEqual({ ...initialState, errors });
		});
	});

	describe('test has token action', () => {
		it('sets up user if token is valid', () => {
			const user = { email: 'user@user.com', token: 'someToken' };
			const action = { type: HAS_TOKEN_SUCCESS, payload: { user: { ...user } } };
			expect(authReducer(initialState, action)).toEqual({ ...initialState, user: { ...user }, loggedIn: true });
		});

		it('sets up errors if there is no token or token is invalid', () => {
			const action = { type: HAS_TOKEN_FAILURE, payload: { errors } };
			expect(authReducer(initialState, action)).toEqual({ ...initialState, errors });
		});
	});
});
