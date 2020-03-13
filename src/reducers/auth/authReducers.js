import {
	LOGIN_USER_FAILURE,
	LOGIN_USER_SUCCESS,
	USER_REGISTRATION_FAILURE,
	USER_REGISTRATION_SUCCESS,
	LOGOUT_USER_SUCCESS
} from "../../constants/auth/actionTypes";

export const initialState = { user: {} };

export default function authReducer(state = initialState, action) {
	switch(action.type) {
		case LOGIN_USER_SUCCESS: {
			return Object.assign({}, state, {
				user: { ...action.payload.user }
			});
		}
		case LOGIN_USER_FAILURE: {
			return Object.assign({}, state, {
				errors: action.payload.errors
			});
		}
		case USER_REGISTRATION_SUCCESS: {
			return Object.assign({}, state, {
				user: { ...action.payload.user }
			});
		}
		case USER_REGISTRATION_FAILURE: {
			return Object.assign({}, state, {
				errors: action.payload.errors
			});
		}
		case LOGOUT_USER_SUCCESS: {
			return Object.assign({}, state, {
				user: action.payload.user
			});
		}
		default:
			return state;
	}
}
