import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3333";

export const getAllCategories = createAsyncThunk("categoriesReducer/getAllCategories", async () => {
    try {
        const response = await axios.get(`${BACKEND_URL}/categories/all`);

        return response.data;
    } catch (error) {
        console.error(error);
    }
});

export const getCategoryById = createAsyncThunk("categoriesReducer/getCategoryById", async (categoryId) => {
    try {
        const response = await axios.get(`${BACKEND_URL}/categories/${categoryId}`);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
});




export const getAllProducts = createAsyncThunk("productsReducer/getAllProducts", async () => {
    try {
        const response = await axios.get(`${BACKEND_URL}/products/all`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
});