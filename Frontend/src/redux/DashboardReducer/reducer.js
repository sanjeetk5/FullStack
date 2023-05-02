import {
  GET_DATA_FAILURE,
  GET_DATA_REQ,
  GET_DATA_SUCCESS,
} from "./Actiontypes";

const initialstate = {
  data: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case GET_DATA_REQ:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    case GET_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
