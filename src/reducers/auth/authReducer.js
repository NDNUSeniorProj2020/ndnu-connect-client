import {
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	REGISTRATION_SUCCESS,
	REGISTRATION_FAILURE,
	LOGOUT_SUCCESS,
	LOGOUT_FAILURE,
	HAS_TOKEN_SUCCESS,
	HAS_TOKEN_FAILURE
} from "../../constants/actionTypes";

export const initialState = { user: {}, loggedIn: false };

export default function authReducer(state = initialState, action) {
	switch(action.type) {
		case LOGIN_SUCCESS: {
			return Object.assign({}, state, {
				user: { ...action.payload.user },
				loggedIn: true
			});
		}
		case LOGIN_FAILURE: {
			return Object.assign({}, state, {
				errors: action.payload.errors
			});
		}
		case REGISTRATION_SUCCESS: {
			return Object.assign({}, state, {
				user: { ...action.payload.user },
				loggedIn: true
			});
		}
		case REGISTRATION_FAILURE: {
			return Object.assign({}, state, {
				errors: action.payload.errors
			});
		}
		case LOGOUT_SUCCESS: {
			return Object.assign({}, state, {
				user: action.payload.user,
				loggedIn: false
			});
		}
		case LOGOUT_FAILURE: {
			return Object.assign({}, state, {
				errors: { ...action.payload.errors }
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
				errors: { ...action.payload.errors },
				loggedIn: false
			});
		}
		default:
			return state;
	}
}
