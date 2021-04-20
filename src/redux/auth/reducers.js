import {
  LOGIN_IN_PROGRESS,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "./actions";

export const loggedIn = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case LOGIN_IN_PROGRESS: {
      return false;
    }
    case LOGIN_FAILURE: {
      return false;
    }
    case LOGIN_SUCCESS: {
      return true;
    }
    case LOGOUT: {
      return false;
    }
    default:
      return state;
  }
};
