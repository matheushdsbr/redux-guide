import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteProducts: [],
}

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggleProductFavorite: (state, action) => {
      const product = action.payload
      const alreadyFavorited = state.favoriteProducts.find(item => item.id === product.id);

      if (alreadyFavorited) {
        state.favoriteProducts = state.favoriteProducts.filter(item => item.id !== product.id);
      } else {
        state.favoriteProducts.push({
          ...product,
      })
      }
    },
    removeProductFromFavorite: (state, action) => {
      const product = action.payload
      state.favoriteProducts = state.favoriteProducts.filter(item => item.id !== product.id);
    }
  }
});

export const { toggleProductFavorite, removeProductFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
