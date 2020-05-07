import { UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE } from '../../constants/users/actionTypes';
import userReducer, { initialState } from './userReducer';

const user = {
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
const errors = {
  msg: 'Failed'
};

describe('tests for userReducer', () => {
  it('renders with initial state', () => {
    expect(userReducer(undefined, {})).toEqual({ ...initialState });
  });

  it('sets up state when updating a user is successful', () => {
    const action = { type: UPDATE_USER_SUCCESS, payload: { user } };
    expect(userReducer(initialState, action)).toEqual({ user, updated: true });
  });

  it('sets up errors if updating a user fails', () => {
    const action = { type: UPDATE_USER_FAILURE, payload: { errors: { ...errors } } };
    expect(userReducer(initialState, action)).toEqual({ ...initialState, errors });
  });
});
