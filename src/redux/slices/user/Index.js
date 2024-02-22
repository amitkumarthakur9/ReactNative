import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  token: "",
  profilepic: undefined,
  profileCompleted: false,
  name: "",
  pan: "",
};

const UserSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    userDetails: (state, action) => {
      // Update only the id field, keep the existing token value
      state.id = action.payload.id !== undefined ? action.payload.id : state.id;

      state.name =
        action.payload.name !== undefined ? action.payload.name : state.name;

      state.pan =
        action.payload.pan !== undefined ? action.payload.pan : state.pan;

      // Update the token field if provided
      state.token =
        action.payload.token !== undefined ? action.payload.token : state.token;

      state.profilepic =
        action.payload.profilepic !== undefined
          ? action.payload.profilepic
          : state.profilepic;

      state.profileCompleted =
        action.payload.profileCompleted !== undefined
          ? action.payload.profileCompleted
          : state.profileCompleted;
    },
  },
});

export const { userDetails } = UserSlice.actions;

export default UserSlice.reducer;
