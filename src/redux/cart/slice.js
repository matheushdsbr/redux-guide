import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const existingProduct = state.products.find(item => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += 1
      } else {
        state.products.push({
          ...product,
          quantity: 1
        })
      }
    },
  }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
