import { configureStore } from "@reduxjs/toolkit";
import waiting from "./waiting";
import words from "./word";

export const store = configureStore({
    reducer: {
        waiting: waiting,
        words: words,
    },
});
