import { combineReducers } from "redux";

import Reducer from "./post/reducers";
console.log("reducer-dout");
const rootReducer = combineReducers({
  Reducer
});

export default rootReducer;
