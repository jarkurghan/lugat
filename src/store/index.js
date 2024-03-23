import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./word/counterSlice";
import waiting from "./waiting";

export const store = configureStore({
    reducer: {
        waiting: waiting,
        // counter: counterReducer,
    },
});
