import { combineReducers } from "redux";
import authReducer from "./auth/authReducers";
import departmentReducers from "./department/departmentReducer";
import jobsReducers from "./jobs/jobsReducer";

export default combineReducers({
	authReducer,
	departmentReducers,
	jobsReducers
});