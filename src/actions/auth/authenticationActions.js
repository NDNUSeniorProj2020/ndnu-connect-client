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
import createError from '../../assets/js/createError';

// Set token actions
export function setToken(action) {
  const { user } = action.payload;
  const { token } = user;
  return localStorage.setItem('token', token);
}

export function removeToken() {
  return localStorage.removeItem('token');
}

// Login actions
export function loginSuccess(data) {
	return {
		type: LOGIN_SUCCESS,
		payload: { user: { ...data.user } }
	};
}

export function loginFailure(errs) {
  console.error(errs);
  const defaultErr = ['Sorry, could not log you in. Sorry for the inconvenience.'];
  const errors = errs.response ? errs.response.data.errors : { err: [...defaultErr] };
  let msg = createError(errors);

	return {
		type: LOGIN_FAILURE,
		payload: { errors: { msg } }
	};
}

export function login(user) {
	return (dispatch) => {
		return api().post('/accounts/login/', user)
      .then(res => res.data)
      .then(data => dispatch(loginSuccess(data)))
      .then(action => setToken(action))
			.catch(errors => dispatch(loginFailure(errors)));
	}
}

// User registration actions
export function registrationSuccess(data) {
	return {
		type: REGISTRATION_SUCCESS,
		payload: { user: { ...data.user } }
	};
}

export function registrationFailure(errs) {
  console.error(errs);
  const defaultErr = ['Sorry, could not create your account. Sorry for the inconvenience.'];
  const errors = errs.response ? errs.response.data.errors : { err: [...defaultErr] };
  let msg = createError(errors);

	return {
		type: REGISTRATION_FAILURE,
		payload: { errors: { msg } }
	};
}

export function register(user) {
	return (dispatch) => {
		return api().post('/accounts/register/', user)
      .then(res => res.data)
      .then(data => dispatch(registrationSuccess(data)))
      .then(action => setToken(action))
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
    removeToken();
	};
}

// Has token actions
export function hasTokenSuccess(data) {
	return {
		type: HAS_TOKEN_SUCCESS,
		payload: { user: { ...data } }
	};
}

export function hasTokenFailure(errs) {
  console.error(errs);
  const defaultErr = ['Sorry, could not find your account. Sorry for the inconvenience.'];
  const errors = errs.response ? errs.response.data.errors : { err: [...defaultErr] };
  let msg = createError(errors);

	return {
		type: HAS_TOKEN_FAILURE,
		payload: { errors: { msg } }
	};
}

export function hasToken() {
  const token = localStorage.getItem('token');

	return (dispatch) => {
		const headers = createAuthHeader(token);

		return api().get('/accounts/current_user/', { headers })
			.then(res => res.data)
      .then(data => dispatch(hasTokenSuccess(data)))
			.catch(errors => dispatch(hasTokenFailure(errors)));
	};
}
