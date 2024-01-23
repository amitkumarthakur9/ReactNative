import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: 0,
};

const UserSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    userDetails: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { userDetails } = UserSlice.actions;

export default UserSlice.reducer;
