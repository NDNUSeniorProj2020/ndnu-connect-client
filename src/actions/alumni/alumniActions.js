import api from '../../api';
import createAuthHeader from '../../assets/js/createAuthHeader';
import { FETCH_ALUMNI_SUCCESS, FETCH_ALUMNI_FAILURE } from '../../constants/alumni/actionTypes';

const defaultErrors = {
  error: ["Cannot fetch alumni. Sorry for the inconvenience. Please try again"]
}

export function fetchAlumniSuccess(data) {
  return {
    type: FETCH_ALUMNI_SUCCESS,
    payload: { alumni: [...data] }
  };
}

export function fetchAlumniFailure(errors) {
  console.error(errors);
  return {
    type: FETCH_ALUMNI_FAILURE,
    payload: { errors: errors.response ? { ...errors.response.data } : { ...defaultErrors } }
  };
}

export function fetchAlumni(token) {
  return (dispatch) => {
    const headers = createAuthHeader(token);

    return api().get('/api/alumni/', { headers })
      .then(res => res.data)
      .then(data => dispatch(fetchAlumniSuccess(data)))
      .catch(errors => dispatch(fetchAlumniFailure(errors)));
  };
}
