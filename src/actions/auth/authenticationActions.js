import api from "../../api";
import {
	LOGIN_USER_REQUEST,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAILURE,
	USER_REGISTRATION_REQUEST,
	USER_REGISTRATION_SUCCESS,
	USER_REGISTRATION_FAILURE,
	LOGOUT_USER_REQUEST,
	LOGOUT_USER_SUCCESS
} from "../../constants/auth/actionTypes";

// Login actions
export function loginRequest() {
	return { type: LOGIN_USER_REQUEST };
}

export function loginSuccess(data) {
	return {
		type: LOGIN_USER_SUCCESS,
		payload: { user: { ...data.user } }
	};
}

export function loginFailure(errors) {
	return {
		type: LOGIN_USER_FAILURE,
		errors
	};
}

export function login(user) {
	return (dispatch) => {
		dispatch(loginRequest());
		return api().post('/accounts/login/', user)
			.then(res => res.data)
			.then(data => dispatch(loginSuccess(data)))
			.catch(errors => dispatch(loginFailure(errors)));
	}
}

// User registration actions
export function registrationRequest() {
	return { type: USER_REGISTRATION_REQUEST }
}

export function registrationSuccess(data) {
	return {
		type: USER_REGISTRATION_SUCCESS,
		payload: { user: { ...data.user } }
	};
}

export function registrationFailure(errors) {
	return {
		type: USER_REGISTRATION_FAILURE,
		errors
	};
}

export function register(user) {
	return (dispatch) => {
		dispatch(registrationRequest());
		return api().post('/accounts/register/', { user })
			.then(res => res.data)
			.then(data => dispatch(registrationSuccess(data)))
			.catch(errors => dispatch(registrationFailure(errors)));
	}
}

// Logout actions
export function logoutRequest() {
	return { type: LOGOUT_USER_REQUEST };
}

export function logoutSuccess() {
	return {
		type: LOGOUT_USER_SUCCESS,
		payload: { user: {} }
	};
}

export function logout() {
	return (dispatch) => {
		dispatch(logoutRequest());
		dispatch(logoutSuccess());
	}
}