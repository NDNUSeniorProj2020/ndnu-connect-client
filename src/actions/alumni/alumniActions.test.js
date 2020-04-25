import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';

import { FETCH_ALUMNI_SUCCESS, FETCH_ALUMNI_FAILURE } from '../../constants/alumni/actionTypes';
import { fetchAlumni } from './alumniActions';

const alumni = [
  {
    "email": "JeffWorker@gmail.com",
    "first_name": "John",
    "last_name": "Worker",
    "graduated": true,
    "year_graduated": 2017,
    "major": "Computer Science",
    "company": "Google Inc.",
    "job_title": "Software Engineer",
    "about": null
  },
  {
    "email": "JonTutor@gmail.com",
    "first_name": "Jon",
    "last_name": "Tutor",
    "graduated": true,
    "year_graduated": 2018,
    "major": "Biology",
    "company": null,
    "job_title": null,
    "about": null
  },
  {
    "email": "john@mynametoo.com",
    "first_name": "John",
    "last_name": "Cherry",
    "graduated": true,
    "year_graduated": 2010,
    "major": "Business Administration",
    "company": "KPMG",
    "job_title": "Financial Advisor",
    "about": null
  },
  {
    "email": "schmidt@mynametoo.com",
    "first_name": "Nicholas",
    "last_name": "Schmidt",
    "graduated": true,
    "year_graduated": 2005,
    "major": "Accounting & Finance",
    "company": "Facebook Inc.",
    "job_title": "Accountant",
    "about": null
  }
];
const errors = { error: ["Cannot fetch alumni. Sorry for the inconvenience. Please try again"] };

describe('test alumni actions', () => {
  const url = process.env.REACT_APP_API || 'http://ec2-54-241-187-187.us-west-1.compute.amazonaws.com:81';

  let store;
	let httpMock;

  const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

  beforeEach(() => {
		httpMock = new MockAdapter(axios);
		const mockStore = configureMockStore();
		store = mockStore({});
	});


  describe('tests for fetching alumni', () => {
    it('fetches alumni', async () => {
      httpMock.onGet(`${url}/api/alumni/`).reply(200, alumni);

      fetchAlumni('someToken')(store.dispatch);
      await flushAllPromises();

      expect(store.getActions()).toEqual([
        { type: FETCH_ALUMNI_SUCCESS, payload: { alumni } }
      ]);
    });

    it('throws errors when fetching alumni fails', async () => {
      httpMock.onGet(`${url}/api/alumni/`).reply(500, errors);

      fetchAlumni('token')(store.dispatch);
      await flushAllPromises();

      expect(store.getActions()).toEqual([
        { type: FETCH_ALUMNI_FAILURE, payload: { errors } }
      ]);
    });
  });
});
