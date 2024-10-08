
import categoriesReducer from "./reducers/categoriesSlice";
import productsReducer from "./reducers/productsSlice";
import discountReducer from "./reducers/discountSlice";
import cartReducer from "./reducers/cartSlice";
import orderReducer from "./reducers/orderSlice";
import filterReducer from "./reducers/filterSlice";
import {configureStore} from "@reduxjs/toolkit";
import {localCartMiddleware} from "../middlewares/localCartMiddleware";

const rootReducer = configureStore({
    reducer: {
        categoriesReducer,
        productsReducer,
        discountReducer,
        cartReducer,
        orderReducer,
        filterReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(localCartMiddleware)
});

export default rootReducer;