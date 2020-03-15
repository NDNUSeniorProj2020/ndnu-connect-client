import {
	FETCH_STUDENTS_SUCCESS
} from '../../constants/student/actionTypes';
import studentReducers from './studentReducers';

describe('tests for studentRecuders', () => {
	const beforeState = { student: [], success: false };

	it('should return initial state', () => (
		expect(studentReducers(undefined, {})).toEqual({ student: [], success: false })
	));
});