
import categoriesReducer from "./categoriesSlice";
import productsReducer from "./productsSlice";
import discountReducer from "./discountSlice";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = configureStore({
    reducer: {
        categoriesReducer,
        productsReducer,
        discountReducer,
    }
});

export default rootReducer;