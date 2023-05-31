import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "../reducers/ui";
import cartSlice from "../reducers/cart";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

export default store;
