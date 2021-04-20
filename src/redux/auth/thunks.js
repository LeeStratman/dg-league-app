import axios from "axios";
import { loginInProgress, loginSuccess, loginFailure } from "./actions";
import { getError } from "../../utils/error";

const url = "http://localhost:5000/api";

export const loginRequest = (credentials) => async (dispatch, getState) => {
  dispatch(loginInProgress());

  try {
    const response = await axios.post(`${url}/auth/signin`, credentials);

    if (response.status === 200) {
      dispatch(loginSuccess());
      saveToken(response.data.token);
    } else {
      dispatch(loginFailure(response.data.error));
    }
  } catch (err) {
    dispatch(loginFailure(getError(err)));
  }
};

export const authorizeRequest = () => async (dispatch, getState) => {
  const token = getTokenFromLocalStorage();

  if (!token) {
    return;
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
      dispatch(loginFailure(response.data.error));
      removeTokenFromLocalStorage();
    }
  } catch (err) {
    dispatch(loginFailure(getError(err)));
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
