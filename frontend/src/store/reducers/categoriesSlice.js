import {createSlice} from "@reduxjs/toolkit";
import {getAllCategories, getCategoryById} from "./actionCreators";

const initialState = {
    categories: [],
    currentCategory: {},
    status: "IDLE",
    error: null
}

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllCategories.pending, (state, action) => {
            state.status = "LOADING";
            state.error = null;
        })
        .addCase(getAllCategories.fulfilled, (state, action) => {
            state.status = "SUCCEEDED";
            state.categories = action.payload;
        })

        .addCase(getAllCategories.rejected, (state, action) => {
            state.status = "FAILED";
            state.error = action.payload;
        });

        builder.addCase(getCategoryById.pending, (state, action) => {
            state.status = "LOADING";
            state.error = null;
        }).addCase(getCategoryById.fulfilled, (state, action) => {
            state.status = "SUCCEEDED";
            state.currentCategory = action.payload;
        }).addCase(getCategoryById.rejected, (state, action) => {
            state.status = "FAILED";
            state.error = action.payload;
        });
    }
});

export default categoriesSlice.reducer;
