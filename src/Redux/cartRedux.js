import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    quantity: 2,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity =action.payload;
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
