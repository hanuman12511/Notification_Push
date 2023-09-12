import {all,fork} from 'redux-saga/effects'
import PostSaga from './post/saga'
export default function* rootsaga(){
    console.log("saga out");
    yield all([fork(PostSaga)])
}