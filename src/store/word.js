import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    word: "",
    args: ["word", "definition", "history", "synonym", "resource"],
    value: [],
    page: 1,
    count: 3,
    pages: 1,
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
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setCount: (state, action) => {
            state.count = action.payload;
        },
        setPages: (state, action) => {
            state.pages = action.payload;
        },
    },
});

export const { setWord, setResult, setArguments, setPage, setPages, setCount } = resultSlice.actions;

export const getWord = (state) => {
    return state.words.word;
};

export const getResult = (state) => {
    return state.words.value;
};

export const getArguments = (state) => {
    return state.words.args;
};

export const getPages = (state) => {
    return state.words.pages;
};

export const getPage = (state) => {
    return state.words.page;
};

export const getCount = (state) => {
    return state.words.count;
};

export default resultSlice.reducer;
