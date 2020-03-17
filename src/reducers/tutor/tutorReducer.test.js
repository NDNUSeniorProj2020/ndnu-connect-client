import {
	FETCH_TUTORS_SUCCESS,
	FETCH_TUTORS_FAILURE
} from "../../constants/tutor/actionTypes";
import tutorReducer from "./tutorReducer";

describe('tests for tutor reducer', () => {
	const beforeState = { tutor: {}, tutors: [], success: false };

	it('should return initial state', () => expect(tutorReducer(undefined, {})).toEqual({ ...beforeState }));

	describe('tests for fetching all tutors reducers', () => {
		it('should return all tutors if action type is FETCH_TUTORS_SUCCESS', () => {
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
			const action = { type: FETCH_TUTORS_SUCCESS, payload: { tutors } };
			const afterState = tutorReducer(beforeState, action);

			expect(afterState).toEqual({ tutor: {}, tutors, success: true });
		});

		it('should return errors if action type is FETCH_TUTORS_ERRORS', () => {
			const errors = {
				error: ['Failed to fetch tutors.']
			};
			const action = { type: FETCH_TUTORS_FAILURE, payload: { errors } };
			const afterState = tutorReducer(beforeState, action);

			expect(afterState).toEqual({ tutor: {}, tutors: [], success: false, errors });
		});
	});
});