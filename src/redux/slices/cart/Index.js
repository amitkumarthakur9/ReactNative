import { createSlice } from "@reduxjs/toolkit";

const AddToCartSlice = createSlice({
  name: "CartData",
  initialState: { count: 0 },
  reducers: {
    incrementToCart: (state, action) => {
      state.count += 1;
    },
    removeToCart: (state, action) => {
      state.count -= 1;
    },
  },
});

export const { incrementToCart, removeToCart } = AddToCartSlice.actions;

export default AddToCartSlice.reducer;
