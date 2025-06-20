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
    increaseProductQuantity: (state, action) => {
      const product = action.payload;

      const currentProduct = state.products.find(item => item.id === product.id);

      currentProduct.quantity += 1
    },
    decreaseProductQuantity: (state, action) => {
      const product = action.payload;

      const currentProduct = state.products.find(item => item.id === product.id);

      currentProduct.quantity -= 1

      state.products = state.products.filter(item => item.quantity > 0);
    },
    removeProduct: (state, action) => {
      const product = action.payload;

      state.products = state.products.filter(item => item.id !== product.id);
    }
  }
})

export const { addToCart,decreaseProductQuantity, increaseProductQuantity, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
