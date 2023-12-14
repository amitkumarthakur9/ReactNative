import { configureStore } from "@reduxjs/toolkit";
import AddToCartSlice from "./slices/cart/Index";

export const store = configureStore({
  reducer: {
    cart: AddToCartSlice,
  },
});
