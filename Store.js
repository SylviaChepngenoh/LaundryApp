import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartReducer"; // Ensure you provide the correct path to your CartSlice file
import ProductReducer from "./ProductReducer";

export default configureStore({
    reducer: {
        cart: CartReducer,
        product: ProductReducer, // Assign the imported reducer
    },
});
