import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loggedIn: document.cookie.includes('authToken'),
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state) {
            state.loggedIn = true;
        },
        logout(state) {
            state.loggedIn = false;
        },
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
