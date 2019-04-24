import isEmpty from "../validation/is-empty";

import {
  SET_LOGGED_USER,
  DELETE_CURRENT_USER,
  EDIT_CURRENT_USER,
  GET_LOGGED_USER
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  isLoading: false,
  user: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LOGGED_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case DELETE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: false,
        user: action.payload
      };
    case EDIT_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true
      };
    case GET_LOGGED_USER:
      return {
        ...state,
        isAuthenticated: true,
        updatedUser: action.payload
      };

    default:
      return state;
  }
}
