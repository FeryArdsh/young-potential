import { createSlice } from "@reduxjs/toolkit";

// Single Cart with Id Cart in Get All Cart //
const initialState = {
    products: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct(state, action) {
            state.products.push(action.payload);
            console.log(action);
        },
        increase: (state, { payload }) => {
            const cartItem = state.products.find((item) => item.id === payload);
            cartItem.quantity = cartItem.quantity + 1;
        },
        decrease: (state, { payload }) => {
            const cartItem = state.products.find((item) => item.id === payload);
            cartItem.quantity = cartItem.quantity - 1;
        },
    },
});

export const { addProduct, increase, decrease } = cartSlice.actions;

export default cartSlice.reducer;
