import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    word: "",
    value: [],
};

export const resultSlice = createSlice({
    name: "result",
    initialState,
    reducers: {
        setWord: (state, action) => {
            state.word = action.payload;
        },
        setResult: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setWord, setResult } = resultSlice.actions;

export const getWord = (state) => {
    return state.words.word;
};

export const getResult = (state) => {
    return state.words.value;
};

export default resultSlice.reducer;
