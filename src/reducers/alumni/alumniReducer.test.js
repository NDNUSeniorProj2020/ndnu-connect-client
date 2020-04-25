import { FETCH_ALUMNI_SUCCESS, FETCH_ALUMNI_FAILURE } from '../../constants/alumni/actionTypes';
import alumniReducer from './alumniReducer';

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
const initialState = { alumni: [], success: false, errors: { error: ['Cannot complete request.'] }  };
const errors = { error: ['Cannot fetch alumni.'] };

describe('tests for alumniReducer', () => {
  it('returns initialState', () => expect(alumniReducer(undefined, {})).toEqual({ ...initialState }));

  it('sets up alumni if fetching alumni is successful', () => {
    const action = { type: FETCH_ALUMNI_SUCCESS, payload: { alumni } };
    expect(alumniReducer(initialState, action)).toEqual({ ...initialState, alumni, success: true });
  });

  it('sets up errors if alumni cannot be fetched', () => {
    const action = { type: FETCH_ALUMNI_FAILURE, payload: { errors: { ...errors } } };
    expect(alumniReducer(initialState, action)).toEqual({ ...initialState, errors });
  });

  it('sets up default errors if no errors are passed', () => {
    const action = { type: FETCH_ALUMNI_FAILURE };
    expect(alumniReducer(initialState, action)).toEqual({ ...initialState });
  });
});
