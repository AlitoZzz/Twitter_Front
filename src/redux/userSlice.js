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
    changeFollowUser(state, action) {
      state.following.includes(action.payload)
        ? (state.following = state.following.filter(
            (follwer) => follwer !== action.payload
          ))
        : state.following.push(action.payload);
    },
  },
});

const { reducer, actions } = userSlice;
export const { login, logout, changeFollowUser } = actions;
export default reducer;
