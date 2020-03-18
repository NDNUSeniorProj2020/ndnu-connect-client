import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import configureMockStore from "redux-mock-store";

import {
	FETCH_TUTORS_REQUEST,
	FETCH_TUTORS_SUCCESS,
	FETCH_TUTORS_FAILURE
} from "../../constants/tutor/actionTypes";
import { fetchTutorsRequest, fetchTutorsSuccess, fetchTutorsFailure, fetchTutors } from "./tutorActions";

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

describe('tests for tutor actions', () => {
	const url = process.env.REACT_APP_API || 'http://localhost:8000';

	let store;
	let httpMock;

	const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

	beforeEach(() => {
		httpMock = new MockAdapter(axios);
		const mockStore = configureMockStore();
		store = mockStore({});
	});

	describe('tests for fetching all tutors actions', () => {
		it('calls fetchTutorsRequest and returns an object with type FETCH_TUTORS_REQUEST', () => {
			expect(fetchTutorsRequest()).toEqual({ type: FETCH_TUTORS_REQUEST });
		});

		it('calls fetchTutorsSuccess and returns all tutors with type FETCH_TUTORS_SUCCESS', () => {
			const data = tutors;
			expect(fetchTutorsSuccess(data)).toEqual({ type: FETCH_TUTORS_SUCCESS, payload: { tutors: data } });
		});

		it('calls fetchTutorsFailure and returns errors with type FETCH_TUTORS_FAILURE', () => {
			const errors = {
				err: ['Failed to fetch tutors.']
			};
			expect(fetchTutorsFailure(errors)).toEqual({ type: FETCH_TUTORS_FAILURE, payload: { errors } });
		});

		it('fetches all tutors', async () => {
			httpMock.onGet(`${url}/api/tutor/`).reply(200, tutors);

			fetchTutors('someRandomToken')(store.dispatch);
			await flushAllPromises();

			expect(store.getActions()).toEqual([
				{ type: FETCH_TUTORS_REQUEST },
				{ type: FETCH_TUTORS_SUCCESS, payload: { tutors: [...tutors] } }
			]);
		});
	});
});