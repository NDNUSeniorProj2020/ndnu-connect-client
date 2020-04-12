import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import configureMockStore from "redux-mock-store";

import {
	FETCH_ALL_JOBS_SUCCESS,
	FETCH_ALL_JOBS_FAILURE,
	FILTER_JOBS_BY_TYPE
} from "../../constants/jobs/actionTypes";
import { fetchJobsSuccess, fetchJobs, fetchJobsFailure, filterJobsByType } from "./jobsActions";

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
const errors = { error: ['Failed to fetch jobs.'] };

describe('tests for job actions', () => {
	const url = process.env.REACT_APP_API || 'http://localhost:8000';

	let store;
	let httpMock;

	const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

	beforeEach(() => {
		httpMock = new MockAdapter(axios);
		const mockStore = configureMockStore();
		store = mockStore({});
	});

	// Fetching all jobs
	describe('testing actions for fetching all jobs', () => {
		it('calls fetchJobsSuccess and returns all jobs', () => {
			const data = jobs;
			expect(fetchJobsSuccess(data)).toEqual({ type: FETCH_ALL_JOBS_SUCCESS, payload: { jobs: [...data] } });
		});

		it('calls fetchJobsFailure and returns and object with errors and type FETCH_JOBS_FAILURE', () => {
			expect(fetchJobsFailure(errors)).toEqual({ type: FETCH_ALL_JOBS_FAILURE, payload: { errors } });
		});

		it('fetches all jobs', async () => {
			httpMock.onGet(`${url}/api/job/`).reply(200, jobs);

			fetchJobs('someRandomToken')(store.dispatch);
			await flushAllPromises();

			expect(store.getActions()).toEqual([
				{ type: FETCH_ALL_JOBS_SUCCESS, payload: { jobs: [...jobs] } }
			]);
		});

		it('throws error if jobs cannot be fetched', async () => {
			httpMock.onGet(`${url}/api/job/`).reply(500, errors);

			fetchJobs('someRandomToken')(store.dispatch)
			await flushAllPromises();

			expect(store.getActions()).toEqual([
				{ type: FETCH_ALL_JOBS_FAILURE, payload: { errors: { ...errors } } }
			]);
		});
	});
});
