import axios from "axios";
import {
  LOGIN_FAILED,
  LOGIN_REQ,
  LOGIN_SUCC,
  REGISTER_FAILED,
  REGISTER_REQ,
  REGISTER_RESET,
  REGISTER_SUCC,
} from "./ActionTypes";

export const loginNow = (data) => async (dispatch) => {
  dispatch({ type: LOGIN_REQ });
  return axios
    .post(process.env.REACT_APP_LOGIN_URL, data)
    .then((res) => {
      dispatch({ type: LOGIN_SUCC, payload: res.data.token });
      return res.data;
    })
    .catch((err) => {
      // console.log(err);
      dispatch({ type: LOGIN_FAILED });
    });
};

export const registerNow = (data) => (dispatch) => {
  dispatch({ type: REGISTER_REQ });
  axios
    .post(process.env.REACT_APP_REGISTER_URL, data)
    .then((res) => {
      // console.log(res);
      dispatch({ type: REGISTER_SUCC });
    })
    .catch((err) => {
      // console.log(err);
      dispatch({ type: REGISTER_FAILED });
    });
};

export const registerReset = (dispatch) => {
  dispatch({ type: REGISTER_RESET });
};
