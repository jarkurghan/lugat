import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    word: "",
    args: ["word", "definition", "history", "synonym", "resource"],
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
        setArguments: (state, action) => {
            state.args = action.payload;
        },
    },
});

export const { setWord, setResult, setArguments } = resultSlice.actions;

export const getWord = (state) => {
    return state.words.word;
};

export const getResult = (state) => {
    return state.words.value;
};

export const getArguments = (state) => {
    return state.words.args;
};

export default resultSlice.reducer;
