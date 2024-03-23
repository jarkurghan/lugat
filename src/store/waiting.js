import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
};

export const waitingSlice = createSlice({
    name: "waiting",
    initialState,
    reducers: {
        startWait: (state) => {
            state.value = true;
        },
        endWait: (state) => {
            state.value = false;
        },
    },
});

export const { startWait, endWait } = waitingSlice.actions;
export const getWait = (state) => {
    return state.waiting.value;
};

export default waitingSlice.reducer;
