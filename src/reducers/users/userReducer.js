import { UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE } from '../../constants/users/actionTypes';

export const initialState = { user: {}, updated: false };

export default function userReducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_USER_SUCCESS: {
      return Object.assign({}, state, {
        user: { ...action.payload.user },
        updated: true
      });
    }
    case UPDATE_USER_FAILURE: {
      return Object.assign({}, state, {
        errors: { ...action.payload.errors }
      });
    }
    default:
      return state;
  }
}
