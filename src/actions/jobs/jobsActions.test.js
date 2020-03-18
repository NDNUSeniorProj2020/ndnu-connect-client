import {
	FETCH_JOBS_FAILURE,
	FETCH_JOBS_REQUEST,
	FETCH_JOBS_SUCCESS
} from "../../constants/jobs/actionTypes";
import {fetchJobsRequest, fetchJobsSuccess, fetchJobs, fetchJobsFailure} from "./jobsActions";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import configureMockStore from "redux-mock-store";

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

	describe('testing actions for fetching all jobs', () => {
		it('calls fetchJobsRequest and returns an object with type FETCH_JOBS_REQUEST', () => {
			expect(fetchJobsRequest()).toEqual({ type: FETCH_JOBS_REQUEST });
		});

		it('calls fetchJobsSuccess and returns an object with payload and type FETCH_JOBS_SUCCESS', () => {
			const data = jobs;
			expect(fetchJobsSuccess(data)).toEqual({ type: FETCH_JOBS_SUCCESS, payload: { jobs: data } });
		});

		it('calls fetchJobsFailure and returns and object with errors and type FETCH_JOBS_FAILURE', () => {
			const errors = { error: ['Failed to fetch jobs.'] };
			expect(fetchJobsFailure(errors)).toEqual({ type: FETCH_JOBS_FAILURE, payload: { errors } });
		});

		it('fetches all jobs', async () => {
			httpMock.onGet(`${url}/api/job/`).reply(200, jobs);

			fetchJobs('someRandomToken')(store.dispatch);
			await flushAllPromises();

			expect(store.getActions()).toEqual([
				{ type: FETCH_JOBS_REQUEST },
				{ type: FETCH_JOBS_SUCCESS, payload: { jobs: [...jobs] } }
			]);
		});
	});
});