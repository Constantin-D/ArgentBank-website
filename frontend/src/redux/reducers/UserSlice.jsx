import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userName: "",
        firstName: "",
        lastName: "",
        status: "idle", // idle, loading, succeeded, failed
        error: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.userName = action.payload.userName;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },
        clearUser: (state) => {
            state.userName = "";
            state.firstName = "";
            state.lastName = "";
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
