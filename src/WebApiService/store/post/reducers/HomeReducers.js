import { combineReducers } from "redux";
import {
    GET_POSTS,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAIL,
    
  } from "../actionTypes";
  
  const initialState = {
    posts: [],
    post: {},
    loadingPosts: false,
    loadingPostDetails: false,
    error: {
      message: "",
    },
  };
  
  const HomeReducers= (state = initialState, action) => {
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


      
      default:
        state = { ...state };
        break;
    }
    return state;
  };



export default HomeReducers
  