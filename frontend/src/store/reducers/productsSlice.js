import {getAllProducts} from "./actionCreators";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: [],
    status: "IDLE",
    error: null,
}

const productsSlice = createSlice({
    name: "productsReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.status = "LOADING";
        })
        .addCase(getAllProducts.fulfilled, (state, action) => {
            state.status = "SUCCESS";
            state.products = action.payload;
        })
        .addCase(getAllProducts.rejected, (state, action) => {
            state.status = "FAILED";
            state.error = action.payload;
        });
    }
});

export default productsSlice.reducer;