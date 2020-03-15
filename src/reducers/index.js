import { combineReducers } from "redux";
import authReducer from "./auth/authReducers";
import departmentReducers from "./department/departmentReducers";

export default combineReducers({
	authReducer,
	departmentReducers
});