import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTNmYTY5YjZjNDM0YzQwMDM4NjBkMTIiLCJpYXQiOjE3MDAzNTc1OTl9.1T9sLMY7MnXVh__QW4nTnsbqkLQoYEUeLT-1AzwZyKY",
    "firstname": "Eloisa",
    "lastname": "Cintrón Rivas",
    "email": "Salvador_SaldanaFlorez@hotmail.com",
    "pfp": "https://avatars.githubusercontent.com/u/84557421",
    "username": "MiguelAngel24",
    "id": "653fa69b6c434c4003860d12"
  },
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
