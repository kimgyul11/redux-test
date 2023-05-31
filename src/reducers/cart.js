import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload; // 객체로 받아온다.
      const existingItem = state.items.find((item) => item.id === newItem.id); //중복된 아이템이 있는지 체크
      state.totalQuantity++;

      if (!existingItem) {
        //중복되지 않는다면 추가.
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      }
      state.totalPrice = state.items.reduce((acc, cur) => {
        return acc + cur.totalPrice;
      }, 0);
    },
    removeItem(state, action) {
      const targetItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === targetItem.id
      );
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== targetItem.id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
      state.totalPrice = state.totalPrice - targetItem.price;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
