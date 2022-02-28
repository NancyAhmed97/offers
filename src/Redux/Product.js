import { createSlice } from "@reduxjs/toolkit";

export const ProductnSlice = createSlice({
  name: "Product",
  initialState: {
    Product: [],
  },
  reducers: {
    productItem: (state, action) => {
      state.Product = action.payload;
    },

  },
});

export const { productItem } = ProductnSlice.actions;


export default ProductnSlice.reducer;
