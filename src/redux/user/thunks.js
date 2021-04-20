import axios from "axios";

import { loginInProgress, loginSuccess, loginFailure } from "./actions";

const url = "http://localhost:5000/api";

export const loginRequest = (credentials) => async (dispatch, getState) => {
  dispatch(loginInProgress());

  try {
    const response = await axios.post(`${url}/auth/signin`, credentials);

    const token = response.data;

    if (response.status === 201) {
      dispatch(loginSuccess());
      saveToken(token);
    } else {
      dispatch(loginFailure("Unable to login"));
    }
  } catch (err) {
    console.log(err);
  }
};

const saveToken = (token) => {
  return window.localStorage.setItem("dgleague", JSON.stringify(token));
};
