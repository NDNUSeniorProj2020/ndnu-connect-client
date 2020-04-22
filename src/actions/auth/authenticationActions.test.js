import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';

import {
	LOGIN_SUCCESS,
	REGISTRATION_SUCCESS,
	LOGOUT_SUCCESS,
	HAS_TOKEN_SUCCESS,
  LOGIN_FAILURE,
  REGISTRATION_FAILURE,
  HAS_TOKEN_FAILURE,
} from '../../constants/actionTypes';
import { login, register, logout, hasToken } from './authenticationActions';

const userRes = {
  id: 1,
  email: 'user@user.com',
  first_name: 'User',
  last_name: 'Name',
  phone_number: '555-555-5555',
  token: 'someRandomToken'
};
const errors = {
  error: ['Cannot complete.']
};

describe('testing authentication actions', () => {
	const url = process.env.REACT_APP_API || 'http://ec2-54-241-187-187.us-west-1.compute.amazonaws.com:81';

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
    const userReq = {
      email: 'user@user.com',
      password: 'somepassword'
    };

		it('logs in user', async () => {
			httpMock.onPost(`${url}/accounts/login/`, { user: { ...userReq } }).reply(200, { user: { ...userRes } });

			login({ user: { ...userReq } })(store.dispatch);
			await flushAllPromises();

			expect(store.getActions()).toEqual([
				{ payload: { user: { ...userRes } }, type: LOGIN_SUCCESS }
			]);
    });

    it('sends errors if user login fails', async () => {
      httpMock.onPost(`${url}/accounts/login/`, { user: { ...userReq } }).reply(500, errors);

      login({ user: { ...userReq } })(store.dispatch);
      await flushAllPromises();

      expect(store.getActions()).toEqual([
        { payload: { errors: { ...errors} }, type: LOGIN_FAILURE }
      ]);
    });
	});

	// User registration action tests
	describe('testing registration actions', () => {
    const userReq = {
      email: 'user@user.com',
      first_name: 'User',
      last_name: 'Name',
      phone_number: '555-555-5555',
      password: 'somepassword'
    };

		it('registers user', async () => {
			httpMock.onPost(`${url}/accounts/register/`, { user: { ...userReq } }).reply(200, { user: { ...userRes } });

			register({ user: { ...userReq } })(store.dispatch);
			await flushAllPromises();

			expect(store.getActions()).toEqual([
				{ payload: { user: { ...userRes } }, type: REGISTRATION_SUCCESS }
			]);
    });

    it('sends errors if user registration fails', async () => {
      httpMock.onPost(`${url}/accounts/register/`, { user: { ...userReq } }).reply(500, errors);

      register({ user: { ...userReq } })(store.dispatch);
      await flushAllPromises();

      expect(store.getActions()).toEqual([
				{ payload: { errors: { ...errors } }, type: REGISTRATION_FAILURE }
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
			httpMock.onGet(`${url}/accounts/current_user/`).reply(200, { ...userRes });

			hasToken('someRandomToken')(store.dispatch);
			await flushAllPromises();

			expect(store.getActions()).toEqual([
				{ payload: { user: { ...userRes } }, type: HAS_TOKEN_SUCCESS }
			]);
    });

    it('throws errors if user cannot be fetched', async () => {
      httpMock.onGet(`${url}/accounts/current_user/`).reply(500, errors);

      hasToken('someRandomToken')(store.dispatch);
			await flushAllPromises();

			expect(store.getActions()).toEqual([
				{ payload: { errors: { ...errors } }, type: HAS_TOKEN_FAILURE }
			]);
    });
	});
});
