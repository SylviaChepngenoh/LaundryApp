import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        product: [],
    },
    reducers: {
        getProducts: (state, action) => {
            // If the payload is a single product, you can push it directly
            if (Array.isArray(action.payload)) {
                state.product.push(...action.payload); // If it's an array, spread it into state.product
            } else {
                state.product.push(action.payload); // If it's a single product, just push it
            }
        },
        incrementQuantity: (state, action) => {
            const itemPresent = state.product.find((item) => item.id === action.payload.id);
            if (itemPresent) {
                itemPresent.quantity++;
            }
        },
        decrementQuantity: (state, action) => {
            const itemPresent = state.product.find((item) => item.id === action.payload.id);
            if (itemPresent) {
                if (itemPresent.quantity === 1) {
                    state.product = state.product.filter((item) => item.id !== action.payload.id);
                } else {
                    itemPresent.quantity--;
                }
            }
        },
    },
});

export const { getProducts, incrementQuantity, decrementQuantity } = productSlice.actions;

export default productSlice.reducer;
