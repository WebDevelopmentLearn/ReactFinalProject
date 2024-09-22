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
        addProductToCart: (state, action) => {
            state.cartProducts.push(action.payload);
        },
        removeProductFromCart: (state, action) => {
            state.cartProducts = state.cartProducts.filter(product => product.id !== action.payload);
        },

        // toggleTodo: (state, action) => {
        //     const currentTodo = state.todos.find(todo => todo.id === action.payload);
        //     currentTodo.isCompleted = !currentTodo.isCompleted;
        // }
    }
});

export default cartSlice.reducer;
export const {addProductToCart, removeProductFromCart, getProductsFromCart, clearCart, setStatus, setError} = cartSlice.actions;