import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice';
import langReducer from './slices/langSlice';
import themeReducer from './slices/themeSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        lang: langReducer,
        theme: themeReducer
    }
});

export default store;