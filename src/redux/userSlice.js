import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    login(state = null, action) {
      return (state = action.payload);
    },
    logout(state = null, action) {
      return null;
    },
  },
});

const { reducer, actions } = userSlice;
export const { login, logout } = actions;
export default reducer;
