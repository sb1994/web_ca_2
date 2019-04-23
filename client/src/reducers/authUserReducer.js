import isEmpty from "../validation/is-empty";

import { SET_LOGGED_USER, DELETE_CURRENT_USER } from "../actions/types";

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
        isAuthenticated: !isEmpty(action.payload),
      }
    default:
      return state;
  }
}
