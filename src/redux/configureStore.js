import { configureStore } from "@reduxjs/toolkit";
import cartItemReducer from "./ducks/cartItems";

const store = configureStore({
  reducer: {
    cart: cartItemReducer,
  },
});

export default store;
