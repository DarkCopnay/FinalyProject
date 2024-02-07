import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInit } from "../../axios/axiosInit";

export const fetchLoginData = createAsyncThunk('Auth', async (UserReq) => {
    const { data } = await AxiosInit.post('/login', UserReq)
    .catch((err) => {
        return err.response
    });
    return data;
})

export const fetchRegister = createAsyncThunk('Register', async (UserReq) => {
    const { data } = await AxiosInit.post('/register', UserReq)
    .catch((err) => {
        return err.response
    })
    return data;
})

const initialState = {
    data: null,
    status: "loading"
}

const AuthSlice = createSlice({
    name: "Auth",
    initialState,

    reducers: {},
    
    extraReducers: {
        [fetchLoginData.pending]: (state) => {
            state.data = null;
            state.status = 'loading';
        },
        [fetchLoginData.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.status = 'loaded';
        }, 
        [fetchLoginData.rejected]: (state) => {
            state.err = null
            state.status = 'error';
        },
        
        [fetchRegister.pending]: (state) => {
            state.data = null;
            state.status = 'loading';
        },
        [fetchRegister.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.status = "loaded";
        },
        [fetchRegister.rejected]: (state) => {
            state.data = null;
            state.status = "error";
        },
    }
})

export const AuthReducer = AuthSlice.reducer;