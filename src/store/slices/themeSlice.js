import { createSlice } from "@reduxjs/toolkit";
import CONSTANTS from "../../constants";
const { THEMES } = CONSTANTS;

const initialState = THEMES.DARK;

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state) => (state === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK),
    }
})

export const { setTheme }= themeSlice.actions;
export default themeSlice.reducer;