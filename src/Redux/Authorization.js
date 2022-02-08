import { createSlice } from "@reduxjs/toolkit";

export const authorizationSlice = createSlice({
  name: "authorization",
  initialState: {
    authorization: {},
    deviceToken: {},
  },
  reducers: {
    login: (state, action) => {
      state.authorization = action.payload;
    },
    logout: (state, action) => {
      state.authorization = {};
    },
  },
});

export const { login } = authorizationSlice.actions;
export const { logout } = authorizationSlice.actions;

export default authorizationSlice.reducer;
