import { configureStore } from "@reduxjs/toolkit";
import tweetsReducer from "./tweetsSlice";
import userReducer from "./userSlice";
import userProfileReducer from "./userProfileSlice";

const store = configureStore({
  reducer: {
    tweets: tweetsReducer,
    user: userReducer,
    userProfileData: userProfileReducer,
  },
});

export default store;
