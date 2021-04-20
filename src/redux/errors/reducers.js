import { LOGIN_FAILURE, LOGIN_SUCCESS } from "../auth/actions";

export const errors = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_FAILURE: {
      const { error } = payload;
      state.login = { error: true, message: error };
      return state;
    }
    case LOGIN_SUCCESS: {
      state.updateUser = { error: false, message: "" };
      return state;
    }

    default:
      return state;
  }
};
