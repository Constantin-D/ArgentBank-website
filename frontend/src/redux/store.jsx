// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./reducers/slices";

const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default store;
