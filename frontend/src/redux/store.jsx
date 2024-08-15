import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./reducers/userSlice";
import { authenticationSlice } from "./reducers/authenticationSlice";

export const store = configureStore({
    reducer: {
        authentication: authenticationSlice.reducer,
        user: userSlice.reducer,
    },
});

export default store;
