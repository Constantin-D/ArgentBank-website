src/redux/reducers/slices.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
    accounts: [],
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        clearUser: (state) => {
            state.name = "";
            state.email = "";
        },
        setAccounts: (state, action) => {
            state.accounts = action.payload;
        },
    },
});

export const { setUser, clearUser, setAccounts } = userSlice.actions;
export default userSlice.reducer;
