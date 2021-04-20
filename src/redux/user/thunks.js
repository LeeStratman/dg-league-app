import axios from "axios";

import { loginInProgress, loginSuccess, loginFailure } from "./actions";

const url = "http://localhost:5000/api";

export const loginRequest = (credentials) => async (dispatch, getState) => {
  dispatch(loginInProgress());

  try {
    const response = await axios.post(`${url}/auth/signin`, credentials);

    if (response.status === 200) {
      dispatch(loginSuccess());
      saveToken(response.data.token);
    } else {
      dispatch(loginFailure("Unable to login"));
    }
  } catch (err) {
    console.log(err);
  }
};

export const authorizeRequest = () => async (dispatch, getState) => {
  dispatch(loginInProgress());

  const token = getTokenFromLocalStorage();

  if (!token) {
    dispatch(loginFailure("User not logged in!"));
  }

  try {
    const response = await axios.post(
      `${url}/auth`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      dispatch(loginSuccess());
    } else {
      dispatch(loginFailure("User not logged in!"));
      removeTokenFromLocalStorage();
    }
  } catch (err) {
    dispatch(loginFailure("Unable to log in."));
  }
};

export function removeTokenFromLocalStorage() {
  localStorage.removeItem("dgleague");
}

export function getTokenFromLocalStorage() {
  return JSON.parse(localStorage.getItem("dgleague"));
}

const saveToken = (token) => {
  return window.localStorage.setItem("dgleague", JSON.stringify(token));
};
