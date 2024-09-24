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
            state.cartProducts = [...state.cartProducts, action.payload];
        },
        removeProductFromCart(state, action) {
            state.cartProducts = state.cartProducts.filter(item => item.id !== action.payload);
        },
        clearCart(state) {
            state.cartProducts = [];
        },
        increaseQuantity(state, action) {
            const product = state.cartProducts.find(item => item.id === action.payload);
            if (product && "quantity" in product) {
                product.quantity += 1; // Увеличиваем количество напрямую
            } else {
                product.quantity = 2; // Если у товара не было свойства quantity, то добавляем его и устанавливаем в 2
            }

        },
        decreaseQuantity(state, action) {
            const product = state.cartProducts.find(item => item.id === action.payload);
            if (product && "quantity" in product && product.quantity > 1) {
                product.quantity -= 1; // Уменьшаем количество напрямую, если оно больше 1
            }
        }

        // toggleTodo: (state, action) => {
        //     const currentTodo = state.todos.find(todo => todo.id === action.payload);
        //     currentTodo.isCompleted = !currentTodo.isCompleted;
        // }
    }
});

export default cartSlice.reducer;
export const {addProductToCart, removeProductFromCart, clearCart, getProductsFromCart, increaseQuantity, decreaseQuantity} = cartSlice.actions;