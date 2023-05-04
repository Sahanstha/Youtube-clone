import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggleSlice",
  initialState: {
    value: true,
  },
  reducers: {
    getShow: (state) => {
      state.value = !state.value;
    },
  },
});
export const { getShow } = toggleSlice.actions;
export default toggleSlice.reducer;
