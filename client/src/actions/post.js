import axios from "axios";

import {
  ADD_USER_POST,
  GET_ERRORS,
  GET_USER_POSTS,
  GET_USER_POST,
  DELETE_USER_POST
} from "./types";
import { log } from "core-js";

export const addUserPost = postD => dispatch => {
  axios
    .post("/api/posts", postD)
    .then(res =>
      dispatch({
        type: ADD_USER_POST,
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
// Get Posts by feed_id
export const getUserPosts = post_feed => dispatch => {
  axios
    .get(`/api/posts/${post_feed}`)
    .then(res =>
      dispatch({
        type: GET_USER_POSTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_USER_POST,
        payload: null
      })
    );
};
// Get single post by id
export const getUserPost = id => dispatch => {
  axios
    .get(`/api/posts/${id}`)
    .then(
      res =>
        dispatch({
          type: GET_USER_POST,
          payload: res.data
        })
      // console.log(res.data)
    )
    .catch(err =>
      dispatch({
        type: GET_USER_POST,
        payload: null
      })
    );
};
export const deleteUserPost = id => dispatch => {
  axios
    .delete(`/api/posts/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_USER_POST,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_USER_POST,
        payload: null
      })
    );
};
