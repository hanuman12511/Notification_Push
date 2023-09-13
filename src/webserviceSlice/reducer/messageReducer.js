import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getLoginThunk } from "../Thunk";

console.log('====================================');
console.log("slice message ");
console.log('====================================');
const messageSlice = createSlice({
  name: "message",
  initialState: {
    login: []
  },
  reducers: {
    setMessage(state,action) {
      console.log('====================================');
      console.log("reducers==",state,action);
      console.log('====================================');
      state.login = action.payload
    }
  },
  extraReducers: {

    [getLoginThunk.pending]: (state) => {
      state.login = "";
    },
    [getLoginThunk.rejected]: (state, { payload }) => {
      state.errorMessage = payload
    },

  [getLoginThunk.fulfilled.toString()]: (
    state,
    action,
  ) => {
       state.login = action.payload;
  
  },}
})

export const { setMessage } = messageSlice.actions
export default messageSlice.reducer

