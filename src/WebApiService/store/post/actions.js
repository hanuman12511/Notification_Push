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
  
  export const getPosts = () => {
    console.log(" post actions");
    return {
      type: GET_POSTS,
    };
  };
  
  export const getPostsSuccess = (posts) => {
    console.log('====================================');
    console.log("posts=>>>getpostsuccess",posts);
    console.log('====================================');
    return {
      type: GET_POSTS_SUCCESS,
      payload: posts,
    };
  };
  
  export const getPostsFail = (error) => {
    return {
      type: GET_POSTS_FAIL,
      payload: error,
    };
  };


  export const getLogin = (params) => {
    console.log("login actions",params);
    return {
      type: GET_LOGIN,
      payload:params
    };
  };
  
  export const getLoginSuccess = (posts) => {
    console.log('====================================');
    console.log("posts=>>>getloginsuccess",posts);
    console.log('====================================');
    return {
      type: GET_LOGIN_SUCCESS,
      payload: posts,
    };
  };
  
  export const getLoginFail = (error) => {
    return {
      type: GET_LOGIN_FAIL,
      payload: error,
    };
  };
  



  
  export const getPostDetails = (id) => {
    return {
      type: GET_POST_DETAILS,
      payload: id,
    };
  };
  
  export const getPostDetailsSuccess = (post) => {
    return {
      type: GET_POST_DETAILS_SUCCESS,
      payload: post,
    };
  };
  
  export const getPostDetailsFail = (error) => {
    return {
      type: GET_POST_DETAILS_FAIL,
      payload: error,
    };
  };
  