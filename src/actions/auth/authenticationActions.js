import api from '../../api';
import {
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	REGISTRATION_SUCCESS,
	REGISTRATION_FAILURE,
	LOGOUT_SUCCESS,
	HAS_TOKEN_SUCCESS,
	HAS_TOKEN_FAILURE
} from '../../constants/actionTypes';
import createAuthHeader from '../../assets/js/createAuthHeader';

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
			.catch(errors => dispatch(loginFailure(errors.response.data)));
	}
}

// User registration actions
export function registrationSuccess(data) {
	return {
		type: REGISTRATION_SUCCESS,
		payload: { user: data.user }
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
			.catch(errors => dispatch(registrationFailure(errors.response.data)));
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
	console.log('hasTokenSuccess ',data);
	return {
		type: HAS_TOKEN_SUCCESS,
		payload: { user: { ...data } }
	};
}

export function hasTokenFailure(errors) {
	return {
		type: HAS_TOKEN_FAILURE,
		payload: { errors }
	};
}

export function hasToken(token) {
	return (dispatch) => {
		const headers = createAuthHeader(token);

		return api().get('/accounts/current_user/', { headers })
			.then(res => res.data)
			.then(data => dispatch(hasTokenSuccess(data)))
			.catch(errors => dispatch(hasTokenFailure(errors.response.data)));
	};
}
