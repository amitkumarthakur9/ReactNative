import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  token: "",
  profilepic: undefined,
};

const UserSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    userDetails: (state, action) => {
      // Update only the id field, keep the existing token value
      state.id = action.payload.id !== undefined ? action.payload.id : state.id;

      // Update the token field if provided
      state.token =
        action.payload.token !== undefined ? action.payload.token : state.token;

      state.profilepic =
        action.payload.profilepic !== undefined
          ? action.payload.profilepic
          : state.profilepic;
    },
  },
});

export const { userDetails } = UserSlice.actions;

export default UserSlice.reducer;
