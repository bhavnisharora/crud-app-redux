import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../../Data";

export const userSlice = createSlice({
  name: "user",
  initialState: userList,
  reducers: {
    addUser: (state, actions) => {
      state.push(actions.payload);
    },
    updateUser: (state, actions) => {
      const { id, name, email } = actions.payload;
      const uu = state.find((user) => user.id == id);

      if (uu) {
        uu.name = name;
        uu.email = email;
      }
    },
    deleteUser: (state, actions) => {
      const { id } = actions.payload;
      const uu = state.find((user) => user.id == id);
      if (uu) {
        return state.filter((f) => f.id !== id);
      }
    },
  },
});

export const {
  addUser,
  increment,
  decrement,
  deleteUser,
  incrementByAmount,
  updateUser,
} = userSlice.actions;

export default userSlice.reducer;
