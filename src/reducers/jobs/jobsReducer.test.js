import {
	FETCH_ALL_JOBS_SUCCESS,
  FETCH_ALL_JOBS_FAILURE,
  FETCH_SINGLE_JOB_SUCCESS,
  FETCH_SINGLE_JOB_FAILURE,
	SAVE_JOB_SUCCESS,
  SAVE_JOB_FAILURE,
  UPDATE_JOB_SUCCESS,
  UPDATE_JOB_FAILURE
} from '../../constants/jobs/actionTypes';
import jobsReducer from './jobsReducer';

const jobs = [
	{
		'id': 1,
		'title': 'test1',
		'description': 'description test',
		'qualifications': 'bs degree',
		'pay': '1234',
		'link': 'google.com',
		'date': '2020-03-13T11:55:20.710240-07:00',
		'type': 'FULL',
		'user': 1
	}
];
const job = jobs[0];
const initialState = { job: {}, jobs: [], success: false, updated: false };
const errors = {
	error: ['Failed to complete']
};

describe('tests for jobsReducer', () => {
	it('should return initial state', () => expect(jobsReducer(undefined, {})).toEqual({ ...initialState }));

	describe('tests for fetch all jobs reducers', () => {
		it('sets up jobs', () => {
			const action = { type: FETCH_ALL_JOBS_SUCCESS, payload: { jobs } };
			expect(jobsReducer(initialState, action)).toEqual({ ...initialState, jobs, success: true });
		});

		it('sets up errors if fetching jobs fails', () => {
			const action = { type: FETCH_ALL_JOBS_FAILURE, payload: { errors } };
			expect(jobsReducer(initialState, action)).toEqual({ ...initialState, errors });
    });

    it('sets up job state', () => {
      const action = { type: FETCH_SINGLE_JOB_SUCCESS, payload: { job } };
      expect(jobsReducer(initialState, action)).toEqual({ ...initialState, job, success: true });
    });

    it('sets up errors if job cannot be fetched', () => {
      const action = { type: FETCH_SINGLE_JOB_FAILURE, payload: { errors } };
      expect(jobsReducer(initialState, action)).toEqual({ ...initialState, errors });
    });

		it('sets up state if job was successfully saved', () => {
			const action = { type: SAVE_JOB_SUCCESS };
			expect(jobsReducer(initialState, action)).toEqual({ ...initialState, success: true });
		});

		it('sets up errors if job was not saved', () => {
			const action = { type: SAVE_JOB_FAILURE, payload: { errors } };
			expect(jobsReducer(initialState, action)).toEqual({ ...initialState, errors });
    });

    it('sets up state for successful job update', () => {
      const action = { type: UPDATE_JOB_SUCCESS };
      expect(jobsReducer(initialState, action)).toEqual({ ...initialState, updated: true });
    });

    it('sets up errors if job cannot be updated', () => {
      const action = { type: UPDATE_JOB_FAILURE, payload: { errors } };
      expect(jobsReducer(initialState, action)).toEqual({ ...initialState, errors });
    });
	});
});
