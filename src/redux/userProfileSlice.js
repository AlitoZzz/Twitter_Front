import { createSlice } from "@reduxjs/toolkit";

const userProfileSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUserProfileData(state, action) {
      return action.payload;
    },
  },
});

const { reducer, actions } = userProfileSlice;
export const { setUserProfileData } = actions;
export default reducer;
