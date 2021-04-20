export const LOGIN_IN_PROGRESS = "LOGIN_IN_PROGRESS";
export const loginInProgress = () => ({
  type: LOGIN_IN_PROGRESS,
});

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: { error },
});

export const LOGOUT = "LOGOUT";
export const logout = () => ({
  type: LOGOUT,
});
