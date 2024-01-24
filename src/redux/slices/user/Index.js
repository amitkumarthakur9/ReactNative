import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  token: "",
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
    },
  },
});

export const { userDetails } = UserSlice.actions;

export default UserSlice.reducer;
