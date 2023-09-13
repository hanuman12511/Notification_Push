import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getHomeThunk} from "../Thunk";

console.log('====================================');
console.log("slice message ");
console.log('====================================');
const HomeSlice = createSlice({
  name: "home",
  initialState: {
    data: []
  },
  reducers: {
    setHomeData(state,action) {
      console.log('====================================');
      console.log("reducers==",state,action);
      console.log('====================================');
      state.data = "data"
    }
  },
  extraReducers: {

    [getHomeThunk.pending]: (state) => {
      state.data = "";
    },
    [getHomeThunk.rejected]: (state, { payload }) => {
      state.errorMessage = payload
    },

  [getHomeThunk.fulfilled.toString()]: (
    state,
    action,
  ) => {
       state.data = "slice"+action.payload;
  
  },}
})

export const { setHomeData } = HomeSlice.actions
export default HomeSlice.reducer

