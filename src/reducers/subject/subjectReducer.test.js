import {
	FETCH_SUBJECTS_SUCCESS,
	FETCH_SUBJECTS_FAILURE
} from "../../constants/subject/actionTypes";
import subjectReducer from "./subjectReducer";

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

describe('tests for subjectReducer', () => {
	const beforeState = { subject: {}, subjects: [], success: false };
	it('should return initial state', () => expect(subjectReducer(undefined, {})).toEqual({ ...beforeState }));

	describe('reducer tests for fetching all subjects', () => {
		it('should return all subjects if action type is FETCH_SUBJECTS_SUCCESS', () => {
			const action = { type: FETCH_SUBJECTS_SUCCESS, payload: { subjects } };
			const afterState = subjectReducer(beforeState, action);

			expect(afterState).toEqual({ ...beforeState, subjects, success: true });
		});

		it('should return errors object if action type is FETCH_SUBJECTS_FAILURE', () => {
			const errors = { err: ['Failed to fetch subjects.'] };
			const action = { type: FETCH_SUBJECTS_FAILURE, payload: { errors } };
			const afterState = subjectReducer(beforeState, action);

			expect(afterState).toEqual({ ...beforeState, errors });
		})
	});
});