import {
    GET_LOGIN,
    GET_LOGIN_SUCCESS,
    GET_LOGIN_FAIL,
  } from "../actionTypes";
  
  


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


export default LoginReducer
  