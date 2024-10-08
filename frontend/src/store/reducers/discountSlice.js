
import STATUS from "../../utils/Utils";
import {createSlice} from "@reduxjs/toolkit";
import {sendDiscountForm} from "./actionCreators";

const initialState = {
    discount: {},
    status: STATUS.IDLE,
    error: null,
}

const discountSlice = createSlice({
    name: 'discountReducer',
    initialState,
    reducers: {
        clearStatus: (state, action) => {
            state.status = STATUS.IDLE;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendDiscountForm.pending, (state) => {
                state.status = STATUS.LOADING;
                state.error = null;
            })
            .addCase(sendDiscountForm.fulfilled, (state, action) => {
                state.status = STATUS.SUCCESS;
                state.discount = action.payload;
                state.error = null;
            })
            .addCase(sendDiscountForm.rejected, (state, action) => {
                state.status = STATUS.FAILED;
                state.error = action.error.message;
            })
    }
});

export default discountSlice.reducer;
export const {clearStatus} = discountSlice.actions;