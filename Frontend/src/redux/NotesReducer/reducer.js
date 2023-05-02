import {
  ADD_NOTES_FAILURE,
  ADD_NOTES_REQUEST,
  ADD_NOTES_SUCCESS,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_NOTES_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case ADD_NOTES_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case ADD_NOTES_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};


export {reducer}
