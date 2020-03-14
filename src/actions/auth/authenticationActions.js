import api from "../../api";
import {
	LOGIN_USER_REQUEST,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAILURE,
	USER_REGISTRATION_REQUEST,
	USER_REGISTRATION_SUCCESS,
	USER_REGISTRATION_FAILURE,
	LOGOUT_USER_REQUEST,
	LOGOUT_USER_SUCCESS,
	HAS_TOKEN_REQUEST,
	HAS_TOKEN_SUCCESS,
	HAS_TOKEN_FAILURE
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
	const { user } = data;
	const { email, token } = user;
	return {
		type: USER_REGISTRATION_SUCCESS,
		payload: { user: { email, token } }
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
		return api().post('/accounts/register/', user)
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

// Has token actions
export function hasTokenRequest() {
	return { type: HAS_TOKEN_REQUEST };
}

export function hasTokenSuccess(data) {
	const { user } = data;
	const { email, token } = user;
	return {
		type: HAS_TOKEN_SUCCESS,
		payload: { user: { email, token } }
	};
}

export function hasTokenFailure(err) {
	return {
		type: HAS_TOKEN_FAILURE,
		err
	}
}

export function hasToken(token) {
	return (dispatch) => {
		const headers = {
			Authorization: `Token ${token}`
		};

		dispatch(hasTokenRequest());
		return api().get('/accounts/user/', { headers })
			.then(res => res.data)
			.then(data => dispatch(hasTokenSuccess(data)))
			.catch(err => dispatch(hasTokenFailure(err)));
	};
}