import {
  ADD_USER_POST,
  GET_USER_POSTS,
  GET_USER_POST,
  DELETE_USER_POST,
  UPDATE_USER_POSTS
} from "../actions/types";

const initialState = {
  posts: [],
  post: {}
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case GET_USER_POST:
      return {
        ...state,
        post: action.payload
      };
    case ADD_USER_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    case DELETE_USER_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload)
      };
    default:
      return state;
  }
}
