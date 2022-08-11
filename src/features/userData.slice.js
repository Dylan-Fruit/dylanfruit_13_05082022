import { createSlice } from "@reduxjs/toolkit/";

export const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    userName: "",
    password: "",
    rememberMe: false,
    userToken: "",
    firstName: "",
    lastName: "",
    nameStatus: false,
  },
  reducers: {
    updateUserName: (state, { payload }) => {
      state.userName = payload;
    },
    updatePassword: (state, { payload }) => {
      state.password = payload;
    },
    updateRememberMe: (state, { payload }) => {
      state.rememberMe = payload;
    },
    updateUserToken: (state, { payload }) => {
      state.userToken = payload;
    },
    updateFirstName: (state, { payload }) => {
      state.firstName = payload;
    },
    updateLastName: (state, { payload }) => {
      state.lastName = payload;
    },
    updateNameStatus: (state, { payload }) => {
      state.nameStatus = payload;
    },
  },
});

export const {
  updateUserName,
  updatePassword,
  updateRememberMe,
  updateUserToken,
  updateFirstName,
  updateLastName,
  updateNameStatus,
} = userDataSlice.actions;
export default userDataSlice.reducer;
