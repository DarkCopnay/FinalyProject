import { configureStore } from "@reduxjs/toolkit";
import { NFTpostReducer } from "./sliceRedux/SlicePosts";

export const store = configureStore({
    reducer: {
        Market: NFTpostReducer,
    }
})