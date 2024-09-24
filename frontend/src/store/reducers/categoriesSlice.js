import {createSlice} from "@reduxjs/toolkit";
import {getAllCategories, getCategoryById} from "./actionCreators";
import STATUS from "../../utils/Utils";
const initialState = {
    categories: [],
    currentCategory: {},
    status: STATUS.IDLE,
    error: null
}

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllCategories.pending, (state, action) => {
            state.status = STATUS.LOADING;
            state.error = null;
        }).addCase(getAllCategories.fulfilled, (state, action) => {
            state.status = STATUS.SUCCESS;
            state.categories = action.payload;
        }).addCase(getAllCategories.rejected, (state, action) => {
            state.status = STATUS.FAILED;
            state.error = action.error.message;
            state.categories = [];
        });

        builder.addCase(getCategoryById.pending, (state, action) => {
            state.status = STATUS.LOADING;
            state.error = null;
        }).addCase(getCategoryById.rejected, (state, action) => {
            state.status = STATUS.FAILED;
            state.error = action.error.message;
        }).addCase(getCategoryById.fulfilled, (state, action) => {
            state.status = STATUS.SUCCESS;
            state.currentCategory = action.payload;
        });

    }
});

export default categoriesSlice.reducer;
