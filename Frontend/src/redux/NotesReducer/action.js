import {
  ADD_NOTES_FAILURE,
  ADD_NOTES_REQUEST,
  ADD_NOTES_SUCCESS,
} from "./actionTypes";
import axios from "axios";
export const ActionPostNotesRequest = () => {
  return { type: ADD_NOTES_REQUEST };
};

export const ActionPostNotesSuccess = () => {
  return { type: ADD_NOTES_SUCCESS };
};

export const ActionPostNotesFailure = () => {
  return { type: ADD_NOTES_FAILURE };
};

export const AddNotes = (value , token) => (dispatch) => {
    // const token = useSelector((store)=> {
    //      return store.LoginReducer.token
    // })
    console.log(value)
    console.log(token)
    dispatch(ActionPostNotesRequest());
    
    axios({
      method: "post",
      url: "https://fullstackprac.onrender.com/notes/add",
      data: value,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res)
        dispatch(ActionPostNotesSuccess(res.data));
      })
      .catch((err) => dispatch(ActionPostNotesFailure()));
  };
