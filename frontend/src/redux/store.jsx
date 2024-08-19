import { configureStore } from "@reduxjs/toolkit";
import { authenticationSlice } from "./reducers/authenticationSlice";
import { userSlice } from "./reducers/userSlice";

export const store = configureStore({
    reducer: {
        authentication: authenticationSlice.reducer,
        user: userSlice.reducer,
    },
});

export default store;
