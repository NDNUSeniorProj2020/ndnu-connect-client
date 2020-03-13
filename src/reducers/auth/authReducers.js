import { LOGIN_USER_SUCCESS, USER_REGISTRATION_SUCCESS } from "../../constants/auth/actionTypes";

export const initialState = { user: {} };

export default function authReducer(state = initialState, action) {
	switch(action.type) {
		case LOGIN_USER_SUCCESS: {
			return Object.assign({}, state, {
				user: { ...action.payload.user },
				success: true
			});
		}
		case USER_REGISTRATION_SUCCESS: {
			return Object.assign({}, state, {
				user: {...action.payload.user},
				success: true
			});
		}
		default:
			return state;
	}
}
