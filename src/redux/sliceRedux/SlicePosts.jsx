import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInit } from '../../axios/axiosInit';

export const fetchNFTposts = createAsyncThunk('market/fetchNFTposts', async () => {
    const { data } = await AxiosInit.get('/market');
    return data;
})

const initialState = {
    NFT: {
        items: [],
        status: "loading",
    },
    Colections: {
        items: [],
        status: "loading"
    }
};

const PostSlice = createSlice({
    name: "NFT",
    initialState,
    reducers: {},

    extraReducers: {
        [fetchNFTposts.pending]: (state) => {
            state.NFT.items = [];
            state.NFT.status = 'loading';
        },
        [fetchNFTposts.fulfilled]: (state, action) => {
            state.NFT.items = action.payload;
            state.NFT.status = 'loaded';
        }, 
        [fetchNFTposts.rejected]: (state) => {
            state.NFT.items = [];
            state.NFT.status = 'error';
        }
    }
});

export const NFTpostReducer = PostSlice.reducer;