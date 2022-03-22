import { createSlice } from "@reduxjs/toolkit";

const WishListSlice = createSlice({
  name: "wishList",
  initialState: {
    quantity:0
  },
  reducers: {
    addProductWishList: (state, action) => {
      state.quantity=action.payload;
    },
  },
});

export const { addProductWishList } = WishListSlice.actions;
export default WishListSlice.reducer;
