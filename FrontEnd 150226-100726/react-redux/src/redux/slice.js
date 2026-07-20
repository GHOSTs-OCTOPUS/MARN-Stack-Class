import { createSlice } from "@reduxjs/toolkit";

const save = JSON.parse(localStorage.getItem("cartItems")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: save,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const existingItems = state.items.find((item) => item.id === product.id);
      if (!existingItems) {
        state.items.push({ ...product, quantity: 1 });
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      }
    },

    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cartItems");
    },
  },
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
