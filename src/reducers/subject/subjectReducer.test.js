import { FETCH_ALL_SUBJECTS_SUCCESS, FETCH_ALL_SUBJECTS_FAILURE } from "../../constants/subject/actionTypes";
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

const beforeState = { subject: {}, subjects: [], success: false };
const errors = { err: ['Failed to complete.'] };

describe('tests for subjectReducer', () => {
	it('should return initial state', () => expect(subjectReducer(undefined, {})).toEqual({ ...beforeState }));

	describe('reducer tests for fetching all subjects', () => {
		it('sets up subjects', () => {
			const action = { type: FETCH_ALL_SUBJECTS_SUCCESS, payload: { subjects } };
			expect(subjectReducer(beforeState, action)).toEqual({ ...beforeState, subjects, success: true });
		});

		it('sets up errors if fetching subjects fails', () => {
			const action = { type: FETCH_ALL_SUBJECTS_FAILURE, payload: { errors } };
			expect(subjectReducer(beforeState, action)).toEqual({ ...beforeState, errors });
		});
	});
});
