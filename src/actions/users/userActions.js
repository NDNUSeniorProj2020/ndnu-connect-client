import api from '../../api';
import { UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE } from '../../constants/users/actionTypes';
import createAuthHeader from '../../assets/js/createAuthHeader';
import createError from '../../assets/js/createError';

export function updateUserSuccess(data) {
  const { user } = data;
  return {
    type: UPDATE_USER_SUCCESS,
    payload: { user: { ...user} }
  };
}

export function updateUserFailure(errs) {
  console.error(errs);
  const defaultErr = ['Sorry, could not find your account. Sorry for the inconvenience.'];
  const errors = errs.response ? errs.response.data.errors : { err: [...defaultErr] };
  let msg = createError(errors);

  return {
    type: UPDATE_USER_FAILURE,
    payload: { errors: { msg } }
  };
}

export function updateUser(user) {
  return (dispatch) => {
    const headers = createAuthHeader(localStorage.getItem('token'));
    return api().put('/accounts/user/', { ...user }, { headers })
      .then(res => res.data)
      .then(data => dispatch(updateUserSuccess(data)))
      .catch(errors => dispatch(updateUserFailure(errors)));
  }
}
