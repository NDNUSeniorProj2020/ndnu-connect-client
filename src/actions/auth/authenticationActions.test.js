import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";

import {
	LOGIN_USER_REQUEST,
	LOGIN_USER_SUCCESS,
	USER_REGISTRATION_REQUEST,
	USER_REGISTRATION_SUCCESS
}  from "../../constants/auth/actionTypes";
import { login, register } from "./authenticationActions";

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

			login(userReq)(store.dispatch);
			await flushAllPromises();

			expect(store.getActions()).toEqual([
				{ type: LOGIN_USER_REQUEST },
				{ payload: { user: { ...userRes } }, type: LOGIN_USER_SUCCESS }
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
				first_name: 'User',
				last_name: 'Name',
				phone_number: '555-555-5555',
				token: 'someRandomToken'
			};

			httpMock.onPost(`${url}/accounts/register/`, { user: { ...userReq } })
				.reply(200, { user: { ...userRes } });

			register(userReq)(store.dispatch);
			await flushAllPromises();

			expect(store.getActions()).toEqual([
				{ type: USER_REGISTRATION_REQUEST },
				{ payload: { user: { ...userRes } }, type: USER_REGISTRATION_SUCCESS }
			]);
		});
	});
});