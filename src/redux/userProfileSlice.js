import { createSlice } from "@reduxjs/toolkit";

const userProfileSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUserProfileData(state, action) {
      return action.payload;
    },
    deleteOneProfile(state, action) {
      state.user.tweets = state.user.tweets.filter(
        (tweet) => tweet._id !== action.payload
      );
    },
  },
});

const { reducer, actions } = userProfileSlice;
export const { setUserProfileData, deleteOneProfile } = actions;
export default reducer;
