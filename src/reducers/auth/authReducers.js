import { LOGIN_USER_SUCCESS, USER_REGISTRATION_SUCCESS } from "../../constants/auth/actionTypes";

export const initialState = { user: {} };

export function loginReducer(state = initialState, action) {
	switch(action.type) {
		case LOGIN_USER_SUCCESS: {
			return { ...state, user: action.payload.user };
		}
		default:
			return state;
	}
}

export function registrationReducer(state = initialState, action) {
	switch(action.type) {
		case USER_REGISTRATION_SUCCESS: {
			return { ...state, user: action.payload.user };
		}
		default:
			return state;
	}
}