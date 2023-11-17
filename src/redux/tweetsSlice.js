import { createSlice } from "@reduxjs/toolkit";

const tweetsSlice = createSlice({
  name: "tweets",
  initialState: [],
  reducers: {},
});

const { reducer } = tweetsSlice;
export default reducer;
