import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInit from '../../axios/axiosInit';

export const fetchProfile = createAsyncThunk('Profile', async () => {
    const { ProfileData } = await AxiosInit.get('/profile/:id')
    return ProfileData;
})

const initialState = {
    Profile: {
        items: [],
        status: "loading",
    }
};

const ProfileSlice = createSlice({
    name: "Profile",
    initialState,
    reducers: {},

    extraReducers: {
        [fetchProfile.pending]: (state) => {
            state.Profile.items = [];
            state.Profile.status = 'loading';
        },
        [fetchProfile.fulfilled]: (state, action) => {
            state.Profile.items = action.payload;
            state.Profile.status = 'loaded';
        },
        [fetchProfile.rejected]: (state) => {
            state.Profile.items = [];
            state.Profile.status = "error";
        },
    }
})

export const ProfileReducer = ProfileSlice.reducer;