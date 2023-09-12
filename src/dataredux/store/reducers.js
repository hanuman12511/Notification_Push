import { combineReducers } from "redux";

import PostReducer from "./post/reducer";
console.log("reducer-dout");
const rootReducer = combineReducers({
  PostReducer,
});

export default rootReducer;
