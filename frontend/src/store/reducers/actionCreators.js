import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3333";


// ================ КАТЕГОРИИ [НАЧАЛО] ====================
export const getAllCategories = createAsyncThunk("categoriesReducer/getAllCategories", async () => {
    try {
        const response = await axios.get(`${BACKEND_URL}/categories/all`);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
});

// ================ КАТЕГОРИИ [КОНЕЦ] ====================


// ================ ПРОДУКТЫ [НАЧАЛО] ====================
export const getAllProducts = createAsyncThunk("productsReducer/getAllProducts", async () => {
    try {
        const response = await axios.get(`${BACKEND_URL}/products/all`);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
});


export const getAllProductsAndCategories = () => {
    return (dispatch) => {
        dispatch(getAllCategories());
        dispatch(getAllProducts());
    }
}



export const getProductById = createAsyncThunk("productsReducer/getProductById", async (productId) => {
    try {
        const response = await axios.get(`${BACKEND_URL}/products/${productId}`);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
});
// ================ ПРОДУКТЫ [КОНЕЦ] ====================


// ================ СКИДКА [НАЧАЛО] ====================
export const sendDiscountForm = createAsyncThunk("discountReducer/sendDiscountForm", async (data) => {
    try {
        // axios.post('http://localhost:3333/order/send', orderData, {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        const response = await axios.post(`${BACKEND_URL}/sale/send`, data);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
});
// ================ СКИДКА [КОНЕЦ] ====================


// ================ ЗАКАЗ [НАЧАЛО] ====================
export const sendOrder = createAsyncThunk("orderReducer/sendOrder", async (orderData) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/order/send`, {});
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
});
// ================ ЗАКАЗ [КОНЕЦ] ====================