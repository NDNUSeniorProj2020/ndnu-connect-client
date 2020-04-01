import {
	FETCH_ALL_JOBS_SUCCESS,
	FETCH_ALL_JOBS_FAILURE
} from "../../constants/jobs/actionTypes";
import jobsReducer from './jobsReducer';

const jobs = [
	{
		"id": 1,
		"title": "test1",
		"description": "description test",
		"qualifications": "bs degree",
		"pay": "1234",
		"link": "google.com",
		"date": "2020-03-13T11:55:20.710240-07:00",
		"type": "FULL",
		"person": 1
	}
];

const initialState = { jobs: [], success: false };

const errors = {
	error: ['Failed to complete']
};

describe('tests for jobsReducers', () => {
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
	});
});
