import { createSlice } from "@reduxjs/toolkit";

// Single Cart with Id Cart in Get All Cart //
const initialState = {
    products: [],
    total: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct(state, action) {
            if (state.products.length === 0) {
                const data = action.payload;
                data.quantity = 1;
                state.products.push(data);
                return console.log("Berhasil");
            } else if (state.products.length >= 1) {
                const cartItem = state.products.find(
                    (item) => item.id === action.payload.id
                );

                if (cartItem?.id === action.payload.id) {
                    cartItem.quantity = cartItem.quantity + 1;
                } else {
                    const data = action.payload;
                    data.quantity = 1;
                    state.products.push(data);
                    return console.log("Berhasil");
                }
            }
        },
        clearProduct(state) {
            state.products = [];
        },
        deleteProduct: (state, action) => {
            const itemId = action.payload;
            state.products = state.products.filter(
                (item) => item.id !== itemId
            );
        },
        increase: (state, { payload }) => {
            const cartItem = state.products.find((item) => item.id === payload);
            cartItem.quantity = cartItem.quantity + 1;
        },
        decrease: (state, { payload }) => {
            const cartItem = state.products.find((item) => item.id === payload);
            cartItem.quantity = cartItem.quantity - 1;
        },
        totalPrice(state) {
            let total = 0;
            for (let p of state.products) {
                total += p.price * p.quantity;
            }
            state.total = total;
        },
    },
});

export const {
    addProduct,
    increase,
    decrease,
    deleteProduct,
    totalPrice,
    clearProduct,
} = cartSlice.actions;

export default cartSlice.reducer;
