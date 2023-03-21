import { createSlice } from "@reduxjs/toolkit";
import CONSTANTS from "../../constants";

const { LANGUAGE } = CONSTANTS;

const initialState = LANGUAGE.EN_US.VALUE;

const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        setLang: (state, action) => action.payload
    }
})

const {reducer, actions} = langSlice;
const { setLang } = actions;

export { setLang };
export default reducer;