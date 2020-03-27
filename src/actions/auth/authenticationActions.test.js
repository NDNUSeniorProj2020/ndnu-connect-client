import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";

import {
	LOGIN_SUCCESS,
	REGISTRATION_SUCCESS,
	LOGOUT_SUCCESS,
	HAS_TOKEN_SUCCESS,
} from "../../constants/actionTypes";
import { login, register, logout, hasToken } from "./authenticationActions";

describe('testing authentication actions', () => {
	const url = process.env.REACT_APP_API || 'http://localhost:8000';

	let store;
	let httpMock;

	const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

	beforeEach(() => {
		httpMock = new MockAdapter(axios);
		const mockStore = configureMockStore();
		store = mockStore({});
	});

	// Login action tests
	describe('testing login action', () => {
		it('logs in user', async () => {
			const userReq = {
				email: 'user@user.com',
				password: 'somepassword'
			};
			const userRes = {
				email: 'user@user.com',
				token: 'someRandomToken'
			};

			httpMock.onPost(`${url}/accounts/login/`, { user: { ...userReq } })
				.reply(200, { user: { ...userRes } });

			login({ user: { ...userReq } })(store.dispatch);
			await flushAllPromises();

			expect(store.getActions()).toEqual([
				{ payload: { user: { ...userRes } }, type: LOGIN_SUCCESS }
			]);
		});
	});

	// User registration action tests
	describe('testing registration actions', () => {
		it('registers user', async () => {
			const userReq = {
				email: 'user@user.com',
				first_name: 'User',
				last_name: 'Name',
				phone_number: '555-555-5555',
				password: 'somepassword'
			};
			const userRes = {
				email: 'user@user.com',
				token: 'someRandomToken'
			};

			httpMock.onPost(`${url}/accounts/register/`, { user: { ...userReq } })
				.reply(200, { user: { ...userRes } });

			register({ user: { ...userReq } })(store.dispatch);
			await flushAllPromises();

			expect(store.getActions()).toEqual([
				{ payload: { user: { ...userRes } }, type: REGISTRATION_SUCCESS }
			]);
		});
	});

	describe('testing logout actions', () => {
		it('should logout user', async () => {
			logout()(store.dispatch);
			await flushAllPromises();

			expect(store.getActions()).toEqual([
				{ payload: { user: {} }, type: LOGOUT_SUCCESS }
			]);
		});
	});

	describe('testing token authentication actions', () => {
		it('should return an authenticated user if a token is passed from localStorage', async () => {
			const userRes = {
				email: 'user@user.com',
				token: 'someRandomToken'
			};

			httpMock.onGet(`${url}/accounts/user/`).reply(200, { user: { ...userRes } });

			hasToken('someRandomToken')(store.dispatch);
			await flushAllPromises();

			expect(store.getActions()).toEqual([
				{ payload: { user: { ...userRes } }, type: HAS_TOKEN_SUCCESS }
			]);
		});
	})
});