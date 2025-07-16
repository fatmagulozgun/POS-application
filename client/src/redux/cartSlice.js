import { createSlice } from "@reduxjs/toolkit";

// localStorage'dan cart verisini güvenli çekmek için fonksiyon
const getInitialCart = () => {
  try {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const parsed = JSON.parse(storedCart);
      return {
        cartItems: Array.isArray(parsed.cartItems) ? parsed.cartItems : [],
        total: typeof parsed.total === "number" ? parsed.total : 0,
      };
    }
  } catch (error) {
    console.warn("localStorage'dan cart okunurken hata:", error);
  }
  return { cartItems: [], total: 0 };
};

const initialCart = getInitialCart();

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: initialCart.cartItems,
    total: initialCart.total,
    tax: 8,
  },
  reducers: {
    addProduct: (state, action) => {
      const findCartItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );

      if (findCartItem) {
        findCartItem.quantity += 1;
      } else {
        // Ürünün quantity'si yoksa 1 olarak ekle
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.total += action.payload.price;
    },

    deleteCart: (state, action) => {
      const itemToDelete = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (itemToDelete) {
        state.total -= itemToDelete.price * itemToDelete.quantity;
        state.cartItems = state.cartItems.filter(
          (item) => item._id !== action.payload._id
        );
      }
    },

    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (cartItem) {
        cartItem.quantity += 1;
        state.total += cartItem.price;
      }
    },

    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (cartItem) {
        cartItem.quantity -= 1;
        state.total -= cartItem.price;
        if (cartItem.quantity <= 0) {
          state.cartItems = state.cartItems.filter(
            (item) => item._id !== action.payload._id
          );
        }
      }
    },

    reset: (state) => {
      state.cartItems = [];
      state.total = 0;
    },
  },
});

export const { addProduct, deleteCart, increase, decrease, reset } =
  cartSlice.actions;
export default cartSlice.reducer;
