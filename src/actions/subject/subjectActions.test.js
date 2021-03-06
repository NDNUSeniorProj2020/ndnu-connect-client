import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import configureMockStore from "redux-mock-store";

import {
	FETCH_ALL_SUBJECTS_SUCCESS,
	FETCH_ALL_SUBJECTS_FAILURE
} from "../../constants/subject/actionTypes";
import {
	fetchSubjectsSuccess,
	fetchSubjectsFailure,
	fetchSubjects
} from "./subjectActions";
import { url } from '../../api';

const subjects = [
	{
		"subject": "Business",
		"semester": "Spr2020",
		"course_number": "2215"
	},
	{
		"subject": "Algebra",
		"semester": "win2020",
		"course_number": "1234"
	}
];
const errors = { err: ['Failed to complete action.'] };

describe('tests for subject actions', () => {
	let store;
	let httpMock;

	const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

	beforeEach(() => {
		httpMock = new MockAdapter(axios);
		const mockStore = configureMockStore();
		store = mockStore({});
	});

	describe('tests for fetching all subjects actions', () => {
		it('calls fetchSubjectsSuccess and returns all subjects', () => {
			const data = subjects;
			expect(fetchSubjectsSuccess(data)).toEqual({ type: FETCH_ALL_SUBJECTS_SUCCESS, payload: { subjects: [...data] } });
		});

		it('calls fetchSubjectsFailure and returns errors', () => {
			expect(fetchSubjectsFailure(errors)).toEqual({ type: FETCH_ALL_SUBJECTS_FAILURE, payload: { errors } });
		});

		it('fetches subjects from api call', async () => {
			httpMock.onGet(`${url}/api/subject/`).reply(200, subjects);

			fetchSubjects('randomToken')(store.dispatch);
			await flushAllPromises();

			expect(store.getActions()).toEqual([
				{ type: FETCH_ALL_SUBJECTS_SUCCESS, payload: { subjects } }
			]);
		});
	});
});
