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
    incrementWithpayload: (state, action) => {
      state.count =
        action.payload.data !== undefined ? action.payload.data : state.count;
    },
  },
});

export const { incrementToCart, removeToCart, incrementWithpayload } =
  AddToCartSlice.actions;

export default AddToCartSlice.reducer;
