import {
	FETCH_ALL_TUTORS_SUCCESS,
	FETCH_ALL_TUTORS_FAILURE
} from '../../constants/tutor/actionTypes';
import api from '../../api';
import createAuthHeader from '../../assets/js/createAuthHeader';
import createError from '../../assets/js/createError';

// Fetch all tutors actions
export function fetchTutorsSuccess(data) {
	return {
		type: FETCH_ALL_TUTORS_SUCCESS,
		payload: { tutors: data }
	};
}

export function fetchTutorsFailure(errs) {
  console.error(errs);
  const defaultErr = ['Sorry, could not update job listing. Sorry for the inconvenience.'];
  const errors = errs.response ? errs.response.data.errors : { err: [...defaultErr] };
  let msg = createError(errors);

	return {
		type: FETCH_ALL_TUTORS_FAILURE,
		payload: { errors: { msg } }
	};
}

export function fetchTutors() {
	return (dispatch) => {
    const token = localStorage.getItem('token');
		const headers = createAuthHeader(token);

		return api().get('/api/tutor/', { headers })
			.then(res => res.data)
			.then(data => dispatch(fetchTutorsSuccess(data)))
			.catch(errors => dispatch(fetchTutorsFailure(errors)));
	};
}
