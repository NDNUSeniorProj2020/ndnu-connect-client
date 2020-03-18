import { combineReducers } from "redux";

import authReducer from "./auth/authReducers";
import departmentReducers from "./department/departmentReducer";
import jobsReducers from "./jobs/jobsReducer";
import studentReducer from "./student/studentReducer";
import tutorReducer from "./tutor/tutorReducer";
import subjectReducer from "./subject/subjectReducer";
import boardReducer from "./board/boardReducer";

export default combineReducers({
	authReducer,
	departmentReducers,
	jobsReducers,
	studentReducer,
	tutorReducer,
	subjectReducer,
	boardReducer
});