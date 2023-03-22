import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as API from 'api';

const SLICE_NAME = 'users';

const getUsers = createAsyncThunk(`${SLICE_NAME}/getUsers`, () => {
    return API.getUsers();
})

const initialState = {
    users: [],
    isLoading: false,
    error: null
}

const usersSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
        })
    }
})

// export createAsyncThunk result
export {getUsers}

export default usersSlice.reducer;