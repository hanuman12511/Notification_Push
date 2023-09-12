import { takeLatest, put, call } from "redux-saga/effects";

import { GET_LOGIN, GET_POSTS, GET_POST_DETAILS } from "./actionTypes";

import {
  getPostsSuccess,
  getPostsFail,


  getLoginSuccess,
  getLoginFail,

  getPostDetailsSuccess,
  getPostDetailsFail,
} from "./actions";

import { getPosts, getPostDetails,getLogin } from "../../helper/backend_helper";

function* onGetPosts() {
    console.log(" posts  saga");
  try {
    const response = yield call(getPosts);
   
    yield put(getPostsSuccess(response));
  } catch (error) {
    yield put(getPostsFail(error.response));
  }
}

// user login
function* onGetLogin({payload:params}) {
  console.log( " login saga",params);
try {
  const response = yield call(getLogin,params);
  
  yield put(getLoginSuccess(response));
} catch (error) {
  yield put(getLoginFail(error.response));
}
}

//post details

function* onGetPostDetails({ payload: id }) {
  try {
    const response = yield call(getPostDetails, id);
    yield put(getPostDetailsSuccess(response));
  } catch (error) {
    yield put(getPostDetailsFail(error.response));
  }
}

function* PostSaga() {
    console.log("Saga function Postsaga");
  yield takeLatest(GET_POSTS, onGetPosts);
  yield takeLatest(GET_POST_DETAILS, onGetPostDetails);
  yield takeLatest(GET_LOGIN, onGetLogin);
}

export default PostSaga;
