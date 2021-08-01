import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuth: false,
    admin: null,
    student: null,
    techer: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.admin = action.payload.admin || null;
            state.student = action.payload.student || null;
            state.techer = action.payload.techer || null;
            state.isAuth = true;
        },
        logout: (state) => {
            state.admin = null;
            state.student = null;
            state.techer = null;
            state.isAuth = false;
        },
    },
});

export const { setAuth, logout } = authSlice.actions;

export default authSlice.reducer;
