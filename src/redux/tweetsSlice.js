import { createSlice } from "@reduxjs/toolkit";

const tweetsSlice = createSlice({
  name: "tweets",
  initialState: [],
  reducers: {
    setTweets(state = [], action) {
      return action.payload;
    },
    addTweet(state = [], action) {
      return [action.payload, ...state];
    },
    deleteAll(state = [], action) {
      return [];
    },
    deleteOne(state = [], action) {
      return state.filter((tweet) => tweet._id !== action.payload);
    },
  },
});

const { reducer, actions } = tweetsSlice;
export const { setTweets, addTweet, deleteAll, deleteOne } = actions;
export default reducer;
