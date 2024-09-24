import {getAllProducts, getProductById} from "./actionCreators";
import {createSlice} from "@reduxjs/toolkit";
import STATUS from "../../utils/Utils";

const initialState = {
    products: [],
    product: {},
    status: STATUS.IDLE,
    error: null,
}

const productsSlice = createSlice({
    name: "productsReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.status = STATUS.LOADING;
        })
        .addCase(getAllProducts.fulfilled, (state, action) => {
            state.status = STATUS.SUCCESS;
            state.products = action.payload;
        })
        .addCase(getAllProducts.rejected, (state, action) => {
            state.status = STATUS.FAILED;
            state.error = action.error.message;
        });

        builder.addCase(getProductById.pending, (state) => {
            state.status = STATUS.LOADING;
            state.error = null;
        })
        .addCase(getProductById.fulfilled, (state, action) => {
            state.status = STATUS.SUCCESS;
            state.product = action.payload;
        })
        .addCase(getProductById.rejected, (state, action) => {
            state.status = STATUS.FAILED;
            state.error = action.error.message;
        });
    }
});

export default productsSlice.reducer;