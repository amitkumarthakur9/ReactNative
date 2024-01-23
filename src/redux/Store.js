import { configureStore } from "@reduxjs/toolkit";
import AddToCartSlice from "./slices/cart/Index";
import UserSlice from "./slices/user/Index";

export const store = configureStore({
  reducer: {
    cart: AddToCartSlice,
    user: UserSlice,
  },
});
