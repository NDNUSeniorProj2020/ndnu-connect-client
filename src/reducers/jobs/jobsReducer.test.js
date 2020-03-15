import {
	FETCH_JOBS_SUCCESS
} from "../../constants/jobs/actionTypes";
import jobsReducers from './jobsReducer';

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

describe('tests for jobsReducers', () => {
	const beforeState = { jobs: [], success: false };

	it('should return initial state', () => expect(jobsReducers(undefined, {})).toEqual({ jobs: [], success: false }));

	describe('tests for fetch all jobs reducers', () => {
		it('sets up jobs', () => {
			const action = { type: FETCH_JOBS_SUCCESS, payload: { jobs } };
			const afterState = jobsReducers(beforeState, action);

			expect(afterState).toEqual({ jobs, success: true });
		});
	});
});