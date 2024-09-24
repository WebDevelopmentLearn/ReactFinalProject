import STATUS from "../../utils/Utils";
import {createSlice} from "@reduxjs/toolkit";
import {sendOrder} from "./actionCreators";

const initialState = {
    orders: {},
    status: STATUS.IDLE,
    error: null,
}

const orderSlice = createSlice({
    name: "orderReducer",
    initialState,
    reducers: {
        clearStatus: (state, action) => {
            state.status = STATUS.IDLE;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(sendOrder.pending, (state) => {
            state.status = STATUS.LOADING;
            state.error = null;
        })
        .addCase(sendOrder.fulfilled, (state, action) => {
            state.status = STATUS.SUCCESS;
            state.orders = action.payload;
        })
        .addCase(sendOrder.rejected, (state, action) => {
            state.status = STATUS.FAILED;
            state.error = action.error.message;
        })
    }
});

export default orderSlice.reducer;
export const {clearStatus} = orderSlice.actions;
