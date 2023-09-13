import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './reducer/messageReducer';
console.log('====================================');
console.log("store");
console.log('====================================');
 const store = configureStore({
  reducer: {
    message: messageReducer
  }
});
export default store