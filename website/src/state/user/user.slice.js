import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: null,
    loggedIn: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action) {
            state.name = action.payload;
            state.loggedIn = true;
        },
        logout(state) {
            state.name = null;
            state.loggedIn = false;
        },
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;