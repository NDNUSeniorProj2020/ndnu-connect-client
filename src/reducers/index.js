import { combineReducers } from 'redux';

import alumniReducer from './alumni/alumniReducer';
import authReducer from './auth/authReducer';
import departmentReducers from './department/departmentReducer';
import jobsReducer from './jobs/jobsReducer';
import studentReducer from './student/studentReducer';
import tutorReducer from './tutor/tutorReducer';
import subjectReducer from './subject/subjectReducer';
import boardReducer from './board/boardReducer';

export default combineReducers({
  alumniReducer,
	authReducer,
	departmentReducers,
	jobsReducer,
	studentReducer,
	tutorReducer,
	subjectReducer,
	boardReducer
});
