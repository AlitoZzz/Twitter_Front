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
    changeFollowProfile(state, action) {
      state.user.followers.includes(action.payload)
        ? (state.user.followers = state.user.followers.filter(
            (follwer) => follwer !== action.payload
          ))
        : state.user.followers.push(action.payload);
    },
  },
});

const { reducer, actions } = userProfileSlice;
export const { setUserProfileData, deleteOneProfile, changeFollowProfile } =
  actions;
export default reducer;
