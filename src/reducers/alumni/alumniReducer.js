import { FETCH_ALUMNI_SUCCESS, FETCH_ALUMNI_FAILURE } from '../../constants/alumni/actionTypes';

const initialState = { alumni: [], success: false, errors: { error: ['Cannot complete request.'] } };

export default function alumniReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALUMNI_SUCCESS: {
      return Object.assign({}, state, {
        alumni: [...action.payload.alumni],
        success: true
      });
    }
    case FETCH_ALUMNI_FAILURE: {
      return Object.assign({}, state, {
        errors: action.payload ? { ...action.payload.errors } : state.errors
      });
    }
    default:
      return state;
  }
}
