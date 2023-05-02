import {
  GET_DATA_FAILURE,
  GET_DATA_REQ,
  GET_DATA_SUCCESS,
} from "./Actiontypes";

export const action_get_Data = (token) => (dispatch) => {
  dispatch({ type: GET_DATA_REQ });
  fetch("https://fullstackprac.onrender.com/notes", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      dispatch({ type: GET_DATA_SUCCESS, payload: res });
      // console.log(res);
    })
    .catch((err) => {
      dispatch({ type: GET_DATA_FAILURE });
      console.log(err);
    });
};
