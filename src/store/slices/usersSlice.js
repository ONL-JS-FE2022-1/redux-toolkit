import { createSlice } from "@reduxjs/toolkit";
import * as API from 'api';

const SLICE_NAME = 'users';

const initialState = {
    users: [],
    isLoading: false,
    error: null
}

const usersSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        getUsers: (state) => {
            // API.getUsers()
        }
    }
})