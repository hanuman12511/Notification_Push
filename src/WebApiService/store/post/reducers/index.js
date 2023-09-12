import { combineReducers } from 'redux';
import HomeReducers from './HomeReducers';
import LoginReducers from './LoginReducers';

const Reducer = combineReducers({
  Home:HomeReducers,
  Login:LoginReducers
});
export default Reducer;