import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTNmYWQzNWVjMmQxYmY1YmNkMjRjZmMiLCJpYXQiOjE3MDAyMzY5MjN9.QGEpnycDsBwuiTevgHzuMG0_frs6sJ-dI3yaK6zsAvQ",
    firstname: "ernessto",
    lastname: "lerjaler",
    email: "asdasd@asd.asd",
    pfp: "dac57a39be189e1cc6ff06e00.png",
    username: "asdasd",
    id: "653fad35ec2d1bf5bcd24cfc",
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
