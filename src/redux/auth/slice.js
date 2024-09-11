import { createSlice } from "@reduxjs/toolkit";
import { apiLogin, apiLogout, apiRefreshUser, apiRegister } from "./operations";

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(apiRegister.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(apiRegister.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.token = payload.token;
        state.user = payload.user;
        state.loading = false;
      })
      .addCase(apiRegister.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      })

      .addCase(apiLogin.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(apiLogin.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.token = payload.token;
        state.user = payload.user;
        state.loading = false;
      })
      .addCase(apiLogin.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      })
      .addCase(apiLogout.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(apiLogout.fulfilled, () => {
        return INITIAL_STATE;
      })
      .addCase(apiLogout.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      })

      .addCase(apiRefreshUser.pending, (state) => {
        state.error = null;
        state.loading = true;
        state.isRefreshing = true;
      })
      .addCase(apiRefreshUser.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.user = payload;
        state.isRefreshing = false;
        state.loading = false;
      })
      .addCase(apiRefreshUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
