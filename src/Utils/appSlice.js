import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenueOpen: true
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenueOpen = !state.isMenueOpen
        },
        closeMenu: (state) => {
            state.isMenueOpen = false
        },
    },
});

export const { toggleMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;