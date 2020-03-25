import api from "../../api";
import {
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	REGISTRATION_SUCCESS,
	REGISTRATION_FAILURE,
	LOGOUT_SUCCESS,
	HAS_TOKEN_SUCCESS,
	HAS_TOKEN_FAILURE
} from "../../constants/actionTypes";

// Login actions
export function loginSuccess(data) {
	return {
		type: LOGIN_SUCCESS,
		payload: { user: { ...data.user } }
	};
}

export function loginFailure(errors) {
	return {
		type: LOGIN_FAILURE,
		payload: { errors }
	};
}

export function login(user) {
	return (dispatch) => {
		return api().post('/accounts/login/', user)
			.then(res => res.data)
			.then(data => dispatch(loginSuccess(data)))
			.catch(errors => dispatch(loginFailure(errors)));
	}
}

// User registration actions
export function registrationSuccess(data) {
	const { user } = data;
	const { email, token } = user;
	return {
		type: REGISTRATION_SUCCESS,
		payload: { user: { email, token } }
	};
}

export function registrationFailure(errors) {
	return {
		type: REGISTRATION_FAILURE,
		payload: { errors }
	};
}

export function register(user) {
	return (dispatch) => {
		return api().post('/accounts/register/', user)
			.then(res => res.data)
			.then(data => dispatch(registrationSuccess(data)))
			.catch(errors => dispatch(registrationFailure(errors)));
	}
}

// Logout actions
export function logoutSuccess() {
	return {
		type: LOGOUT_SUCCESS,
		payload: { user: {} }
	};
}

export function logout() {
	return (dispatch) => {
		dispatch(logoutSuccess());
	};
}

// Has token actions
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
		const headers = { Authorization: `Token ${token}` };
		return api().get('/accounts/user/', { headers })
			.then(res => res.data)
			.then(data => dispatch(hasTokenSuccess(data)))
			.catch(err => dispatch(hasTokenFailure(err)));
	};
}