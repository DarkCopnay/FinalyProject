import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInit } from '../../axios/axiosInit';

export const fetchNFTposts = createAsyncThunk('market/fetchNFTposts', async () => {
    const { data } = await AxiosInit.get('/market');
    return data;
});

export const fetchCreateNFT = createAsyncThunk('market/fetchCreateNFT', async (DataPost) => {
    const { data } = await AxiosInit.post('/market/create', DataPost);
    return data;
});

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
        },

        [fetchCreateNFT.pending]: (state) => {
            state.NFT.items = [];
            state.NFT.status = "loading"
        },
        [fetchCreateNFT.fulfilled]: (state, action) => {
            state.NFT.items = action.payload
            state.NFT.status = "loaded"
        },
        [fetchCreateNFT.rejected]: (state) => {
            state.NFT.items = null
            state.NFT.status = "error"
        }
    }
});

export const NFTpostReducer = PostSlice.reducer;