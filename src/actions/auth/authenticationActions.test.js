import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";

import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS}  from "../../constants/auth/actionTypes";
import { login } from "./authenticationActions";

describe('testing login action', () => {
	const url = process.env.REACT_APP_API || 'http://localhost:8000';

	let store;
	let httpMock;

	const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

	beforeEach(() => {
		httpMock = new MockAdapter(axios);
		const mockStore = configureMockStore();
		store = mockStore({});
	});

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