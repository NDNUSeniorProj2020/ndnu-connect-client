import {
	LOGIN_USER_FAILURE,
	LOGIN_USER_SUCCESS,
	USER_REGISTRATION_FAILURE,
	USER_REGISTRATION_SUCCESS,
	LOGOUT_USER_SUCCESS,
	HAS_TOKEN_SUCCESS, HAS_TOKEN_FAILURE
} from "../../constants/auth/actionTypes";

export const initialState = { user: {}, loggedIn: false };

export default function authReducer(state = initialState, action) {
	switch(action.type) {
		case LOGIN_USER_SUCCESS: {
			return Object.assign({}, state, {
				user: { ...action.payload.user },
				loggedIn: true
			});
		}
		case LOGIN_USER_FAILURE: {
			return Object.assign({}, state, {
				errors: action.payload.errors
			});
		}
		case USER_REGISTRATION_SUCCESS: {
			return Object.assign({}, state, {
				user: { ...action.payload.user },
				loggedIn: true
			});
		}
		case USER_REGISTRATION_FAILURE: {
			return Object.assign({}, state, {
				errors: action.payload.errors
			});
		}
		case LOGOUT_USER_SUCCESS: {
			return Object.assign({}, state, {
				user: action.payload.user,
				loggedIn: false
			});
		}
		case HAS_TOKEN_SUCCESS: {
			return Object.assign({}, state, {
				user: { ...action.payload.user },
				loggedIn: true
			});
		}
		case HAS_TOKEN_FAILURE: {
			return Object.assign({}, state, {
				err: { ...action.payload.err },
				loggedIn: false
			});
		}
		default:
			return state;
	}
}
