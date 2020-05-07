import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';

import { UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE } from '../../constants/users/actionTypes';
import { url } from '../../api';
import { updateUser } from './userActions';

const userRes = {
  "id": 1,
  "email": "JeffWorker@gmail.com",
  "first_name": "John",
  "last_name": "Worker",
  "phone_number": "",
  "token": "someRandomtoken",
  "graduated": true,
  "year_graduated": 2017,
  "major": "Computer Science",
  "company": "Google Inc.",
  "job_title": "Software Engineer",
  "about": null
};
const userReq = {
  "email": "JeffWorker@gmail.com",
  "first_name": "John",
  "last_name": "Worker",
  "phone_number": "555-555-5555",
  "graduated": true,
  "year_graduated": 2017,
  "major": "Computer Science",
  "company": "Google Inc.",
  "job_title": "Software Engineer",
  "about": null
}
const errors = {
  errors: {
    err: ['Cannot complete.']
  }
};

describe('tests for user actions', () => {
  let store;
	let httpMock;

	const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

	beforeEach(() => {
		httpMock = new MockAdapter(axios);
		const mockStore = configureMockStore();
		store = mockStore({});
  });

  it('updates user', async () => {
    httpMock.onPut(`${url}/accounts/user/`, { ...userReq }).reply(200, { user: { ...userRes} });

    updateUser(userReq)(store.dispatch);
    await flushAllPromises();

    expect(store.getActions()).toEqual([
      { type: UPDATE_USER_SUCCESS, payload: { user: { ...userRes } } }
    ]);
  });

  it('throws error if user cannot be updated', async () => {
    httpMock.onPut(`${url}/accounts/user/`, { ...userReq }).reply(500, errors);

    updateUser(userReq)(store.dispatch);
    await flushAllPromises();

    expect(store.getActions()).toEqual([
      { type: UPDATE_USER_FAILURE, payload: { errors: { msg: errors.errors.err[0] } } }
    ]);
  });
});
