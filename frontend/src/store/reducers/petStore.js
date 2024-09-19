
import categoriesReducer from "./categoriesSlice";
import productsReducer from "./productsSlice";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = configureStore({
    reducer: {
        categoriesReducer,
        productsReducer,
    }
});

export default rootReducer;