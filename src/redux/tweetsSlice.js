import { createSlice } from "@reduxjs/toolkit";

const tweetsSlice = createSlice({
  name: "tweets",
  initialState: [],
  reducers: {
    setTweets(state = [], action) {
      state = action.payload;
    },
    addTweet(state = [], action) {
      state = [...state, action.payload];
    },
    deleteAll(state = [], action) {
      state = [];
    },
    deleteOne(state = [], action) {
      state = state.filter((tweet) => tweet._id !== action.payload);
    },
  },
});

const { reducer, actions } = tweetsSlice;
export const { setTweets, addTweet, deleteAll, deleteOne } = actions;
export default reducer;
