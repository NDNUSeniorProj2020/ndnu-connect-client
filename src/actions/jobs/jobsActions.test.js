import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';

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
import { fetchJobs, fetchJob, createJob, updateJob } from './jobsActions';
import { url } from '../../api';

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
const newJob = {
  'title': 'test1',
  'description': 'description test',
  'qualifications': 'bs degree',
  'pay': '1234',
  'link': 'google.com',
  'date': '2020-03-13T11:55:20.710240-07:00',
  'type': 'FULL'
};
const errors = {
  errors: {
    err: ['Failed to fetch jobs.']
  }
};

describe('tests for job actions', () => {
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
		it('fetches all jobs', async () => {
			httpMock.onGet(`${url}/api/job/`).reply(200, jobs);

			fetchJobs()(store.dispatch);
			await flushAllPromises();

			expect(store.getActions()).toEqual([
				{ type: FETCH_ALL_JOBS_SUCCESS, payload: { jobs: [...jobs] } }
			]);
		});

		it('throws error if jobs cannot be fetched', async () => {
			httpMock.onGet(`${url}/api/job/`).reply(500, errors);

			fetchJobs()(store.dispatch)
			await flushAllPromises();

			expect(store.getActions()).toEqual([
				{ type: FETCH_ALL_JOBS_FAILURE, payload: { errors: { msg: errors.errors.err[0] } } }
			]);
    });
  });

  describe('testing actions for fetching single job', () => {
    it('fetches job successfully', async () => {
      httpMock.onGet(`${url}/api/job/${job.id}/retrieve/`).reply(200, job);

      fetchJob(job.id)(store.dispatch);
      await flushAllPromises();

      expect(store.getActions()).toEqual([
        { type: FETCH_SINGLE_JOB_SUCCESS, payload: { job } }
      ]);
    });

    it('throws errors when job cannot be fetched', async () => {
      httpMock.onGet(`${url}/api/job/${job.id}/retrieve/`).reply(500, errors);

      fetchJob(job.id)(store.dispatch);
      await flushAllPromises();

      expect(store.getActions()).toEqual([
        { type: FETCH_SINGLE_JOB_FAILURE, payload: { errors: { msg: errors.errors.err[0] } } }
      ]);
    });
  });

  describe('testing actions for saving job postings', () => {
    it('creates job posting successfully', async () => {
      httpMock.onPost(`${url}/api/job/`).reply(200, { success: true });

      createJob(newJob, 1)(store.dispatch);
      await flushAllPromises();

      expect(store.getActions()).toEqual([
        { type: SAVE_JOB_SUCCESS }
      ]);
    });

    it('throws errors if a job posting cannot be created', async () => {
      httpMock.onPost(`${url}/api/job/`).reply(500, errors);

      createJob(newJob, 1)(store.dispatch);
      await flushAllPromises();

      expect(store.getActions()).toEqual([
        { type: SAVE_JOB_FAILURE, payload: { errors: { msg: errors.errors.err[0] } } }
      ]);
    });
  });

  describe('testing actions for updating job postings', () => {
    it('updates job posting', async () => {
      httpMock.onPut(`${url}/api/job/${job.id}/update/`).reply(200, { success: true });

      updateJob(job)(store.dispatch);
      await flushAllPromises();

      expect(store.getActions()).toEqual([
        { type: UPDATE_JOB_SUCCESS }
      ]);
    });

    it('throws error if job cannot be updated', async () => {
      httpMock.onPut(`${url}/api/job/${job.id}/update/`).reply(500, errors);

      updateJob(job)(store.dispatch);
      await flushAllPromises();

      expect(store.getActions()).toEqual([
        { type: UPDATE_JOB_FAILURE, payload: { errors: { msg: errors.errors.err[0] } } }
      ]);
    });
  });
});
