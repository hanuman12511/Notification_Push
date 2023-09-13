import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './reducer/messageReducer';
import HomeSlice from './reducer/HomeSlice';
console.log('====================================');
console.log("store");
console.log('====================================');
 const store = configureStore({
  reducer: {
    message: messageReducer,
    home:HomeSlice
  }
});
export default store