import {createSlice} from "@reduxjs/toolkit";
import {getAllCategories} from "./actionCreators";

const initialState = {
    categories: [],
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
    }
});

export default categoriesSlice.reducer;
