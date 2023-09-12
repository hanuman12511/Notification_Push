import { combineReducers } from "redux";
import {
    GET_POSTS,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAIL,
    GET_POST_DETAILS,
    GET_POST_DETAILS_SUCCESS,
    GET_POST_DETAILS_FAIL,
    GET_LOGIN,
    GET_LOGIN_SUCCESS,
    GET_LOGIN_FAIL,
  } from "./actionTypes";
  
  const initialState = {
    posts: [],
    post: {},
    loadingPosts: false,
    loadingPostDetails: false,
    error: {
      message: "",
    },
  };
  
  const PostReducer = (state = initialState, action) => {
    console.log("int-reducers",action.type);
    switch (action.type) {


      case GET_POSTS:
        
        state = { ...state, loadingPosts: true };
        
        break;
      case GET_POSTS_SUCCESS:
        state = { ...state, posts: action.payload, loadingPosts: false };
        break;
      case GET_POSTS_FAIL:
        state = {
          ...state,
          error: {
            message: "Error",
          },
          loadingPosts: false,
        };
        break;


        case GET_LOGIN:
        
        state = { ...state, loadingPosts: true };
        
        break;
      case GET_LOGIN_SUCCESS:
        state = { ...state, posts: action.payload, loadingPosts: false };
        break;
      case GET_LOGIN_FAIL:
        state = {
          ...state,
          error: {
            message: "Error",
          },
          loadingPosts: false,
        };
        break;
      
      
      
      
        case GET_POST_DETAILS:
        state = { ...state, loadingPostDetails: true };
        break;
      case GET_POST_DETAILS_SUCCESS:
        state = { ...state, post: action.payload[0], loadingPostDetails: false };
        break;
      case GET_POST_DETAILS_FAIL:
        state = {
          ...state,
          error: {
            message: "Error",
          },
          loadingPostDetails: false,
        };
        break;
      default:
        state = { ...state };
        break;
    }
    return state;
  };




  const initialStatelogin = {
    posts: [],
    post: {},
    loadingPosts: false,
    loadingPostDetails: false,
    error: {
      message: "",
    },
  };
  
  const LoginReducer = (state = initialStatelogin, action) => {
    console.log("int-reducers",action.type);
    switch (action.type) {



        case GET_LOGIN:
        
        state = { ...state, loadingPosts: true };
        
        break;
      case GET_LOGIN_SUCCESS:
        state = { ...state, posts: action.payload, loadingPosts: false };
        break;
      case GET_LOGIN_FAIL:
        state = {
          ...state,
          error: {
            message: "Error",
          },
          loadingPosts: false,
        };
        break;
      
      
      default:
        state = { ...state };
        break;
    }
    return state;
  };


  
  const appReducer = combineReducers({
    home:PostReducer,
    login:LoginReducer
  })

export default appReducer
  