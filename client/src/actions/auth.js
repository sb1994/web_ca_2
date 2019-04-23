import axios from "axios";
import setUserToken from "../utils/setUserToken";
import jwt_decode from "jwt-decode";
import {
  REGISTER_SUCCESS,
  GET_ERRORS,
  SET_LOGGED_USER,
  CLEAR_CURRENT_USER,
  DELETE_CURRENT_USER
} from "./types";

export const authRegisterUser = (user, history) => dispatch => {
  axios
    .post("/api/users/register", user)
    .then(res =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
export const authLoginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem("token", token);
      // Set token to Auth header
      setUserToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setLoggedUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// Set logged in user
export const setLoggedUser = decoded => {
  return {
    type: SET_LOGGED_USER,
    payload: decoded
  };
};
// Clear profile
export const clearCurrentUser = () => {
  return {
    type: CLEAR_CURRENT_USER
  };
};
// delete current user
export const authDeleteUser = id => dispatch => {
  axios.delete(`/api/users/${id}`).then(res => {
    dispatch({
      type: DELETE_CURRENT_USER,
      payload: id
    });
  });
};

// Log user out
export const logoutCurrentUser = () => dispatch => {
  // Remove token from Browser Storage
  localStorage.removeItem("token");
  // Remove auth header for the next set of requests requests
  setUserToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setLoggedUser({}));
};
