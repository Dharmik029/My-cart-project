import { createSlice } from "@reduxjs/toolkit";

// Load state from local storage if available
const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

export const CartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    remove: (state, action) => {
      const newState = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    },
    clear: (state) => {
      localStorage.removeItem("cart"); // Remove cart from local storage
      return []; // Reset state to empty array
    },
  },
});

export const { add, remove, clear } = CartSlice.actions;
export default CartSlice.reducer;
