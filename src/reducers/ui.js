import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showIsCart: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      state.showIsCart = !state.showIsCart;
    },
  },
});

export const uiAction = uiSlice.actions;

export default uiSlice;
