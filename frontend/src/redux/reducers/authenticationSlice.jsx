import { createSlice } from "@reduxjs/toolkit";

export const authenticationSlice = createSlice({
    name: "authentication",
    initialState: {
        token: "",
        loginFailure: null,
    },
    reducers: {
        login: (state, action) => {
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.token = "";
        },
        loginFailure: (state, action) => {
            state.token = "";
            state.loginFailure = action.payload.error;
        },
    },
});

export const { login, logout, loginFailure } = authenticationSlice.actions;
// export default authenticationSlice.reducer;
