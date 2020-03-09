import { combineReducers } from "redux";
import { loginReducer, registrationReducer } from "./auth/authReducers";

export default combineReducers({
	loginReducer,
	registrationReducer
});