import { FETCH_ALL_TUTORS_SUCCESS, FETCH_ALL_TUTORS_FAILURE } from "../../constants/tutor/actionTypes";
import tutorReducer from "./tutorReducer";

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
const initialState = { tutor: {}, tutors: [], success: false };
const errors = {
	error: ['Failed to fetch tutors.']
};

describe('tests for tutor reducer', () => {
	it('should return initial state', () => expect(tutorReducer(undefined, {})).toEqual({ ...initialState }));

	describe('tests for fetching all tutors reducers', () => {
		it('sets up all tutors', () => {
			const action = { type: FETCH_ALL_TUTORS_SUCCESS, payload: { tutors } };
			expect(tutorReducer(initialState, action)).toEqual({ ...initialState, tutors, success: true });
		});

		it('sets up errors if fetching tutors fails', () => {
			const action = { type: FETCH_ALL_TUTORS_FAILURE, payload: { errors } };
			expect(tutorReducer(initialState, action)).toEqual({ ...initialState, errors });
		});
	});
});
