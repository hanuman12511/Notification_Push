import { takeLatest, put, call } from "redux-saga/effects";

import { GET_POSTS, GET_POST_DETAILS } from "./actionTypes";

import {
  getPostsSuccess,
  getPostsFail,
  getPostDetailsSuccess,
  getPostDetailsFail,
} from "./actions";

import { getPosts, getPostDetails } from "../../helper/backend_helper";

function* onGetPosts() {
    console.log("saga");
  try {
    const response = yield call(getPosts);
    yield put(getPostsSuccess(response));
  } catch (error) {
    yield put(getPostsFail(error.response));
  }
}

function* onGetPostDetails({ payload: id }) {
  try {
    const response = yield call(getPostDetails, id);
    yield put(getPostDetailsSuccess(response));
  } catch (error) {
    yield put(getPostDetailsFail(error.response));
  }
}

function* PostSaga() {
    console.log("post saga");
  yield takeLatest(GET_POSTS, onGetPosts);
  yield takeLatest(GET_POST_DETAILS, onGetPostDetails);
}

export default PostSaga;
