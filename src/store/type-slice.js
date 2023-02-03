import { createSlice } from "@reduxjs/toolkit";

const typeSlice = createSlice({
  name: "type",
  initialState: {
    type :""
  },
  reducers: {
    filterData(state, action) {
      state.type = action.payload;

    },
  },
});
export const typeActions = typeSlice.actions;
export default typeSlice;
