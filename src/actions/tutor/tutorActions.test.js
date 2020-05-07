import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import configureMockStore from "redux-mock-store";

import {
	FETCH_ALL_TUTORS_SUCCESS,
	FETCH_ALL_TUTORS_FAILURE
} from "../../constants/tutor/actionTypes";
import { fetchTutors } from "./tutorActions";
import { url } from '../../api';

const tutors = [
	{
		"pay": 134.1,
		"subject": 1,
		"credentials": "I have a degree",
		"method": 1,
		"location": 2,
		"description": "Im a nice person",
		"schedule": 3,
		"rating": null,
		"num_of_ratings": 0.0,
		"person": 2
	}
];
const errors = {
	errors: {
    err: ['Failed to fetch tutors.']
  }
};

describe('tests for tutor actions', () => {
	let store;
	let httpMock;

	const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

	beforeEach(() => {
		httpMock = new MockAdapter(axios);
		const mockStore = configureMockStore();
		store = mockStore({});
	});

	describe('tests for fetching all tutors actions', () => {
		it('fetches all tutors', async () => {
			httpMock.onGet(`${url}/api/tutor/`).reply(200, tutors);

			fetchTutors()(store.dispatch);
			await flushAllPromises();

			expect(store.getActions()).toEqual([
				{ type: FETCH_ALL_TUTORS_SUCCESS, payload: { tutors: [...tutors] } }
			]);
    });

    it('throws error if fetch all tutors fails', async () => {
      httpMock.onGet(`${url}/api/tutor/`).reply(500, errors);

      fetchTutors()(store.dispatch);
			await flushAllPromises();

			expect(store.getActions()).toEqual([
				{ type: FETCH_ALL_TUTORS_FAILURE, payload: { errors: { msg: errors.errors.err[0] } } }
			]);
    });
	});
});
