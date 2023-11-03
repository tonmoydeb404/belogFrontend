import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  status: "LOADING",
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    authSignin: (state, action) => {
      state.user = action.payload;
      state.status = "AUTHORIZED";
    },
    authSignout: (state) => {
      state.user = null;
      state.status = "UNAUTHORIZED";
    },
    authLoading: (state) => {
      state.status = "LOADING";
    },
    authUpdate: (state, { payload }) => {
      if (state.user && state.status === "AUTHORIZED") {
        if (payload?.name) state.user.name = payload.name;
        if (payload?.avatar) state.user.avatar = payload.avatar;
        if (payload?.accountStatus)
          state.user.accountStatus = payload.accountStatus;
        if (payload?.githubId) state.user.githubId = payload.githubId;
        if (payload?.googleId) state.user.googleId = payload.googleId;
      }
    },
  },
});

export const { authSignin, authLoading, authSignout, authUpdate } =
  authSlice.actions;
export const selectAuth = (state) => state.authSlice;
