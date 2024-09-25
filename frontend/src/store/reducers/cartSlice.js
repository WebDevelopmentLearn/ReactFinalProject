import STATUS from "../../utils/Utils";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cartProducts: JSON.parse(localStorage.getItem('cartProducts')) || [],
    status: STATUS.IDLE,
    error: null,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart(state, action) {
            const itemIndex = state.cartProducts.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartProducts[itemIndex] = action.payload;
            } else {
                state.cartProducts.push(action.payload);
            }
        },
        removeProductFromCart(state, action) {
            state.cartProducts = state.cartProducts.filter(item => item.id !== action.payload);
        },
        clearCart(state) {
            state.cartProducts = [];
            state.status = STATUS.IDLE;
        },
        increaseQuantity(state, action) {
            const product = state.cartProducts.find(item => item.id === action.payload);
            if (product && "quantity" in product) {
                product.quantity += 1;
            } else {
                product.quantity = 2;
            }
        },
        decreaseQuantity(state, action) {
            const product = state.cartProducts.find(item => item.id === action.payload);
            if (product && "quantity" in product && product.quantity > 1) {
                product.quantity -= 1;
            }
        }
    }
});

export default cartSlice.reducer;
export const {addProductToCart, removeProductFromCart, clearCart, getProductsFromCart, increaseQuantity, decreaseQuantity} = cartSlice.actions;