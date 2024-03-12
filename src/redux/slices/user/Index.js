import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  token: "",
  profilepic: undefined,
  profileCompleted: false,
  portfolio: undefined,
  name: "",
  pan: "",
  session: "",
  tempMobile: "",
  tempMail: "",
  temPan: "",
  logedInVia: "",
};

const UserSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    userDetails: (state, action) => {
      // Update only the id field, keep the existing token value
      state.id = action.payload.id !== undefined ? action.payload.id : state.id;

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

      state.portfolio =
        action.payload.portfolio !== undefined
          ? action.payload.portfolio
          : state.portfolio;

      state.name =
        action.payload.name !== undefined ? action.payload.name : state.name;

      state.pan =
        action.payload.pan !== undefined ? action.payload.pan : state.pan;

      state.session =
        action.payload.session !== undefined
          ? action.payload.session
          : state.session;

      state.tempMobile =
        action.payload.tempMobile !== undefined
          ? action.payload.tempMobile
          : state.tempMobile;

      state.tempMail =
        action.payload.tempMail !== undefined
          ? action.payload.tempMail
          : state.tempMail;

      state.temPan =
        action.payload.temPan !== undefined
          ? action.payload.temPan
          : state.temPan;

      state.logedInVia =
        action.payload.logedInVia !== undefined
          ? action.payload.logedInVia
          : state.logedInVia;
    },
  },
});

export const { userDetails } = UserSlice.actions;

export default UserSlice.reducer;
